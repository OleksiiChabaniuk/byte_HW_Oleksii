let countTrue = (arr) => {

   let counter = 0;
   for (let i = 0; i < arr.length; i++) {
      if (arr[i]) {
         counter++;
      }
   }
   console.log(`countTrue ${counter}`);
   return counter;
}

countTrue([true, false, false, true, false]); // -> 2

countTrue([false, false, false, false]); // -> 0

countTrue([]); // -> 0