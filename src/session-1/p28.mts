function strStr(haystack: string, needle: string): number {
  let start = 0;

  while (start <= haystack.length - needle.length) {
    let index = 0;

    while (index < needle.length) {
      if (haystack[start + index] !== needle[index]) {
        break;
      }

      index++;
    }

    if (index >= needle.length) {
      return start;
    }

    start++;
  }

  return -1;
}

console.log(strStr("sadbutsad", "sad"));
console.log(strStr("leetcode", "leeto"));
