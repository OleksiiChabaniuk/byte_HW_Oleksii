let time = prompt(`Время`);
console.log(`${time}`);
let task = prompt(`Задача`);
console.log(`${task}`);



const calendar = () => {
   let taskday;
   do {
      taskday = alert(`${time} : ${task}`);
      console.log(`${time} : ${task}`);
      if (!time || !task) {
         alert(`данні не введенно`);
      }
   } while (time || task)
}

calendar();