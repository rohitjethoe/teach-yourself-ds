<script setup>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'

</script>

<template>
  <Header />
  <main class="font-inter">
    <router-view></router-view>
  </main>
  <Footer />
</template>