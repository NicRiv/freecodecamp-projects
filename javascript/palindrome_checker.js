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

console.log(`Passed: ${palindrome("eye") === true}
Passed: ${palindrome("_eye") === true}
Passed: ${palindrome("race car") === true}
Passed: ${palindrome("not a palindrome") === false}
Passed: ${palindrome("A man, a plan, a canal. Panama") === true}
Passed: ${palindrome("never odd or even") === true}
Passed: ${palindrome("nope") === false}
Passed: ${palindrome("almostomla") === false}
Passed: ${palindrome("My age is 0, 0 si ega ym.") === true}
Passed: ${palindrome("1 eye for of 1 eye.") === false}
Passed: ${palindrome("0_0 (: /- :) 0-0") === true}
Passed: ${palindrome("five|_/|four") === false}`);
