import { useLoaderData } from "react-router-dom";
import Navbar from "../../component/Navbar/Navbar";

const MyCart = () => {
    const loadedCarts = useLoaderData()
    console.log(loadedCarts);
    return (
        <div>
            <div>
                <Navbar></Navbar>
            </div>
            <div>

            </div>
        </div>
    );
};

export default MyCart;