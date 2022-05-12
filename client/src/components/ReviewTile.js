import React, { useState } from "react"
import ReviewIcons from "./ReviewIcons"
import DeleteReview from "./DeleteReview"
import VotesSection from "./VotesSection"

const ReviewTile = ({ vibe, reviewText, rating, price, noiseLevel, id, voteData, handleDelete, canBeDeleted }) => {
  const [currentVoteData, setCurrentVoteData] = useState(voteData) 

  const updateVoteData = (voteValue) => {
    const delta = { ...currentVoteData, userVoteRecordExists: true }
    if (currentVoteData.userHasUpvoted) {
      delta.userHasUpvoted = false
      if (voteValue === 0) {
        delta.sum--
      }
      if (voteValue === -1) {
        delta.userHasDownvoted = true
        delta.sum -= 2
      }
      return delta
    } 

    if (currentVoteData.userHasDownvoted) {
      delta.userHasDownvoted = false
      if (voteValue === 0) {
        delta.sum++
      }

      if (voteValue === 1) {
        delta.userHasUpvoted = true
        delta.sum += 2
      }
      return delta
    }

    if (voteValue === 1 && !currentVoteData.userHasUpvoted) {
      delta.userHasUpvoted = true
      delta.userHasDownvoted = false
      delta.sum++
      return delta
    }

    if (voteValue === -1 && !currentVoteData.userHasDownvoted) {
      delta.userHasDownvoted = true
      delta.userHasUpvoted = false
      delta.sum--
      return delta
    }
  }

  const handleVote = async (voteValue) => {
    try {
      const response = await fetch(`/api/v1/reviews/${id}/votes`, {
        method: "POST",
        headers: {
           "Content-Type": "application/json"
          },
        body: JSON.stringify({ voteValue, userVoteRecordExists: currentVoteData.userVoteRecordExists })
      })
      if (!response.ok) {
        throw new Error(`${response.status} (${response.statusText})`)
      }
      const delta = updateVoteData(parseInt(voteValue))
      setCurrentVoteData(delta)
    } catch(error) {
      console.error(error)
    }
  }

  const deleteButton = canBeDeleted ? <DeleteReview reviewId={id} handleDelete={handleDelete} /> : ""

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
      <div>
        {deleteButton}
      </div>
      <VotesSection 
        reviewId={id} 
        handleVote={handleVote} 
        {...currentVoteData}
      />
    </div>
  )
}

export default ReviewTile