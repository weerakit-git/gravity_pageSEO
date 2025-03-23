<template>
     <div class="flex relative items-center justify-center p-10 ">
          <div class="grid md:grid-cols-2 ">
               <div class="">
                    <h1 class="text-4xl xl:text-5xl font-semibold text-white leading-tight">
                         <span class="relative z-30">Join</span><br />
                         <span class="relative z-30">Gravity Team</span>
                    </h1>
                    <div class="left-[180px] top-[120px] xl:left-[340px] xl:top-[50px] absolute w-40 h-24 xl:w-52 xl:h-42 bg-[rgb(96,139,191)] rounded-full blur-2xl z-10"
                         ref="blueBall"></div>
                    <div class="left-[40px] top-[180px] xl:left-[200px] xl:top-[100px] absolute w-24 h-24 xl:w-42 xl:h-42 bg-[rgb(84,74,55)] rounded-full blur-2xl z-10"
                         ref="goldBall"></div>
               </div>
               <div class="space-y-4 mt-5">
                    <p class="text-[#E5E5E5] leading-relaxed">Join our community of innovators, problem solvers and
                         owners who apply scientific discovery
                         techniques to make crypto markets a better place for everyone.</p>
                    <p class="text-[#E5E5E5] leading-relaxed">As we emphasize it in our name – Gravity Team, we are a
                         team. A team of bright, talented people,
                         each masters of their specialty, curious about the world and eager to solve the new exciting
                         cryptocurrency market problems, build cool stuff and have fun whilst doing so!</p>
                    <p
                         class="relative inline-block text-[#E5E5E5] hover:text-white hover:drop-shadow-[0_0_5px_white] transition">
                         <span
                              class="flex items-center gap-x-2 text-nowrap border-b border-transparent bg-gradient-to-r from-blue-400 via-blue-300 to-yellow-300 bg-[length:100%_2px] bg-no-repeat bg-bottom">
                              Learn more about working with us
                              <img src="/assets/image/a_after.png" alt="" class="object-contain w-4 h-4" />
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