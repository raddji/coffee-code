import React from "react"
import ReviewIcons from "./ReviewIcons"

const ReviewTile = ({ vibe, reviewText, rating, price, noiseLevel }) => {
  
  return(
    <div className="review-tile">
      <h5>{vibe}</h5>
      <p>{reviewText}</p>
      <div className="review-rating">
        Rating:
        <ReviewIcons 
          fileName="coffee-bean.png"
          quantity={rating}
        />
      </div>
      <div className="review-rating">
        Price Range:
        <ReviewIcons 
          fileName="dollar-symbol.png"
          quantity={price}
        />
      </div>
      <div className="review-rating">
        Noise Level:
        <ReviewIcons 
          fileName="megaphone.png"
          quantity={noiseLevel}
        />
      </div>
    </div>
  )
}

export default ReviewTile