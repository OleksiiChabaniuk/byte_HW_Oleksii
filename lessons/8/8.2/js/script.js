function countTrue(arr) {

   var clone = arr.slice(0),
      test = [],
      cur,
      count = 0;

   while (clone.length) {

      cur = clone.shift();

      if (test.indexOf(cur) === -1) {

         test.push(cur);

         if (clone.indexOf(cur) >= 0) {
            count++;
         }
      }
   }
   return document.writeln(count + '<br>');
}

countTrue([true, false, false, true, false]); // -> 2

countTrue([false, false, false, false]); // -> 0

countTrue([]); // -> 0