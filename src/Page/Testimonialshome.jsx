import { useLoaderData } from "react-router-dom";
import SingelReview from "./SingelReview";
import { useState } from "react";

const Testimonialshome = () => {
  const allReview = useLoaderData();
  const [displayedReviews, setDisplayedReviews] = useState(6);
  const initialReviewsToShow = 6;

  const showMoreReviews = () => setDisplayedReviews(displayedReviews + initialReviewsToShow);
  const showLessReviews = () => setDisplayedReviews(initialReviewsToShow);

  return (
    <div className="rounded-xl px-2">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {allReview.slice(0, displayedReviews).map((singelReview) => (
          <SingelReview key={singelReview.id} singelReview={singelReview} />
        ))}
      </div>
      {allReview.length > displayedReviews && (
        <div className="text-center my-4">
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded"
            onClick={showMoreReviews}
          >
            See More Reviews
          </button>
        </div>
      )}
      {displayedReviews > initialReviewsToShow && (
        <div className="text-center my-4">
          <button
            className="bg-red-500 text-white px-4 py-2 rounded"
            onClick={showLessReviews}
          >
            See Less Reviews
          </button>
        </div>
      )}
    </div>
  );
};

export default Testimonialshome;
