<script setup>
const topics = [
    {
        id: 0,
        title: "Foundational Mathematics",
        subtitle: "If you don't understand the math, the model will fool you — and you won't even know it."
    },
    {
        id: 1,
        title: "Applied Mathematics",
        subtitle: "From vectors to eigenvalues, math that powers the real world"
    },
    {
        id: 2,
        title: "Probability & Statistics",
        subtitle: "Understanding data, probability, and distributions"
    },
    {
        id: 3,
        title: "Econometrics",
        subtitle: "Quantifying economics with math and statistics"
    },
    {
        id: 4,
        title: "Computer Science",
        subtitle: "Logic, code, and the architecture of computation"
    }
]
</script>

<template>
    <div class="landing flex flex-col justify-between">
        <!-- <section class="md:hidden"></section> -->
        <section class="p-2 pt-2 md:pt-5 md:p-5">
            <div class="text-base font-medium md:text-lg tracking-tight">
                Computer Science domains explained for independent and curious learners —
            </div>
            <div class="tracking-tight pt-2 md:pt-5 md:w-2/3 text-base md:text-lg">
                Sharing my ongoing journey to master data science through clear, practical insights for curious learners. This blog documents what I learn from foundational mathematics and programming to data analysis and machine learning with the goal of breaking down complex topics into understandable, actionable knowledge for fellow self-directed learners.
            </div>
            <div class="mt-5 md:mt-10 flex gap-2">
                <a href="#" class="text-sm md:text-base tracking-tight px-5 py-2.5 md:px-8 md:py-3 border-primary bg-blue-600 text-white transition-all hover:bg-blue-800 hover:border-blue-800">How does it work?</a>
                <a href="https://coff.ee/rohitjethoe" class="group flex flex-row-reverse gap-3 items-center text-sm md:text-base tracking-tight px-5 py-2.5 md:px-8 md:py-3 border transition-all hover:bg-black hover:text-white" target="_blank">
                    <img class="w-3.5 object-contain hidden group-hover:block" src="@/assets/buy-me-a-coffee.png"/>
                    <img class="w-3.5 object-contain group-hover:hidden" src="@/assets/buy-me-a-coffee-black.png"/>
                    Buy me a coffee
                </a>
            </div>
        </section>
        <section class="p-5 pt-0 pb-5 flex flex-wrap justify-center tracking-tight gap-2 text-gray-400 text-sm md:text-base">
            <div class="text-black font-medium">
                All,
            </div>
            <div class="transition-all hover:text-black hover:cursor-pointer">
                Foundational Mathematics,
            </div>
            <div class="transition-all hover:text-black hover:cursor-pointer">
                Applied Mathematics,
            </div>
            <div class="transition-all hover:text-black hover:cursor-pointer">
                Statistics,
            </div>
            <div class="transition-all hover:text-black hover:cursor-pointer">
                Econometrics,
            </div>
            <div class="transition-all hover:text-black hover:cursor-pointer">
                Computer Science
            </div>
        </section>
    </div>
    <section class="p-2 pt-30 md:p-5 md:pt-20 text-black bg-gray-100">
        <div v-for="topic in topics" v-bind:key="topic.id" class="pb-30 md:pb-20">
            <div class="text-4xl md:text-5xl font-crimson-pro italic tracking-tight">
                {{ topic.title }}
            </div>
            <div class="pt-5 text-base md:text-lg font-inter tracking-tight">
                {{ topic.subtitle }}
            </div>
        </div>
    </section>
</template>

<style scoped>
.landing {
    min-height: calc(100svh - 7.25em);
    @media (max-width: 768px) {
        min-height: calc(100svh - 5.75em);
    }
}
</style>