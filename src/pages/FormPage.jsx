import React,{useState,useEffect} from "react";
import ModalSuccess from "../components/ModalSuccess";
import { useParams } from "react-router-dom";
import DATA from "../data/karir.JSON";
const FormPage = () =>{
        const {id} = useParams()
        const [title,setTitle] = useState([])
        const [openModal,setOpenModal] = useState(false)
        const SubmitForm = (event) =>{
            event.preventDefault();
            setOpenModal(true)
        }
        useEffect(()=>{
            fetch(DATA).then((response)=>{
                return response.json()
            }).then((responseJson)=>{
                const filterData = responseJson.data.filter(datas=> datas.id == id)
         
               setTitle(...filterData)
            })
        },[id])
    return(
        <>
            <h1 className="text-3xl text-center font-bold my-10 p-2">Position - {title.title}</h1>
            <div className="bg-gray-200 mx-auto  w-full flex justify-center p-2" >
                <form  onSubmit={(e)=> SubmitForm(e)}className="flex flex-col w-3/4"  style={{maxWidth:"1200px"}}>
                    <h1 className="text-xl font-semibold my-5">Submit your application</h1>
                    <div className="flex flex-wrap items-center justify-between" >
                        <label>Resume/CV</label>
                        <input type="file" 
                      className="w-3/4 text-sm text-grey-500
                      file:mr-5 file:py-2 file:px-6
                      file:rounded-full file:border-0
                      file:text-sm file:font-medium
                      file:bg-blue-50 file:text-blue-700
                      hover:file:cursor-pointer hover:file:bg-amber-50
                      hover:file:text-amber-700
                    " 
                        accept=".pdf,.docx" required
                        />
                    </div>
                    <div className="flex flex-wrap items-center justify-between" >
                        <label>Name</label>
                        <input type="text" className="m-2 w-3/4 h-8" required id="test"/>
                    </div>
                    <div className="flex flex-wrap items-center justify-between">
                        <label>Email</label>
                        <input type="email" className="m-2 w-3/4 h-8" required/>
                    </div>
                    <div className="flex flex-wrap items-center justify-between">
                        <label>Phone</label>
                        <input type="text" className="m-2 w-3/4 h-8" required/>
                    </div>
                    <h1 className="text-xl font-semibold my-5">Links</h1>
                    <div className="flex flex-wrap items-center justify-between">
                        <label>Linkedln URL</label>
                        <input type="text" className="m-2 w-3/4 h-8"/>
                    </div>
                    <div className="flex flex-wrap items-center justify-between">
                        <label>Github URL</label>
                        <input type="text" className="m-2 w-3/4 h-8"/>
                    </div>
                    <div className="flex flex-wrap items-center justify-between">
                        <label>Portofolio URL</label>
                        <input type="text" className="m-2 w-3/4 h-8"/>
                    </div>
                    <h1 className="text-xl font-semibold my-5">Additional Information</h1>
                    <div className="flex flex-wrap items-center">
                        <textarea className="m-2 w-full h-32"/>
                    </div>
                    <button 
                    className="mx-auto my-5 p-2 bg-green-500 text-white font-semibold text-xl w-64"
                    >Submit Application</button>
                </form>
            </div>
            <ModalSuccess
             open = {openModal}
             onClose = {()=> setOpenModal(false)}/>
        </>
    )
}
export default FormPage