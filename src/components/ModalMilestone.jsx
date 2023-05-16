import React,{useEffect}from "react";
import { AiOutlineClose } from "react-icons/ai";
import AOS from "aos";
import "aos/dist/aos.css";
const ModalMilestone = ({open,onClose}) =>{
    useEffect(() => {
        AOS.init({
            duration : 1000
        });
        AOS.refresh()
       }, []);
    if(!open) return null
    return(
        <>
        <div className="modal bg-white w-full p-5 border-2 border-solid border-gray-400 overflow-scroll" style={{height:"800px",borderTopLeftRadius:"80px",borderTopRightRadius:"80px"}}>
            <AiOutlineClose onClick={onClose} className="mt-10 font-extrabold text-indigo-600" size={30}/>
            <h1 className="text-6xl text-indigo-500 text-center font-bold my-10" data-aos="fade-up">MILESTONE</h1>
            <div className="flex flex-col md:grid grid-cols-9 mx-auto p-2 text-blue-50">
                <div class="flex flex-row-reverse md:contents">
                    <div class=" col-start-1 col-end-5 p-4 rounded-xl my-4 ml-auto text-indigo-300 font-bold" >
                        <h1 className="font-bold text-6xl">2020</h1>
                    </div>
                    <div class="col-start-5 col-end-6 md:mx-auto relative mr-10">
                        <div class="h-full w-6 flex items-center justify-center">
                            <div class="h-full w-1 bg-indigo-300 pointer-events-none"></div>
                        </div>
                    </div>
                </div>
                <div class="flex flex-row-reverse md:contents">
                    <div class="bg-indigo-300 col-start-1 col-end-5 p-4 rounded-xl my-4 ml-auto shadow-md">
                        <h3 class="font-semibold text-lg mb-1">Get Google, Microsoft, Amazon and Kominfo verification</h3>
                        <p class="leading-tight text-justify italic">30 January - 30 August 2020</p>
                    </div>
                    <div class="col-start-5 col-end-6 md:mx-auto relative mr-10">
                        <div class="h-full w-6 flex items-center justify-center">
                            <div class="h-full w-1 bg-indigo-300 pointer-events-none"></div>
                        </div>
                        <div class="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-indigo-300 shadow"></div>
                    </div>
                </div>
                <div class="flex flex-row-reverse md:contents">
                    <div
                        class="bg-indigo-300 col-start-1 col-end-5 p-4 rounded-xl my-4 ml-auto shadow-md"
                    >
                        <h3 class="font-semibold text-lg mb-1">Reached 500 clients</h3>
                        <p class="leading-tight text-justify italic">1 January - 31 December 2020</p>
                    </div>
                    <div class="col-start-5 col-end-6 md:mx-auto relative mr-10">
                        <div class="h-full w-6 flex items-center justify-center">
                        <div class="h-full w-1 bg-indigo-300 pointer-events-none"></div>
                        </div>
                        <div class="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-indigo-300 shadow"></div>
                    </div>
                </div>
                <div class="flex md:contents">
                    <div class="col-start-5 col-end-6 mr-10 md:mx-auto relative">
                        <div class="h-full w-6 flex items-center justify-center">
                        <div class="h-full w-1 bg-indigo-400 pointer-events-none"></div>
                        </div>
                    
                    </div>
                    <div class=" col-start-6 col-end-10 p-4 rounded-xl my-4 mr-auto text-indigo-400">
                        <h1 className="font-bold text-6xl">2021</h1>
                    </div>
                </div>
                <div class="flex md:contents">
                    <div class="col-start-5 col-end-6 mr-10 md:mx-auto relative">
                        <div class="h-full w-6 flex items-center justify-center">
                        <div class="h-full w-1 bg-indigo-400 pointer-events-none"></div>
                        </div>
                        <div
                        class="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-indigo-400 shadow"
                        ></div>
                    </div>
                    <div
                        class="bg-indigo-400 col-start-6 col-end-10 p-4 rounded-xl my-4 mr-auto shadow-md"
                    >
                        <h3 class="font-semibold text-lg mb-1">Updating the appearance of the website</h3>
                        <p class="leading-tight text-justify italic">1 January - 31 January 2021</p>
                    </div>
                </div>
                <div class="flex md:contents">
                    <div class="col-start-5 col-end-6 mr-10 md:mx-auto relative">
                        <div class="h-full w-6 flex items-center justify-center">
                        <div class="h-full w-1 bg-indigo-400 pointer-events-none"></div>
                        </div>
                        <div
                        class="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-indigo-400 shadow"
                        ></div>
                    </div>
                    <div
                        class="bg-indigo-400 col-start-6 col-end-10 p-4 rounded-xl my-4 mr-auto shadow-md"
                    >
                        <h3 class="font-semibold text-lg mb-1">Reach 2500 clients</h3>
                        <p class="leading-tight text-justify italic">1 January - 31 December 2021</p>
                    </div>
                </div>
                <div class="flex md:contents">
                    <div class="col-start-5 col-end-6 mr-10 md:mx-auto relative">
                        <div class="h-full w-6 flex items-center justify-center">
                        <div class="h-full w-1 bg-indigo-400 pointer-events-none"></div>
                        </div>
                        <div
                        class="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-indigo-400 shadow"
                        ></div>
                    </div>
                    <div
                        class="bg-indigo-400 col-start-6 col-end-10 p-4 rounded-xl my-4 mr-auto shadow-md"
                    >
                        <h3 class="font-semibold text-lg mb-1">Expansion abroad, to ASEAN countries</h3>
                        <p class="leading-tight text-justify italic">
                        1 January - 31 December 2021
                        </p>
                    </div>
                </div>
                <div class="flex flex-row-reverse md:contents">
                    <div class=" col-start-1 col-end-5 p-4 rounded-xl my-4 ml-auto text-indigo-500 font-bold">
                        <h1 className="font-bold text-6xl">2022</h1>
                    </div>
                    <div class="col-start-5 col-end-6 md:mx-auto relative mr-10">
                        <div class="h-full w-6 flex items-center justify-center">
                            <div class="h-full w-1 bg-indigo-500 pointer-events-none"></div>
                        </div>
                    </div>
                </div>
                <div class="flex flex-row-reverse md:contents">
                    <div
                        class="bg-indigo-500 col-start-1 col-end-5 p-4 rounded-xl my-4 ml-auto shadow-md"
                    >
                        <h3 class="font-semibold text-lg mb-1"> Reach 7000 clients</h3>
                        <p class="leading-tight text-justify italic">
                        1 January - 31 December 2022
                        </p>
                    </div>
                    <div class="col-start-5 col-end-6 md:mx-auto relative mr-10">
                        <div class="h-full w-6 flex items-center justify-center">
                        <div class="h-full w-1 bg-indigo-500 pointer-events-none"></div>
                        </div>
                        <div class="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-indigo-500 shadow"></div>
                    </div>
                </div>
                <div class="flex flex-row-reverse md:contents">
                    <div
                        class="bg-indigo-500 col-start-1 col-end-5 p-4 rounded-xl my-4 ml-auto shadow-md"
                    >
                        <h3 class="font-semibold text-lg mb-1"> The company reached the ponies level</h3>
                        <p class="leading-tight text-justify italic">
                        10 June 2022
                        </p>
                    </div>
                    <div class="col-start-5 col-end-6 md:mx-auto relative mr-10">
                        <div class="h-full w-6 flex items-center justify-center">
                        <div class="h-full w-1 bg-indigo-500 pointer-events-none"></div>
                        </div>
                        <div class="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-indigo-500 shadow"></div>
                    </div>
                </div>
                <div class="flex flex-row-reverse md:contents">
                    <div
                        class="bg-indigo-500 col-start-1 col-end-5 p-4 rounded-xl my-4 ml-auto shadow-md"
                    >
                        <h3 class="font-semibold text-lg mb-1"> Building a website consultation service</h3>
                        <p class="leading-tight text-justify italic">
                         16 October 2022
                        </p>
                    </div>
                    <div class="col-start-5 col-end-6 md:mx-auto relative mr-10">
                        <div class="h-full w-6 flex items-center justify-center">
                        <div class="h-full w-1 bg-indigo-500 pointer-events-none"></div>
                        </div>
                        <div class="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-indigo-500 shadow"></div>
                    </div>
                </div>
                <div class="flex md:contents">
                    <div class="col-start-5 col-end-6 mr-10 md:mx-auto relative">
                        <div class="h-full w-6 flex items-center justify-center">
                        <div class="h-full w-1 bg-indigo-600 pointer-events-none"></div>
                        </div>
                    
                    </div>
                    <div class=" col-start-6 col-end-10 p-4 rounded-xl my-4 mr-auto text-indigo-600">
                        <h1 className="font-bold text-6xl">2023</h1>
                    </div>
                </div>
                <div class="flex md:contents">
                    <div class="col-start-5 col-end-6 mr-10 md:mx-auto relative">
                        <div class="h-full w-6 flex items-center justify-center">
                        <div class="h-full w-1 bg-indigo-600  pointer-events-none"></div>
                        </div>
                        <div
                        class="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-indigo-600 shadow"
                        ></div>
                    </div>
                    <div
                        class="bg-indigo-600 col-start-6 col-end-10 p-4 rounded-xl my-4 mr-auto shadow-md"
                    >
                        <h3 class="font-semibold text-lg mb-1">Building a website testing service</h3>
                        <p class="leading-tight text-justify italic">
                        20 Febuary 2023
                        </p>
                    </div>
                </div>
                <div class="flex md:contents">
                    <div class="col-start-5 col-end-6 mr-10 md:mx-auto relative">
                        <div class="h-full w-6 flex items-center justify-center">
                        <div class="h-full w-1 bg-indigo-600  pointer-events-none"></div>
                        </div>
                        <div
                        class="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-indigo-600  shadow"
                        ></div>
                    </div>
                    <div
                        class="bg-indigo-600 col-start-6 col-end-10 p-4 rounded-xl my-4 mr-auto shadow-md"
                    >
                        <h3 class="font-semibold text-lg mb-1">Reach 12000 clients</h3>
                        <p class="leading-tight text-justify italic">
                        1 January - 31 December 2023
                        </p>
                    </div>
                </div>
                <div class="flex md:contents">
                    <div class="col-start-5 col-end-6 mr-10 md:mx-auto relative">
                        <div class="h-full w-6 flex items-center justify-center">
                        <div class="h-full w-1 bg-indigo-600  pointer-events-none"></div>
                        </div>
                        <div
                        class="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-indigo-600  shadow"
                        ></div>
                    </div>
                    <div
                        class="bg-indigo-600 col-start-6 col-end-10 p-4 rounded-xl my-4 mr-auto shadow-md"
                    >
                        <h3 class="font-semibold text-lg mb-1">Moving towards web 3.0 (Blockchain and Meta)</h3>
                        <p class="leading-tight text-justify italic">
                        1 January - 31 December 2023
                        </p>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}
export default ModalMilestone