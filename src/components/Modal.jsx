import { Link } from "react-router-dom";
import React from "react";
import {AiOutlineClose} from 'react-icons/ai'
const Modal = ({open,onClose,id,title,requirement,start,end,division,experience,qualification,IPK}) =>{
   const req= []
   requirement.forEach((item)=>{
   req.push (<li className=" text-sm sm:text-lg md:text-xl m-1 list-decimal" key={item}>{item}</li>)
})
    if (!open) return null;
    return(
        <>
        <div className="overlay z-30 w-screen">
            <div  className="modal fixed w-9/12 border-2-black border-solid bg-white rounded-md overflow-auto overflow-scroll" style={{height:"700px"}}>
                <button onClick={onClose} className="m-2"><AiOutlineClose size={20}/></button>
                <div className="p-5 m-2">
                <h1 className="text-center font-extrabold text-indigo-500  text-2xl md:text-5xl">{title}</h1>
                <h1 className="font-bold text-indigo-400 text-2xl mt-5">Requirements</h1>
                <ol>
                {req}
                </ol>
                <h1 className="font-bold text-indigo-400 text-2xl mt-5">Details</h1>
                <div className="flex justify-around flex-wrap">
                    <div>
                        <p className="font-semibold text-sm sm:text-lg md:text-xl mt-3">Start Date</p>
                        <p className="text-slate-400 font-semibold">{start}</p>
                        <p className="font-semibold text-sm sm:text-lg md:text-xl mt-3">Work Experience</p>
                        <p className="text-slate-400 font-semibold">{experience}</p>
                    </div>
                    <div>
                        <p className="font-semibold text-sm sm:text-lg md:text-xl mt-3">End Date</p>
                        <p className="text-slate-400 font-semibold">{end}</p>
                        <p className="font-semibold text-sm sm:text-lg md:text-xl mt-3">Qualification</p>
                        <p className="text-slate-400 font-semibold">{qualification}</p>
                    </div>
                    <div>
                        <p className="font-semibold text-sm sm:text-lg md:text-xlmt-3">Division</p>
                        <p className="text-slate-400 font-semibold">{division}</p>
                        <p className="font-semibold text-sm sm:text-lg md:text-xl mt-3">IPK</p>
                        <p className="text-slate-400 font-semibold">{IPK}</p>
                    </div>
                </div>
                <h1 className="font-bold text-indigo-400 text-2xl mt-5">Recruitment Stage</h1>
                <p className="text-lg text-sm sm:text-lg md:text-xl">Administration Selection, Online Test, Interview, Health Test</p>
                <div className="flex justify-center">
                 <button className="bg-indigo-400 w-32 h-12 rounded-2xl mt-5 text-white font-semibold hover:bg-indigo-500"><Link to={`/form/${id}`} title={title}>APPLY</Link></button>
                </div>
            </div>
                </div>
        </div>
        </>
    )
}
export default Modal