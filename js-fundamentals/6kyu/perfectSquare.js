function findNextSquare(sq) {
    let sqRoot = Math.sqrt(sq);
    if(sqRoot % 1 !== 0){
      return -1;
    } 
    else {
      sqRoot += 1;
      return sqRoot ** 2;
    }
    
  }