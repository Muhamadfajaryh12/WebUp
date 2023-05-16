import React from "react";
import {AiFillStar} from "react-icons/ai"
const ReviewCard = ({image,username}) =>{
    return(
        <>
        <div className=" w-64 md:w-96 md:h-48 bg-white drop-shadow-xl p-2 rounded-md m-2">
            <div className="p-1 flex items-center">
            <img src={image} alt="photo-profile" className="rounded-full w-10"/>
                <div>
                <h1 className="mx-1 font-semibold">{username}</h1>
                    <div className="flex">
                        <AiFillStar className="text-yellow-400"/>
                        <AiFillStar className="text-yellow-400"/>
                        <AiFillStar className="text-yellow-400"/>
                        <AiFillStar className="text-yellow-400"/>
                        <AiFillStar className="text-yellow-400"/>
                    </div>
                    
                </div>
            </div>
            <p className="text-s mt-5 ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            </p>
        </div>
        </>
    )
}

export default ReviewCard