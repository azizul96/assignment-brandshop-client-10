import { MdEmail, MdLocationPin, MdPhoneInTalk } from "react-icons/md";

const Contact = () => {
    return (
        <div>
            <section className="">
            <div className="container px-5 py-12 mx-auto">
                <div className="text-center">

                    <h1 className="mt-2 text-2xl font-semibold text-red-500 md:text-3xl ">Get in touch</h1>

                    <p className="mt-3 text-gray-500">Our friendly team is always here to chat.</p>
                </div>

                <div className="grid grid-cols-1 gap-12 mt-10 md:grid-cols-2 lg:grid-cols-3">
                    <div className="flex flex-col items-center justify-center text-center">
                        <span className="p-3 text-red-500 rounded-full bg-blue-100/80 dark:bg-gray-800">
                            <span className="text-2xl">
                                <MdEmail></MdEmail>
                            </span>
                        </span>

                        <h2 className="mt-4 text-lg font-medium text-red-500">Email</h2>
                        <p className="mt-2 text-gray-500 dark:text-gray-400">Our friendly team is here to help.</p>
                        <p className="mt-2 text-blue-500 dark:text-blue-400">hello@alfashop.com</p>
                    </div>

                    <div className="flex flex-col items-center justify-center text-center">
                        <span className="p-3 text-red-500 rounded-full bg-blue-100/80 dark:bg-gray-800">
                            <span className="text-2xl">
                                <MdLocationPin></MdLocationPin>
                            </span>
                        </span>
                        
                        <h2 className="mt-4 text-lg font-medium text-red-500">Office</h2>
                        <p className="mt-2 text-gray-500 dark:text-gray-400">Come say hello at our office HQ.</p>
                        <p className="mt-2 text-blue-500 dark:text-blue-400">3 No Tejturi Bazar West, Panthapath, Dhaka 1215</p>
                    </div>

                    <div className="flex flex-col items-center justify-center text-center">
                        <span className="p-3 text-red-500 rounded-full bg-blue-100/80 dark:bg-gray-800">
                            <span className="text-2xl">
                                <MdPhoneInTalk></MdPhoneInTalk>
                            </span>
                        </span>
                        
                        <h2 className="mt-4 text-lg font-medium text-red-500">Phone</h2>
                        <p className="mt-2 text-gray-500 dark:text-gray-400">Mon-Fri from 8am to 5pm.</p>
                        <p className="mt-2 text-blue-500 dark:text-blue-400">+88 (013) 03674855</p>
                    </div>
                </div>
            </div>
        </section>
        </div>
    );
};

export default Contact;