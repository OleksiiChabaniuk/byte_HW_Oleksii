let min = Number(prompt('Мінімальне:'));
console.log("Min",
   min);
let max = Number(prompt('Максимальне:'));
console.log("Max",
   max);



var randomNumber = function (min, max) {
   return Math.floor(Math.random() * (max - min + 1) + min);
};

var rand = randomNumber(min, max);
console.log("Random", rand);