import React from "react";
import {AiFillInstagram} from 'react-icons/ai'
import {FaFacebookF,FaTwitter,FaCodepen} from 'react-icons/fa'
import {MdLocationOn} from 'react-icons/md'
import { Link } from "react-router-dom";
const Footer = () =>{
    return(
        <>
        <div className="w-full h-full bg-indigo-600 p-6">
           <div className="p-1 mx-auto max-w-4xl">
                <div className="flex items-center">
                    <FaCodepen size={30} className="text-white m-1" />
                    <h1 className="text-white font-bold text-3xl">WebUp</h1>
                </div>
                <div className="flex flex-wrap justify-between">
                    <ul>
                        <li className="text-white font-bold m-2">Company</li>
                        <li className="text-white m-2"><Link to="/about">About</Link></li>
                        <li className="text-white m-2"><Link to="/product">Product</Link></li>
                    </ul>
                    <ul>
                        <li className="font-bold text-white m-2">Career</li>
                        <li className="text-white m-2"><Link to="/career">Professional</Link></li>
                    </ul>
                    <ul>
                        <li className="font-bold text-white m-2">Contact us</li>
                        <div className="flex ">
                            <li><AiFillInstagram size={30} className="text-white m-2"/></li>
                            <li><FaFacebookF size={28} className="text-white m-2"/></li>
                            <li><FaTwitter size={30} className="text-white m-2"/></li>
                        </div>
                    </ul>
                </div>
           </div>
                <div className="border-t-2 border-solid border-white">
                    <h1 className="text-white text-sm mt-1">@2023 | WebUp is a brand owned by PT Legacy Tbk. Registered at the Directorate General of Intellectual Property of the Republic of Indonesia.</h1>
                    <div className="flex items-center">
                        <MdLocationOn className="text-white"/>
                        <p className="text-white">Indonesia</p>
                    </div>
                </div>
        </div>
        </>
    )
}
export default Footer