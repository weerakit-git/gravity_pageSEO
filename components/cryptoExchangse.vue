<template>
     <div class="relative flex items-center justify-center px-5 py-5">
          <!-- <div ref="violetBall"
          class="left-10 absolute md:w-[30rem] md:h-[30rem]  bg-[rgb(65,63,118)] rounded-full blur-2xl z-10"></div> -->
       <div class="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-7xl w-full items-center">
         <div class="relative flex justify-center">
           <img src="/public/image/grid.png" alt="Grid Background" class="w-full max-w-md z-20 " />
           <img src="/public/image/exchange-screens-new.png"
                alt="Exchange Screens"
                class="absolute top-0 w-[75%] max-w-xs md:max-w-md z-20" />
               
         </div>
       
         <div class="space-y-6">
           <h1 class="text-white text-3xl sm:text-4xl font-semibold leading-snug">
             Market Making for<br />Crypto Exchanges
           </h1>
           <p class="text-white font-medium">
             Attract more traders and projects with<br />
             <span >deep order books & liquidity</span>
           </p>
           <p class="text-[#E5E5E5] leading-relaxed">
             Our world-class market making services are proven to help local and emerging exchanges win traders and gain market-leading positions of up to 90% market dominance.
           </p>
           <p class="relative inline-block text-[#E5E5E5] hover:text-white hover:drop-shadow-[0_0_5px_white] transition">
             <span class="flex items-center gap-x-2 border-b border-transparent bg-gradient-to-r from-blue-400 via-blue-300 to-yellow-300 bg-[length:100%_2px] bg-no-repeat bg-bottom">
               Learn more
               <img src="/assets/image/a_after.png" alt="" class="w-4 h-4 object-contain" />
             </span>
           </p>
         </div>
       </div>
     </div>
   </template>
   
<script setup>
import { ref, onMounted } from 'vue'
import { gsap } from 'gsap'

const blueBall = ref(null)
const goldBall = ref(null)

onMounted(() => {
     gsap.to(blueBall.value, {
          x: 10,
          y: 10,
          repeat: -1,
          yoyo: true,
          duration: 10,
          ease: 'power1.inOut',
     })

     gsap.to(goldBall.value, {
          x: 130,
          y: 30,
          repeat: -1,
          yoyo: true,
          duration: 8,
          ease: 'power1.inOut',
     })
})
</script>
<style>
.swiper-pagination {
     position: relative;
}
</style>