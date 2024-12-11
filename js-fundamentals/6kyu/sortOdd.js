function sortArray(array) {
    let oddNumbers = array.filter(el => el % 2 !== 0).sort((a, b) => a - b)
    let oddIndex = 0
    return array.map(num => {
      if (num % 2 !== 0){
        return oddNumbers[oddIndex++]
      }
      return num
    })
  }