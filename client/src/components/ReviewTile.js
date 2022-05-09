import React, { useState, useEffect } from "react"
import ReviewIcons from "./ReviewIcons"
import VotesSection from "./VotesSection"

const ReviewTile = ({ vibe, reviewText, rating, price, noiseLevel, id, coffeeShopId }) => {
  const [voteData, setVoteData] = useState({
    sum: 0,
    userHasUpvoted: false,
    userHasDownvoted: false
  })

  const getVoteData = async () => {
    try {
      const response = await fetch(`/api/v1/coffee-shops/${coffeeShopId}/reviews/${id}/votes`)
      if (!response.ok) {
        throw new Error(`${response.status} (${response.statusText})`)
      }
      const body = await response.json()
      setVoteData(body)
    } catch(error) {
      console.error(error)
    }
  }

  useEffect(() => {
    getVoteData()
  }, [])

  const handleVote = async (voteValue) => {
    if (voteData.userHasUpvoted || voteData.userHasDownvoted) {
      try {
        const response = await fetch(`/api/v1/coffee-shops/${coffeeShopId}/reviews/${id}/votes`, {
          method: "patch",
          headers: { "Content-Type": "application/json" },
          body: { voteValue }
        })
        if (!response.ok) {
          throw new Error(`${response.status} (${response.statusText})`)
        }
        const body = response.json()
        setVoteData(body)
      } catch(error) {
        console.error(error)
      }
    } else {
      try {
        const response = await fetch(`/api/v1/coffee-shops/${coffeeShopId}/reviews/${id}/votes`, {
          method: "post",
          headers: { "Content-Type": "application/json" },
          body: { voteValue }
        })
        if (!response.ok) {
          throw new Error(`${response.status} (${response.statusText})`)
        }
        const body = await response.json()
        setVoteData(body)
      } catch(error) {
        console.error(error)
      }
    }
  }

  return(
    <div className="">
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
      <VotesSection 
        reviewId={id} 
        handleVote={handleVote} 
        {...voteData}
      />
    </div>
  )
}

export default ReviewTile