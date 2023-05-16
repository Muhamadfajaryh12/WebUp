import React from "react";
import {AiOutlineSearch} from 'react-icons/ai'
const SearchBar = ({searchValue,keywordChange}) =>{
    return(
        <>
        <label className="relative block mx-auto " style={{maxWidth:"800px"}}>
            <span className="absolute inset-y-0 left-0 flex items-center pl-2"><AiOutlineSearch size={25} className="text-indigo-400"/></span>
            <input className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-3xl py-2 pl-9 pr-3 h-12 shadow-sm focus:outline-none focus:border-indigo-500 focus:ring-sky-500 focus:ring-1 sm:text-sm" 
            placeholder="Search for job..."
             type="text" 
             name="search"
             value={searchValue}
             onChange={(e)=>keywordChange(e.target.value)}
             />
        </label>
        </>
    )
}

export default SearchBar