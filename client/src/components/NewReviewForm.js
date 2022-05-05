import React, { useState } from "react";

const NewReviewForm = ({ postReview }) => {
  const [newReview, setNewReview] = useState({})

  const handleChange = (event) => {
    setNewReview({
      ...newReview,
      [event.currentTarget.name]: event.currentTarget.value
    })
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    postReview(newReview)
    clearForm()
  }

  const clearForm = () => {
    setNewReview({})
  }

  return (
  <form onSubmit={handleSubmit}>
    <label for="rating">Rating:
    <select name="rating" id="rating-select" onChange={handleChange}>
        <option value="">--Please choose a rating--</option>
        <option value="*">*</option>
        <option value="**">**</option>
        <option value="***">***</option>
        <option value="****">****</option>
      </select>
    </label>
    <label for="price-select">Price Range:
      <select name="price" id="price-select" onChange={handleChange}>
        <option value="">--Please choose a price range--</option>
        <option value="$">$</option>
        <option value="$$">$$</option>
        <option value="$$$">$$$</option>
        <option value="$$$$">$$$$</option>
      </select>
    </label>
    <label for="noise-level">Noise Level:
      <select name="noise" id="noise-select" onChange={handleChange}>
          <option value="">--Please choose a noise level--</option>
          <option value="*">*</option>
          <option value="**">**</option>
          <option value="***">***</option>
          <option value="****">****</option>
      </select>
    </label>
    <label for="vibe">Vibe:
      <input type="text" name="vibe" placeholder="What's the vibe here?" onChange={handleChange}/>
    </label>
    <label for="description">Description:
      <input type="text" name="description" placeholder="Tell us more:" onChange={handleChange}/>
    </label>

    <input type="submit" value="Submit" />
  </form>
  )
}

export default NewReviewForm;