function groupAnagrams(strs: string[]): string[][] {
  const map = new Map<string, string[]>();

  for (let i = 0; i < strs.length; i++) {
    const hashedStr = hash(strs[i]);

    if (!map.has(hashedStr)) {
      map.set(hashedStr, []);
    }

    const currentValue = map.get(hashedStr)!;
    const newValue = [...currentValue, strs[i]];

    map.set(hashedStr, newValue);
  }

  return Array.from(map.values());
}

function hash(input: string): string {
  const counts = new Array(26).fill(0);

  for (let i = 0; i < input.length; i++) {
    counts[input.charCodeAt(i) - 97]++;
  }

  return counts.toString();
}

console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));
console.log(groupAnagrams([""]));
console.log(groupAnagrams(["a"]));
