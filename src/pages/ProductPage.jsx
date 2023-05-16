import React from "react";
import CardProduct from "../components/CardProduct";
import {MdChevronLeft,MdChevronRight,MdOutlineScreenSearchDesktop,MdSecurity,MdSignalCellularAlt,MdOutlineDevices} from "react-icons/md"
import CardFeature from "../components/CardFeature";
import {FiLoader} from "react-icons/fi"
import {CiServer} from "react-icons/ci"
import girl from '../image/girl.png'
import man from '../image/man.png'
import BannerProcess from "../components/BannerProcess";
const ProductPage = () =>{
    const slideLeft = () =>{
        let slider = document.getElementById('slider')
        slider.scrollLeft = slider.scrollLeft - 380;
    }
    const slideRight = () =>{
        let slider = document.getElementById('slider')
        slider.scrollLeft = slider.scrollLeft +  380;
    }
    const slideLeftBanner = () =>{
        let slider = document.getElementById('sliderBanner')
        slider.scrollLeft = slider.scrollLeft - 800;
    }
    const slideRightBanner = () =>{
        let slider = document.getElementById('sliderBanner')
        slider.scrollLeft = slider.scrollLeft +  800;
    }
    return(
        <>
            <div className="mx-auto p-2 " style={{maxWidth:"1200px"}}>
            <div className="my-20">
            <div className="flex items-center">
                <div id ="sliderBanner" className="flex overflow-x-scroll scroll-bar-hide scroll-smooth mx-auto " style={{maxWidth:"800px"}}>
                    <div>
                        <BannerProcess 
                        titleBanner={"Website Creation Stages"}
                        title={"Choose a Website Package"}
                        title2={"Describe features"}
                        title3={"Wait for it to finish"}
                        description={"Find a website service package according to your needs"}
                        description2={"Provide an explanation of what features you need"}
                        description3={"Wait, information if the website has been made"}
                        number={"1"}
                        number2={"2"}
                        number3={"3"}
                        />
                    </div>
                    <div>
                        <BannerProcess 
                        titleBanner={"Website consultation stage"}
                        title={"Choose a package"}
                        title2={"Describe the website problem"}
                        title3={"Find a solution to the problem"}
                        description={"Choose a package for consultation then schedule it"}
                        description2={"Provide an explanation of the problems that occur on your website, both errors and concepts"}
                        description3={"We will provide you with a solution to the problem"}
                        number={"1"}
                        number2={"2"}
                        number3={"3"}
                        />
                    </div>
                    <div>
                        <BannerProcess 
                        titleBanner={"Website testing stage"}
                        title={"Choose a package"}
                        title2={"Provide a website"}
                        title3={"Waiting for the result"}
                        description={"Select the website testing package"}
                        description2={"Provide the website you want to test for security and feasibility"}
                        description3={"You get results from the results of testing your website"}
                        number={"1"}
                        number2={"2"}
                        number3={"3"}
                        />
                    </div>
                </div>
            </div>
                <div className="justify-center flex">
                    <MdChevronLeft onClick={slideLeftBanner} size={40} className="rounded-full bg-indigo-400 text-white m-2 hover:bg-indigo-500 cursor-pointer"/>
                    <MdChevronRight onClick={slideRightBanner} size={40}  className="rounded-full bg-indigo-400 text-white m-2 hover:bg-indigo-500 cursor-pointer"/>

                </div>
            </div>
            <div className="flex items-center">
            <MdChevronLeft onClick={slideLeft} size={40} className="rounded-full bg-indigo-400 text-white hover:bg-indigo-500 cursor-pointer"/>
                <div id ="slider" className="w-full flex overflow-x-scroll scroll-bar-hide scroll-smooth">
                    <div>
                        <CardProduct title={"Company Profile"}
                        description={"Website creation services for B2B companies such as consultants, distributors, and manufacturers. It's time to show a professional impression for your company!"}
                        price={"Rp. 2.000.000"}
                        detail1={"Free hosting and domain"}
                        detail2={"Free to choose a theme"}
                        detail3={"Responsive and SEO friendly"}
                        detail4={"Free Setup 5 Content / Articles"}
                        detail5={"1x Design Revision"}
                        />
                    </div>
                    <div>
                        <CardProduct title={"Portofolio"}
                        description={"Professional website service to build your own portfolio or brand professionally"}
                        price={"Rp. 1.000.000"}
                        detail1={"Free hosting and domain"}
                        detail2={"Free to choose a theme"}
                        detail3={"Responsive and SEO friendly"}
                        detail4={"2 Day process"}
                        detail5={"1x Design Revision"}
                        />
                    </div>
                    <div>
                        <CardProduct title={"E-Commerce"}
                        description={"Professional website services recommended for B2C businesses or SMEs such as culinary, property, convection, travel, etc."}
                        price={"Rp. 5.000.000"}
                        detail1={"Free Set of 5 Featured Products"}
                        detail2={"Free to choose a theme"}
                        detail3={"Marketplace integration"}
                        detail4={"Payment & Shipping Features"}
                        detail5={"1x Design Revision"}
                        />
                    </div>
                    <div>
                        <CardProduct title={"Web consulting"}
                        description={"Consultation services regarding your website problems or discussion of the website concept that you want to build"}
                        price={"Rp. 1.000.000"}
                        detail1={"Free to determine the schedule"}
                        detail2={"3 consultation meetings"}
                        detail3={"Discuss your website problems"}
                        detail4={"Solve your problem"}
                        detail5={"Get good advice"}
                        />
                    </div>
                    <div>
                        <CardProduct title={"Testing Website"}
                        description={"Services to test security and feasibility based on standardization on your website, you will get feedback on the results of these tests"}
                        price={"Rp. 1.000.000"}
                        detail1={"Safe and reliable"}
                        detail2={"Detailed feedback and result"}
                        detail3={"Vulnerability and bug reporting"}
                        detail4={"Test Plan and Test Scenario"}
                        detail5={"3 Day process"}
                        />
                    </div>
                </div>
                <MdChevronRight onClick={slideRight} size={40}  className="rounded-full bg-indigo-400 text-white hover:bg-indigo-500 cursor-pointer"/>
            </div>
            <   h1 className="text-3xl font-bold text-indigo-400 text-center mt-10">Website Features</h1>
                <div className="flex justify-center m-2 flex-wrap">
                    <CardFeature title={"Mobile Friendly"} 
                    description={"The appearance of the website is maximized, so that it can be accessed on any device."}
                    icon={<MdOutlineDevices size={35}/>}/>
                    <CardFeature title={"Seo Friendly"} 
                    description={"Websites will be easier to find on search engines with the help of SEO."}
                    icon={<MdOutlineScreenSearchDesktop size={35}/>}
                    />
                    <CardFeature title={"Free SSL"} 
                    description={"Increase visitor trust with the free SSL feature! Your website will get https protocol."}
                    icon={<MdSecurity size={35}/>}/>
                    <CardFeature title={"Free Domain & Hosting"} 
                    description={"The cost of creating a website is more economical. The package includes free hosting and domain for the first year."}
                    icon={<MdSignalCellularAlt size={35}/>}
                    />
                    <CardFeature title={"Web Perfomance"} 
                    description={"Your website is ensured to have excellent performance and quality"}
                    icon={<FiLoader size={35}/>}
                    />
                    <CardFeature title={"Online Servers"} 
                    description={"The best server support and technical team keep your web server always online."}
                    icon={<CiServer size={35}/>}
                    />
                </div>

                <div className="bg-indigo-500 flex justify-around items-center my-10 rounded-xl flex-wrap">
                    <img src={girl} alt="" className="w-60 md:w-96"/>
                    <div className="text-white w-96 p-2">
                    <h1 className="text-4xl font-bold mb-5">Consultation about your website</h1>
                    <p className="text-justify">Help you to solve your website problems such as errors, desire to change website concept or improve your website.</p>
                    <p className="font-semibold">Let's discuss your website to solve your web problems</p>
                    </div>
                </div>
                <div className="flex justify-around items-center my-20 rounded-xl flex-wrap">
                    <div className="w-96">
                    <h1 className="text-4xl font-bold mb-5">Test your website</h1>
                    <p className="text-justify">To find out the security and feasibility of your website for the convenience of users</p>
                    <p className="font-semibold">Let's test your website to avoid system vulnerabilities</p>
                    </div>
                    <img src={man} alt="" className="h-40 md:h-64"/>
                </div>
            </div>
          
        </>
    )
}
export default ProductPage