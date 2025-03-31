function minTimeToType(word: string): number {
  let cost = 0;
  let pointer = 0;

  for (const letter of word) {
    const targetIndex = letter.charCodeAt(0) - 97;

    const optionA = Math.abs(targetIndex - pointer);
    const optionB = 26 - optionA;

    cost += Math.min(optionA, optionB) + 1;

    pointer = targetIndex;
  }

  return cost;
}

console.log(minTimeToType("abc"));
console.log(minTimeToType("bza"));
console.log(minTimeToType("zjpc"));
