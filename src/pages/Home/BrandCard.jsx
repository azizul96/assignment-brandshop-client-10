import { Link } from "react-router-dom";


const BrandCard = ({singleBrand}) => {
    console.log(singleBrand);
    
    return (
        <div>
            <Link to={`/brand/${singleBrand.brand}`}>
            <div className="card card-compact  bg-base-100 shadow-xl ">
                <figure><img className="w-full h-72" src={singleBrand.image} alt="image" /></figure>
                <div className="card-body rounded-b-xl bg-gradient-to-l from-red-400 ...">
                    <h2 className="card-title">{singleBrand.brand}</h2>
                    
                </div>
            </div>
            </Link>
        </div>
    );
};

export default BrandCard;