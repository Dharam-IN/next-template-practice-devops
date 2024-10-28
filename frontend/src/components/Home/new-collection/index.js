import React from 'react';
import Image from 'next/image';
import Constant from '../../../config/constant';

export default function NewCollection() {
  return (
    <section className="NewCollectionSection d-flex align-items-center">
      <div className="container">
        <div className="row align-items-center">
          {/* Left Side - Image */}
          <div className="col-lg-6 col-md-6 d-none d-md-block">
            <div className="NewCollectionSectionImageWrapper">
              <Image
                src={`${Constant.BASE_IMAGE_URL}/NewCollection.png`}
                alt="Hero"
                width={1000}
                height={1000}
              />
            </div>
          </div>

          {/* Right Side - Text */}
          <div className="col-lg-6 col-md-6 text-white">
            <div className="NewCollectionSectionContent">
                <h1 className="display-4">Ring</h1>
                <p className="lead">
                    Discover our exquisite collection of rings, crafted with the finest materials and designed to elevate any occasion. From elegant diamond solitaires to intricate vintage styles, each piece tells a story of beauty and craftsmanship. Find the perfect ring that expresses your unique style and celebrates life&apos;s special moments.
                </p>
                <a href="#" className="btn btn-fill">
                    <span>
                      See Collection
                    </span>
                </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
