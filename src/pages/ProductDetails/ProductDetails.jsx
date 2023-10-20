import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import DetailsCard from "./DetailsCard";
import Navbar from "../../component/Navbar/Navbar";


const ProductDetails = () => {
    const [product, setProduct] =useState([])
    const {id} = useParams()
    const loadedProducts = useLoaderData()
    


    useEffect(()=>{
        const findProducts = loadedProducts.find(item => item._id == id)
        setProduct(findProducts)
    },[id, loadedProducts])
    console.log(product);
    return (
        <div className="bg-gradient-to-b from-purple-400">
            <div>
                <Navbar></Navbar>
            </div>
            <div className="">
                <DetailsCard product={product}></DetailsCard>
            </div>
        </div>
    );
};

export default ProductDetails;