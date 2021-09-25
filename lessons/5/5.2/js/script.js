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
drawPyramid(deireHeight)