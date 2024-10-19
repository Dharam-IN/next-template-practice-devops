import React from 'react'
import { SectionTitle } from '../SectionTitle/SectionTitle'
import Link from 'next/link'
import { PiArrowUpRightLight } from "react-icons/pi";

const TopOffersSection = () => {
    return (
        <>
            <section className='OfferSection'>
                <div className="container-fluid">
                    <div className="row">
                        <SectionTitle title="top offers" />
                    </div>
                    <div className="row">
                        <div className="col-lg-6 col-12">
                            <Link href="#" className='TopOfferCol'>
                                <div className="TopoffercolCon">
                                    <h4>Limited</h4>
                                    <span>Discover more <PiArrowUpRightLight /></span>
                                </div>
                            </Link>
                        </div>
                        <div className="col-lg-6 col-12">
                            <Link href="#" className='TopOfferCol'>
                                <div className="TopoffercolCon">
                                    <h4>Limited</h4>
                                    <span>Discover more <PiArrowUpRightLight /></span>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default TopOffersSection