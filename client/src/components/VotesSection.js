import React from 'react'

const VotesSection = (props) => {
  const { userHasUpvoted, userHasDownvoted, sum, handleVote } = props

  const handleClick = async (event) => {
    event.preventDefault()
    handleVote(event.currentTarget.value)
  }

  const upvoteButtonValue = userHasUpvoted ? 0 : 1
  const downvoteButtonValue = userHasDownvoted ? 0 : -1

  return (
    <div>
      <label htmlFor="upvote" >
        <button className="button" onClick={handleClick} id="upvote" value={upvoteButtonValue}>^</button>
      </label>
      Vote Total: {sum}
      <label htmlFor="downvote" >
        <button className="button" onClick={handleClick} id="downvote" value={downvoteButtonValue}>v</button>
      </label>
    </div>
  )
}

export default VotesSection