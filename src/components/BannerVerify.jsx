import React from "react";
import bgver from "../image/BgBanner.jpg"
import logoGoogle from "../image/googlelogo.png";
import logoAWS from "../image/awslogo.png";
import logoMC from "../image/microsoftlogo.png";
import logoKominfo from "../image/kominfologo.png";

const BannerVerify = () =>{
    return(
        <>
         <div className=" p-2 bg-indigo-400 bg-cover bg-center mx-auto rounded-lg my-20" style={{ backgroundImage: `linear-gradient(to left, rgba(255, 255, 255, 0), rgba(245, 245, 245, 0.9),rgba(245, 245, 245, 1)), url(${bgver})`, maxWidth:"1200px"}}>
           <div className="p-12">
           <h1 className="font-bold text-3xl">WebUp has been verified</h1>
           <p className="text-sm">we have been trusted and have been verified by</p>
           <div className="flex flex-wrap mx-12 mt-2" style={{maxWidth:"500px"}}>
            <div className="w-40 border-2 border-solid border-slate-200 p-3 m-2 bg-white flex justify-center items-center ">
                <img src={logoGoogle} className="w-12 h-6" alt="google"/>
            </div>
            <div className="w-40 border-2 border-solid border-slate-200 p-3 m-2 bg-white flex justify-center items-center">
                <img src={logoMC} className="w-16 h-8" alt="microsoft"/>
            </div>
            <div className="w-40 border-2 border-solid border-slate-200 p-3 m-2 bg-white flex justify-center items-center">
                <img src={logoAWS} className="w-12 h-6" alt="aws"/>
            </div>
            <div className="w-40 border-2 border-solid border-slate-200 p-3 m-2 bg-white flex justify-center items-center">
                <img src={logoKominfo} className="w-8 h-8" alt="kominfo"/>
            </div>
           </div>

            </div>
        </div>
        </>
    )
}

export default BannerVerify