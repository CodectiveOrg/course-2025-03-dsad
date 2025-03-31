function maxDistance(colors: number[]): number {
  const firstColor = colors[0];
  const lastColor = colors[colors.length - 1];

  let maxDistance = 0;

  colors.forEach((color, i) => {
    if (color !== firstColor && maxDistance < i) {
      maxDistance = i;
    }

    if (color !== lastColor && maxDistance < colors.length - 1 - i) {
      maxDistance = colors.length - 1 - i;
    }
  });

  return maxDistance;
}

console.log(maxDistance([1, 1, 1, 6, 1, 1, 1]));
console.log(maxDistance([1, 8, 3, 8, 3]));
console.log(maxDistance([0, 1]));
