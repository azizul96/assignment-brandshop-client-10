import { Link } from "react-router-dom";
import { AiFillStar } from 'react-icons/ai';


const ProductCard = ({product}) => {
    const {_id, image, name, brand, category, price, rating} = product
    return (
        <div>
            
            {/* <div className="card card-compact  bg-base-100 shadow-xl">
                <figure>
                    <img className="w-full h-96" src={image} alt="Shoes" />
                </figure>
                <div className="card-body">
                    <div className="text-center">
                        <h2 className="font-semibold text-xl">{name}</h2>
                        <h3 className="font-semibold text-xl">Brand: {brand}</h3>
                        <p>{category}</p>
                        <p>Rating: {rating}</p>
                        <p>Price: ${price}</p>
                        <p>{description?.slice(0, 100)}...</p>
                    </div>
                    
                    <div className="card-actions justify-between items-center">
                        <div>
                            <Link to={`/update/${_id}`}>
                                <button className="btn btn-info"> Update </button>
                            </Link>
                        </div>
                        <div>
                            <Link to={`/details/${_id}`}>
                                <button className="btn btn-info ">Details</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div> */}
            
            <div className="  rounded-lg mb-5 bg-[#ebeeef] text-center p-5 shadow-lg">
            <h1 className="text-center font-bold text-2xl my-5 text-green-700">{name}</h1>
            <h3 className="font-semibold ">{brand}</h3>
            <div className="flex justify-center mb-3 ">
                <img className="w-72 rounded-xl h-72 " src={image} alt="" />
            </div>
            <p className="font-semibold text-green-700 mb-1">{category}</p>
            <div className="flex justify-center items-center  mb-1">
                <p className="font-semibold text-green-700">Rating: {rating}</p>
                <p className="text-xl text-green-700"><AiFillStar></AiFillStar></p>
            </div>
            <p className="text-center text-base font-semibold mb-3 text-green-700">Price: ${price}</p>
            <Link to={`/update/${_id}`}>
                <button  className="btn btn-md btn-error text-white mr-2 mb-2">Update</button>
            </Link>
            <Link to={`/details/${_id}`}>
                <button  className="btn btn-md btn-error text-white mr-2 mb-2">Details</button>
            </Link>
        </div>
        </div>
    );
};

export default ProductCard;