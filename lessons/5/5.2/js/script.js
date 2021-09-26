const drawPyramid = (height) => {
   for (let i = 0; i < height; i++) {
      let spacesBefore = '';
      let stars = '';

      for (let j = 0; j < 2 * i + 1; j++) {
         stars += "*";
      }
      for (k = 0; k < height - i - 1; k++) {
         spacesBefore += ' ';
      }
      console.log(spacesBefore + stars)
   }
};

const deireHeight = Number(prompt('Яка висота піраміди ?'))
//drawPyramid(deireHeight);



let n = Number(prompt('Яке кінцеве число ?'));

nextPrime:
   for (let i = Number(prompt('Яке початкове число ?')); i <= n; i++) { // Для всех i...

      for (let j = 2; j < i; j++) { // проверить, делится ли число..
         if (i % j == 0) continue nextPrime; // не подходит, берём следующее
      }

      //alert('Просте число: ' + i); // простое число
      console.log('Просте число: ' + i);
   }