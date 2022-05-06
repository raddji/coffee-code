import React, { useState } from "react";

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

  const isValid = () => {
    const requiredFields = ["rating", "vibe", "reviewText"];

    for (let i = 0; i < requiredFields.length; i++) {
      let currentFieldValue = requiredFields[i];
      if (newReview[currentFieldValue] === "") {
        return false;
      }
    }
    return true;
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    if (isValid()) {
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

    const firstValue = <option value={""}>{`--Please choose a ${title}--`}</option>
    optionArray.push(firstValue);

    for (let i = 0; i < 5; i++) {
      optionArray.push(<option value={(i + 1).toString()}>{symbolHolder}</option>);
      symbolHolder += symbol;
    }
    return optionArray;
  }

  const ratingOptions = optionFactory("*", "rating")
  const priceOptions = optionFactory("$", "price")
  const noiseLevelOptions = optionFactory("*", "noise level")

  return (
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
        Description:
        <input
          type="text"
          name="reviewText"
          placeholder="Tell us more:"
          onChange={handleChange}
          value={newReview.reviewText} />
      </label>

      <input type="submit" value="Submit" />

    </form>
  );
};

export default NewReviewForm;
