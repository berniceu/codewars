function findAverage(array) {
    return array.length === 0 ? 0 : array.reduce((a, b) => a + b) / array.length
  }