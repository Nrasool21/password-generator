// Assignment Code
var generateBtn = document.querySelector("#generate");

//declare lowercase password
function randomLowercase() {
  const lowercase = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  return lowercase[Math.floor(Math.random() * lowercase.length)];
}

//declare uppercase
function randomUppercase() {
  const uppercase = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];
  return uppercase[Math.floor(Math.random() * uppercase.length)];
}

//declare number
function randomNumber() {
const num = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
return num [Math.floor(Math.random() * num.length)]

}


//declare specialCharacter
function randomSymbol() {
  const symbol = [
    "!",
    "@",
    "#",
    "$",
    "^",
    "%",
    "&",
    "*",
    "(",
    ")",
    "{",
    "}",
    "[",
    "]",
    "=",
    "<",
    ">",
    "/",
    "?",
    ",",
    ".",
  ];

  return symbol[Math.floor(Math.random() * symbol.length)];
}


function generatePassword() {
  /*store a variable */
  
  const passwordLength = prompt(
    "Specify the length of your password",
    "enter number here"
  );

  //prompt returns a string value, convert string to number.
  const convertNumber = parseInt(passwordLength, 10);

  if (Number.isNaN(convertNumber)) {
  alert("Please enter a valid number like 8, 10, etc");

  } else if ((passwordLength >= 8) && (passwordLength <= 128)) {
    
    const islowerCase = confirm("Do you want Lowercase in your password");
    const isUpperCase = confirm("Do you want Uppercase in your password");
    const isNumber = confirm("Do you want Number in your password");
    const isSymbol = confirm("Do you want Special Character in you password");

  }else if (islowerCase || isUppercase || isNumber || isSymbol) {
    /*generate password function*/

    
  }else {

}
}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);