// Assignment Code
var generateBtn = document.querySelector("#generate");
 
function generatePassword() {
var charCount = prompt("How many characters would you like your password to have? It can have a length from 8 to 128.").trim();
var lowerCase = confirm("Would you like to include lower case letters?");
var upperCase = confirm("Would you like to include upper case letters?");
var Numeric = confirm("Would you like to include numeric characters?");
var specialCharacters = confirm("Would you like to include Special Characters?");
var upper = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'X', 'Y', 'Z']
var lower = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 'x', 'y', 'z']
var spchar = ['`', '~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '_', '=', '+', '[', '{', ']', '}', '|', '"', ':', ';', '<', '>', ',', '.', '?']

console.log(lower[15]);
console.log(spchar[18]);
console.log(upper[20])

if (charCount >= 50 || lowerCase === true || upperCase === true || Numeric === true) {
    alert("Good luck remembering this password!")
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
 

