const salaries = {
   John: 4300.00,
   Ann: 5700.4,
   Pete: 4900.95,
};
console.log("Роботники", salaries)

let sum = 0;
for (let key in salaries) {
   sum += salaries[key];
}

alert(sum.toFixed(2));
console.log("Сума", sum.toFixed(2))