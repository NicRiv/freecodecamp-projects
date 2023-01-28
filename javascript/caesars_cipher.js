function rot13(str) {
    return [...str].map(l => {
        if (/[A-Z]/.test(l)) {
            const nv = l.charCodeAt(0) - 13

            if (nv < 65) {
                const p = 90 - (13 - ((nv + 13) - 64))
                return String.fromCharCode(p)
            }

            return String.fromCharCode(nv)
        }
        return l
    }).join("");
}

/**
 * Tests cases
 */

const fnCases = require('fn-cases')

fnCases([
    [rot13("SERR PBQR PNZC"), 'FREE CODE CAMP'],
    [rot13("SERR CVMMN!"), 'FREE PIZZA!'],
    [rot13("SERR YBIR?"), 'FREE LOVE?'],
    [rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT."), 'THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG.']
])