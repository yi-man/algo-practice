// function getMinSum(array1: number[], array2: number[], count: number) {
//   if (count === 0) {
//     return 0;
//   }

//   // let total = 0;
//   const newArr: Array<{
//     value: number;
//     position: 1 | 2;
//   }> = [];

//   let offset1 = 0;
//   let offset2 = 0;

//   while (offset1 < array1.length && offset2 < array2.length) {
//     if (array1[offset1] < array2[offset2]) {
//       newArr.push({
//         value: array1[offset1],
//         position: 1,
//       });
//       offset1 += 1;
//     } else if (array1[offset1] > array2[offset2]) {
//       newArr.push({
//         value: array2[offset2],
//         position: 2,
//       });
//       offset2 += 1;
//     } else if (array1[offset1] === array2[offset2]) {
//       newArr.push({
//         value: array1[offset1],
//         position: 1,
//       });
//       newArr.push({
//         value: array2[offset2],
//         position: 2,
//       });
//       offset1 += 1;
//       offset2 += 1;
//     }
//   }

//   let cursor1 = -1;
//   let cursor2 = -1;

//   for (let i = 0; i < newArr.length; i++) {
//     if (newArr[i].position === 1 && cursor1 === -1) {
//       cursor1 = i;
//     } else if (newArr[i].position === 2 && cursor2 === -1){
//       cursor2 = 2;
//     }

//     if (cursor1 !== -1 && cursor2 !== -1) {
//       break;
//     }
//   }

//   let total = 0;
//   let c = 0
//   while (c < count && cursor1 < newArr.length && cursor2 < newArr.length) {
//     const v1 = newArr[cursor1].value;
//     const v2 = newArr[cursor2].value;

//     if (c < count) {
//       total += v1 + v2;
//       c++
//     }

//     if (v1 <= v2) {
//       for (let i = cursor2; i < newArr.length; i++) {
//         if ()
//       }
//     } else if (v1 > v2) {
//       cursor2 += 1;
//     }

//   }

//   return total;
// }

// function getMinSum(array1: number[], array2: number[], count: number) {
//   if (count === 0) {
//     return 0;
//   }

//   let total = 0;

//   let offset1 = 0;
//   let offset2 = 0;

//   let i = 1;
//   while (i <= count && offset1 < array1.length && offset2 < array2.length) {
//     total += array1[offset1] + array2[offset2];
//     i++;

//     if (array1[offset1] < array2[offset2]) {
//       offset2 += 1;
//     } else if (array1[offset1] > array2[offset2]) {
//       offset1 += 1;
//     } else if (array1[offset1] === array2[offset2]) {
//       if (offset1 + 1 < array1.length - 1 && offset2 + 1 < array2.length - 1) {
//         if (array1[offset1 + 1] <= array2[offset2 + 1]) {
//           offset1 += 1;
//         } else {
//           offset2 += 1;
//         }
//       } else if (offset1 + 1 < array1.length - 1) {
//         offset1++;
//       } else if (offset2 + 1 < array2.length - 1) {
//         offset2++;
//       } else {
//         break;
//       }
//     }
//   }

//   return total;
// }

function getMinSum(array1: number[], array2: number[], count: number) {
  if (count === 0) {
    return 0;
  }

  let total = 0;

  const pairs: Array<number> = [];

  for (let i = 0; i < array1.length; i++) {
    const v1 = array1[i];
    for (let j = 0; j < array2.length; j++) {
      const v2 = array2[j];

      pairs.push(v1 + v2);
    }
  }

  pairs.sort((a, b) => a - b);

  console.log(11111111111, pairs, count);

  for (let i = 0; i < count; i++) {
    total += pairs[i];
  }

  return total;
}

console.log(getMinSum([1, 1, 2], [1, 2, 3], 2));

// function getMinSum(array1: number[], array2: number[], count: number) {
//   if (count === 0) {
//     return 0;
//   }

//   let total = 0;

//   let offset1 = 0;
//   let offset2 = 0;

//   let i = 1;
//   while (i <= count && offset1 < array1.length && offset2 < array2.length) {
//     total += array1[offset1] + array2[offset2];

//     if (array1[offset1] < array2[offset2]) {
//       offset2 += 1;
//       i++;
//     } else if (array1[offset1] > array2[offset2]) {
//       offset1 += 1;
//       i++;
//     } else if (array1[offset1] === array2[offset2]) {
//       if (offset1 + 1 < array1.length - 1 && offset2 + 1 < array2.length - 1) {
//         if (array1[offset1 + 1] <= array2[offset2 + 1]) {
//           offset1 += 1;
//         } else {
//           offset2 += 1;
//         }
//       } else if (offset1 + 1 < array1.length - 1) {
//         offset1++;
//       } else if (offset2 + 1 < array2.length - 1) {
//         offset2++;
//       } else {
//         break;
//       }
//       i++;
//     }
//   }

//   return total;
// }
