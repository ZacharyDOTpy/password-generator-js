// Added variables
var charLength = 8;
var possible = "";

var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var number = "0123456789";
var symbol = "!@#$%^&*()[]}{|?/<>+=_-";

// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {

}
// Added userPrompts function and if statement
function userPrompts() {
  charLength = parseInt(prompt("How many characters would you like your password to be? (8 - 128 characters)"));

  if(isNaN(charLength) || charLength < 8 || charLength > 128) {
    alert("Character length must be a number between 8 - 128. Please try again.");
    return false;
  }
// Added if statements for what characters the user wants
  if(confirm("Would you like lowercase letters in your password?")) {
    possible = possible.concat(lowerCase);
  }
  if(confirm("Would you like uppercase letters in your password?")) {
    possible = possible.concat(upperCase);
  }
  if(confirm("Would you like numbers in your password?")) {
    possible = possible.concat(number);
  }
  if(confirm("Would you like symbols in your password?")) {
    possible = possible.concat(symbol);
  }
  return true;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
