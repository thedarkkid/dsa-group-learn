// Display number and their multiples

function displayArrayMultiples (arr) {
  const multiplesArray = [];
  const multiples = {};
  let count = 0;

  for (const element of arr) {
    const currentMultiples = [];
    for (const secondElement of arr) {
      currentMultiples.push(secondElement * element);
    }
    multiplesArray[count++] = currentMultiples;
  }

  for (let i = 0; i < arr.length; i++) {
    multiples[arr[i]] = multiplesArray[i];
  }

  return multiples;
}

console.log(
  displayArrayMultiples([6, 5, 4, 3, 2, 1])
);
