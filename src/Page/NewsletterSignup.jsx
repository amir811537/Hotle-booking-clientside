import  { useState } from 'react';
import { useEffect } from "react";
import "aos/dist/aos.css";
import AOS from "aos";

const NewsletterSignup = () => {
    useEffect(() => {
        AOS.init();
      }, []);

    const containerStyle = {
        backgroundColor: '#483786',
    };

    const [email, setEmail] = useState('');

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission or any other logic here
    };

    return (
        <div  data-aos="zoom-in-right"
        onMouseEnter={() => AOS.refresh()} className="max-w-screen-xl mx-auto px-4 py-12 sm:px-6 lg:py-16 lg:px-8">
            <div className="px-6 py-6 rounded-lg md:py-12 md:px-12 lg:py-16 lg:px-16 xl:flex xl:items-center" style={containerStyle}>
                <div className="xl:w-0 xl:flex-1">
                    <h2 className="text-2xl leading-8 font-extrabold tracking-tight text-white sm:text-3xl sm:leading-9">
                    Save time, save money!
                    </h2>
                    <p className="mt-3 max-w-3xl text-lg leading-6 text-indigo-200">
                    Sign up and we'll send the best deals to you                     </p>
                </div>
                <div className="mt-8 sm:w-full sm:max-w-md xl:mt-0 xl:ml-8">
                    <div id="mc_embed_signup">
                        <form className="sm:flex" onSubmit={handleSubmit}>
                            <input
                                className="required rounded-md w-full px-4 py-2 email"
                                id="mce-EMAIL"
                                placeholder="Enter your email"
                                required=""
                                type="email"
                                value={email}
                                onChange={handleEmailChange}
                                aria-required="true"
                            />
                            <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3 sm:flex-shrink-0">
                                <button className="w-full flex items-center justify-center px-5 py-3 text-base leading-6
                                font-medium rounded-md text-white bg-indigo-500 focus:ring
                                hover-bg-indigo-400 focus-outline-none focus-bg-indigo-400
                                transition duration-150 ease-in-out" type="submit">
                                    Subscribe
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewsletterSignup;
