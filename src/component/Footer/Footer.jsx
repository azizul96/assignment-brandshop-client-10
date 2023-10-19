import { FaFacebookF, FaTwitter, FaYoutube } from "react-icons/fa";


const Footer = () => {
    return (
        <div>
            <footer className="footer footer-center p-10 bg-gray-100 ">
            <aside>
                <img className="w-20" src="/logo.png" alt="" />
                <p className="font-bold">
                Alfa Shop Ltd. <br/>Providing reliable service since 2022
                </p> 
                <p>Copyright © 2022 - All right reserved</p>
            </aside> 
            <nav>
                <div className="grid grid-flow-col gap-4">
                    <a className="text-red-500 text-3xl" href="https://twitter.com/home"><FaTwitter></FaTwitter></a> 
                    <a className="text-red-500 text-3xl" href="https://www.youtube.com/"><FaYoutube></FaYoutube></a> 
                    <a className="text-red-500 text-3xl" href="https://www.facebook.com/"><FaFacebookF></FaFacebookF></a>
                </div>
            </nav>
            </footer>
        </div>
    );
};

export default Footer;