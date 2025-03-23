<template>
     <div class="flex relative items-center justify-center p-10 ">
          <!-- ball -->
          <div ref="blueBall"
               class="left-0 absolute w-24 h-24 xl:w-72 xl:h-56 bg-[rgb(96,139,191)] rounded-full blur-2xl z-10"></div>

          <div ref="violetBall"
               class="right-4 absolute w-24 h-24 xl:w-72 xl:h-56 bg-[rgb(65,63,118)] rounded-full blur-2xl z-10"></div>

          <div ref="goldBall"
               class="right-[300px] absolute w-24 h-24 xl:w-42 xl:h-42 bg-[rgb(84,74,55)] rounded-full blur-2xl z-10">
          </div>

          <div class="text-center max-w-2xl space-y-6 z-20">
               <h1 class="text-4xl font-semibold text-white">Contact Us</h1>
               <p class="text-[#E5E5E5] leading-relaxed">
                    We are always open to discuss new value-adding partnerships. Do reach out if you are an exchange or
                    a project looking for liquidity; an algorithmic trader or a software developer looking to improve
                    the markets with us or just have a great idea you can’t wait to share with us!
               </p>
               <button
                    class="bg-[linear-gradient(120deg,_#60a5fa,_#c084fc,_#facc15)] text-white px-6 py-2 rounded-md uppercase font-medium hover:text-white hover:drop-shadow-[0_0_5px_white] transition duration-300 ease-in">
                    Get in touch
               </button>
          </div>

     </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { gsap } from 'gsap'


const blueBall = ref(null)
const violetBall = ref(null)
const goldBall = ref(null)

onMounted(() => {
     gsap.to(blueBall.value, {
          x: 150,
          y: -40,
          repeat: -1,
          yoyo: true,
          duration: 12,
          ease: 'power1.inOut',
     })

     gsap.to(violetBall.value, {
          x: -380,
          y: 60,
          repeat: -1,
          yoyo: true,
          duration: 14,
          ease: 'power1.inOut',
     })

     gsap.to(goldBall.value, {
          x: -400,
          y: 150,
          repeat: -1,
          yoyo: true,
          duration: 12,
          ease: 'power1.inOut',
     })
})
</script>
