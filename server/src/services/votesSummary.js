const votesSummary = (votesArray, userId) => {
  const voteData = {
    userHasUpvoted: false, 
    userHasDownvoted: false,
    userVoteRecordExists: false, 
    sum: 0 
  }

  votesArray.forEach((voteRecord) => {
    voteData.sum += voteRecord.value
    if (voteRecord.userId === userId) {
      voteData.userVoteRecordExists = true
      
      if (voteRecord.value === 1) {
        voteData.userHasUpvoted = true
      }
      if (voteRecord.value === -1) {
        voteData.userHasDownvoted = true
      }
    }
  })

  return voteData
}

export default votesSummary