const LOGIN = 'ADMIN';
console.log("LOGIN =", LOGIN);
const PASSWORD = '1q2w3e';
console.log("PASSWORD =", PASSWORD);

const authorize = () => {
   let userPassword;
   let userLogin;
   let isAuthSuccess = false;

   do {
      userLogin = prompt('Логін');
      console.log("userLogin =", userLogin);
      if (!userLogin) {
         alert('Введіть логін');
         continue;
      }

      userPassword = prompt('Пароль');
      console.log("userPassword =", userPassword);
      if (!userPassword) {
         alert('Введіть пароль');
         continue;
      }

      if (userPassword === PASSWORD || userLogin === LOGIN) {
         isAuthSuccess = true;
      } else {
         alert('Даннін не вірні');
      }

   }
   while (!isAuthSuccess)

   alert('Welcome')
}

authorize()