function openOrSenior(data){
    let arr = []
    for (let i = 0; i < data.length; i++){
      arr.push(data[i][0] >= 55 && data[i][1] > 7 ? 'Senior' : 'Open')
      
    }
    return arr
  }