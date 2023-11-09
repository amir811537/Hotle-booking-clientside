import { Link, useLoaderData } from "react-router-dom";
import Userreview from "./Userreview";
import Carousel from "nuka-carousel";

const RooomDetails = () => {
  const singelRooms = useLoaderData();
  const {
    name,
    description,
    _id,
    availability,
    images,
    pricePerNight,
    reviews,
    roomSize,
    specialOffers,
  } = singelRooms;

  // console.log(singelRooms);

  return (
    <div className="bg-gray-100 dark:bg-gray-800 py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row -mx-4">
          <div className="md:flex-1 px-4">
            {/* <div className="grid-cols-3 lg:grid lg:gap-3 lg:grid-rows-3">
              <div className="w-full rounded">
                <img src={images[0]} alt="image" />
              </div>
              <div className="w-full col-span-2 row-span-2 rounded">
                <img src={images[1]} alt="image" />
              </div>
              <div className="w-full rounded">
                <img src={images[2]} alt="image" />
              </div>
            </div> */}
            <Carousel>
              <img src={images[0]} />
              <img src={images[1]} />
              <img src={images[2]} />
            </Carousel>

            <div className="flex flex-col mb-4"></div>
          </div>
          <div className="md:flex-1 px-4">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">
              {name}
            </h2>
            <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
              {description}
            </p>
            <div className="flex mb-4">
              <div className="mr-4">
                <span className="font-bold text-gray-700 dark:text-gray-300">
                  Price:
                </span>
                <span className="text-gray-600 pl-2 dark:text-gray-300">
                  {" "}
                  ${pricePerNight}
                </span>
              </div>

              <div>
                <span className="font-bold text-gray-700 dark:text-gray-300">
                  Availabile:
                </span>
                <span className="text-gray-600 pl-2 dark:text-gray-300">
                  {availability} Room
                </span>
              </div>
            </div>

            <div className="mr-4">
              <span className="font-bold text-gray-700 dark:text-gray-300">
                Special Offers:
              </span>
              <span className="text-gray-600 pl-2 dark:text-gray-300">
                {" "}
                {specialOffers}
              </span>
            </div>

            <div className="mr-4">
              <span className="font-bold text-gray-700 dark:text-gray-300">
                Room Size:
              </span>
              <span className="text-gray-600 pl-2 dark:text-gray-300">
                {" "}
                {roomSize}
              </span>
            </div>

        

            <div className="mb-4 lg:py-20">
              <Link to={`/checkout/${_id}`}>
              <button className="w-full bg-gray-900 dark:bg-gray-600 text-white py-2 px-4 rounded-full font-bold hover:bg-gray-800 dark:hover:bg-gray-700">
                Book Now
              </button>
              </Link>

              <h1 className="  text-3xl font-bold text-gray-600 pl-2 dark:text-gray-300 text-center py-10">
                Our Guest reviews{" "}
              </h1>

              {reviews?.length > 0 ? (
                <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 py-4">
                  {reviews.map((singelreview) => (
                    <Userreview
                      key={reviews.rating}
                      singelreview={singelreview}
                    ></Userreview>
                  ))}
                </div>
              ) : (
                <div>
                  <p className="text-gray-700 dark:text-gray-300 text-xl text-center">
                    {" "}
                    There is no review for this room!!!
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RooomDetails;
