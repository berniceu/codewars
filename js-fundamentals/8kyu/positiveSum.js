function positiveSum(arr) {
    return arr.reduce((sum, num) => {
      return num > 0 ? sum + num : sum;
    }, 0);
  }