import React from "react";
import {AiFillCheckCircle} from "react-icons/ai"
const CardProduct = ({title,description,price,background,detail1,detail2,detail3,detail4,detail5}) =>{
    console.log(background)
    return(
        <>
        <div className="w-64 md:w-80 bg-white border-2 border-solid border-slate-200 rounded-2xl mt-16 drop-shadow-xl overflow-hidden p-1 m-2 mx-7" style={{height:"500px"}}>
            <div className="relative drop-shadow-xl  w-24 rounded-md  bg-indigo-400 w-48 h-12  -top-10 -left-28 origin-top-right -rotate-45  flex items-center justify-center text-white font-semibold">Product</div> 
            <div className="p-2 m-2">
            <h1 className="text-2xl font-bold text-right">{title}</h1>
            <div className="mt-5 ">
            <h3 className="font-semibold">Price</h3>
            <span className="text-3xl text-indigo-400 font-bold">{price}</span>
            </div>
            <h3 className="text-xs mt-5 text-justify">{description}</h3>
            <div className="mt-10">
                <p className="flex items-center text-sm"><AiFillCheckCircle className="text-green-400 m-1" size={20}/>{detail1}</p>
                <p className="flex items-center text-sm"><AiFillCheckCircle className="text-green-400 m-1" size={20}/>{detail2}</p>
                <p className="flex items-center text-sm"><AiFillCheckCircle className="text-green-400 m-1" size={20}/>{detail3}</p>
                <p className="flex items-center text-sm"><AiFillCheckCircle className="text-green-400 m-1" size={20}/>{detail4}</p>
                <p className="flex items-center text-sm"><AiFillCheckCircle className="text-green-400 m-1" size={20}/>{detail5}</p>
            </div>
            </div>
        </div>
        </>
    )
}

export default CardProduct