const updateVoteData = (voteValue, currentVoteData) => {
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

export default updateVoteData