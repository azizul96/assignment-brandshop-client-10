import { useLoaderData } from "react-router-dom";
import Navbar from "../../component/Navbar/Navbar";
import { useState } from "react";
import Swal from "sweetalert2";


const MyCart = () => {
    const loadedCarts = useLoaderData()
    const [carts, setCarts] = useState(loadedCarts)
    console.log(loadedCarts);

    const handleDelete = (_id) =>{
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.isConfirmed) {

            fetch(`http://localhost:5000/carts/${_id}`,{
                method: 'DELETE'
            })
            .then(res => res.json())
            .then(data =>{
            console.log(data);
            if(data.deletedCount){
                Swal.fire(
                    'Deleted!',
                    'Your file has been deleted.',
                    'success'
                  )
                  const remainingCarts = carts.filter(item => item._id !== _id)
                  setCarts(remainingCarts)
            }
                
        })
            
            }
            
          })
    }
    return (
        <div>
            <div>
                <Navbar></Navbar>
            </div>
            <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {
                    carts.map(cart =><div key={cart._id} className="card card-side shadow-xl bg-lime-200">
                    <figure><img className="w-52 md:w-64" src={cart.image} alt="image"/></figure>
                    <div className="ml-3 mt-4 space-y-1">
                        <h2 className="font-bold">{cart.name}</h2>
                        <p>{cart.brand}</p>
                        <p>Rating: {cart.rating}</p>
                        <p className="font-semibold">$ {cart.price}</p>
                        <div className="card-actions justify-start ">
                            <button onClick={()=>handleDelete(cart._id)} className="btn btn-sm btn-error text-white">Delete</button>
                        </div>
                    </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default MyCart;