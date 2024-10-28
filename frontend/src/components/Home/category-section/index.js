import { SectionTitle } from '../../../components/SectionTitle/SectionTitle';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export default function CategorySection() {
    const categoryImages = [
        {
            src: "https://assets.angara.com/assets/homepage-Assets/us/top-categories/rings.jpg?width=256&quality=95",
            alt: 'Jewellery',
            link: '/jewellery',
        },
        {
            src: "https://assets.angara.com/assets/homepage-Assets/us/top-categories/necklaces.jpg?width=256&quality=95",
            alt: 'Necklaces',
            link: '/necklaces',
        },
        {
            src: "https://assets.angara.com/assets/homepage-Assets/us/top-categories/earrings.jpg?width=256&quality=95",
            alt: 'Earrings',
            link: '/earrings',
        },
        {
            src: "https://assets.angara.com/assets/homepage-Assets/us/top-categories/bracelets.jpg?width=256&quality=95",
            alt: 'Bracelets',
            link: '/bracelets',
        },
        {
            src: "https://assets.angara.com/assets/homepage-Assets/us/top-categories/lab-grown-jewelry.jpg?width=256&quality=95",
            alt: 'Lab Grown Jewelry',
            link: '/lab-grown-jewelry',
        },
        {
            src: "https://assets.angara.com/assets/homepage-Assets/us/top-categories/certified-jewelry.jpg?width=256&quality=95",
            alt: 'Certified Jewelry',
            link: '/certified-jewelry',
        },
    ];

    return (
        <>
            <section className="HomeCategory">
                <div className="container">
                    <div className="row">
                        <SectionTitle title={"Shop By Category"}>
                            Browse through your favorite categories. We&apos;ve got them all!
                        </SectionTitle>
                    </div>
                    <div className="row">
                        {categoryImages.map((image, index) => (
                            <div className="col-md-2" key={index}>
                                <div className="CategoryMainDiv">
                                    <Link href={image.link}>
                                        <Image 
                                            src={image.src} 
                                            width={200} 
                                            height={200} 
                                            alt={image.alt} 
                                            style={{ cursor: 'pointer' }}
                                        />
                                        <div className="CategoryHoverText">
                                            <h3>
                                                {image.alt}
                                            </h3>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}
