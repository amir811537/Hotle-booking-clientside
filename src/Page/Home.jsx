import Banner from "./Banner";
import NewsletterSignup from "./NewsletterSignup";
import Rooms from "./Rooms";
import Testimonialshome from "./Testimonialshome";
import VideoBg from "./Videobg/VideoBg";

const Home = () => {
    return (
        <div>
<Banner></Banner>


<div>
    <VideoBg></VideoBg>
</div>

<div className="py-4">
    <h1 className="lg:text-5xl text-xl font-bold text-center ">Our Featured Rooms</h1>
    <hr className="lg:w-[800px] w-40 h-1 mx-auto my-4 bg-gray-100 border-0 rounded md:my-10 dark:bg-gray-700"/>
    <Rooms></Rooms>
</div>
<div className="py-4">
<h1 className="lg:text-5xl text-xl font-bold text-center ">Our Guest reviews  </h1>
<hr className="lg:w-[800px] w-40 h-1 mx-auto my-4 bg-gray-100 border-0 rounded md:my-10 dark:bg-gray-700"/>


    <Testimonialshome></Testimonialshome>
</div>
<div>
    <NewsletterSignup></NewsletterSignup>
</div>


        </div>
    );
};

export default Home;