function isAnagram(s: string, t: string): boolean {
  if (s.length !== t.length) {
    return false;
  }

  const counts1 = new Array(26).fill(0);
  const counts2 = new Array(26).fill(0);

  for (let i = 0; i < s.length; i++) {
    counts1[s.charCodeAt(i) - 97]++;
    counts2[t.charCodeAt(i) - 97]++;
  }

  for (let i = 0; i < 26; i++) {
    if (counts1[i] !== counts2[i]) {
      return false;
    }
  }

  return true;
}

console.log(isAnagram("anagram", "nagaram"));
console.log(isAnagram("rat", "car"));
