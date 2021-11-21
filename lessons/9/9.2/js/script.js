const ownForEarch = (arr, callback) => {
   for (let i = 0; i < arr.length; i++) {
      callback(arr[i], i, arr);
   }
};

const ownMap = (arr, callback) => {
   let resultArr = [];

   for (let i = 0; i < arr.length; i++) {
      const operationResult = callback(arr[i], i, arr);

      resultArr.push(operationResult);
   }

   return resultArr;
};

const ownFilter = (arr, callback) => {
   let resultArr = [];

   for (let i = 0; i < arr.length; i++) {
      const operationResult = callback(arr[i], i, arr);

      if (operationResult) {
         resultArr.push(arr[i]);
      }
   }

   return resultArr;
}