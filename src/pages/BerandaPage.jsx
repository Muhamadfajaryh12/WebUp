import React,{useEffect} from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import ReviewCard from "../components/ReviewCard";
import bg from "../image/profile1.jpg"
import {MdChevronLeft,MdChevronRight} from "react-icons/md"
import BannerVerify from "../components/BannerVerify";
import CountUp from 'react-countup';
import reactLogo from '../image/react.png';
import laravelLogo from '../image/laravel.png';
import nodeLogo from '../image/node.png';
import webpackLogo from '../image/webpack.png';
import vueLogo from '../image/vue.png';
import angularLogo from '../image/angular.png';
import pythonLogo from '../image/python.png';
import wordLogo from '../image/wordpress.png';
import beegoLogo from '../image/beego.png';
import codeigLogo from '../image/codeigniter.png';
import computer from '../image/banner.png';
import Banner from "../components/Banner";
import porto1 from '../image/porto1.jpg';
import porto2 from '../image/porto2.jpg';
import porto3 from '../image/porto3.jpg';
import porto4 from '../image/porto4.jpg';
import porto5 from '../image/porto5.jpg';
import porto6 from '../image/porto6.jpg';
const BerandaPage = () =>{
    useEffect(() => {
        AOS.init({
            duration : 1000
        });
        AOS.refresh()
       }, []);
    const slideLeft = () =>{
        let slider = document.getElementById('slider')
        slider.scrollLeft = slider.scrollLeft - 300;
    }
    const slideRight = () =>{
        let slider = document.getElementById('slider')
        slider.scrollLeft = slider.scrollLeft + 300;
    }
    return(
        <>
        <svg className="absolute -top-40 sm:-top-28 xl:-top-12 -z-10 h-96 w-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path fill=" #818cf8" fill-opacity="0.5" d="M0,256L40,234.7C80,213,160,171,240,176C320,181,400,235,480,224C560,213,640,139,720,144C800,149,880,235,960,240C1040,245,1120,171,1200,128C1280,85,1360,75,1400,69.3L1440,64L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z"></path>
        </svg>
        <Banner/> 
        <div className="p-2 mx-auto" style={{maxWidth:"1200px"}}>
            <div className="mx-auto bg-gradient-to-r from-indigo-400 to-indigo-700 flex p-5 rounded-xl  justify-around flex-wrap items-center text-white " style={{maxWidth:"1200px"}}>  
                    <img src={computer} alt="" className="w-72"/>
                <div className=" w-96">
                    <h1 className="text-4xl font-semibold">We have served customers by developing</h1>
                    <p className="text-5xl font-bold mt-1"><CountUp end={3000} duration={5}/>+ Websites</p>
                    <span className="text-xs font-semibold">E-commerce, Company, Portofolio, Information Systems and others</span>
                </div>
            </div>
            <div className="mt-20">
                <h1 className="text-4xl font-bold text-indigo-400 text-center my-10 ">Professionally built website</h1>
                <div className="flex justify-around flex-wrap">
                    <div data-aos="fade-up" className="w-96"> 
                        <img src={porto1} className="w-96" alt=""/>
                        <h5 className="font-bold text-xl">E-Commerce</h5>
                        <p>Start selling online and grow your business with an amazing eCommerce platform</p>
                    </div>
                    <div data-aos="fade-up" className="w-96 md:mt-36 mt-5">
                        <img src={porto2} className="w-96 drop-shadow-xl"  alt=""/>
                        <h5 className="font-bold text-xl">Landing Page</h5>
                        <p>Create branding for your business and yourself using landing pages</p>
                    </div>
                </div>
                <div className="flex justify-around flex-wrap">
                    <div data-aos="fade-up" className="w-96"> 
                        <img src={porto3} className="w-96"  alt=""/>
                        <h5 className="font-bold text-xl">Portofolio Website</h5>
                        <p>Start creating a professional personal website about your personal information to increase your professionalism</p>
                    </div>
                    <div data-aos="fade-up" className="w-96 md:mt-36 mt-5">
                        <img src={porto4} className="w-96 "  alt=""/>
                        <h5 className="font-bold text-xl">Company Profile</h5>
                        <p>Create a website for the company by providing your company description information</p>
                    </div>
                </div>
                <div className="flex justify-around flex-wrap">
                    <div data-aos="fade-up" className="w-96"> 
                        <img src={porto5} className="w-96"  alt=""/>
                        <h5 className="font-bold text-xl">Blog</h5>
                        <p>Create a blog with built-in features to increase your reach and build community.</p>
                    </div>
                    <div data-aos="fade-up" className="w-96 md:mt-36 mt-5">
                        <img src={porto6} className="w-96 drop-shadow-xl"  alt=""/>
                        <h5 className="font-bold text-xl">System Information</h5>
                        <p>Create an information system with professional features to improve your record keeping and performance and build your workplace</p>
                    </div>
                </div>
            </div>
            <BannerVerify/>
            <div className="mx-aut text-center">
                <div className="my-10">
                <h1 className="text-4xl font-bold text-indigo-400">We use technology</h1>
                <p> Has supported various technologies and frameworks</p>
                </div>
                    <div className="flex items-center flex-wrap justify-center">
                        <img src={reactLogo} className="w-24 h-24 m-2" alt=""/>
                        <img src={nodeLogo} className="w-17 h-12 m-2" alt=""/>
                        <img src={webpackLogo} className="w-24 h-24 m-2" alt=""/>
                        <img src={vueLogo} className="w-16 h-16 m-2" alt=""/>
                        <img src={angularLogo} className="w-16 h-16 m-2" alt=""/>
                        <img src={wordLogo} className="w-20 h-20 m-2" alt="" />
                    </div>
                    <div className="flex items-center flex-wrap justify-center">
                        <img src={laravelLogo} className="w-17 h-16 m-2" alt=""/>
                        <img src={beegoLogo} className="w-17 h-10 m-2" alt=""/>
                        <img src={codeigLogo} className="w-17 h-10 m-2" alt="" />
                        <img src={pythonLogo} className="w-17 h-10 m-2" alt="" />
                    </div>
            </div>
            <div className="my-20 text-center">
            <h1 className="text-4xl font-bold text-indigo-400">Customer reviews</h1>
            <p className="">testimonials from clients who have used our services</p>
            </div>
            <div className="flex items-center mx-1 mb-10">
            <MdChevronLeft onClick={slideLeft} size={50}/>
                    <div id ="slider" className="w-full flex overflow-x-scroll scroll-bar-hide scroll-smooth">
                        <div className="mx-10"><ReviewCard image={bg} username={"Jhon Doe"}/></div>
                        <div className="mx-10"><ReviewCard image={bg} username={"Jhon Doe"}/></div>
                        <div className="mx-10"><ReviewCard image={bg} username={"Jhon Doe"}/></div>
                        <div className="mx-10"><ReviewCard image={bg} username={"Jhon Doe"}/></div>
                        <div className="mx-10"><ReviewCard image={bg} username={"Jhon Doe"}/></div>
                        <div className="mx-10"><ReviewCard image={bg} username={"Jhon Doe"}/></div>
                    </div>
            <MdChevronRight onClick={slideRight} size={50}/>
            </div>
        </div>
        </>
    )
}
export default BerandaPage