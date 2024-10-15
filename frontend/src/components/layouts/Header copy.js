import React from 'react';
import { FaArrowLeft, FaSun } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa";
import 'bootstrap/dist/css/bootstrap.min.css';
import Link from 'next/link';

const Header = () => {
  return (
    <header className="header" id="header">
      <nav className="navbar container">
        <section className="navbar__left">
          <Link href="/" className="brand">
            Jewellery
          </Link>
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
                <FaArrowLeft/>
              </span>
              <span className="menu__title"></span>
            </div>
            <ul className="menu__inner">
              <li className="menu__item">
                <Link href="/" className="menu__link">Home</Link>
              </li>
              <li className="menu__item menu__dropdown">
                <div className="menu__link">
                  Products <FaArrowRight/>
                </div>
                <div className="submenu megamenu__text">
                  <div className="submenu__inner">
                    <h4 className="submenu__title">Rings</h4>
                    <ul className="submenu__list">
                      <li><Link href="#">Blue Sapphire Rings</Link></li>
                      <li><Link href="#">Blue Sapphire Rings</Link></li>
                      <li><Link href="#">Blue Sapphire Rings</Link></li>
                      <li><Link href="#">Blue Sapphire Rings</Link></li>
                    </ul>
                  </div>
                  <div className="submenu__inner">
                    <h4 className="submenu__title">Necklaces</h4>
                    <ul className="submenu__list">
                      <li><Link href="#">Blue Sapphire Necklaces</Link></li>
                      <li><Link href="#">Blue Sapphire Necklaces</Link></li>
                      <li><Link href="#">Blue Sapphire Necklaces</Link></li>
                      <li><Link href="#">Blue Sapphire Necklaces</Link></li>
                    </ul>
                  </div>
                  <div className="submenu__inner">
                    <h4 className="submenu__title">Earrings</h4>
                    <ul className="submenu__list">
                    <li><Link href="#">Blue Sapphire Necklaces</Link></li>
                    <li><Link href="#">Blue Sapphire Necklaces</Link></li>
                    <li><Link href="#">Blue Sapphire Necklaces</Link></li>
                    <li><Link href="#">Blue Sapphire Necklaces</Link></li>
                    </ul>
                  </div>
                  <div className="submenu__inner">
                    <h4 className="submenu__title">Earrings</h4>
                    <ul className="submenu__list">
                    <li><Link href="#">Blue Sapphire Necklaces</Link></li>
                    <li><Link href="#">Blue Sapphire Necklaces</Link></li>
                    <li><Link href="#">Blue Sapphire Necklaces</Link></li>
                    <li><Link href="#">Blue Sapphire Necklaces</Link></li>
                    </ul>
                  </div>
                </div>
              </li>
              <li className="menu__item menu__dropdown">
                <div className="menu__link">
                  More <FaArrowRight/>
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
              <li className="menu__item menu__dropdown">
                <div className="menu__link">
                  Account <FaArrowRight/>
                </div>
                <div className="submenu megamenu__normal">
                  <ul className="submenu__list">
                    <li><Link href="#">Login</Link></li>
                    <li><Link href="#">Register</Link></li>
                    <li><Link href="#">Track Order</Link></li>
                    <li><Link href="#">Help</Link></li>
                  </ul>
                </div>
              </li>
              <li className="menu__item">
                <Link href="/support" className="menu__link">Support</Link>
              </li>
            </ul>
          </div>
        </section>
        
        <section className="navbar__right">
          login
        </section>
      </nav>
    </header>
  );
}

export default Header;
