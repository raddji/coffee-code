import React, { useState, useEffect } from "react";

const CoffeeShopReviewList = (props) => {
  const { id } = props;
  const [reviews, setReviews] = useState([]);
  
  const getReviews = async () => {
    try {
      const response = await fetch(`/api/v1/coffeeShops/${id}/reviews`);
      if (!response.ok) {
        throw new Error(`${response.status} (${response.statusText})`);
      }
      const body = await response.json();
      setReviews(body.reviews);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    getReviews();
  }, []);

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
