import { useLoaderData } from "react-router-dom";
import Navbar from "../../component/Navbar/Navbar";
import toast from "react-hot-toast";


const UpdateProduct = () => {
    const loadedData = useLoaderData()
    console.log(loadedData);

    const handleUpdateProduct = e =>{
        e.preventDefault()
        const form = e.target
        const image = form.image.value
        const name = form.name.value
        const brand = form.brand.value
        const category = form.category.value
        const price = form.price.value
        const rating = form.rating.value
        const updateData = {image, name, brand, category, price, rating}

        fetch(`http://localhost:5000/products/${loadedData._id}`,{
            method: 'PATCH',
            headers:{
                'content-type':'application/json'
            },
            body: JSON.stringify(updateData)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data){
                return toast.success('Product updated successfully');
            }
        })
    }

    return (
        <div>
            <div>
                <Navbar></Navbar>
            </div>
            <div className="flex justify-center items-center bg-orange-200 pt-5">
                <div className="hero  ">
                <div className="hero-content flex-col w-full">
                    
                    <div className="card flex-shrink-0 w-full  shadow-2xl bg-base-100 ">
                    <form onSubmit={handleUpdateProduct} className="card-body">
                        <div className="form-control">
                        <label className="label">
                            <span className="label-text">Image</span>
                        </label>
                        <input type="text" placeholder="Image link" name="image" defaultValue={loadedData.image} className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" placeholder="Name" name="name" defaultValue={loadedData.name}  className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                        <label className="label">
                            <span className="label-text">Brand Name</span>
                        </label>
                        <input type="text" placeholder="Brand Name" name="brand" defaultValue={loadedData.brand} className="input input-bordered" required />
                        </div>

                        <div className="form-control ">
                        <label className="label">
                            <span className="label-text">Type</span>
                        </label>
                        <select className="select select-bordered" name="category" defaultValue={loadedData.category} >
                            <option disabled selected>Pick one</option>
                            <option>Shoe</option>
                            <option>Shirt</option>
                            <option>Pant</option>
                            <option>Bag</option>
                            <option>Dress</option>
                            
                        </select>
                        </div>

                        <div className="form-control">
                        <label className="label">
                            <span className="label-text">Price</span>
                        </label>
                        <input type="text" placeholder="Price" name="price" defaultValue={loadedData.price}  className="input input-bordered" required />
                        </div>
                        
                        <div className="form-control">
                        <label className="label">
                            <span className="label-text">Rating</span>
                        </label>
                        <input type="text" placeholder="Rating" name="rating" defaultValue={loadedData.rating} className="input input-bordered" required />
                        </div>
                        <div className="form-control mt-6">
                        <button className="btn btn-success font-bold">Update Product</button>
                        </div>
                    </form>
                    </div>
                </div>
                </div>
            </div>
        </div>
    );
};

export default UpdateProduct;