import { FaEye, FaEyeSlash } from "react-icons/fa";
import Navbar from "../../component/Navbar/Navbar";
import { Link, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import toast from "react-hot-toast";
import { AuthContext } from "../../context/AuthProvider";


const SignUp = () => {
    const [showPassword, setShowPassword] = useState(false)
    const {createUser, updateUserProfile} = useContext(AuthContext)
    const navigate = useNavigate(null)


    const handleSignUp = e =>{
        
        e.preventDefault()
        const name = e.target.name.value
        const email = e.target.email.value
        const img = e.target.img.value
        const password = e.target.password.value
        console.log(name , email, img, password);



        createUser(email,password)
        .then(() =>{
            updateUserProfile(name,img)
            .then(()=>{
                toast.success('User created successfully');
                navigate('/')
            })
        })
        .catch(error =>{
            toast.error(error.message);
        })
    }

    // Unlock Your Corporate Event Success
    return (
        <div>
            <Navbar></Navbar>
            <div className="hero h-full bg-base-200 pb-10 ">
                <div className="hero-content flex-col ">
                    <div className="text-center ">
                        <h1 className="text-5xl font-bold">Sign Up now!</h1>
                        <p className="py-5"> – Sign Up Now!</p>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleSignUp} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Full Name</span>
                                </label>
                                <input type="text" placeholder="Your Full Name" className="input input-bordered" name='name' />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="text" placeholder="Your email" className="input input-bordered" name='email' />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Image Url</span>
                                </label>
                                <input type="text" placeholder="Profile image url" className="input input-bordered" name='img' />
                            </div>
                            <div className="form-control relative">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type={showPassword ? "text" : "password"} placeholder="Your password" className="input input-bordered" name='password' />
                                <span className="absolute bottom-3 right-3 text-xl cursor-pointer" onClick={()=>setShowPassword(!showPassword)}>
                                    {
                                       showPassword ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>
                                    }
                                </span>
                            </div>
                            <div className="form-control mt-6 p-0">
                                <button className="btn btn-neutral" type='submit'>Register</button>
                            </div>
                            <label className="label">
                                Have an account? <Link to="/login" className="label-text-alt link link-hover">Please Login</Link>
                            </label>
                            {/* <SocialLogin /> */}
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;