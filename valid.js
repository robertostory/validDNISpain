const validateVat = (value) => {
  let number, dni, letter;
  let expresion_regular_dni = /^[XYZ]?\d{5,8}[A-Z]$/;
  value = value.toUpperCase();
  if (expresion_regular_dni.test(value) === true) {
    number = value.substr(0, value.length - 1);
    number = number.replace('X', 0);
    number = number.replace('Y', 1);
    number = number.replace('Z', 2);
    dni = value.substr(value.length - 1, 1);
    number = number % 23;
    letter = 'TRWAGMYFPDXBNJZSQVHLCKET';
    letter = letter.substring(number, number + 1);
    if (letter != dni) {
      console.log('Wrong ID, the letter of the NIF does not correspond');
      return false;
    } else {
      console.log('Correct ID');
      return true;
    }
  }else{
    console.log('Wrong ID, invalid format');
    return false;
   }
}
