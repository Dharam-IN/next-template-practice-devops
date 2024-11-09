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
import ProductDetailSlider from '../../components/productDetailSlider'

const ProductDetails = ({ title, price, productData }) => {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    const [quantity, setQuantity] = useState(1)

    const handleNumberOfCreatorsChange = (type) => {
        setQuantity((prev) => {
            const newValue = type === 'increase' ? prev + 1 : Math.max(1, prev - 1);
            return newValue;
        });
    };
    console.log(productData)

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

                    <div className='productDetailContentMainColumn productDetailsContentSliderColumn'>
                        <h5>{productData?.totalCaratWeight?.title}</h5>
                        <ProductDetailSlider productdata={productData?.totalCaratWeight?.data} />
                    </div>

                    <div className='productDetailContentMainColumn productDetailsContentSliderColumn'>
                        <h5>{productData?.metalType?.title}</h5>
                        <ProductDetailSlider productdata={productData?.metalType?.data} />
                    </div>

                    {/* <div className='productDetailMainColumn d-flex justify-content-between gap-3'>
                        // Size Options
                        <div className="product-size w-50">
                            <h5>Size:</h5>
                            <select className="form-select quantity-block">
                                {productData.sizes.map((size, index) => (
                                    <option key={index} value={size}>{size}</option>
                                ))}
                            </select>
                        </div>
                    </div> */}

                    {/* Buttons */}
                    <div className='productDetailContentMainColumn'>
                        {/* Quantity */}
                        <div className="product-quantity">
                            <h5>Quantity:</h5>
                            <div className='d-flex justify-content-between flex-md-row flex-column gap-3'>
                                <div className="quantity-block productDetailContentHalfColumn">
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

                                <div className='productDetailContentHalfColumn'>
                                    <button className="btn btn-fill">Add to cart</button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="product-actions d-flex gap-3">
                        <button className="btn btn-fill">Make Offer</button>
                        <button className="btn btn-fill">BUY NOW</button>
                    </div>

                    <div class="accordion" id="accordionExample">
                        <div class="accordion-item">
                            <h2 class="accordion-header">
                                <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                    Accordion Item #1
                                </button>
                            </h2>
                            <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                                <div class="accordion-body">
                                    <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                                </div>
                            </div>
                        </div>
                        <div class="accordion-item">
                            <h2 class="accordion-header">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                    Accordion Item #2
                                </button>
                            </h2>
                            <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                <div class="accordion-body">
                                    <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                                </div>
                            </div>
                        </div>
                        <div class="accordion-item">
                            <h2 class="accordion-header">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                    Accordion Item #3
                                </button>
                            </h2>
                            <div id="collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                <div class="accordion-body">
                                    <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;