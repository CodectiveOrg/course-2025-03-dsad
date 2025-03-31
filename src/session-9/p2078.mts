function maxDistance(colors: number[]): number {
  let maxDistance = 0;

  colors.forEach((color, i) => {
    if (color !== colors[0] && i > maxDistance) {
      maxDistance = i;
    }

    if (color !== colors.at(-1)! && colors.length - 1 - i > maxDistance) {
      maxDistance = colors.length - 1 - i;
    }
  });

  return maxDistance;
}

console.log(maxDistance([1, 1, 1, 6, 1, 1, 1]));
console.log(maxDistance([1, 8, 3, 8, 3]));
console.log(maxDistance([0, 1]));
