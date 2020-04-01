export function coinCounterClosure(money) {
  const denomination = {
    // tenDollar: 1000,
    // fiveDollar: 500,
    // dollar: 100,
    Quarter: 25,
    Dime: 10,
    Nickel: 5,
    Penny: 1
  };
  const result = {};
  Object.keys(denomination).reduce((acc, key) => {
    const deno = denomination[key];
    const val = Math.floor(acc / deno);
    result[key] = val;
    return acc % deno;
  }, money * 100);
  return result;
}
//.......................................END.........................................................................................

export const coinCounterRecursion = (money, inDollar = true) => {
  if (inDollar) {
    money = money * 100;
  }
  debugger;
  if (money >= 25) {
    return {
      Quarter: Math.floor(money / 25),
      ...coinCounterRecursion(money % 25, false)
    };
  }
  if (money >= 10) {
    return {
      Dime: Math.floor(money / 10),
      ...coinCounterRecursion(money % 10, false)
    };
  }
  if (money >= 5) {
    console.log(money % 5);
    return {
      Nickel: Math.floor(money / 5),
      ...coinCounterRecursion(money % 5, false)
    };
  }
  console.log(money);
  return {
    Penny: Math.floor(money)
  };
};
//...........................................................

// export const coinCounterRecursion = money => {
//   money = money * 100;
//   if (money >= 25) {
//     return {
//       quarter: Math.floor(money / 25),
//       ...coinCounterRecursion((money % 25) / 100)
//     };
//   }
//   if (money >= 10) {
//     return {
//       dime: Math.floor(money / 10),
//       ...coinCounterRecursion((money % 10) / 100)
//     };
//   }
//   if (money >= 5) {
//     return {
//       nickel: Math.floor(money / 5),
//       ...coinCounterRecursion((money % 5) / 100)
//     };
//   }
//   return {
//     penny: Math.floor(money)
//   };
// };// const coinCounter2 = money => {
//   money = money * 100;
//   if (money >= 25) {
//     return {
//       quarter: Math.floor(money / 25),
//       ...coinCounter2((money % 25) / 100)
//     };
//   }
//   if (money >= 10) {
//     return {
//       dime: Math.floor(money / 10),
//       ...coinCounter2((money % 10) / 100)
//     };
//   }
//   if (money >= 5) {
//     console.log((money % 5) / 100);
//     return {
//       nickel: Math.floor(money / 05),
//       ...coinCounter2((money % 5) / 100)
//     };
//   }
//   return {
//     penny: Math.floor(money)
//   };
// };
// .................................................

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
