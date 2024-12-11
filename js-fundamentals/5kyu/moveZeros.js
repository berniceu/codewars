function moveZeros(arr) {
    let zeros = []
    for(let i = 0; i < arr.length; i++){
      if(arr[i] === 0){
        zeros.push(arr[i])
        arr.splice(i, 1)
        i--
      }
    }
    return arr.concat(zeros)
  }