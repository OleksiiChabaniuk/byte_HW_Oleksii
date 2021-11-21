const arr = (["a", "v", "a", "b", "b"]);

const getOccurrencesCount = (arr) => {
      const res = {};

   for (let item of arr) {
      if (!res[item]) {
         res[item] = 1;
      }
      else {
         res[item] += 1;
      }
   }
   //console.log(`${res}`);
   return res;

   };


getOccurrencesCount(arr);