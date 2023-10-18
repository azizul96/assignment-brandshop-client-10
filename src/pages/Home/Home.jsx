import { useLoaderData } from "react-router-dom";
import Banner from "../../component/Banner/Banner";
import Navbar from "../../component/Navbar/Navbar";
import BrandCard from "./BrandCard";
import Footer from "../../component/Footer/Footer";


const Home = () => {
    const loadedBrands = useLoaderData()
    return (
        <div>
            <div>
                <Navbar></Navbar>
            </div>
            <div>
                <Banner></Banner>
            </div>
            <div className="container mx-auto mt-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                    {
                        loadedBrands.map(singleBrand => <BrandCard key={singleBrand.id} singleBrand={singleBrand}></BrandCard>)
                    }
                </div>
            </div>
            <div className="mt-10">
                <Footer></Footer>
            </div>
        </div>
    );
};

export default Home;