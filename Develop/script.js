// Assignment Code
var generateBtn = document.querySelector("#generate");
function generatePassword() {
  /*store a variable */
  const passwordLength = prompt(
    "Specify the length of your password",
    "enter number here"
  );

  if (passwordLength >= 8 && passwordLength <= 128) {
    /*link it with var passwordchar*/
    console.log(passwordChar()); 
  } else {
    alert("invalid submission");

  }
}

/*declare another variable to verify password character*/
const passwordChar = new Array(4);

for (i = 0; i < 4; i++) {
  if (i === 4) {break}
  passwordChar[i] = confirm("Your password must include an Uppercase ","");
  passwordChar[i] = confirm("Your password must include a Lowercase ", "");
  passwordChar[i] = confirm("Your password must include a Number ", "");
  passwordChar[i] = confirm("Your password must include a Special Character ", "");

}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
