let userName;
let userSurname;
let userPassword;



function registrationuser() {
   userName = prompt('Введіть І\'мя:');
   console.log(`userName ${userName}`);


   if (!userName) {
      alert('No date')
      return;
   }



   userSurname = prompt('Введіть прізвище:');
   console.log(`userSurname ${userSurname}`);
   if (!userSurname) {
      alert('No date')
   }


   userPassword = prompt('Введіть пароль:');
   console.log(`userPassword ${userPassword}`);
   if (!userPassword) {
      alert('No date')
   }

}



registrationuser()

let fullName = alert(`${userName} ${userSurname}`);
