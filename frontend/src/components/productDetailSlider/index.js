import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Navigation, Pagination, History } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

const ProductDetailSlider = ({ productdata }) => {
    console.log(productdata);  // Check in console if productdata is being passed correctly
    return (
        <div>
            <Swiper
                spaceBetween={30}
                slidesPerView={5}
                navigation={true}
                pagination={true}
                modules={[Navigation, Pagination, History]}
                className="productDetailsContentSlider"
            >
                {productdata?.map((item, index) => (
                    <SwiperSlide key={index}>
                        <div className="productDetailsContentSliderProductColumn">
                            <img src={item.image} alt={`Gem image ${index}`} />
                            <p>{item.value}</p>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}

export default ProductDetailSlider;
