import React from "react";

const CardHome = ({title,description,sclr,img,background}) =>{
    return(
        <>
        <div className="w-80 h-96  bg-indigo-500 border-2 border-solid border-slate-200 rounded-2xl mt-16 drop-shadow-xl">
            <div className="w-80  relative  -left-10 mt-10 rounded-full bg-yellow-400">
             <h1 className="text-white font-bold mx-5 p-2">{title}</h1>
            </div>
            <div className="relative  -top-10 w-24 rounded-md left-10" style={{background:background, boxShadow:"5px 8px 10px" + sclr}}>
                <img src={img} alt="" className="p-2" />
            </div>
            <div className="p-2 m-2">
            <p className="mt-10 text-xl">{description}</p>
            </div>
        </div>
        </>
    )
}

export default CardHome