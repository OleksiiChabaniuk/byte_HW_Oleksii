//function foundDegree() {
//const numberUser = Number(prompt("Число"));
//console.log('Число:', numberUser);
//   const userDegree = Number(prompt("Ступінь"));
//   console.log('Ступінь:', userDegree);

//const z = numberUser ** userDegree;
//   console.log('Відповідь:', z);
//   alert("Відповідь: " + z);
//   };
//   foundDegree()

function foundDegree2(numberUser, userDegree = 2) {
   alert(Math.pow(numberUser, userDegree));
   return (Math.pow(numberUser, userDegree));
};


foundDegree2(3, 5)


const numUser = Number(prompt("цифра"));
console.log('цифра', numUser)
const powUser = Number(prompt("степінь"));
console.log('степінь', powUser)

function foundDegree3(num, pow = 2) {
   let powNum = num ** pow;
   console.log('number', powNum)
}

foundDegree3(num, pow = 2)