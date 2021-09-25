const LOGIN = 'ADMIN';
const PASSWORD = '1q2w3e4r';

const authorize = () => {
   let userPassword;
   let userLogin;
   let isAuthSuccess = false;
   let tries = 3;
   let i = 1;

   do {
      userLogin = prompt('Логін:');
      if (!userLogin) {
         alert('Ведіть логін!');
         continue;
      }
      userPassword = prompt('Пароль:');
      if (!userPassword) {
         alert('Ведіть пароль!');
         continue;
      }
      if (userPassword === PASSWORD || userLogin === LOGIN) {
         isAuthSuccess = true;
         alert("Welcome");
      } else if (i < tries) {
         alert(`Не вірний логін або пароль залишилося ${tries - i} спроб.`);
      } else {
         alert('У Вас скінчилися спроби, доступ заблоковано спробуйте пізніше!');
         break;
      }
      i += 1;
   }
   while (!isAuthSuccess)
}

authorize()



/*const authorize1 = () => {

   let userPassword;
   let userLogin;
   let tries = 3,
      i = 1,

      while (i <= tries) {
         userLogin = prompt('Введите логин:');
         userPassword = prompt('Введите пароль:');

         if (userLogin === null || userPassword === null) {
            break;
         }

         if (userPassword === PASSWORD || userLogin === LOGIN) {
            alert('Добро пожаловать!');
            break;
         } else if (i < tries) {
            alert(`Неверный пароль, у вас осталось ${tries - i} попыток`);
         } else {
            alert('У вас закончились попытки, аккаунт заблокирован!');
         }

         i += 1;
      }
}



const passwords = ['qwerty', '111qwe', '123123', 'r4nd0mp4zzw0rd'];
let attemptsLeft = 3,
   i = 1,
   input;

while (i <= attemptsLeft) {
   input = prompt('Введите пароль:');

   if (input === null) {
      break;
   }

   if (passwords.some(password => password === input)) {
      alert('Добро пожаловать!');
      break;
   } else if (i < attemptsLeft) {
      alert(`Неверный пароль, у вас осталось ${attemptsLeft - i} попыток`);
   } else {
      alert('У вас закончились попытки, аккаунт заблокирован!');
   }

   i += 1;
}




*/