import { SectionTitle } from '../../../components/SectionTitle/SectionTitle';
import Link from 'next/link';
import React from 'react';

// Dummy data array coming from the backend
const popularStylesData = [
  {
    image: 'https://assets.angara.com/assets/homepage-Assets/us/top-categories/certified-jewelry.jpg?width=3000&quality=95',
    alt: 'Style 1',
  },
  {
    image: 'https://via.placeholder.com/300',
    alt: 'Style 2',
  },
  {
    image: 'https://via.placeholder.com/300',
    alt: 'Style 3',
  },
  {
    image: 'https://via.placeholder.com/300',
    alt: 'Style 4',
  },
  {
    image: 'https://via.placeholder.com/300',
    alt: 'Style 5',
  },
];

export default function HomePopularStyle() {
  return (
    <div className="container-fluid popular-styles-section">
        <div className="row">
          <div className="col-12 d-flex align-items-center justify-content-center">
            <SectionTitle title={"Discover Our Newest and Most Coveted Designs"}>
            Sparkle and Shine: Discover Jewelry for Little Stars
            </SectionTitle>
          </div>
        </div>
      <div className="row">
        <div className="col-12">
          <div className="row">
            {/* Main Image (First element of the array) */}
            <div className="col-md-6 col-12">
              <div className="popularImageDiv">
                <Link href="#">
                  <img
                    src={popularStylesData[0].image}
                    alt={popularStylesData[0].alt}
                    className="img-fluid main-image"
                  />
                </Link>
              </div>
            </div>

            {/* Other images */}
            <div className="col-md-6 col-12">
              <div className="row">
                {popularStylesData.slice(1).map((style, index) => (
                  <div key={index} className="col-md-6 col-6 mb-3">
                    <div className="popularImageDiv">
                      <Link href="#">
                        <img
                          src={style.image}
                          alt={style.alt}
                          className="img-fluid"
                        />
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
