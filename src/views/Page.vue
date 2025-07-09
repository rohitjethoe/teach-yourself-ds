<script setup>
import { ref, onMounted, watch } from 'vue'
import { useRoute } from 'vue-router'
import { marked } from 'marked'
import katex from 'katex'
import hljs from 'highlight.js'

const route = useRoute()
const html = ref('')
const loading = ref(true)
const error = ref('')

marked.setOptions({
  gfm: true,
  breaks: true,
  highlight: function(code, lang) {
    if (lang && hljs.getLanguage(lang)) {
      try {
        return hljs.highlight(code, { language: lang }).value
      } catch (e) {
        console.warn('Highlight.js error:', e)
        return hljs.highlightAuto(code).value
      }
    }
    try {
      return hljs.highlightAuto(code).value
    } catch (e) {
      console.warn('Highlight.js auto error:', e)
      return code
    }
  }
})

marked.use({
  extensions: [
    {
      name: 'math',
      level: 'block',
      start(src) {
        return src.match(/^```math/)?.index
      },
      tokenizer(src) {
        const rule = /^```math\n([\s\S]*?)\n```/
        const match = rule.exec(src)
        if (match) {
          return {
            type: 'math',
            raw: match[0],
            text: match[1]
          }
        }
      },
      renderer(token) {
        try {
          return katex.renderToString(token.text, {
            displayMode: true,
            throwOnError: false
          })
        } catch (e) {
          return `<div class="math-error">LaTeX Error: ${e.message}</div>`
        }
      }
    },
    {
      name: 'latex',
      level: 'block',
      start(src) {
        return src.match(/^```latex/)?.index
      },
      tokenizer(src) {
        const rule = /^```latex\n([\s\S]*?)\n```/
        const match = rule.exec(src)
        if (match) {
          return {
            type: 'latex',
            raw: match[0],
            text: match[1]
          }
        }
      },
      renderer(token) {
        try {
          return katex.renderToString(token.text, {
            displayMode: true,
            throwOnError: false
          })
        } catch (e) {
          return `<div class="math-error">LaTeX Error: ${e.message}</div>`
        }
      }
    }
  ]
})

const processInlineMath = (text) => {
  return text.replace(/\$([^$\n]+)\$/g, (match, math) => {
    try {
      return katex.renderToString(math, {
        displayMode: false,
        throwOnError: false
      })
    } catch (e) {
      return `<span class="math-error">LaTeX Error: ${e.message}</span>`
    }
  })
}

const loadMarkdown = async (slug) => {
  try {
    loading.value = true
    error.value = ''
    
    const response = await fetch(`/pages/${slug}.md`)
    if (!response.ok) {
      throw new Error(`Failed to load markdown file: ${response.status}`)
    }
    
    const markdown = await response.text()
    
    let processedHtml = await marked.parse(markdown)
    
    processedHtml = processInlineMath(processedHtml)
    
    html.value = processedHtml
  } catch (err) {
    error.value = err.message
    console.error('Error loading markdown:', err)
  } finally {
    loading.value = false
  }
}

watch(
  () => route.params.slug,
  (newSlug) => {
    if (newSlug) {
      loadMarkdown(newSlug)
    }
  },
  { immediate: true }
)

onMounted(() => {
  if (route.params.slug) {
    loadMarkdown(route.params.slug)
  }
})
</script>

<template>
  <section class="md-content p-2 md:p-5">
    <div v-if="loading" class="loading-container">
      <div class="spinner"></div>
      <p>Loading...</p>
    </div>
    
    <div v-else-if="error" class="error-container">
      <h3>Error</h3>
      <p>{{ error }}</p>
    </div>
    
    <div v-else v-html="html"></div>
  </section>
</template>

<style scoped>
.md-content {
    font-family: var(--font-inter);
}

.loading-container {
  text-align: center;
  padding: 3rem 0;
}

