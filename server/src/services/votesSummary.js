const votesSummary = (votesArray, userId) => {
  const response = {
    userHasUpvoted: false, 
    userHasDownvoted: false,
    voteRecordExists: false, 
    sum: 0 
  }

  votesArray.forEach((voteRecord) => {
    response.sum += voteRecord.vote
    if (voteRecord.userId === userId) {
      response.voteRecordExists = true
      
      if (voteRecord.vote === 1) {
        response.userHasUpvoted = true
      }
      if (voteRecord.vote === -1) {
        response.userHasDownvoted = true
      }
    }
  })

  return response
}

export default votesSummary