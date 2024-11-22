function findShort(s){
    const sortedStr = s.split(" ").sort((a, b) => a.length - b.length);
    return sortedStr[0].length
  }