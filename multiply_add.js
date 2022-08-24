function doSomething (A /* number[]*/, B /* number[]*/) {
  for (const a of A) {
    console.log(a);
  }
  for (const b of B) {
    console.log(b);
  }
}

function doSomething1 (A /* number[]*/, B /* number[]*/) {
  for (const a of A) {
    for (const b of B) {
      console.log(a, ',', b);
    }
  }
}