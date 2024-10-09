//  AddBootstrap.js
"use client";
// import '../../public/javascript/script'

import { useEffect } from "react";

export default function AddBootstrap()
{
    useEffect(()=>{
        import( "bootstrap/dist/js/bootstrap.bundle.js")
    },[])
    return <></>
}
