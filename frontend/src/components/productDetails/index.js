"use client";
import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import Link from 'next/link';
import { FaLongArrowAltLeft } from "react-icons/fa";

const ProductDetails = ({ title, price, productData }) => {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    const [quantity, setQuantity] = useState(1)

    const handleNumberOfCreatorsChange = (type) => {
        setQuantity((prev) => {
            const newValue = type === 'increase' ? prev + 1 : Math.max(1, prev - 1);
            return newValue;
        });
    };

    return (
        <div className="container py-5">
            <div className="row">
                {/* Left Section - Image Slider */}
                <div className="col-md-6">
                    <Swiper
                        navigation={true}
                        thumbs={{ swiper: thumbsSwiper }}
                        modules={[FreeMode, Navigation, Thumbs]}
                        className="ProductDetailsSlider"
                    >
                        {productData.images.map((imageUrl, index) => (
                            <SwiperSlide key={index}>
                                <img src={imageUrl} alt={`Jewelry piece ${index + 1}`} />
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
                        {productData.images.map((imageUrl, index) => (
                            <SwiperSlide key={index}>
                                <img src={imageUrl} alt={`Thumbnail ${index + 1}`} />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>

                {/* Right Section - Product Details */}
                <div className="col-md-6">
                    <Link href="/"><FaLongArrowAltLeft /> Back to </Link>
                    <h2 className="product-title">{title}</h2>
                    <div className="product-rating mb-3">
                        <span className="text-warning">&#9733;&#9733;&#9733;&#9733;&#9733;</span>
                        <span>({productData.reviewsCount} Customer reviews)</span>
                    </div>
                    <h3 className="product-price">{price}</h3>
                    <p className="product-category">Category: <strong>{productData.category}</strong></p>
                    <p className="product-shipping">Free shipping</p>

                    <div className='d-flex justify-content-between gap-3'>
                        {/* Size Options */}
                        <div className="product-size w-50">
                            <h5>Size:</h5>
                            <select className="form-select quantity-block">
                                {productData.sizes.map((size, index) => (
                                    <option key={index} value={size}>{size}</option>
                                ))}
                            </select>
                        </div>

                        {/* Quantity */}
                        <div className="product-quantity w-50">
                            <h5>Quantity:</h5>
                            <div className="quantity-block">
                                <button
                                    type="button"
                                    className="quantity-arrow-minus"
                                    onClick={() => handleNumberOfCreatorsChange('decrease')}
                                >
                                    -
                                </button>
                                <input
                                    className="quantity-num"
                                    type="number"
                                    value={quantity}
                                    readOnly
                                />
                                <button
                                    type="button"
                                    className="quantity-arrow-plus"
                                    onClick={() => handleNumberOfCreatorsChange('increase')}
                                >
                                    +
                                </button>
                            </div>
                        </div>
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