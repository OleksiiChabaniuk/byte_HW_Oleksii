function findExcess(integers) {
   let evenArr = [];
   let oddArr = [];

   for (let i = 0; i < integers.length; i++) {
      if (integers[i] % 2 === 0) {
         evenArr.push(integers[i]);
      } else {
         oddArr.push(integers[i]);
      }
   }
if (evenArr.length > oddArr.length) {
   return oddArr[0];
} else {
   return evenArr[0];
   }
}




findExcess([0, 1, 2]); // -> 1
findExcess([1, 2, 3]); // -> 2
findExcess([2, 6, 8, 10, 3]); // -> 3
findExcess([0, 0, 3, 0, 0]); // -> 3
findExcess([1, 1, 0, 1, 1]); // -> 0