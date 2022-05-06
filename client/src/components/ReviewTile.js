import React from "react"

const ReviewTile = ({ vibe, reviewText, rating, price, noiseLevel }) => {
  return(
    <div className="">
      <h5>{vibe}</h5>
      <p>{reviewText}</p>
      <p>{rating}</p>
      <p>{price}</p>
      <p>{noiseLevel}</p>
    </div>
  )
}

export default ReviewTile