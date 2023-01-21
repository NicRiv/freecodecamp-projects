const R = [
    ['I', 'IV', 'V', 'IX'],
    ['X', 'XL', 'L', 'XC'],
    ['C', 'CD', 'D', 'CM'],
    ['M']
]

function convertToRoman(num) {
    let N = [...num.toString()].reverse()
    const T = N.length

    let ROM = ''

    for (let j = 0; j < T; j++) {
        if (N[j] >= 1 && N[j] < 4) {
            for (let k = 0; k <= N[j] - 1; k++) {
                ROM = R[j][0] + ROM
            }

        } else if (N[j] == 4) {
            ROM = R[j][1] + ROM

        } else if (N[j] >= 5 && N[j] < 9) {
            ROM = R[j][2] + convertToRoman((N[j] - 5) * Math.pow(10, j)) + ROM

        } else if (N[j] == 9) {
            ROM = R[j][3] + ROM
        }
    }

    return ROM
}

/**
 * Tests cases
 */

console.log(`
    Passed: ${convertToRoman(2) === 'II'}
    Passed: ${convertToRoman(3) === 'III'}
    Passed: ${convertToRoman(4) === 'IV'}
    Passed: ${convertToRoman(5) === 'V'}
    Passed: ${convertToRoman(9) === 'IX'}
    Passed: ${convertToRoman(12) === 'XII'}
    Passed: ${convertToRoman(16) === 'XVI'}
    Passed: ${convertToRoman(29) === 'XXIX'}
    Passed: ${convertToRoman(44) === 'XLIV'}
    Passed: ${convertToRoman(45) === 'XLV'}
    Passed: ${convertToRoman(68) === 'LXVIII'}
    Passed: ${convertToRoman(83) === 'LXXXIII'}
    Passed: ${convertToRoman(97) === 'XCVII'}
    Passed: ${convertToRoman(99) === 'XCIX'}
    Passed: ${convertToRoman(400) === 'CD'}
    Passed: ${convertToRoman(500) === 'D'}
    Passed: ${convertToRoman(501) === 'DI'}
    Passed: ${convertToRoman(649) === 'DCXLIX'}
    Passed: ${convertToRoman(798) === 'DCCXCVIII'}
    Passed: ${convertToRoman(891) === 'DCCCXCI'}
    Passed: ${convertToRoman(1000) === 'M'}
    Passed: ${convertToRoman(1004) === 'MIV'}
    Passed: ${convertToRoman(1006) === 'MVI'}
    Passed: ${convertToRoman(1023) === 'MXXIII'}
    Passed: ${convertToRoman(2014) === 'MMXIV'}
    Passed: ${convertToRoman(3999) === 'MMMCMXCIX'}
`)