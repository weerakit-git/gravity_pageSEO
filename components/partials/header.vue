<template>
     <div class="flex justify-between items-center ">
          <img src="/assets/image/logo-light.png.png" alt="">
          <ul class="hidden xl:flex uppercase gap-x-5 z-20">
               <li><a href="#" class="hover:text-white hover:drop-shadow-[0_0_5px_white] transition">about us</a></li>
               <li><a href="#" class="hover:text-white hover:drop-shadow-[0_0_5px_white] transition">our services</a>
               </li>
               <li><a href="#" class="hover:text-white hover:drop-shadow-[0_0_5px_white] transition">work with us</a>
               </li>
               <li><a href="#" class="hover:text-white hover:drop-shadow-[0_0_5px_white] transition">blog</a></li>
          </ul>
          <div class="hidden xl:flex items-center uppercase gap-x-2">
               <img src="/assets/image/button_before.png" alt="" class=" object-contain">
               <span class="hover:text-white hover:drop-shadow-[0_0_5px_white] transition">get in touch</span>
          </div>
          <button @click="isMenuOpen = !isMenuOpen" class="xl:hidden focus:outline-none">
               <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
               </svg>
          </button>
     </div>
     <div v-if="isMenuOpen"
          class="fixed top-0 left-0 w-full h-full z-50 bg-black/80 backdrop-blur-md p-6 text-white uppercase flex flex-col gap-6">
          <div class="flex justify-between">
               <div class="flex items-center gap-x-2 mt-4">
                    <img src="/assets/image/button_before.png" alt="" class="h-5 object-contain" />
                    <span class="hover:text-white hover:drop-shadow-[0_0_5px_white] transition">get in touch</span>
               </div>
               <button @click="isMenuOpen = false" class="self-end text-white text-3xl hover:text-red-400 transition">
                    &times;
               </button>
          </div>
          <div class="flex justify-start">
               <ul class="space-y-2">
                    <li><a @click="isMenuOpen = false" href="#"
                              class="block hover:text-white hover:drop-shadow-[0_0_5px_white] transition">about us</a>
                    </li>
                    <li><a @click="isMenuOpen = false" href="#"
                              class="block hover:text-white hover:drop-shadow-[0_0_5px_white] transition">our
                              services</a></li>
                    <li><a @click="isMenuOpen = false" href="#"
                              class="block hover:text-white hover:drop-shadow-[0_0_5px_white] transition">work with
                              us</a></li>
                    <li><a @click="isMenuOpen = false" href="#"
                              class="block hover:text-white hover:drop-shadow-[0_0_5px_white] transition">blog</a></li>
               </ul>
          </div>
     </div>
</template>
<script setup>
const isMenuOpen = ref(false)
</script>
