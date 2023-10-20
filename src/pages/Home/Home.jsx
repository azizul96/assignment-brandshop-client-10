import { useLoaderData } from "react-router-dom";
import Banner from "../../component/Banner/Banner";
import Navbar from "../../component/Navbar/Navbar";
import BrandCard from "./BrandCard";
import Footer from "../../component/Footer/Footer";
import Testimonial from "../../component/Testimonial/Testimonial";
import Contact from "../../component/Contact/Contact";
import { BsFillMoonFill, BsFillSunFill } from "react-icons/bs";
import { useState } from "react";



const Home = () => {
    const loadedBrands = useLoaderData()


    const [mode , setMode] = useState('light')
    const toggleMode = () =>{
        if(mode === 'light'){
            setMode('dark')
            document.body.style.backgroundColor = 'rgb(17, 24, 39)'
        }
        else{
            setMode('light')
            document.body.style.backgroundColor = 'white'
        }
    }

    return (
        <div>
            <div className={`${mode === 'dark'?'text-white':'text-gray-500'}`}>
                <Navbar></Navbar>
            </div>
            <div className="container mx-auto px-5 flex justify-center">
                
                {mode === 'light'
                ? 
                (<button onClick={toggleMode} className="bg-gray-300 p-2 rounded-full">
                <BsFillSunFill className="w-5 h-5"></BsFillSunFill>
                </button>)
                :
                (<button onClick={toggleMode} className="bg-gray-300 p-2 rounded-full">
                <BsFillMoonFill className="w-5 h-5"></BsFillMoonFill>
                </button>)}
                
            </div>
            <div>
                <Banner></Banner>
            </div>
            <div className={`container mx-auto px-5 mt-10${mode === 'dark'?'text-white':'text-black'}`}>
                <h1 className={`text-2xl font-bold text-center text-gray-800 capitalize lg:text-3xl dark:text-white mb-10 ${mode === 'dark'?'text-white':'text-black'}`}>Our Trusted Brands</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                    {
                        loadedBrands.map(singleBrand => <BrandCard key={singleBrand.id} singleBrand={singleBrand}></BrandCard>)
                    }
                </div>
            </div>
            <div className="mt-10">
                <Testimonial></Testimonial>
            </div>
            <div>
                <Contact></Contact>
            </div>
            <div className="mt-10">
                <Footer></Footer>
            </div>
        </div>
    );
};

export default Home;