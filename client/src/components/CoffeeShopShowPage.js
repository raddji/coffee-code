import React, { useState, useEffect } from "react";
import NewReviewForm from "./newReviewForm";
import ErrorList from "./layout/ErrorList";
import translateServerErrors from "../services/translateServerErrors.js";
import ReviewTile from "./ReviewTile";

const CoffeeShopShowPage = (props) => {
  const [coffeeShop, setCoffeeShop] = useState({ reviews: [] });
  const [errors, setErrors] = useState({});

  const { id } = props.match.params;
  const getCoffeeShop = async () => {
    try {
      const response = await fetch(`/api/v1/coffee-shops/${id}`);
      if (!response.ok) {
        throw new Error(`${response.status} (${response.statusText})`);
      }
      const body = await response.json();
      setCoffeeShop(body.coffeeShop);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getCoffeeShop();
  }, []);

  const postReview = async (reviewFormData) => {
    try {
      const response = await fetch(`/api/v1/coffee-shops/${id}/reviews`, {
        method: "POST",
        headers: new Headers({
          "Content-Type": "application/json",
        }),
        body: JSON.stringify(reviewFormData),
      });
      if (!response.ok) {
        if (response.status === 422) {
          const body = await response.json();
          const newErrors = translateServerErrors(body.errors);
          return setErrors(newErrors);
        } else {
          const errorMessage = `${response.status} (${response.statusText})`;
          const error = new Error(errorMessage);
          throw error;
        }
      } else {
        const body = await response.json();
        const updatedReviews = coffeeShop.reviews.concat(body.review);
        setErrors([]);
        setCoffeeShop({ ...coffeeShop, reviews: updatedReviews });
      }
    } catch (error) {
      console.error(`Error in fetch: ${error.message}`);
    }
  };

  const reviewTiles = coffeeShop.reviews.map((review) => {
    return <ReviewTile key={review.id} {...review} />
  })


  const wifiDisplay = coffeeShop.wifi ? "Wifi Available" : "No Wifi";
  const parkingDisplay = coffeeShop.parking ? "Parking Available" : "No Parking";

  return (
    <div className="show-page-container">
      <h1>{coffeeShop.name}</h1>
      <p>{coffeeShop.address}</p>
      <p>
        {coffeeShop.city} {coffeeShop.zip}
      </p>
      <p>{coffeeShop.hours}</p>
      <ul>
        <li>{wifiDisplay}</li>
        <li>{parkingDisplay}</li>
      </ul>
      {reviewTiles}
      <ErrorList errors={errors} />
      <NewReviewForm postReview={postReview} />
    </div>
  );
};

export default CoffeeShopShowPage;
