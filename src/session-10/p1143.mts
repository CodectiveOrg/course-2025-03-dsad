function longestCommonSubsequence(text1: string, text2: string): number {
  const table = Array.from({ length: text1.length + 1 }, () =>
    Array.from({ length: text2.length + 1 }, () => 0),
  );

  for (let row = 1; row <= text1.length; row++) {
    for (let col = 1; col <= text2.length; col++) {
      if (text1[row - 1] === text2[col - 1]) {
        table[row][col] = table[row - 1][col - 1] + 1;
      } else {
        table[row][col] = Math.max(table[row - 1][col], table[row][col - 1]);
      }
    }
  }

  return table[text1.length][text2.length];
}

console.log(longestCommonSubsequence("abcde", "ace"));
console.log(longestCommonSubsequence("abc", "abc"));
console.log(longestCommonSubsequence("abc", "def"));
