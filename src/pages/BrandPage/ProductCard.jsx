import { Link } from "react-router-dom";
import { AiFillStar } from 'react-icons/ai';


const ProductCard = ({product}) => {
    const {_id, image, name, brand, category, price, rating} = product
    return (
        <div>
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