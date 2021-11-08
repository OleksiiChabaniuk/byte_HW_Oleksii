const isValidPassword = (password) =>
   password.toLowerCase() !== password &&
   password.toUpperCase() !== password.toLowerCase() &&
   password.length >= 6;

const formatUserData = (data) =>
   data[0].toUpperCase() + data.slice(1).toLowerCase();

const getUserData = () => {
   let userName;
   let userSurname;
   let userPassword;

   do {
      userName = prompt("Name?");
      console.log(`userName ${userName}`);
      if (!userName) {
         alert('No date')
         continue;
         }

      if (userName.length < 4) //длина меньше 4
      {
         alert('Занадто коротке ім\'я');
         continue;
      }
      userSurname = prompt("Surname?");
      console.log(`userSurname ${userSurname}`);
      if (!userSurname) {
         alert('No date')
         continue;
      }

      if (userSurname.length < 4) { //длина меньше 4
         alert('Занадто коротке прізвище');
         continue;
      }
      userPassword = prompt("Password?");
      console.log(`userPassword ${userPassword}`);
      if (!userPassword) {
         alert('No date')
         continue;
      }
      if (!userPassword) {
         alert('No date')
         continue;
      }
      break;
      }
      while (!userName || !userSurname || !isValidPassword(userPassword));

   const formattedName = formatUserData(userName)
   const formattedSurname = formatUserData(userSurname)
   alert(`Hello ${formattedName} ${formattedSurname}`);
   console.log(`Hello ${formattedName} ${formattedSurname}`);

};

getUserData()