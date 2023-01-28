function palindrome(str) {
  const word = str.replace(/[^a-zA-Z0-9]+/g, "").toLowerCase();
  if (word.length % 2 === 0) {
    const wl = word.slice(0, word.length / 2);
    const wlInv = [...wl].reverse().join("");
    const wr = word.slice(word.length / 2);
    return wlInv === wr ? true : false;
  } else {
    const wl = word.slice(0, Math.round(word.length / 2) - 1);
    const wlInv = [...wl].reverse().join("");
    const wr = word.slice(Math.ceil(word.length / 2));
    return wlInv === wr ? true : false;
  }
}

/**
 * Tests cases
 */

const fnCases = require('fn-cases')

fnCases([
  [palindrome("eye"), true],
  [palindrome("_eye"), true],
  [palindrome("race car"), true],
  [palindrome("not a palindrome"), false],
  [palindrome("A man, a plan, a canal. Panama"), true],
  [palindrome("never odd or even"), true],
  [palindrome("nope"), false],
  [palindrome("almostomla"), false],
  [palindrome("My age is 0, 0 si ega ym."), true],
  [palindrome("1 eye for of 1 eye."), false],
  [palindrome("0_0 (: /- :) 0-0"), true],
  [palindrome("five|_/|four"), false]
])