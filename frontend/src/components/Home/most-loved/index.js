"use client"
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Pagination, Navigation } from 'swiper/modules';
import { SectionTitle } from '@/components/SectionTitle/SectionTitle';
import Image from 'next/image';
import Constant from '@/Constants/Constants';

export default function MostLoved() {
    const [swiperRef, setSwiperRef] = useState(null);

    return (
        <>

            <div className="row">
                <div className="col-12 d-flex align-items-center justify-content-center">
                    <SectionTitle title={"Exquisite Pieces Loved by Many"}>
                        Delicate Designs for Your Precious Little Ones
                    </SectionTitle>
                </div>
            </div>
            <Swiper
                onSwiper={setSwiperRef}
                slidesPerView={3}
                centeredSlides={false}
                spaceBetween={30}
                pagination={{
                    //   type: 'fraction',
                    clickable: true,
                }}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="ExquisiteSliderSection"
            >
                <SwiperSlide className='ExquisiteCol'>
                    <Image
                        src={`${Constant.IMAGES_URL}/exquisite_slider.webp`}
                        width={500}
                        height={500}
                        alt='Text'
                    />
                </SwiperSlide>
                <SwiperSlide className='ExquisiteCol'>
                    <Image
                        src={`${Constant.IMAGES_URL}/exquisite_slider.webp`}
                        width={500}
                        height={500}
                        alt='Text'
                    />
                </SwiperSlide>
                <SwiperSlide className='ExquisiteCol'>
                    <Image
                        src={`${Constant.IMAGES_URL}/exquisite_slider.webp`}
                        width={500}
                        height={500}
                        alt='Text'
                    />
                </SwiperSlide>
                <SwiperSlide className='ExquisiteCol'>
                    <Image
                        src={`${Constant.IMAGES_URL}/exquisite_slider.webp`}
                        width={500}
                        height={500}
                        alt='Text'
                    />
                </SwiperSlide>
                <SwiperSlide className='ExquisiteCol'>
                    <Image
                        src={`${Constant.IMAGES_URL}/exquisite_slider.webp`}
                        width={500}
                        height={500}
                        alt='Text'
                    />
                </SwiperSlide>
                <SwiperSlide className='ExquisiteCol'>
                    <Image
                        src={`${Constant.IMAGES_URL}/exquisite_slider.webp`}
                        width={500}
                        height={500}
                        alt='Text'
                    />
                </SwiperSlide>
                <SwiperSlide className='ExquisiteCol'>
                    <Image
                        src={`${Constant.IMAGES_URL}/exquisite_slider.webp`}
                        width={500}
                        height={500}
                        alt='Text'
                    />
                </SwiperSlide>
                <SwiperSlide className='ExquisiteCol'>
                    <Image
                        src={`${Constant.IMAGES_URL}/exquisite_slider.webp`}
                        width={500}
                        height={500}
                        alt='Text'
                    />
                </SwiperSlide>
                <SwiperSlide className='ExquisiteCol'>
                    <Image
                        src={`${Constant.IMAGES_URL}/exquisite_slider.webp`}
                        width={500}
                        height={500}
                        alt='Text'
                    />
                </SwiperSlide>
            </Swiper>
        </>
    );
}
