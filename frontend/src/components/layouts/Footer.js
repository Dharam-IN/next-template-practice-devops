import React from 'react';
import Link from 'next/link';
import { FaFacebookSquare, FaInstagram, FaYoutube, FaPhone, FaEnvelope, FaMapMarkerAlt, FaGem } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-primary text-white text-center text-lg-start">
      <div className="container p-4">
        <div className="row my-4">
          {/* Brand Logo */}
          <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
            <div className="rounded-circle bg-white shadow-1-strong d-flex align-items-center justify-content-center mb-4 mx-auto" style={{ width: '150px', height: '150px' }}>
              <FaGem size={70} color="#D4AF37" />
            </div>
            <p className="text-center">Luxury Jewellery for Every Occasion</p>
            <ul className="list-unstyled d-flex flex-row justify-content-center">
              <li>
                <Link href="#">
                  <FaFacebookSquare className="text-white px-2" size={30} />
                </Link>
              </li>
              <li>
                <Link href="#">
                  <FaInstagram className="text-white px-2" size={30} />
                </Link>
              </li>
              <li>
                <Link href="#">
                  <FaYoutube className="text-white px-2" size={30} />
                </Link>
              </li>
            </ul>
          </div>

          {/* Jewellery Links */}
          <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
            <h5 className="text-uppercase mb-4">Jewellery</h5>
            <ul className="list-unstyled">
              <li className="mb-2">
                <Link href="/rings" className="text-white">
                  <FaGem className="pe-3" /> Rings
                </Link>
              </li>
              <li className="mb-2">
                <Link href="/necklaces" className="text-white">
                  <FaGem className="pe-3" /> Necklaces
                </Link>
              </li>
              <li className="mb-2">
                <Link href="/bracelets" className="text-white">
                  <FaGem className="pe-3" /> Bracelets
                </Link>
              </li>
              <li className="mb-2">
                <Link href="/earrings" className="text-white">
                  <FaGem className="pe-3" /> Earrings
                </Link>
              </li>
            </ul>
          </div>

          {/* Customer Service */}
          <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
            <h5 className="text-uppercase mb-4">Customer Service</h5>
            <ul className="list-unstyled">
              <li className="mb-2">
                <Link href="/contact" className="text-white">
                  <FaPhone className="pe-3" /> Contact Us
                </Link>
              </li>
              <li className="mb-2">
                <Link href="/shipping" className="text-white">
                  <FaGem className="pe-3" /> Shipping & Returns
                </Link>
              </li>
              <li className="mb-2">
                <Link href="/faq" className="text-white">
                  <FaGem className="pe-3" /> FAQs
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
            <h5 className="text-uppercase mb-4">Contact</h5>
            <ul className="list-unstyled">
              <li className="mb-2">
                <p><FaMapMarkerAlt className="pe-2" /> New York, 123 Street, USA</p>
              </li>
              <li className="mb-2">
                <p><FaPhone className="pe-2" /> +1 234 567 890</p>
              </li>
              <li className="mb-2">
                <p><FaEnvelope className="pe-2" /> info@jewelleryshop.com</p>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="text-center p-3" style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        © 2024 Copyright: 
        <Link href="/" className="text-white">
          JewelleryShop.com
        </Link>
      </div>
    </footer>
  );
}
