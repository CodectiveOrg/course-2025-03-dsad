function isPalindrome(s: string): boolean {
  const text = normalize(s);

  let left = 0;
  let right = text.length - 1;

  while (left <= right) {
    if (text[left] !== text[right]) {
      return false;
    }

    left++;
    right--;
  }

  return true;
}

function normalize(s: string): string {
  let result = "";
  for (let i = 0; i < s.length; i++) {
    const character = s[i].toLowerCase();

    if (isAlphanumeric(character)) {
      result += character;
    }
  }
  return result;
}

function isAlphanumeric(character: string): boolean {
  const code = character.charCodeAt(0);
  return (48 <= code && code <= 57) || (97 <= code && code <= 122);
}

console.log(isPalindrome("A man, a plan, a canal: Panama"));
console.log(isPalindrome("race a car"));
console.log(isPalindrome(" "));
