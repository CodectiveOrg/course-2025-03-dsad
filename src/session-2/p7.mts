function reverse(x: number): number {
  if (x === 0) {
    return 0;
  }

  let isNegative = false;
  if (x < 0) {
    x = -x;
    isNegative = true;
  }

  const digit = x % 10;
  const rank = Math.floor(Math.log10(x));
  const reversedDigit = digit * Math.pow(10, rank);

  const other = Math.floor(x / 10);
  const reversedOther = reverse(other);

  const result = (isNegative ? -1 : 1) * (reversedDigit + reversedOther);
  return isInt(result) ? result : 0;
}

function isInt(x: number): boolean {
  return -2_147_483_648 <= x && x <= 2_147_483_647;
}

console.log(reverse(123));
console.log(reverse(-123));
console.log(reverse(120));
