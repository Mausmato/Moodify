import ReviewBox from "./ReviewBox";
import { useState } from "react";
import "./ReviewsList.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { boxes } from "../Box.ts";

const ReviewsList = () => {
  const reviews = [];
  boxes.forEach((element) => {
    reviews.push(
      <ReviewBox name={element.name} description={element.description} />
    );
  });

  const [visibleReviews, setVisibleReviews] = useState(3);

  const showMoreReviews = () => {
    if (visibleReviews === 9) {
      setVisibleReviews(visibleReviews + 1);
    } else {
      setVisibleReviews(visibleReviews + 3);
    }
  };

  return (
    <div className="container" id="reviews-container">
      <h2 className="review-text">See what our users have to say</h2>
      <div className="row justify-content-md-center">
        {reviews.slice(0, visibleReviews).map((review, index) => review)}
      </div>
      <div className="row justify-content-md-center" id="button-div">
        <div className="col-md-auto text-center">
          <button onClick={showMoreReviews} id="show-more-button">
            Show More
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReviewsList;
