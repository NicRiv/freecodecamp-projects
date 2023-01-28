const CURRENCY = {
    "PENNY": 0.01,
    "NICKEL": 0.05,
    "DIME": 0.1,
    "QUARTER": 0.25,
    "ONE": 1,
    "FIVE": 5,
    "TEN": 10,
    "TWENTY": 20,
    "ONE HUNDRED": 100
}

const redondear = (num) => {
    num = num.toString()
    if (/\./.test(num)) {
        let arr = num.split("")
        const pi = arr.indexOf(".") + 1
        arr = arr.slice(pi)
        if (arr.length > 2) {
            arr[2] >= 5 ? arr[1] = (Number(arr[1]) + 1).toString() : arr[1]
            arr = arr.slice(0, 2)
        }

        return Number(num.split("").slice(0, pi).concat(arr).join(""))
    }

    return Number(num)
}

function checkCashRegister(price, cash, cid) {
    let LL = []
    const newCid = cid.slice(0)
    const cambio = cash - price

    const totalCID = redondear(newCid.reduce((sum, c) => {
        if (sum[1]) return sum[1] + c[1]
        return sum + c[1]
    }))

    let list = newCid.filter(d => {
        if (CURRENCY[d[0]] <= cambio) return d
    })

    list.reverse()
    let newCamb = cambio

    const NC = []
    list.map(li => {
        return NC.push([li[0], li[1]])
    })

    NC.map(li => {
        let ac = 0

        if (newCamb > 0) {
            const V = li[1] / CURRENCY[li[0]]
            const unit = CURRENCY[li[0]]

            for (let i = 0; i < V; i++) {
                if (unit <= newCamb && li[1] >= 0) {
                    li[1] = redondear(li[1] - unit)
                    newCamb = redondear(newCamb - unit)
                    ac = redondear(ac + unit)

                } else break
            }

        }
        if (ac > 0) LL.push([li[0], ac])

        return li
    })

    if ((totalCID - cambio) < 0 || newCamb > 0) {

        return { status: "INSUFFICIENT_FUNDS", change: [] }
    } else if (NC.every(e => e[1] === 0)) {

        return { status: "CLOSED", change: cid }
    }

    return { status: "OPEN", change: LL }
}

/**
 * Tests cases
 */

const fnCases = require('fn-cases')

fnCases([
    [checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]), { status: "OPEN", change: [["QUARTER", 0.5]] }],
    [checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]), { status: "OPEN", change: [["TWENTY", 60], ["TEN", 20], ["FIVE", 15], ["ONE", 1], ["QUARTER", 0.5], ["DIME", 0.2], ["PENNY", 0.04]] }],
    [checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]), { status: "INSUFFICIENT_FUNDS", change: [] }],
    [checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 1], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]), { status: "INSUFFICIENT_FUNDS", change: [] }],
    [checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]), { status: "CLOSED", change: [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]] }]
])