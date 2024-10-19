import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaHeart } from "react-icons/fa6";
import { CiHeart } from "react-icons/ci";

const ProductCol = ({ product }) => {
    return (
        <>
            <div className="product-card">
                <div className="badge">Hot</div>
                <Link href={`/product/${product.id}`} className="product-tumb">
                    <Image
                        src={product.product_image}
                        alt={product.title}
                        width={350}
                        height={350}
                    />
                </Link>
                <div className="product-links">
                    <button type="button">
                        {/* <FaHeart /> */}
                        <CiHeart />

                    </button>
                </div>
                <div className="product-details">
                    <span className="product-catagory">{product.category}</span>
                    <h4>
                        <Link href={`/product/${product.id}`}>{product.title}</Link>
                    </h4>
                    <p>{product.description}</p>
                    <div className="product-bottom-details">
                        <div className="product-price">
                            <small>${product.old_price.toFixed(2)}</small>
                            ${product.new_price.toFixed(2)}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ProductCol;
