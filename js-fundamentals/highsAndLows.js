function highAndLow(numbers){
    const numberArray = numbers.split(" ")
    return `${Math.max(...numberArray)} ${Math.min(...numberArray)}`
  }