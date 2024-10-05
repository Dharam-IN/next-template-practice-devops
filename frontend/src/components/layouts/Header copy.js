import Constant from "../../config/constant";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { useSession } from "next-auth/react"
import { toast } from "react-toastify";
import { useRouter } from 'next/navigation'
import { LogOut } from '../logout/logout'
import { useAuth } from "@/components/context/context";
import Apilist from "@/pages/api";
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import { useCart } from '../../contexts/CartContext';

const Header = ({ pageData }) => {
    const [logoutData, setLogoutData] = useState(false)
    const [name, setName] = useState("")
    const router = useRouter()
    const { query } = router;
    const { push } = useRouter()
    const { data: session, status } = useSession()
    const [categoryData, setCategoryData] = useState([])

    const { cartCount, wishlistCount } = useCart();
    useEffect(() => {
        const getProductCategory = async () => {
            const data = {}
            let pageData = await new Apilist().getProductCategory(data);
            setCategoryData(pageData?.result)
        }

        getProductCategory()
    }, [])


    useEffect(() => {
        setLogoutData(session)
        const firstLetter = session?.user?.result?.full_name?.charAt(0);
        const capitalizedLetter = firstLetter ? firstLetter.toUpperCase() : '';
        setName(capitalizedLetter)
    }, [logoutData, session])

    const handleLogout = () => {
        LogOut(push)
        toast.success('You have been logged out successfully.');
    };




    return (
        <>
            <header>
                <div className="header-top">
                    <div className="container d-flex justify-content-between align-items-center">
                        <div className="top-header-item d-flex align-items-center">
                            <span className="icon me-2">
                                <Image
                                    src={`${Constant.BASE_IMAGE_URL}/fast-delivery.svg`}
                                    alt="Fast delivery"
                                    width="37"
                                    height="22"
                                />
                            </span>
                            <span className="text text-white">Fast delivery</span>
                        </div>
                        <div className="top-header-item d-flex align-items-center">
                            <span className="icon me-2">
                                <Image
                                    src={`${Constant.BASE_IMAGE_URL}/offer.svg`}
                                    alt="WELCOME OFFER 20% OFF"
                                    width="25"
                                    height="25"
                                />
                            </span>
                            <span className="text text-white">WELCOME OFFER 20% OFF</span>
                        </div>
                        <div className="top-header-item d-flex align-items-center">
                            <span className="icon me-2">
                                <Image
                                    src={`${Constant.BASE_IMAGE_URL}/creadit-card.svg`}
                                    alt="Safe payments"
                                    width="27"
                                    height="22"
                                />
                            </span>
                            <span className="text text-white">Safe payments</span>
                        </div>
                    </div>
                </div>
                <div className="header-bottom">
                    <div className="container">
                        <div className="header-bottom-inner d-flex align-items-center justify-content-between">
                            <nav className="navbar navbar-expand-lg">
                                <div className="container p-0">
                                    <Link className="navbar-brand" href={`${Constant?.WEBSITE_URL}`}>
                                        <Image
                                            src={`${Constant.BASE_IMAGE_URL}/logo.svg`}
                                            alt="Logo"
                                            width="186"
                                            height="58"
                                        />
                                    </Link>
                                    <button
                                        className="navbar-toggler menu-btn"
                                        type="button"
                                        data-bs-toggle="collapse"
                                        data-bs-target="#navbarNavDropdown"
                                        aria-controls="navbarNavDropdown"
                                        aria-expanded="false"
                                        aria-label="Toggle navigation"
                                    >
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                    </button>
                                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                                        <ul className="navbar-nav">
                                            {categoryData?.map((post, index)=>(
                                                <li className="nav-item" key={index}>
                                                <Link className="nav-link" href={`/product-listing/${post?.slug}?sort=0`}>
                                                    {post?.name}
                                                </Link>
                                            </li>
                                            ))}
                                                                          
                                            <li className="nav-item">
                                                <Link className="nav-link" href="/sale">
                                                    SALE
                                                </Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link className="nav-link" href="/blogs">
                                                    Blog
                                                </Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link className="nav-link" href="/about-us">
                                                    About us
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </nav>
                            <div className="header-right">
                                <ul className="d-flex align-items-center">
                                    <li>
                                        <Link href="/">
                                            <Image
                                                src={`${Constant.BASE_IMAGE_URL}/search.svg`}
                                                alt="Search"
                                                width="18"
                                                height="18"
                                            />
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/wishlist">
                                            <Image
                                                src={`${Constant.BASE_IMAGE_URL}/whishlist.svg`}
                                                alt="Whishlist"
                                                width="22"
                                                height="19"
                                            />
                                            <span>
                                            {wishlistCount}
                                            </span>
                                        </Link>
                                    </li>
                                    <li>
                                        {logoutData && logoutData !== null ? <div className="dropdown d-flex align-items-center">
                                            <div id="dropdownMenuButton1" className="after-login-btn" data-bs-toggle="dropdown" aria-expanded="false" style={{ cursor: "pointer" }}>
                                                {name}
                                            </div>
                                            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                                <li><Link className="dropdown-item" href="/my-profile">My Profile</Link></li>
                                                <li><Link className="dropdown-item" href="#" onClick={handleLogout}>Logout</Link></li>
                                            </ul>
                                        </div> : <Link href="/login">
                                            <Image
                                                src={`${Constant.BASE_IMAGE_URL}/user.svg`}
                                                alt="Account"
                                                width="18"
                                                height="21"
                                            />

                                        </Link>}

                                    </li>
                                    <li>
                                        <Link href="/cart">
                                            <Image
                                                src={`${Constant.BASE_IMAGE_URL}/cart.svg`}
                                                alt="Cart"
                                                width="24"
                                                height="21"
                                            />
                                            {/* {session?.user?.result?.slug && cart !== 0 ? <span className="badges">{cart}</span> : ""} */}
                                            <span>
                                            {cartCount}

                                            </span>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
};

export default Header;

export async function getServerSideProps(context) {
    const { query } = context;
    const data = {}
    let pageData = await new Apilist().getProductCategory(data);

    if (!query.creds) {
        return {
            redirect: {
                destination: "/",
                permanent: false,
                pageData: pageData,
            },
        };
    }

    return {
        props: {
            creds: query.creds || null,
            pageData: pageData,
        },
    };
}