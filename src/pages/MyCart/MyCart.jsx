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
            <div>
                <h1 className="my-10 text-center font-bold ">Selected Cart</h1>
            </div>
            <div className="container mx-auto px-5 mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 justify-center">
                {
                    carts.map(cart => 
                        <div key={cart.id} className=" h-full overflow-hidden bg-green-200 rounded-lg shadow-lg dark:bg-gray-800">
                        <div className="px-4 py-2">
                            <h1 className="text-xl font-bold text-gray-800 uppercase dark:text-white">{cart.name}</h1>
                            <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">{cart.brand}</p>
                        </div>
                    
                        <img className="object-cover w-full h-48 mt-2" src={cart.image} alt="NIKE AIR"/>
                    
                        <div className="flex items-center justify-between px-4 py-2 bg-red-900">
                            <h1 className="text-lg font-bold text-white">${cart.price}</h1>
                            <button  className="px-2 py-1 text-xs font-semibold text-gray-900 uppercase transition-colors duration-300 transform bg-white rounded hover:bg-gray-200 focus:bg-gray-400 focus:outline-none">Buy</button>
                            <button onClick={()=>handleDelete(cart._id)} className="px-2 py-1 text-xs font-semibold text-gray-900 uppercase transition-colors duration-300 transform bg-white rounded hover:bg-gray-200 focus:bg-gray-400 focus:outline-none">Delete</button>
                            
                        </div>
                    </div>
                    
                    )
                }
            </div>
            <div>
            </div>
        </div>
    );
};

export default MyCart;