<script setup>
import { onMounted } from 'vue';

onMounted(() => {
    const menu = document.querySelector('.menu');
    const menuToggles = document.querySelectorAll('.menu-toggle');
    
    menuToggles.forEach(toggle => {
        toggle.addEventListener('click', () => {
            if (!menu.classList.contains('opacity-100')) {
                menu.classList.remove('opacity-0');
                menu.classList.add('opacity-100');
                menu.classList.remove('pointer-events-none');
                menu.classList.add('pointer-events-auto');
            } else {
                menu.classList.remove('opacity-100');
                menu.classList.add('opacity-0');
                menu.classList.remove('pointer-events-auto');
                menu.classList.add('pointer-events-none');
            }
        })
    })
});
</script>

<template>
    <header>
        <div class="p-2  md:p-5 flex items-center justify-between">
            <div class="font-crimson-pro text-3xl italic tracking-tight">
                <a href="/">
                    Teach Yourself Data Science
                </a>
            </div>
            <div class="menu-toggle font-inter tracking-tight select-none hover:cursor-pointer">
                Menu
            </div>
            <div class="menu opacity-0 pointer-events-none transition-all fixed h-screen w-screen bg-[rgba(255,255,255,0.666)] backdrop-blur-xs left-0 top-0">
                <div class="flex p-2 md:p-5 pb-0 items-center w-full justify-between">
                    <div class="font-crimson-pro text-3xl italic tracking-tight opacity-0">
                        Teach Yourself Data
                    </div>
                    <div class="menu-toggle text-black tracking-tight select-none hover:cursor-pointer">
                        Close
                    </div>
                </div>
                <ul class="p-2 md:p-5 pt-0 flex flex-col gap-5">
                    <li class="text-black text-6xl md:text-8xl tracking-tighter font-crimson-pro italic">
                        <a class="hover:opacity-50" href="/">
                            Home
                        </a>
                    </li>
                    <li class="text-black text-6xl md:text-8xl tracking-tighter font-crimson-pro italic">
                        <a class="hover:opacity-50" href="/">
                            About us
                        </a>
                    </li>
                    <li class="text-black text-6xl md:text-8xl tracking-tighter font-crimson-pro italic">
                        <a class="hover:opacity-50" href="/">
                            How does it work?
                        </a>
                    </li>
                    <li class="text-black text-6xl md:text-8xl tracking-tighter font-crimson-pro italic">
                        <a class="hover:opacity-50" href="/">
                            More resources
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </header>
</template>