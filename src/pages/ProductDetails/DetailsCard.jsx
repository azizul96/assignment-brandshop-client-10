import toast from "react-hot-toast";


const DetailsCard = ({product}) => {
    const {image, name, brand, category, price, description, rating} = product


    

    const handleAddToCart = ()=>{
        const productData = {image, name, brand, category, price, description, rating}
        fetch('https://assignment-brandshop-server-ee5jbo2d1-azizul96s-projects.vercel.app/carts',{
            method: 'POST',
            headers:{
                'content-type':'application/json'
            },
            body: JSON.stringify(productData)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.insertedId){
                return toast.success('Added To The Cart');
                  
            }
        })
    }
    return (
        <div className="container mx-auto px-5">
            <div className="">
            <div className="shadow-xl rounded-lg h-full mb-5 md:w-2/3 lg:w-2/4 mx-auto px-3 ">
                <figure className="p-5 rounded-xl">
                    <img src={image} alt="image" className="h-auto md:h-96 w-full rounded-xl" />
                </figure>
                <div className=" card-body items-start text-left  mb-5">
                    <h2 className="card-title font-bold">{name}</h2>
                    <p className="block font-semibold">Brand: {brand}</p>
                    <p className="block">{description}</p>
                    
                </div>
                <hr />
                    <div className="flex flex-col justify-center items-center px-5 mb-5">
                        <h3 className="my-5 text-xl font-bold">Price: ${price}</h3>
                        <button onClick={handleAddToCart} className="btn btn-neutral bg-red-600 border-none font-bold mb-10 text-white">Add to cart</button>
                    </div>
            </div>
        </div>
        </div>
    );
};

export default DetailsCard;