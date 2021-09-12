const firstNumber = Number(prompt("What your number first?"));
console.log('firstNumber', firstNumber);
const secondNumber = Number(prompt("What your number second?"));
console.log('secondNumber', secondNumber);
if (firstNumber === secondNumber) {
   alert("Числа рівні");
} else if (firstNumber < secondNumber) {
   alert("Друге число більше за перше");
} else {
   alert("Перше число більше за друге");
};
