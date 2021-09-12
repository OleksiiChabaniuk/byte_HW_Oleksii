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
//
let num1 = Number(prompt('перше число'));

let num2 = Number(prompt('друге число'));


let operator = prompt('оператор (/,+,*,-)');


switch (operator) {
   case '+':
      alert(num1 + num2);
      break;
   case '-':
      alert(num1 - num2);
      break;
   case '/':
      alert(num1 / num2);
      break;
   case '*':
      alert(num1 * num2);
}
12