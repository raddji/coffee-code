import React from 'react'

const ReviewIcons = ({ fileName, quantity }) => {
  const icons = []

  for (let i = 0; i < quantity; i++) {
    icons.push(
      <li key={i}>
        <img 
          className="review-icon"
          src={require(`../../public/images/${fileName}`).default}
        />
      </li>
    ) 
  }

  return (
    <ul className="icon-list">
      {icons}
    </ul>
  )
}

export default ReviewIcons