import React from "react";

const DeleteReview = props => {

  const deleteReview = async () => {
    try {
      const response = await fetch(`/api/v1/reviews/${props.reviewId}`, {
        method: "DELETE",
        headers: new Headers({
          "Content-Type": "application/json"
        })
      })
      if (!response.ok) {
        throw new Error(`${response.status} (${response.statusText})`)
      }
      props.handleDelete(props.reviewId)
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <div>
      <button onClick={deleteReview} className='button'>Delete Review</button>
    </div>
  )
}

export default DeleteReview