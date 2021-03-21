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
  const num = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  return num[Math.floor(Math.random() * num.length)];
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

let isLowerCase;
let isUpperCase;
let isNumber;
let isSymbol;

function generatePassword() {
  /*store a variable */

  const passwordLengthstring = prompt(
    "Specify the length of your password",
    "enter number here"
  );

  //prompt returns a string value, convert string to number.
  const passwordLength = parseInt(passwordLengthstring, 10);

  if (passwordLength >= 8 && passwordLength <= 128) {
    isUpperCase = prompt("Do you want Lowercase in your password");
    isUpperCase = confirm("Do you want Uppercase in your password");
    isNumber = confirm("Do you want Number in your password");
    isSymbol = confirm("Do you want Special Character in your password");
  } else {
    alert("Password length needs to be a valid number between 8 to 128");

    return "";
  }

  if (isLowerCase || isUpperCase || isNumber || isSymbol) {
    let randomPassword = "";

    const finalPassword = randomPassword.slice(0, passwordLength);
    /*loop over the upper,lower,num,symbol? */
    for (let i = 0; i < passwordLength; i++) {
      if (isLowerCase) {
        randomPassword += randomLowercase();
      }
      if (isUpperCase) {
        randomPassword += randomUppercase();
      }
      if (isNumber) {
        randomPassword += randomNumber();
      }
      if (isSymbol) {
        randomPassword += randomSymbol();
      }
    }

    return randomPassword;
  } else {
    alert("Please select at least one option");
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
