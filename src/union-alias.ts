// // union types
// // if multiple types are used for the same function, an if statement may be needed inside of the function with typeof

// // can combine multiple types with the type keyword, if the type is too complexe and is often repeated
// type Conbinable = number | string;



// function combine(input1: Conbinable, input2: Conbinable) {
//   let result: Conbinable;

//   if (typeof input1 === "number" && typeof input2 === "number") {
//     result = input1 + input2;
//   } else {
//     result = input1.toString() + input2.toString();
//   }
//   return result;
// }

// const combineAges = combine(20, 26);
// const combineNames = combine("max", "fred");

// console.log(combineNames);
// console.log(combineAges);
