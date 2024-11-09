import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const JewelryProductCard = () => {
    return (
        <>
            <li>
                <div className="jewelryProductCard">
                    <span className="product-ribbon">New Arrival</span>

                    <div className="product-image">
                        <Link href="/product-details/necklace-123">
                            <Image
                                width={300}
                                height={300}
                                src="/images/jewelry/necklace.jpg"
                                alt="Gold Necklace"
                                className="product-image"
                            />
                        </Link>
                    </div>

                    <div className="product-info">
                        <div className="product-name">
                            <span>Elegant Gold Necklace</span>
                            <span className="ratingNumber">
                                <Image
                                    width={16}
                                    height={16}
                                    src="/images/star-icon.svg"
                                    alt="Rating"
                                />
                                4.8
                            </span>
                        </div>
                        <div className="product-details">
                            <span>Material: 18k Gold</span>
                            <span>Style: Classic</span>
                            <span>Color: Gold</span>
                        </div>
                        <div className="product-location">
                            <i className="fas fa-map-marker-alt"></i> Ships from New York, USA
                        </div>
                    </div>

                    <div className="product-pricing">
                        <div className="price-info">
                            <span className="product-price">
                                Starting From <br />
                                <strong>$249.99</strong>
                            </span>
                        </div>
                        <div className="delivery-time">
                            <span>Estimated Delivery: 3-5 Days</span>
                        </div>
                    </div>
                </div>
            </li>
        </>
    )
}

export default JewelryProductCard