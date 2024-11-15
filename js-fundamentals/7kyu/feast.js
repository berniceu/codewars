function feast(beast, dish) {
    return dish.startsWith(beast[0]) && dish.endsWith(beast[beast.length - 1]);
  }

console.log(feast("bear", "meat"))