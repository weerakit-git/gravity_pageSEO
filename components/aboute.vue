<template>
     <div class="relative flex items-center justify-center py-5 px-5 mt-10 ">
          <div class="flex flex-col jutify-center items-center">
               <div class="text-center max-w-2xl space-y-6 z-20 mb-5 ">
                    <h1 class="text-3xl md:text-4xl  font-semibold text-white ">About Gravity Team</h1>
                    <p class="text-[#E5E5E5] leading-relaxed  max-w-xl mx-auto">At Gravity Team, we are on the mission
                         to
                         balance the supply and demand across crypto markets worldwide. We are a crypto native market
                         maker
                         founded by traders, developers, and innovators who are strong believers and supporters of the
                         future
                         of decentralization and digital assets.</p>
               </div>

               <div class="grid grid-cols-2 md:grid-cols-4 text-center text-white">
                    <div v-for="(item, index) in stats" :key="index" class="group p-6 space-y-2 hover:bg-gradient-to-br from-blue-400 via-purple-400 to-yellow-300 
           bg-[length:200%_200%] bg-left hover:bg-right 
           transition-all duration-1000 ease-in-out" :class="[
               // mobile: 2 col
               index % 2 !== 1 ? 'border-r border-white/10' : '',
               index < stats.length - 2 ? 'border-b border-white/10' : '',

               // Desktop: 4 col
               'md:border-r md:border-white/10 md:border-b',
               index % 4 === 3 ? 'md:border-r-0' : '',
               index >= stats.length - 4 ? 'md:border-b-0' : '',
          ]">
                         <h2 class="text-xl font-semibold group-hover:text-black transition-colors duration-300">
                              {{ item.title }}
                         </h2>
                         <p class="text-sm text-gray-400 group-hover:text-black transition-colors duration-300"
                              v-html="item.desc"></p>
                    </div>
               </div>
          </div>
     </div>
</template>
<script setup>
const stats = [
     { title: '~$100 billion', desc: 'cumulative trading volume to date' },
     { title: '0.8%', desc: 'of the global crypto<br/>spot trading volume' },
     { title: '~30', desc: 'Gravity Teammates<br/>(& growing)' },
     { title: '25+', desc: 'leading global and<br/>local crypto exchanges' },
     { title: '2017', desc: 'start, crypto-natives' },
     { title: '1,200+', desc: 'crypto-asset pairs' },
     { title: '24/7', desc: 'liquidity' },
     { title: '5 billion+', desc: 'trades done to date' },
]
</script>
