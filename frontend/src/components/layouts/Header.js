"use client";
import React, { useState, useEffect } from 'react';
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import Link from 'next/link';
import 'bootstrap/dist/css/bootstrap.min.css';
import Constant from '@/Constants/Constants';
import Image from 'next/image';

const Header = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    // Fetch categories from the backend
    const fetchCategories = async () => {
      // Simulating backend data
      const data = [
        {
          title: 'Earrings',
          subcategories: [
            {
              section: 'Natural Gemstone Earrings',
              products: [
                { name: 'Blue Sapphire Earrings', img: `${Constant.IMAGES_URL}/header_gem.webp` },
                { name: 'Ruby Earrings', img: `${Constant.IMAGES_URL}/header_gem.webp` },
                { name: 'Emerald Earrings', img: `${Constant.IMAGES_URL}/header_gem.webp` },
                { name: 'Opal Earrings', img: `${Constant.IMAGES_URL}/header_gem.webp` },
              ]
            },
            {
              section: 'Natural Diamond Earrings',
              products: [
                { name: 'Diamond Earrings', img: `${Constant.IMAGES_URL}/header_gem.webp` },
                { name: 'Colored Diamond Earrings', img: `${Constant.IMAGES_URL}/header_gem.webp` },
              ]
            },
            {
              section: 'Lab-Grown Earrings',
              products: [
                { name: 'Lab Diamond Earrings', img: `${Constant.IMAGES_URL}/header_gem.webp` },
                { name: 'Lab Ruby Earrings', img: `${Constant.IMAGES_URL}/header_gem.webp` },
              ]
            },
            {
              section: 'Earrings by Style',
              products: [
                { name: 'Classic Earrings', img: `${Constant.IMAGES_URL}/header_gem.webp` },
                { name: 'Stud Earrings', img: `${Constant.IMAGES_URL}/header_gem.webp` },
                { name: 'Drop Earrings', img: `${Constant.IMAGES_URL}/header_gem.webp` }
              ]
            },
            {
              section: 'Featured',
              products: [
                { name: 'Best Selling Earrings', img: `${Constant.IMAGES_URL}/header_gem.webp` },
                { name: 'Anniversary Gifts', img: `${Constant.IMAGES_URL}/header_gem.webp` }
              ]
            }
          ]
        },
        {
          title: 'Rings',
          subcategories: [
            {
              section: 'Gemstone Rings',
              products: [
                { name: 'Blue Sapphire Rings', img: `${Constant.IMAGES_URL}/header_gem.webp` },
                { name: 'Ruby Rings', img: `${Constant.IMAGES_URL}/header_gem.webp` },
              ]
            },
            {
              section: 'Diamond Rings',
              products: [
                { name: 'Solitaire Rings', img: `${Constant.IMAGES_URL}/header_gem.webp` },
                { name: 'Halo Rings', img: `${Constant.IMAGES_URL}/header_gem.webp` },
              ]
            }
          ]
        }
      ];

      setCategories(data);
    };

    fetchCategories();
  }, []);

  return (
    <header className="header" id="header">
      <nav className="navbar container">
        <section className="navbar__left">
          <Link href="/" className="brand">Jewellery</Link>
          <div className="burger" id="burger">
            <span className="burger-line"></span>
            <span className="burger-line"></span>
            <span className="burger-line"></span>
          </div>
        </section>

        <section className="navbar__center">
          <span className="overlay"></span>
          <div className="menu" id="menu">
            <div className="menu__header">
              <span className="menu__arrow">
                <FaArrowLeft />
              </span>
              <span className="menu__title"></span>
            </div>
            <ul className="menu__inner">
              <li className="menu__item">
                <Link href="/" className="menu__link">Home</Link>
              </li>

              {/* Dynamic categories */}
              {categories.map((category, index) => (
                <li className="menu__item menu__dropdown" key={index}>
                  <div className="menu__link">
                    {category.title} <FaArrowRight />
                  </div>
                  <div className="submenu megamenu__text">
                    {category.subcategories.map((subcategory, subIndex) => (
                      <div className="submenu__inner" key={subIndex}>
                        <h4 className="submenu__title">{subcategory.section}</h4>
                        <ul className="submenu__list">
                          {subcategory.products.map((product, prodIndex) => (
                            <li key={prodIndex}>
                              <Link href="#">
                              <span>
                                <Image src={product.img} width={20} height={20} alt={product.name}/>
                              </span>
                              <span>{product.name}</span>
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </li>
              ))}

              <li className="menu__item menu__dropdown">
                <div className="menu__link">
                  More <FaArrowRight />
                </div>
                <div className="submenu megamenu__image">
                  <div className="submenu__inner">
                    <Link href="#">
                      <img
                        src="https://plus.unsplash.com/premium_photo-1677013011737-ba61149ba70c?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        className="submenu-image"
                        alt=""
                      />
                      <span className="submenu__title">Home</span>
                    </Link>
                  </div>
                  <div className="submenu__inner">
                    <Link href="#">
                      <img
                        src="https://images.unsplash.com/photo-1515688594390-b649af70d282?q=80&w=1612&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        className="submenu-image"
                        alt=""
                      />
                      <span className="submenu__title">Beauty</span>
                    </Link>
                  </div>
                  <div className="submenu__inner">
                    <Link href="#">
                      <img
                        src="https://plus.unsplash.com/premium_photo-1676550886096-bfc64aae1e2a?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        className="submenu-image"
                        alt=""
                      />
                      <span className="submenu__title">Holiday</span>
                    </Link>
                  </div>
                  <div className="submenu__inner">
                    <Link href="#">
                      <img
                        src="https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        className="submenu-image"
                        alt=""
                      />
                      <span className="submenu__title">Sale</span>
                    </Link>
                  </div>
                </div>
              </li>
              <li className="menu__item">
                <Link href="/support" className="menu__link">Support</Link>
              </li>
            </ul>
          </div>
        </section>

        <section className="navbar__right">
          <Link href="/login" className="menu__link">Login</Link>
        </section>
      </nav>
    </header>
  );
}

export default Header;
