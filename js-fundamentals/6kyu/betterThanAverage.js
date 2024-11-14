function betterThanAverage(classPoints, yourPoints) {
    let totalPoints = classPoints.reduce((a, b ) => a + b)
    let avgPoints = totalPoints / classPoints.length;
    return yourPoints > avgPoints
  }
  