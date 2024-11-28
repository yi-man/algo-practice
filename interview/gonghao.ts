function staffNumber(x: number, y: number) {
  const yBase = 26;
  let prefixCount = 1;

  for (let i = 0; i < y; i++) {
    prefixCount *= yBase;
  }

  const leftCount = Math.ceil(x / prefixCount);

  let z = 1;
  let count = 10;
  while (count < leftCount) {
    count = count * 10;
    z++;
  }

  return z;
}

// console.log(staffNumber(260, 1));

// console.log(staffNumber(26, 1));
console.log(staffNumber(2601, 1));
