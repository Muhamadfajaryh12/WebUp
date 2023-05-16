import React,{useEffect,useState} from 'react'; 
import AOS from "aos";
import "aos/dist/aos.css";
import ModalMilestone from '../components/ModalMilestone';
import indonesia from '../image/indonesia.png'
import gedung from '../image/gedung.jpg'
import man from '../image/aboutman.jpg'
import {FaCodepen} from 'react-icons/fa'
const AboutPage = () =>{
    const[open,setOpenModal] = useState(false)
    useEffect(() => {
        AOS.init({
            duration : 1000
        });
        AOS.refresh()
       }, []);
    return(
    <>
    <div className='bg-gradient-to-r from-indigo-300 to-indigo-600 w-full flex justify-center items-center' style={{height:"600px"}}>
            <div className='text-white font-bold '>
            <div className='text-6xl flex items-center  flex-wrap border-b-4 p-4 justify-center w-64 md:w-96 border-solid border-white'>
                <FaCodepen size={70} className='mx-2'/>
                <h1 className='mx-2'>WebUp</h1>
            </div>
                <a href='#about' className=' flex'>
                <button  className='text-center mx-auto m-4 text-xl p-2 bg-indigo-600 w-36 hover:bg-indigo-700 drop-shadow-xl rounded-full scroll-smooth'>More</button>
                </a>
            </div>
    </div>
    <div className='mx-auto p-2' style={{maxWidth:"1200px"}}>
        <div id="about" className='flex justify-around flex-wrap items-center mt-40'>
            <img src={gedung} alt="" className='w-96 drop-shadow-xl'/>
            <div className='w-80' data-aos="fade-up">
            <h1 className='text-indigo-400 text-3xl font-bold text-center my-2'>About Us </h1>
            <p className='text-justify text-xl text-gray-600' > Established since 2020, <span className='font-semibold'>WebUp</span> always guarantees quality service and customer service support and provides affordable prices. We are committed to always meeting various customer needs, both professional and personal.</p>
            </div>
        </div>
        <div className='flex justify-around flex-wrap items-center my-20'>
            <div className='w-96'data-aos="fade-up">
                <h1 className='text-3xl font-bold text-indigo-400 my-3'>VISION</h1>
                <p className='text-xl text-gray-600'>Become a platform that helps improve digital transformation</p>
                <h1 className='text-3xl font-bold text-indigo-400 my-3'>MISSION</h1>
                <p className='text-xl text-gray-600'>Helping people to maximize their digital potential according to what they need</p>
            </div>
            <img src={man} alt='' className='w-96 drop-shadow-xl my-5'/>
        </div>
        <h1 className="text-4xl font-bold text-indigo-400 text-center">Milestone</h1>
        <div className="overflow-y-visible flex justify-center flex-column p-5" data-aos="fade-up">
        <div className="flex flex-col md:grid grid-cols-9 mx-auto p-2 text-blue-50">
                <div class="flex flex-row-reverse md:contents">
                    <div class=" col-start-1 col-end-5 p-4 rounded-xl my-4 ml-auto text-indigo-300 font-bold" >
                        <h1 className="font-bold text-6xl">2020</h1>
                    </div>
                    <div class="col-start-5 col-end-6 md:mx-auto relative mr-10">
                        <div class="h-full w-6 flex items-center justify-center">
                            <div class="h-full w-1 bg-blue-800 pointer-events-none"></div>
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
                            <div class="h-full w-1 bg-blue-800 pointer-events-none"></div>
                        </div>
                        <div class="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-blue-500 shadow"></div>
                    </div>
                </div>
            </div>
        </div>
        <div className='mx-auto text-center my-5'>
        <button
        className='w-32 mx-auto bg-indigo-400 hover:bg-indigo-500 p-2 rounded-2xl text-white font-semibold'
        onClick={() => setOpenModal(true)}
        >Read more</button>
            </div>
    </div>
        <div className='bg-gray-200 p-10' style={{borderTopLeftRadius:"100px",borderTopRightRadius:"100px"}}>
                <img src={indonesia} alt="" className='mx-auto'/>
                <div className='flex items-center justify-center p-3 mt-5'>
                <div className='w-5 h-5 bg-red-600 rounded-full'></div>
                <h1 className="mx-3 font-bold ">Position Company</h1>
                </div>
        </div>
    <ModalMilestone
    open={open}
    onClose={()=>setOpenModal(false)}
    />
    </>
    )
}

export default AboutPage