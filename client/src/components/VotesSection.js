import React from 'react'

const VotesSection = (props) => {
  const { userHasUpvoted, userHasDownvoted, sum, handleVote } = props

  const handleClick = async (event) => {
    event.preventDefault()
    handleVote(event.currentTarget.value)
  }

  const upvoteButton = userHasUpvoted ? { value: 0, className: "upvoted" } : { value: 1, className: "" }
  const downvoteButton = userHasDownvoted ? { value: 0, className: "downvoted" } : { value: -1, className: "" }

  return (
    <div className="review-votes-section">
      <label htmlFor="upvote" />
      <button 
        className={`vote-button ${upvoteButton.className}`} 
        onClick={handleClick} 
        id="upvote" 
        value={upvoteButton.value}>
          ˄
      </button>
      <p className="vote-total">{sum}</p>
      <label htmlFor="downvote" />
      <button 
        className={`vote-button ${downvoteButton.className}`} 
        onClick={handleClick} 
        id="downvote" 
        value={downvoteButton.value}>
          ˅
      </button>
    </div>
  )
}

export default VotesSection