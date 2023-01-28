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

const fnCases = require('fn-cases')

fnCases([
    [convertToRoman(2), 'II'],
    [convertToRoman(3), 'III'],
    [convertToRoman(4), 'IV'],
    [convertToRoman(5), 'V'],
    [convertToRoman(9), 'IX'],
    [convertToRoman(12), 'XII'],
    [convertToRoman(16), 'XVI'],
    [convertToRoman(29), 'XXIX'],
    [convertToRoman(44), 'XLIV'],
    [convertToRoman(45), 'XLV'],
    [convertToRoman(68), 'LXVIII'],
    [convertToRoman(83), 'LXXXIII'],
    [convertToRoman(97), 'XCVII'],
    [convertToRoman(99), 'XCIX'],
    [convertToRoman(400), 'CD'],
    [convertToRoman(500), 'D'],
    [convertToRoman(501), 'DI'],
    [convertToRoman(649), 'DCXLIX'],
    [convertToRoman(798), 'DCCXCVIII'],
    [convertToRoman(891), 'DCCCXCI'],
    [convertToRoman(1000), 'M'],
    [convertToRoman(1004), 'MIV'],
    [convertToRoman(1006), 'MVI'],
    [convertToRoman(1023), 'MXXIII'],
    [convertToRoman(2014), 'MMXIV'],
    [convertToRoman(3999), 'MMMCMXCIX']
])