// Alternative Method 1
function coinCounter1(money) {
  money = money * 100;
  let quarter;
  let dime;
  let nickel;
  let penny;
  quarter = Math.floor(money / 25);
  let modulusQua = money % 25;

  dime = Math.floor(modulusQua / 10);

  let modulusDime = dime % 10;
  nickel = Math.floor(modulusDime / 5);

  let modulusNickel = nickel % 5;
  penny = Math.floor(modulusNickel / 1);

  return { quarter, dime, nickel, penny };
}
// Alternative Method.........................................
function coinCounter2(money) {
  money = money * 100;
  let quarter;
  let dime;
  let nickel;
  let penny;
  tenDollar = Math.floor(money / 1000);
  money = money % 1000;

  fiveDolloar = Math.floor(money / fiveDolloar);
  money = money % 500;

  quarter = Math.floor(money / 25);
  money = money % 25;

  dime = Math.floor(money / 10);

  money = money % 10;

  nickel = Math.floor(money / 5);

  money = money % 5;
  console.log(money);
  penny = money;

  return { quarter, dime, nickel, penny };
}
// Alternative Method.........................................
const coinCounter = (money, inDollar = true) => {
  if (inDollar) {
    money = money * 100;
  }

  if (money >= 25) {
    return {
      quarter: Math.floor(money / 25),
      ...coinCounter(money % 25, false)
    };
  }
  if (money >= 10) {
    return {
      dime: Math.floor(money / 10),
      ...coinCounter(money % 10, false)
    };
  }
  if (money >= 5) {
    console.log(money % 5);
    return {
      nickel: Math.floor(money / 5),
      ...coinCounter(money % 5, false)
    };
  }
  console.log(money);
  return {
    penny: money
  };
};
// Alternative Method.........................................
const coinCounter2 = money => {
  money = money * 100;
  if (money >= 25) {
    return {
      quarter: Math.floor(money / 25),
      ...coinCounter2((money % 25) / 100)
    };
  }
  if (money >= 10) {
    return {
      dime: Math.floor(money / 10),
      ...coinCounter2((money % 10) / 100)
    };
  }
  if (money >= 5) {
    console.log((money % 5) / 100);
    return {
      nickel: Math.floor(money / 05),
      ...coinCounter2((money % 5) / 100)
    };
  }
  return {
    penny: Math.floor(money)
  };
};
const a = { quar: 1, dime: 2 };
console.log({ ...a, nickel: 225 });
console.log(Object.assign({}, a, { penny: 22 }));
// ...(three dots) means Destructuring
