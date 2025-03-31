function largestNumber(nums: number[]): string {
  const strings = nums.map((x) => x.toString());

  strings.sort((a, b) => {
    if (a + b > b + a) {
      return -1;
    }

    if (a + b < b + a) {
      return 1;
    }

    return 0;
  });

  if (strings[0] === "0") {
    return "0";
  }

  return strings.join("");
}

console.log(largestNumber([10, 2]));
console.log(largestNumber([3, 30, 34, 5, 9]));
