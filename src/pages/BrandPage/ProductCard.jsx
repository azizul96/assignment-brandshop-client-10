import { Link } from "react-router-dom";


const ProductCard = ({product}) => {
    const {_id, image, name, brand, category, price, description, rating} = product
    return (
        <div>
            
            <div className="card card-compact  bg-base-100 shadow-xl">
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
                            <button className="btn btn-info ">Details</button>
                        </div>
                    </div>
                </div>
            </div>
            {/* <div className="flex justify-start items-center gap-5  rounded-lg bg-red-300" >
            
                <img  className="w-60 h-60  rounded-lg" src={image} alt="" />
            
                <div className="">
                    <div className="py-3 pr-2">
                    <h1 className="px-3 py-1 text-sm font-normal rounded-md inline-block bg-orange-400" >{category}</h1>
                    <h2 className=" text-sm font-semibold mt-2">{name}</h2>
                    <p className="font-semibold text-base mb-5"  >$ {price}</p>
                    <p>{description.slice(0,50)}...</p>
                    <button className="btn btn-sm font-semibold rounded-md block bg-lime-500 text-white" >View Details</button>
                    </div>
                </div>
            </div> */}
        </div>
    );
};

export default ProductCard;