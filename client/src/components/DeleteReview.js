import React, { useState } from "react";

const DeleteReview = props => {
  const [reviews, setReviews] = useState({

  })
  const deleteReview = async () => {
    try {
      const response = await fetch("/api/v1/coffee-shops/:id/reviews", { 
        method: "DELETE",
        headers: new Headers({
          "Content-Type": "application/json"
        })
      })
      const body = await response.json()
      
      
      
      

    } catch (error) {


    }
  }






  return (
    <div>
      <button className='button'>Delete Review</button>
    </div>
  )
}

export default DeleteReview