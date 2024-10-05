import Constant from "@/config/constant";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { useForm, Controller } from "react-hook-form";
import Breadcrumb from "../../components/breadcrumb";
import { useRouter } from "next/router";
import toast from "react-hot-toast";
import Apilist from "@/pages/api";
import Swal from 'sweetalert2'

const Footer = () => {


  const [categoryData, setCategoryData] = useState([])


  useEffect(() => {
    const getProductCategory = async () => {
      const data = {}
      let pageData = await new Apilist().getProductCategory(data);
      setCategoryData(pageData?.result)
    }

    getProductCategory()
  }, [])


  const router = useRouter();
  const {
    register,
    handleSubmit,
    watch,
    control,
    reset,
    formState: { errors },
  } = useForm();
  // this handler is for submit forgot password
  
  
  const onSubmit = async(data) => {
    const userData = {email:data?.email};
    let response = await new Apilist().saveNewsLetter(userData);
    if(response?.status == 'success'){
      Swal.fire("Subscribed!", response?.message, "success");
    }else{
      Swal.fire("Subscribed!", response?.message, "error");
    }
    reset();
  };


  return (
    <>
      <footer>
        <div className="footer-top">
          <div className="container">
            <div className="row">
              <div className="col-lg-5 mb-4 mb-lg-0">
                <strong>Security Certification</strong>
                <figure>
                  <picture>
                    <source
                      srcSet={`${Constant.BASE_IMAGE_URL}/security.webp`}
                      type="image/webp"
                    />
                    <source
                      srcSet={`${Constant.BASE_IMAGE_URL}/security.jpg`}
                      type="image/jpg"
                    />
                    <Image
                      src={`${Constant.BASE_IMAGE_URL}/security.jpg`}
                      alt="Music"
                      width="418"
                      height="28"
                    />
                  </picture>
                </figure>
              </div>
              <div className="col-lg-7">
                <strong>We Accept</strong>
                <figure>
                  <picture>
                    <source
                      srcSet={`${Constant.BASE_IMAGE_URL}/we-accept.webp`}
                      type="image/webp"
                    />
                    <source
                      srcSet={`${Constant.BASE_IMAGE_URL}/we-accept.jpg`}
                      type="image/jpg"
                    />
                    <Image
                      src={`${Constant.BASE_IMAGE_URL}/we-accept.jpg`}
                      alt="Music"
                      width="742"
                      height="28"
                    />
                  </picture>
                </figure>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-menu">
          <div className="container">
            <div className="row">
              {categoryData?.map((data, index) => (
                <div className="col mb-4 mb-md-0" key={index}>

                  <div className="menus">
                    <strong>{data?.name}</strong>

                    <ul>
                      {data?.subcategories?.map((category, index) => (
                        <li key={index}>
                          <Link href={`/product-listing/${data?.slug}?category=${category?.slug}&sort=0`}>{category?.name}</Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
              <div className="col mb-4 mb-md-0">
                <div className="menus">
                  <strong>Help & Support</strong>
                  <ul>
                    <li>
                      <Link href="/faqs">Support Center & FAQ</Link>
                    </li>
                    <li>
                      <Link href="/">Purchase Protection</Link>
                    </li>
                    <li>
                      <Link href="/">Sitemap</Link>
                    </li>
                    <li>
                      <Link href="/contact-us">Contact Us</Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col">
                <div className="newsletter">
                  <strong>Join the Newsletter</strong>
                  <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter Email"
                        {...register("email", {
                          required: "Email is required",
                          pattern: {
                            value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                            message: "Enter a valid email address",
                          },
                        })}
                      />
                      {errors.email && (
                        <small className="text-danger mt-0">{errors?.email?.message}</small>
                      )}
                    </div>
                    <button
                      type="submit"
                      className="subscribe-button btn btn-fill"
                    >
                      Subscribe
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-app">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-md-4 mb-4 mb-md-0">
                <div className="qr-scan">
                  <figure>
                    <picture>
                      <source
                        srcSet={`${Constant.BASE_IMAGE_URL}/qr.webp`}
                        type="image/webp"
                      />
                      <source
                        srcSet={`${Constant.BASE_IMAGE_URL}/qr.jpg`}
                        type="image/jpg"
                      />
                      <Image
                        src={`${Constant.BASE_IMAGE_URL}/qr.jpg`}
                        alt="Image"
                        width="99"
                        height="99"
                      />
                    </picture>
                  </figure>
                  <div className="qr-scan-text">
                    <p>Scan the QR code and</p>
                    <strong>Download the App</strong>
                  </div>
                </div>
              </div>
              <div className="col-md-5 mb-4 mb-md-0">
                <div className="download-app">
                  <div className="app-download-btn d-flex ">
                    <Link href="/" className="app-btn me-2 ">
                      <picture>
                        <source
                          srcSet={`${Constant.BASE_IMAGE_URL}/google-play.webp`}
                          type="image/webp"
                        />
                        <source
                          srcSet={`${Constant.BASE_IMAGE_URL}/google-play.jpg`}
                          type="image/jpg"
                        />
                        <Image
                          src={`${Constant.BASE_IMAGE_URL}/google-play.jpg`}
                          alt="Google"
                          width="130"
                          height="42"
                        />
                      </picture>
                    </Link>
                    <Link href="/" className="app-btn">
                      <picture>
                        <source
                          srcSet={`${Constant.BASE_IMAGE_URL}/apple-store.webp`}
                          type="image/webp"
                        />
                        <source
                          srcSet={`${Constant.BASE_IMAGE_URL}/apple-store.jpg`}
                          type="image/jpg"
                        />
                        <Image
                          src={`${Constant.BASE_IMAGE_URL}/apple-store.jpg`}
                          alt="Google"
                          width="119"
                          height="42"
                        />
                      </picture>
                    </Link>
                  </div>
                  <div className="qr-scan-text">
                    <p>Scan the QR code and</p>
                    <strong>Download the App</strong>
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div className="follow-us">
                  <span>Follow Us</span>
                  <ul>
                    <li className="whatsapp">
                      <Link href="/"></Link>
                    </li>
                    <li className="facebook">
                      <Link href="/"></Link>
                    </li>
                    <li className="instagram">
                      <Link href="/"></Link>
                    </li>
                    <li className="x-icon">
                      <Link href="/"></Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="container">
            <div className="footer-bottom-wrap">
              <p>© 2024 Hibobii.Com. </p>
              <div className="footer-bottom-link">
                <Link href="/terms-of-use">Terms Of Use</Link>{" "}
                <Link href="/privacy-policy">Privacy Policy</Link>{" "}
                <Link href="/privacy-choices">Your Privacy Choices</Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
