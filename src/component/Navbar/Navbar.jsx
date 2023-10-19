import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider";

const Navbar = () => {
    const {user, userLogOut} = useContext(AuthContext)


    const navLinks = <>
        <li className="font-semibold"><NavLink to={"/"}>Home</NavLink></li>
        <li className="font-semibold"><NavLink to={"/addProduct"}>Add Product</NavLink></li>
        <li className="font-semibold"><NavLink to={"/myCart"}>My Cart</NavLink></li>
        
        
    </>

    const handleLogOut = () =>{
        userLogOut()
        
    }
    
    return (
        <div className="container mx-auto py-2">
            <div className="navbar ">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {navLinks}
                        </ul>
                    </div>
                    <Link to='/' className=" flex justify-center items-center gap-2 ">
                        <img className="w-14" src="/logo.png" alt="" />
                    </Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navLinks}
                    </ul>
                </div>


                
                <div className="navbar-end">
                    {user?.email?
                         <div className="dropdown dropdown-end">
                            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                <div className=" w-10 rounded-full">
                                    <img src={user?.photoURL ? user.photoURL: "/user.png"} alt="" />
                                </div>
                                
                            </label>
                            
                            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                                <li>
                                    <button className="btn btn-sm  btn-ghost">{user.displayName}</button>

                                </li>
                                <li>
                                    <button onClick={handleLogOut} className="btn btn-sm  btn-ghost">Logout</button>
                                </li>
                            </ul>
                            
                        </div>
                        :
                        <Link to='/login'>
                            <button className="btn btn-sm  btn-ghost font-bold text-red-600">Login</button>
                        </Link>
                    }
                </div>    
            </div>
        </div>
    );
};

export default Navbar;