import React, { useState } from "react";

const NewReviewForm = ({ postReview }) => {
  const [newReview, setNewReview] = useState({});

  const handleChange = (event) => {
    setNewReview({
      ...newReview,
      [event.currentTarget.name]: event.currentTarget.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    postReview(newReview);
    clearForm();
  };

  const clearForm = () => {
    setNewReview({});
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="rating">
        Rating:
        <select name="rating" id="rating" onChange={handleChange}>
          <option value="">--Please choose a rating--</option>
          <option value="*">*</option>
          <option value="**">**</option>
          <option value="***">***</option>
          <option value="****">****</option>
        </select>
      </label>
      <label htmlFor="price">
        Price Range:
        <select name="price" id="price" onChange={handleChange}>
          <option value="">--Please choose a price range--</option>
          <option value="$">$</option>
          <option value="$$">$$</option>
          <option value="$$$">$$$</option>
          <option value="$$$$">$$$$</option>
        </select>
      </label>
      <label htmlFor="noiseLevel">
        Noise Level:
        <select name="noiseLevel" id="noiseLevel" onChange={handleChange}>
          <option value="">--Please choose a noise level--</option>
          <option value="*">*</option>
          <option value="**">**</option>
          <option value="***">***</option>
          <option value="****">****</option>
        </select>
      </label>
      <label htmlFor="vibe">
        Vibe:
        <input
          type="text"
          name="vibe"
          placeholder="What's the vibe here?"
          onChange={handleChange}
        />
      </label>
      <label htmlFor="reviewText">
        Description:
        <input type="text" name="reviewText" placeholder="Tell us more:" onChange={handleChange} />
      </label>
      <input type="submit" value="Submit" />
    </form>
  );
};

export default NewReviewForm;
