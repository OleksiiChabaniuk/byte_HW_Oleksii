function getSum() {
   const num1 = Number(prompt("Перше число:"));
   console.log('Перше число:', num1);
   const num2 = Number(prompt("Друге число:"));
   console.log('Друге число:', num2);

   const sum = num1 + num2;
   console.log('Сума', sum);

   alert("Сума: " + sum);
}

getSum()


function getComparison() {
   const num1 = Number(prompt("Перше число:"));
   console.log('Перше число:', num1);
   const num2 = Number(prompt("Друге число:"));
   console.log('Друге число:', num2);
   if (num1 === num2) {
      alert("Числа рівні");
   } else if (num1 < num2) {
      alert("Друге число більше за перше");
   } else {
      alert("Перше число більше за друге");
   };
}

getComparison()