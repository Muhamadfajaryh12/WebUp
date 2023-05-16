import React,{useState} from "react";
import { NavLink } from "react-router-dom";
import {FaCodepen} from 'react-icons/fa'
import {GiHamburgerMenu} from 'react-icons/gi'
import {AiOutlineClose} from 'react-icons/ai'
const Navbar = () =>{
    const [navOpen,setNavOpen] = useState(false)
    const activeLink = "font-bold"
    const normalLink = ""
    const icon = navOpen ? <AiOutlineClose size={25}/> : <GiHamburgerMenu size={25}/> 
    return(
        <>
        <ul className="md:flex justify-between items-center h-11 bg-transparent z-1 md:p-10">
            <div className="flex justify-between items-center relative z-20 bg-transparent">
                <div className="title-navbar mx-2 flex items-center p-1">
                    <FaCodepen size={30} className="mx-2"/>
                    <li className="text-3xl font-bold ">WebUp</li>
                </div>
                <button onClick={()=>setNavOpen(!navOpen)} className="md:hidden mx-2">{icon}</button>
            </div>
            <div className={`item-navbar md:flex md:justify-center relative z-10 md:static bg-indigo-400 md:bg-transparent ${navOpen? 'top-0' :' top-[-550px]'} transition-[top] duration-800 ease-in` } >
            <li className="text-center text-white  md:text-black p-2 md:p-0 mx-2 text-xl  hover:border-b-4 border-indigo-400 "><NavLink className={({isActive})=> (isActive ? activeLink : normalLink)} to="/">Home</NavLink></li>
            <li className="text-center text-white  md:text-black p-2 md:p-0 mx-2 text-xl  hover:border-b-4 border-indigo-400"><NavLink className={({isActive})=>  (isActive ? activeLink : normalLink)} to="/product">Product</NavLink ></li>
            <li className="text-center text-white  md:text-black p-2 md:p-0 mx-2 text-xl  hover:border-b-4 border-indigo-400"><NavLink className={({isActive})=>  (isActive ? activeLink : normalLink)} to="/career">Career</NavLink ></li>
            <li className="text-center text-white  md:text-black p-2 md:p-0 mx-2 text-xl  hover:border-b-4 border-indigo-400"><NavLink className={({isActive})=>  (isActive ? activeLink : normalLink)} to="/about">About</NavLink ></li>
            </div>
        </ul>
        </>
    )
}

export default Navbar