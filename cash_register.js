function checkCashRegister(price, cash, cid) {
  let diff = cash * 100 - price * 100
  let cidTotal = 0
  for (let elem of cid) {
    cidTotal += elem[1] *100
  }
  if (diff > cidTotal) {
    return {status: "INSUFFICIENT_FUNDS", change: []}
  } else if(diff === cidTotal) {
    return {status: "CLOSED", change: cid}
  } else {
    let res = []
    cid = cid.reverse()
    let money = {"ONE HUNDRED": 10000, "TWENTY": 2000, "TEN": 1000, "FIVE": 500, "ONE": 100, "QUARTER": 25, "DIME": 10, "NICKEL": 5, "PENNY": 1}
    for (let elem of cid) {
      const all = [elem[0], 0]
      elem[1] = elem[1] * 100
      while(diff >= money[elem[0]] && elem[1] > 0) {
        diff -= money[elem[0]]
        elem[1] -= money[elem[0]]
        all[1] += money[elem[0]]/100
      }
      if (all[1] > 0) {
        res.push(all)
      }
    }
    if (diff > 0) {
      return {status: "INSUFFICIENT_FUNDS", change: []}
    }
    return {status: "OPEN", change: res}
  }
}

checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);
