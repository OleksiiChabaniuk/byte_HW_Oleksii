const yourAge = Number(prompt("Вік відвідувача: "));
console.log('yourAge', yourAge);


let permission = ('Guardian');

if ((yourAge >= 60 && yourAge <= 80) || (yourAge >= 12 && yourAge <= 18)) {
   alert("Пенсіонерам віком від 60 до 80 років та підліткам від 12 до 18 років доступ дозволено з дозволу батьків чи опікуна.");
   if (permission) {
      const guardian = prompt("Опікун (батьки) дозволяєте відвідування?");
      console.log("Опікун (батьки) дозволяєте відвідування?", guardian);
   }
} else if (yourAge > 18 && yourAge < 60) {
   alert("Ласкаво просимо!")
} else {
   alert("Прохід заборонено!");
}
