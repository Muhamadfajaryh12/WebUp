import React,{useState} from "react";
import Modal from "./Modal";
const Karir = ({id,title,requirement,start,end,division,experience,qualification,IPK}) =>{
    const [openModal,setOpenModal] = useState(false)
    return(
        <>
        <div className="w-full border-solid border-b-2 border-slate-300 m-1 flex justify-between items-center">
            <h1 className="p-3 text-2xl font-semibold m-2">{title}</h1>
            <div className="p-2">
            <button className="bg-indigo-600 text-white p-4 rounded-md text-md" onClick= {()=>setOpenModal(true)}>See more</button>
            <Modal 
            id={id}
            title={title}
            requirement={requirement}
            start={start}
            end={end}
            division={division}
            experience={experience}
            qualification={qualification}
            IPK={IPK}
            open={openModal} 
            onClose={ () => setOpenModal(false)}/>
            </div>
        </div>
        </>
    )
}
export default Karir