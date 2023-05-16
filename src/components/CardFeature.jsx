import React from "react";

const CardFeature = ({title,description,icon}) =>{
    return(
        <>
        <div className="w-80 h-48  p-4 m-2">
            <span className="text-indigo-400">{icon}</span>
            <h1 className="font-semibold mt-4 text-xl">{title}</h1>
            <p className="text-sm mt-3">{description}</p>
        </div>
        </>
    )
}

export default CardFeature