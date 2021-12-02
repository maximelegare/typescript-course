function add(n1: number, n2: number) {
  return n2 + n2;
}

// a function that does'nt return anything has a void type
function prinResult(num: number): void {
  console.log("Result:", num);
}



// function type
let combineFunction: (n1: number, n2: number) => number;

// combineFunction = add;

// console.log(combineFunction(1, 4));





// callback function
function addAndHandle(n1: number, n2: number, cb: (num: number) => void) {

    // number
    const result = n1 + n2;
    // number is passed to the callback
    cb(result);
  }
  
  addAndHandle(1, 2, (result) => {
    console.log(result);
  });
