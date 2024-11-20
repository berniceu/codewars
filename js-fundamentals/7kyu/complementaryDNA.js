function dnaStrand(dna){
    let count = '';
    for(let i = 0; i < dna.length; i++){
      if(dna[i] == 'A'){
        count += 'T';
      } else if(dna[i] == 'T'){
        count += 'A'
      } else if(dna[i] == 'C'){
        count += 'G'
      } else if (dna[i] == 'G'){
        count += 'C'
      }
    }
    return count
  }