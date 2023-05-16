import React from "react";
import Karir from "./Karir";
const ListKarir = ({data}) =>{
    console.log(data)
    return (
        <>
        {
            data.length ?
            data.map((datas)=>(
                console.log(datas),
                <Karir 
                key={datas.id}
                id={datas.id}
                {...datas}/>
            ))
            :
            <h1 className="font-bold text-2xl text-center m-5 text-indigo-400">Oops, not found...</h1>
        }
        </>
    )
}

export default ListKarir