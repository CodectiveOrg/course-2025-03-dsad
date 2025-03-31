function minimumMoves(s: string): number {
  let cost = 0;

  let i = 0;
  while (i < s.length) {
    if (s[i] === "X") {
      cost += 1;
      i += 3;
    } else {
      i++;
    }
  }

  return cost;
}

console.log(minimumMoves("XXX"));
console.log(minimumMoves("XXOX"));
console.log(minimumMoves("OOOO"));
