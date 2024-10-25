"use client";
import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

const ProductDetails = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <div className="container mt-5 py-5">
      <div className="row">
        {/* Left Section - Image Slider */}
        <div className="col-md-6">
          <Swiper
            navigation={true}
            thumbs={{ swiper: thumbsSwiper }}
            modules={[FreeMode, Navigation, Thumbs]}
            className="ProductDetailsSlider"
          >
            {/* Replace the image URLs with your actual product images */}
            {Array.from({ length: 10 }).map((_, index) => (
              <SwiperSlide key={index}>
                <img src={`https://assets.angara.com/ring/sr1912aqd/sr1912aqd_240.jpg?width=768&quality=95`} alt={`Jewelry piece ${index + 1}`} />
              </SwiperSlide>
            ))}
          </Swiper>
          <Swiper
            onSwiper={setThumbsSwiper}
            spaceBetween={10}
            slidesPerView={4}
            freeMode={true}
            watchSlidesProgress={true}
            modules={[FreeMode, Navigation, Thumbs]}
            className="ProductDetailsSliderBottom"
          >
            {Array.from({ length: 10 }).map((_, index) => (
              <SwiperSlide key={index}>
                <img src={`https://assets.angara.com/ring/sr1912aqd/sr1912aqd_240.jpg?width=768&quality=95`} alt={`Thumbnail ${index + 1}`} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Right Section - Product Details */}
        <div className="col-md-6">
          <h2 className="product-title">Elegant Diamond Necklace</h2>
          <div className="product-rating mb-3">
            <span className="text-warning">&#9733;&#9733;&#9733;&#9733;&#9733;</span>
            <span>(78 Customer reviews)</span>
          </div>
          <h3 className="product-price">$566</h3>
          <p className="product-category">Category: <strong>Necklaces</strong></p>
          <p className="product-shipping">Free shipping</p>

          {/* Color Options */}
          <div className="product-colors mb-3">
            <h5>Color:</h5>
            <div className="d-flex">
              <span className="color-box bg-gold"></span>
              <span className="color-box bg-silver"></span>
              <span className="color-box bg-rose-gold"></span>
            </div>
          </div>

          {/* Size Options */}
          <div className="product-size mb-3">
            <h5>Size:</h5>
            <select className="form-select w-50">
              <option value="S">Small</option>
              <option value="M">Medium</option>
              <option value="L">Large</option>
            </select>
          </div>

          {/* Quantity */}
          <div className="product-quantity mb-3">
            <h5>Qty:</h5>
            <input type="number" className="form-control w-25" defaultValue={1} min={1} />
          </div>

          {/* Buttons */}
          <div className="product-actions">
            <button className="btn btn-primary me-2">BUY NOW</button>
            <button className="btn btn-outline-secondary">ADD TO CART</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
