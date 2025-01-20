function wordsToMarks(string){
    let alphabets = [
      'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 
      'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 
      'u', 'v', 'w', 'x', 'y', 'z'
    ];
    
    let alphaNum = {}
    for(let i = 0; i < alphabets.length; i++) {
      alphaNum[alphabets[i]] = i + 1
    }
    
    return string.split('').reduce((sum, char) => sum + alphaNum[char], 0)
  }