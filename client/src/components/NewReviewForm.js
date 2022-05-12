import React, { useState } from "react";
import isValid from "../services/isValid.js";

const NewReviewForm = ({ postReview }) => {
  const [newReview, setNewReview] = useState({
    rating: "",
    price: "",
    noiseLevel: "",
    vibe: "",
    reviewText: ""
  });

  const handleChange = (event) => {
    setNewReview({
      ...newReview,
      [event.currentTarget.name]: event.currentTarget.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (isValid(newReview)) {
      postReview(newReview);
      clearForm();
    }
  };

  const clearForm = () => {
    setNewReview({
      rating: "",
      price: "",
      noiseLevel: "",
      vibe: "",
      reviewText: ""
    });
  };

  const optionFactory = (symbol, title) => {
    let symbolHolder = symbol;
    let optionArray = [];

    const firstValue = <option key={0} value={""}>{`--Please choose a ${title}--`}</option>
    optionArray.push(firstValue);

    for (let i = 0; i < 5; i++) {
      optionArray.push(<option key={i + 1} value={(i + 1).toString()}>{symbolHolder}</option>);
      symbolHolder += symbol;
    }
    return optionArray;
  }

  const ratingOptions = optionFactory("*", "rating")
  const priceOptions = optionFactory("$", "price")
  const noiseLevelOptions = optionFactory("*", "noise level")

  return (
    <div>
      <h4>Leave a Review</h4>
      <form onSubmit={handleSubmit}>
        <label htmlFor="rating">
          Rating:
          <select
            name="rating"
            id="rating"
            onChange={handleChange}
            value={newReview.rating}>
            {ratingOptions}
          </select>
        </label>

        <label htmlFor="price">
          Price Range:
          <select
            name="price"
            id="price"
            onChange={handleChange}
            value={newReview.price}>
            {priceOptions}
          </select>
        </label>

        <label htmlFor="noiseLevel">
          Noise Level:
          <select
            name="noiseLevel"
            id="noiseLevel"
            onChange={handleChange}
            value={newReview.noiseLevel}>
            {noiseLevelOptions}
          </select>
        </label>

        <label htmlFor="vibe">
          Vibe:
          <input
            type="text"
            name="vibe"
            placeholder="What's the vibe here?"
            value={newReview.vibe}
            onChange={handleChange}
          />
        </label>

        <label htmlFor="reviewText">
          <textarea
            id="reviewText"
            name="reviewText"
            placeholder="Tell us more:"
            rows="5"
            cols="33"
            onChange={handleChange}
            value={newReview.reviewText}>
          </textarea>
        </label>
        <input type="submit" value="Submit This" className="button-cursor"/>
      </form>
    </div>
  );
};

export default NewReviewForm;
