import React from "react";

const Card = ({title,description,sclr,img,background}) =>{
    console.log(background)
    return(
        <>
        <div className="w-80 h-96 bg-white border-2 border-solid border-slate-200 rounded-2xl mt-16 drop-shadow-xl">
            <div className="relative  -top-10 w-24 rounded-md left-10" style={{background:background, boxShadow:"5px 8px 10px" + sclr}}>
                <img src={img} alt="" className="p-2" />
            </div>
            <div className="p-2 m-2">
            <h1 className="text-3xl font-bold">{title}</h1>
            <p className="mt-10 text-xl">{description}</p>
            </div>
        </div>
        </>
    )
}

export default Card