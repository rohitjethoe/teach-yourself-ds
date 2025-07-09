<script setup></script>

<template>
    <div class="landing flex flex-col justify-between">
        <section></section>
        <section class="p-2 md:p-5">
            <div class="text-3xl md:text-4xl tracking-tight">
                Accessible <span class="font-crimson-pro italic text-4xl md:text-5xl">Data Science</span> for self-directed learners.
            </div>
            <div class="tracking-tight pt-5 md:w-2/3 text-lg">
                Sharing my ongoing journey to master data science with clear, practical insights for data science enthusiasts. I'm currently studying a BSc in Computer Science and Engineering and wanted to document what I learn—from core mathematics and programming to data systems and machine learning—making complex topics easier to understand for fellow self-learners.
            </div>
            <div class="mt-5 md:mt-10 flex gap-2">
                <a href="#" class="text-sm md:text-base tracking-tight px-5 py-2.5 md:px-8 md:py-3 border-primary bg-blue-600 text-white transition-all hover:bg-blue-700 hover:border-blue-800" target="_blank">How does it work?</a>
                <a href="https://coff.ee/rohitjethoe" class="group flex flex-row-reverse gap-3 items-center text-sm md:text-base tracking-tight px-5 py-2.5 md:px-8 md:py-3 border transition-all hover:bg-black hover:text-white" target="_blank">
                    <img class="w-3.5 object-contain hidden group-hover:block" src="@/assets/buy-me-a-coffee.png"/>
                    <img class="w-3.5 object-contain group-hover:hidden" src="@/assets/buy-me-a-coffee-black.png"/>
                    Buy me a coffee
                </a>
            </div>
        </section>
        <section class="p-5 pt-0 pb-5 flex flex-wrap justify-center tracking-tight gap-2 text-gray-300 text-sm md:text-base">
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
    <section class="p-2 md:p-5 py-20 text-black bg-gray-100">
        <div>
            <div class="text-4xl md:text-5xl font-crimson-pro italic tracking-tight">
                Foundational Mathematics
            </div>
            <div class="pt-5 text-lg md:text-base font-inter tracking-tight">
                If you don’t understand the math, the model will fool you — and you won’t even know it.
            </div>
        </div>
    </section>
</template>

<style scoped>
.landing {
    min-height: calc(100svh - 4.75em);
    @media (max-width: 768px) {
        min-height: calc(100svh - 2.75em);
    }
}
</style>