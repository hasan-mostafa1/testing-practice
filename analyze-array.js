function analyzeArray(arr) {
  const average =
    arr.reduce((sum, value) => {
      return (sum += value);
    }, 0) / arr.length;

  arr.sort((a, b) => a - b);
  return {
    average,
    min: arr[0],
    max: arr[arr.length - 1],
    length: arr.length,
  };
}

export { analyzeArray };
