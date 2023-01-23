function telephoneCheck(str) {
    const regex = /^([\d]{10}|1?\s?(\(\d\d\d\)|[\d]{3})[\s-]?[\d]{3}[\s-][\d]{4})$/
    return regex.test(str);
}

/**
 * Tests cases
 */

console.log(`
    Passed: ${telephoneCheck("1 555-555-5555") === true}
    Passed: ${telephoneCheck("1 (555) 555-5555") === true}
    Passed: ${telephoneCheck("5555555555") === true}
    Passed: ${telephoneCheck("555-555-5555") === true}
    Passed: ${telephoneCheck("(555)555-5555") === true}
    Passed: ${telephoneCheck("1(555)555-5555") === true}
    Passed: ${telephoneCheck("555-5555") === false}
    Passed: ${telephoneCheck("5555555") === false}
    Passed: ${telephoneCheck("1 555)555-5555") === false}
    Passed: ${telephoneCheck("1 555 555 5555") === true}
    Passed: ${telephoneCheck("1 456 789 4444") === true}
    Passed: ${telephoneCheck("123**&!!asdf#") === false}
    Passed: ${telephoneCheck("55555555") === false}
    Passed: ${telephoneCheck("(6054756961)") === false}
    Passed: ${telephoneCheck("2 (757) 622-7382") === false}
    Passed: ${telephoneCheck("0 (757) 622-7382") === false}
    Passed: ${telephoneCheck("-1 (757) 622-7382") === false}
    Passed: ${telephoneCheck("2 757 622-7382") === false}
    Passed: ${telephoneCheck("10 (757) 622-7382") === false}
    Passed: ${telephoneCheck("27576227382") === false}
    Passed: ${telephoneCheck("(275)76227382") === false}
    Passed: ${telephoneCheck("2(757)6227382") === false}
    Passed: ${telephoneCheck("2(757)622-7382") === false}
    Passed: ${telephoneCheck("555)-555-5555") === false}
    Passed: ${telephoneCheck("(555-555-5555") === false}
    Passed: ${telephoneCheck("(555)5(55?)-5555") === false}
    Passed: ${telephoneCheck("55 55-55-555-5") === false}
    Passed: ${telephoneCheck("11 555-555-5555") === false}
`)