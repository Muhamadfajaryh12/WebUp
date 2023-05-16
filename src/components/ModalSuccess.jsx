import React from "react";
import {AiOutlineCheckCircle} from 'react-icons/ai'
const ModalSuccess = ({open,onClose}) =>{
    if(!open) return null 
    return(
        <>
        <div className="w-96 fixed modal bg-white text-center p-5 border-2 border-solid border-slate-200 drop-shadow-lg">
            <AiOutlineCheckCircle size={40} className="bg-green-200 rounded-full mx-auto"/>
            <h1 className="font-semibold">Submit success</h1>
            <p className="text-sm">please wait for the information in your email</p>
            <button 
            className="p-2 bg-green-400 text-white rounded-xl w-32 mt-2"
            onClick={onClose}
            >Close</button>
        </div>
        </>
    )
}

export default ModalSuccess