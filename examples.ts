function sumProduct (arr: number[]): void {
  let sum: number = 0;
  let product: number = 0;

  for (const num of arr) sum += num;
  for (const num of arr) product *= num;

  console.log(`Sum: ${sum}`, `Product: ${product}`);
}

function printPairs (arr: number[]): void {
  for (const i of arr) {
    for (const j of arr) console.log(i, ',', j);
  }
}

function printUnorderedPairs (arr: number[]) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      console.log(i, ',', j);
    }
  }
}

function printUnorderedPairsMultiple (arrA: number[], arrB: number[]) {
  for (const a of arrA) {
    for (const b of arrB) {
      if (a < b) console.log(a, ',', b);
    }
  }
}

function createAPair (arr: number[]) {
  const pairArr = [];
  for (let i = 0; i < arr.length; i++) {
    const endValue = arr.length - i;
    if (endValue >= 0 && endValue < arr.length) {
      pairArr.push(arr[i] * arr[arr.length - i]);
    }
  }
  return pairArr;
}


function createAPair1 (arr: number[]) {
  const pairArr = [];
  for (let i = 0; i < arr.length; i++) {
    const endValue = arr.length - i;
    if (endValue >= 0 && endValue < arr.length) {
      for (let k = 0; k < i; k++) {
        pairArr.push(arr[i] * arr[arr.length - i]);
      }
    }
  }
  return pairArr;
}

console.log(
  createAPair([4, 6, 9, 14, 2, 1, 12, 7, 18])
);
