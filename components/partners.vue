<template>
     <div class="flex items-center relative justify-center p-10 overflow-hidden md:overflow-visible">
          <div class="flex flex-col md:flex-row justify-between items-center gap-8 w-full max-w-6xl">
               <div class="relative w-full md:w-2/5 h-[280px] flex items-end justify-center">
                    <img ref="item1" src="/public/image/near.png" alt="Near Logo"
                         class="absolute top-6 left-16  w-12 z-10" />
                    <img ref="item2" src="/public/image/solana.png" alt="Solana Logo"
                         class="absolute top-[120px] left-8  w-16 z-10" />
                    <img ref="item3" src="/public/image/mena.png" alt="Mena Logo"
                         class="absolute top-[80px] left-[150px]  w-12 z-10" />
                    <div ref="violetBall"
                         class="left-10 top-10 md:left-0 absolute w-48 h-48 md:w-[350px] md:h-[300px] bg-[rgb(73,69,138)] rounded-full blur-3xl">
                    </div>
                    <h1 class="text-white  text-4xl sm:text-3xl font-semibold mb-2 z-10">
                         <span class="text-4xl">Our Partners</span>
                         <br>
                         <span class="text-4xl">& Friends</span>
                    </h1>
               </div>
               <div class="md:w-3/5 flex justify-center">
                    <div ref="sliderWrapperUp" class="overflow-hidden w-full fade-up">
                         <div ref="sliderUp" class="flex gap-4 md:gap-6 md:w-max">
                              <div v-for="(partner, index) in partnersUp" :key="index"
                                   class="partner-card w-40 md:w-[150px] h-40 flex-shrink-0 bg-[#0B0C10] border border-[#2A2A2A] rounded-lg flex flex-col items-center justify-center space-y-3 shadow-md hover:shadow-lg transition">
                                   <img :src="partner.logo" :alt="`${partner.name} Logo`"
                                        class="w-12 h-12 object-contain" />
                                   <p class="text-gray-400 text-sm tracking-widest">{{ partner.name }}</p>
                              </div>
                         </div>
                    </div>

               </div>
          </div>
     </div>
</template>

<script setup>
import { onMounted } from 'vue'
import gsap from 'gsap'
const item1 = ref(null)
const item2 = ref(null)
const item3 = ref(null)
const sliderUp = ref(null)
const sliderWrapperUp = ref(null)
const basePartnersUp = [
     { name: 'BINANCE', logo: '/image/binance@2x.png' },
     { name: 'COINBASE', logo: '/image/coinbase@2x.png' },
     { name: 'BITFINEX', logo: '/image/bitfinex@2x.png' },
     { name: 'BITBANK', logo: '/image/bitbank@2x.png' },
     { name: 'BITHUMB', logo: '/image/bithumb@2x.png' },
     { name: 'BITSTAMP', logo: '/image/bitstamp@2x.png' },
]
const partnersUp = [...basePartnersUp, ...basePartnersUp]
onMounted(() => {
     const loopScrollUp = (target) => {
          const distance =  target.scrollWidth / 4
          gsap.to(target, {
               x: `-=${distance}`,
               duration: 40,
               ease: 'linear',
               repeat: -1,
               modifiers: {
                    x: gsap.utils.unitize(x => {
                         const value = parseFloat(x)
                         return value <= -distance ? 0 : value
                    })
               }
          })
     }
     loopScrollUp(sliderUp.value)
     const sliderUpTween = gsap.getTweensOf(sliderUp.value)[0]
     sliderWrapperUp.value.addEventListener('mouseenter', () => sliderUpTween?.pause())
     sliderWrapperUp.value.addEventListener('mouseleave', () => sliderUpTween?.play())
     gsap.to(item1.value, { y: -10, duration: 2, repeat: -1, yoyo: true, ease: "power1.inOut" })
     gsap.to(item2.value, { y: -8, duration: 2.5, repeat: -1, yoyo: true, ease: "power1.inOut" })
     gsap.to(item3.value, { y: -12, duration: 3, repeat: -1, yoyo: true, ease: "power1.inOut" })
})

</script>
<style>
.fade-up {
     mask-image: linear-gradient(to left, transparent, black 20%, black 80%, transparent);
     -webkit-mask-image: linear-gradient(to left, transparent, black 20%, black 80%, transparent);

}
</style>