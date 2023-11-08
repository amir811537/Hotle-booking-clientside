/* eslint-disable react/prop-types */
// import { AiOutlineDollarCircle } from 'react-icons/ai';
import { Link } from 'react-router-dom';
const RoomsCards = ({room}) => {

    const {name,description,_id,availability,images,pricePerNight,reviews,roomSize,specialOffers}=room;


    return (
        <div className="relative flex w-full max-w-[26rem] flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-lg">
        <div className="relative mx-4 mt-4 overflow-hidden text-white shadow-lg rounded-xl bg-blue-gray-500 bg-clip-border shadow-blue-gray-500/40">
          <img
            src={images[0]}
            alt="ui/ux review check"
          />
          <div className="absolute inset-0 w-full h-full to-bg-black-10 bg-gradient-to-tr from-transparent via-transparent to-black/60"></div>
          <button
            className="!absolute top-4 right-4 h-8 max-h-[32px] w-8 max-w-[32px] select-none rounded-full text-center align-middle font-sans text-xs font-medium uppercase text-red-500 transition-all hover:bg-red-500/10 active:bg-red-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            type="button"
            data-ripple-dark="true"
          >

          </button>
        </div>
        <div className="p-6">
          <div className="flex items-center justify-between mb-3">
            <h5 className="block font-sans text-xl antialiased font-medium leading-snug tracking-normal text-blue-gray-900">
          {name}
            </h5>
            <p className="flex items-center gap-1.5 font-sans text-base font-normal leading-relaxed text-blue-gray-900 antialiased">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
                className="-mt-0.5 h-5 w-5 text-yellow-700"
              >
                <path
                  fillRule="evenodd"
                  d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                  clipRule="evenodd"
                ></path>
              </svg>
              {
  reviews && reviews.length > 0 ? (
    <p>{reviews[0].rating} </p>
  ) : (
    <p>No reviews available</p>
  )
}

            </p>
          </div>
          {/* <p className="block font-sans text-base antialiased font-light leading-relaxed text-gray-700">
            Enter a freshly updated and thoughtfully furnished peaceful home
            surrounded by ancient trees, stone walls, and open meadows.
          </p> */}
         <div className="flex flex-wrap items-center gap-3 mt-4">
  <div className="bg-[#301934] text-white p-2 px-3 rounded-xl">
    <span className="font-bold text-sm">Room Size:</span> {roomSize}
  </div>
  <div className="bg-[#301934] text-white p-2 px-3 rounded-xl">
    <span className="font-bold text-sm">Price:</span> ${pricePerNight} per Night
  </div>
  <div className="bg-[#301934] text-white p-2 px-3 rounded-xl">
    <span className="font-bold text-sm">Availability:</span> {availability}
  </div>
  <div className="bg-[#301934] text-white p-2 px-3 rounded-xl">
    <span className="font-bold text-sm">review:</span> {reviews.length}
  </div>
</div>
{specialOffers && (
  <div className="mt-4">
    <p className="font-bold text-sm">Special Offers:</p>
    <p>{specialOffers}</p>
  </div>
)}

        </div>
        <div className="p-6 pt-3">
        
        <Link to={`/RoomDetails/${_id}`}>
        
        
        <button
            className="block w-full select-none rounded-lg bg-[#1a43bf] py-3.5 px-7 text-center align-middle font-sans text-sm font-bold uppercase text-white shadow-md shadow-[#DBDBDB]/20 transition-all hover:shadow-lg hover:shadow-[#DBDBDB]/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            type="button"
            data-ripple-light="true"
          >
            Details
          </button>
        
        </Link>
        </div>
      </div>
    );
};

export default RoomsCards;