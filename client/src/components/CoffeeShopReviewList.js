import React from "react";

const CoffeeShopReviewList = (props) => {
  const { reviews } = props;

  const listOfReviews = reviews.map((review) => {
    return (
      <li>
        <h5>{review.vibe}</h5>
        <p>{review.reviewText}</p>
        <p>{review.rating}</p>
        <p>{review.price}</p>
        <p>{review.noiseLevel}</p>
      </li>
    );
  });

  return <ul>{listOfReviews}</ul>;
};

export default CoffeeShopReviewList;
