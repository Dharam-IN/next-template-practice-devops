import Constant from "../../config/constant";
import Helper from "../../services/helper";
import Link from "next/link";
import React from "react";

const index = ({ title }) => {
    const segments = title?.split("/").filter(Boolean);
    return (
        <>
            <div className="container-fluid my-3 py-2">
                <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item Default-Crumb">
                            <Link href={Constant?.WEBSITE_URL} className="text-dark"><small>Home</small></Link>
                        </li>
                        <li className="breadcrumb-item">
                            <small className="text-secondary">{Helper?.Capetalizationword(segments)}</small>
                        </li>
                    </ol>
                </nav>
            </div>
        </>
    );
};

export default index;
