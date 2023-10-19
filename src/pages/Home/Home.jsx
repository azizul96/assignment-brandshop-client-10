import { useLoaderData } from "react-router-dom";
import Banner from "../../component/Banner/Banner";
import Navbar from "../../component/Navbar/Navbar";
import BrandCard from "./BrandCard";
import Footer from "../../component/Footer/Footer";
import Testimonial from "../../component/Testimonial/Testimonial";
import Contact from "../../component/Contact/Contact";


const Home = () => {
    const loadedBrands = useLoaderData()
    return (
        <div>
            <div >
                <Navbar></Navbar>
            </div>
            <div>
                <Banner></Banner>
            </div>
            <div className="container mx-auto px-5 mt-10">
                <h1 className=" text-2xl font-semibold text-center text-gray-800 capitalize lg:text-3xl dark:text-white mb-5">Our <span className="text-red-500">Trusted</span> Brands</h1>
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