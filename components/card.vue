<template>
     <div class="flex flex-col relative md:items-center justify-center p-10 ">
          <div class="text-center max-w-2xl space-y-6 z-20 ">
               <h1 class="text-4xl  font-semibold text-white ">We are in a good company</h1>
               <p class="text-[#E5E5E5] leading-relaxed ">Join our community of innovators, problem solvers and
                    Our partnerships have delivered great value to our projects and we’re happy to share some of their
                    feedback below</p>
               <div class="flex justify-center gap-5">
                    <img src="/public/image/pagination-left.svg.png" alt=""
                         class="hover: hover:drop-shadow-[0_0_5px_white] transition" @click="Prev()">

                    <img src="/public/image/pagination-right.png" alt=""
                         class="hover: hover:drop-shadow-[0_0_5px_white] transition" @click="Next()">
               </div>
               <div class="flex justify-center  ">
                    <swiper @swiper="onSwiper" :pagination="{ clickable: true }" :modules="[Pagination]"
                         class="mySwiper">
                         <swiper-slide>
                              <p>
                                   Since 2019, Gravity team has been an astounding market maker for Bitkub. They have
                                   proven themselves to be one of the most consistent, committed and driven market
                                   makers on our exchange. Gravity Team has contributed high-quality volume and has
                                   proven to be very reliable and trustworthy partner. We strongly advocate Gravity Team
                                   as they have been an indispensable part of our market-making team.
                              </p>
                              <p class="mt-2">Atthakrit Chimplapibul</p>
                              <div class="flex flex-col  items-center">

                                   <p class="text-white text-sm text-center">Co-founder & CEO of Bitkub</p>
                              </div>
                         </swiper-slide>
                         <swiper-slide>
                              <p>
                                   Working with Gravity Team has significantly enhanced our platform's liquidity and
                                   user confidence. Their proactive approach and sharp insights have made them a vital
                                   partner in our exchange growth. We truly value their consistency and professionalism.
                              </p>
                              <p class="mt-2">Emily Tran</p>
                              <div class="flex flex-col items-center">
                                   <p class="text-white text-sm text-center">Head of Operations at NovaX Exchange</p>
                              </div>
                         </swiper-slide>
                         <swiper-slide>
                              <p>
                                   Gravity Team has consistently gone above and beyond in providing top-tier market
                                   making services. Their dedication to maintaining stable markets and delivering
                                   real-time support has made them a standout partner for our project.
                              </p>
                              <p class="mt-2">Carlos Mendes</p>
                              <div class="flex flex-col items-center">
                                   <p class="text-white text-sm text-center">Founder & CEO of BlockSphere</p>
                              </div>
                         </swiper-slide>


                    </swiper>
               </div>
          </div>


     </div>
</template>

<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'
import 'swiper/css/pagination'


import { Pagination } from 'swiper/modules'

const swiperRef = ref(null)

const onSwiper = (swiper) => {
     swiperRef.value = swiper
}

const Next = () => {
     swiperRef.value?.slideNext()
}

const Prev = () => {
     swiperRef.value?.slidePrev()
}
</script>