.spinner {
  width: 2rem;
  height: 2rem;
  border: 2px solid #f3f3f3;
  border-top: 2px solid #3498db;
  border-radius: 50%;
  animation: spin 1s linear infinite;
  margin: 0 auto 1rem;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

.error-container {
  text-align: center;
  padding: 3rem 0;
  color: #e74c3c;
}

.error-container h3 {
  margin-bottom: 1rem;
  font-size: 1.2rem;
}

/* Global styles for rendered markdown content */
.md-content :deep(h1) {
  letter-spacing: var(--tracking-tight);
  font-size: var(--text-4xl);
}

.md-content :deep(h2) {
    font-size: 1.5rem;
    letter-spacing: var(--tracking-tight);
}

.md-content :deep(h3) {
  font-size: 1.25rem;
  font-weight: bold;
  margin: 1.5rem 0 1rem;
}

.md-content :deep(p) {
    margin: 1rem 0;
    letter-spacing: var(--tracking-tight);
}

.md-content :deep(ul) {
    list-style-type: disc;
}

.md-content :deep(ol) {
    list-style-type: decimal;
}

.md-content :deep(ul), .md-content :deep(ol) {
    margin: 1rem 0;
    padding-left: 2rem;
    letter-spacing: var(--tracking-tight);
}

.md-content :deep(li) {
  margin: 0.5rem 0;
}

.md-content :deep(blockquote) {
  margin: 1rem 0;
  padding: 0.5rem 1rem;
  border-left: 4px solid #3498db;
  background-color: #f8f9fa;
  font-style: italic;
}

.md-content :deep(table) {
  width: 100%;
  border-collapse: collapse;
  margin: 1rem 0;
}

.md-content :deep(th), .md-content :deep(td) {
  border: 1px solid #ddd;
  padding: 0.5rem;
  text-align: left;
}

.md-content :deep(th) {
  background-color: #f8f9fa;
  font-weight: bold;
}

.md-content :deep(code) {
  background-color: #f8f9fa;
  padding: 0.2rem 0.4rem;
  border-radius: 3px;
  font-family: 'Courier New', monospace;
  font-size: 0.9em;
}

.md-content :deep(pre) {
  background-color: #f8f9fa;
  padding: 1rem;
  border-radius: 5px;
  overflow-x: auto;
  margin: 1rem 0;
}

.md-content :deep(pre code) {
  background-color: transparent;
  padding: 0;
}

.md-content :deep(a) {
  color: #3498db;
  text-decoration: none;
}

.md-content :deep(a:hover) {
  text-decoration: underline;
}

.md-content :deep(img) {
  max-width: 100%;
  height: auto;
  margin: 1rem 0;
  border-radius: 5px;
}

/* Math styling */
.md-content :deep(.katex-display) {
  margin: 1.5rem 0;
  text-align: center;
}

.md-content :deep(.katex) {
  font-size: 1.1em;
}

.md-content :deep(.math-error) {
  color: #e74c3c;
  background-color: #fdf2f2;
  border: 1px solid #f5c6cb;
  padding: 0.5rem;
  border-radius: 5px;
  font-family: monospace;
  margin: 1rem 0;
}

/* Code highlighting improvements */
.md-content :deep(.hljs) {
  background-color: #f8f9fa !important;
  padding: 1rem;
  border-radius: 5px;
  overflow-x: auto;
}

/* Additional highlight.js language-specific styles */
.md-content :deep(.hljs-keyword) {
  color: #d73a49;
  font-weight: bold;
}

.md-content :deep(.hljs-string) {
  color: #032f62;
}

.md-content :deep(.hljs-function) {
  color: #6f42c1;
}

.md-content :deep(.hljs-number) {
  color: #005cc5;
}

.md-content :deep(.hljs-comment) {
  color: #6a737d;
  font-style: italic;
}

.md-content :deep(.hljs-variable) {
  color: #e36209;
}
</style>