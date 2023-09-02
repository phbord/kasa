function createRatingArray(data) {
  let res = [];
  let count = 0;
  const ratings = Number(data.rating);

  while (count < 5) {
    count < ratings ? res.push(true) : res.push(false)
    count++
  }
  return res
}

export default createRatingArray;