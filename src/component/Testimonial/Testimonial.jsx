/* eslint-disable react/no-unescaped-entities */


const Testimonial = () => {
    return (
        <div>
            <section className="bg-white dark:bg-gray-900">
            <div className="container px-5 py-10 mx-auto">
                <h1 className="text-2xl font-semibold text-center text-gray-800 capitalize lg:text-3xl dark:text-white">
                    What our <span className="text-red-500 ">clients</span> say
                </h1>

                <p className="max-w-2xl mx-auto mt-6 text-center text-gray-500 dark:text-gray-300">
                    
                </p>

                <div className="grid grid-cols-1 gap-8 mx-auto mt-8 lg:grid-cols-2 xl:mt-10 max-w-7xl">
                    <div className="p-6 bg-gray-100 rounded-lg dark:bg-gray-800 md:p-8">
                        <p className="leading-loose text-gray-500 dark:text-gray-300">
                            “Alfa Shop truly caters to all fashion needs. Whether you're looking for casual wear, work attire, or elegant evening wear, they have it all. The quality and style are on point, and I've found some great pieces for special events. Plus, the staff is always ready to offer suggestions and help you put together the perfect outfit. It's my one-stop shop for all things fashion!”.
                        </p>

                        <div className="flex items-center mt-6">
                            <img className="object-cover rounded-full w-14 h-14" src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" alt=""/>
                            
                            <div className="mx-4">
                                <h1 className="font-semibold text-red-500">Robbert</h1>
                                <span className="text-sm text-gray-500 dark:text-gray-300">CTO, Alesha Mart</span>
                            </div>
                        </div>
                    </div>

                    <div className="p-6 bg-gray-100 rounded-lg dark:bg-gray-800 md:p-8">
                        <p className="leading-loose text-gray-500 dark:text-gray-300">
                            “Alfa Shop offers a fantastic range of clothing, and their prices are incredibly competitive. I love the frequent sales and discounts they have. The store layout is well-organized, which makes it easy to find what you're looking for. While some items may not be as high-end as designer brands, they are great value for the money ”.
                        </p>

                        <div className="flex items-center mt-6">
                            <img className="object-cover rounded-full w-14 h-14" src="https://images.unsplash.com/photo-1499470932971-a90681ce8530?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt=""/>
                            
                            <div className="mx-4">
                                <h1 className="font-semibold text-red-500">Mia Brown</h1>
                                <span className="text-sm text-gray-500 dark:text-gray-300">Marketing Manager at Stech</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </div>
    );
};

export default Testimonial;