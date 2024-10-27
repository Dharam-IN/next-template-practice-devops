"use client";
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";
import { SectionTitle } from "../../../components/SectionTitle/SectionTitle";
import Image from "next/image";
import Link from "next/link";
import ProductCol from "../../../components/productcol";

export default function MostLoved() {
  const [products, setProducts] = useState([]);
  const [swiperRef, setSwiperRef] = useState(null);

  useEffect(() => {
    const apiData = [
      { id: 1, title: 'Diamond Ring', category: 'Rings', price: 250.00, product_image: 'https://via.placeholder.com/300?text=Diamond+Ring' },
      { id: 2, title: 'Gold Necklace', category: 'Necklaces', hot: true, price: 150.00, product_image: 'https://via.placeholder.com/300?text=Gold+Necklace' },
      { id: 3, title: 'Pearl Earrings', category: 'Earrings', hot: true, price: 75.00, product_image: 'https://via.placeholder.com/300?text=Pearl+Earrings' },
      { id: 4, title: 'Silver Bracelet', category: 'Bracelets', price: 100.00, sale: true, originalPrice: 150.00, product_image: 'https://via.placeholder.com/300?text=Silver+Bracelet' },
      { id: 5, title: 'Sapphire Pendant', category: 'Pendants', price: 200.00, hot: true, product_image: 'https://via.placeholder.com/300?text=Sapphire+Pendant' },
    ];
    setProducts(apiData);
  }, []);

  return (
    <>
      <section>
        <div className="container-fluid">
          <div className="row">
            <div className="col-12 d-flex align-items-center justify-content-center">
              <SectionTitle title={"Exquisite Pieces Loved by Many"}>
                Delicate Designs for Your Precious Little Ones
              </SectionTitle>
            </div>
          </div>
          <Swiper
            onSwiper={setSwiperRef}
            slidesPerView={4}
            centeredSlides={false}
            spaceBetween={30}
            pagination={{ clickable: true }}
            navigation={true}
            modules={[Pagination, Navigation]}
            className="ExquisiteSliderSection"
          >
            {products.map((product) => (
              <SwiperSlide className="ExquisiteCol" key={product.id}>
                <ProductCol product={product} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
    </>
  );
}
