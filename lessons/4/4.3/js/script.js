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

const numUser = Number(prompt("цифра"));
console.log('цифра', numUser);

const powUser = Number(prompt("степінь"));
console.log('степінь', powUser);

function foundDegree2(num, pow = 2) {
   let powNum = num ** pow;
   console.log('результат', powNum);
   alert(powNum);
   return powNum;
}


foundDegree2(numUser, powUser)

function foundDegree3(numberUser, userDegree = 2) {
   const result = Math.pow(numberUser, userDegree)
   console.log('Результат', result)
   alert(result);
   return result;
};


foundDegree3(3)
const returnResult = foundDegree3();
console.log('Результат', returnResult)