'use client'
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import Image from 'next/image';

export default function HeroSection() {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty('--progress', 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="mySwiper"
      >
        <SwiperSlide className='SwiperBanners'>
            <Image src="https://img.freepik.com/free-vector/ornamental-floral-corner-frame-luxury-background-design_1017-26077.jpg?t=st=1728320409~exp=1728324009~hmac=a18a777f7ac4bf9dad21852cc1ede876c69a56526eaa64f995b198835c78f624&w=1380" width={500} height={500} alt='SLider'/>
        </SwiperSlide>
        <SwiperSlide className='SwiperBanners'>
            <Image src="https://img.freepik.com/free-vector/ornamental-floral-corner-frame-luxury-background-design_1017-26077.jpg?t=st=1728320409~exp=1728324009~hmac=a18a777f7ac4bf9dad21852cc1ede876c69a56526eaa64f995b198835c78f624&w=1380" width={500} height={500} alt='SLider'/>
        </SwiperSlide>
        <SwiperSlide className='SwiperBanners'>
            <Image src="https://img.freepik.com/free-vector/ornamental-floral-corner-frame-luxury-background-design_1017-26077.jpg?t=st=1728320409~exp=1728324009~hmac=a18a777f7ac4bf9dad21852cc1ede876c69a56526eaa64f995b198835c78f624&w=1380" width={500} height={500} alt='SLider'/>
        </SwiperSlide>
        <div className="autoplay-progress" slot="container-end">
          <svg viewBox="0 0 48 48" ref={progressCircle}>
            <circle cx="24" cy="24" r="20"></circle>
          </svg>
          <span ref={progressContent}></span>
        </div>
      </Swiper>
    </>
  );
}
