import React from "react";
const Banner = () =>{
    return(
        <>
        
        <div className="flex justify-center items-center" style={{height:"600px"}}>
            <div>
                <div className="text-center mt-10" style={{maxWidth:"750px"}}> 
                    <h1 className="text-2xl sm:text-4xl font-semibold"><span className="text-indigo-500 font-bold">WebUp </span>
                     a platform that provides services for building, consulting and testing websites</h1>
                    <p className="mt-5">
                    gives you the freedom to customize website creation the way you want with full features, consult your website problems to find the right solution and be able to test your website security
                    </p>
                 </div>
                <div className="flex justify-around items-center mt-10 flex-wrap">
                    <p className="bg-indigo-500 w-32 p-2     text-white font-semibold text-center rounded-full m-2">Fast service</p>
                    <p className="bg-indigo-500 w-40 p-2     text-white font-semibold text-center rounded-full m-2">Affordable prices</p>
                    <p className="bg-indigo-500 w-32 p-2     text-white font-semibold text-center rounded-full m-2">Professional</p>
                    <p className="bg-indigo-500 w-32 p-2     text-white font-semibold text-center rounded-full m-2">Verified</p>
                </div>
            </div>
        </div>
        </>
    )
}

export default Banner