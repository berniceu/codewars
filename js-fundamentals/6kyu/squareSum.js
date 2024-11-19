function squareSum(numbers){
    let arr = numbers.map((num) => num ** 2)
    return arr.reduce((a, b) => a + b, 0)
  }