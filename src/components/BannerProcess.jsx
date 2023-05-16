import React from "react";

const BannerProcess = ({
    title,title2,title3,titleBanner,
    description,description2,description3,
    number,number2,number3}) =>{
    return(
        <>
        <div className="p-2 md:p-0 " style={{width:"800px"}}>
         <h1 className="text-left md:text-center font-bold text-3xl my-2 text-indigo-400 w-64 md:mx-auto md:w-96">{titleBanner}</h1>
        <div className="flex-cols justify-center md:flex md:justify-around flex-wrap">
           <div className="card w-64 ">
                            <div className="text-8xl font-extrabold relative -z-2 opacity-50 text-indigo-500">{number}</div>
                                <div className="relative -top-10">
                                    <h1 className="text-xl font-bold">{title}</h1>
                                    <p>{description}</p>
                                </div>
            </div>
            <div className="card w-64 ">
                            <div className="text-8xl font-extrabold relative -z-2 opacity-50 text-indigo-500">{number2}</div>
                                <div className="relative -top-10">
                                <h1 className="text-xl font-bold">{title2}</h1>
                                    <p>{description2}</p>
                                </div>
            </div>
            <div className="card w-64 ">
                            <div className="text-8xl font-extrabold relative -z-2 opacity-50 text-indigo-500">{number3}</div>
                                <div className="relative -top-10">
                                <h1 className="text-xl font-bold">{title3}</h1>
                                    <p>{description3}</p>
                                </div>
            </div>

        </div>

        </div>
        </>
    )
}
export default BannerProcess