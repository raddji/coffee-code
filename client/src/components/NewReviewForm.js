import React, { useState } from "react";

const NewReviewForm = ({ postReview }) => {
  const [newReview, setNewReview] = useState({})

  const handleInputChange = (event) => {
    setNewReview({
      ...newReview, 
      [event.currentTarget.name]: event.currentTarget.value
    })
  }

return (
  <form>
    <label for="rating">Rating:
    <select name="rating" id="rating-select">
        <option value="">--Please choose a rating--</option>
        <option value="*">$</option>
        <option value="**">$$</option>
        <option value="***">$$$</option>
        <option value="****">$$$</option>
      </select>
    </label>
    <label for="price-select">Price Range:
      <select name="price" id="price-select">
        <option value="">--Please choose a price range--</option>
        <option value="$">$</option>
        <option value="$$">$$</option>
        <option value="$$$">$$$</option>
        <option value="$$$$">$$$</option>
      </select>
    </label>
    <label for="noise-level">Noise Level:
      <select name="noise" id="noise-select">
          <option value="">--Please choose a noise level--</option>
          <option value="*">$</option>
          <option value="**">$$</option>
          <option value="***">$$$</option>
          <option value="****">$$$</option>
      </select>
    </label>
    <label for="vibe">
      <input type="text" name="vibe" />
    </label>
    <label for="description">
      <input type="text" name="description" />
    </label>
  </form>
)

}

export default NewReviewForm;