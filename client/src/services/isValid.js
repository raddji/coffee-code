const isValid = (formPayload) => {
  const requiredFields = ["rating", "vibe", "reviewText"];

  for (let i = 0; i < requiredFields.length; i++) {
    let currentFieldValue = requiredFields[i];
    if (formPayload[currentFieldValue] === "") {
      return false;
    }
  }
  return true;
}

export default isValid;