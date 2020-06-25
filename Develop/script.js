// Assignment Code
var generateBtn = document.querySelector("#generate");
 
function generatePassword( len ) {
    var charCount = prompt("How many characters would you like your password to have? It can have a length from 8 to 128.").trim();
    var lower = "abcdefghijklmnopqrstuvwxyz";
    var loweryn = confirm("Would you like to include lower case letters?");
    var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var upperyn = confirm("Would you like to include upper case letters?");
    var numeric = '0123456789';
    var numyn = confirm("Would you like to include numeric characters?");
    var punctuation = '!@#$%^&*()_+~`|}{[]\:;?><,./-=';
    var puncyn = confirm("Would you like to include Special Characters?");
    var password = "";
    var character = "";
    var crunch = true;
 
if (loweryn === false && numyn === false && upperyn === false && puncyn === false) {
alert("If you chose No for everything, then we won't give you a password...");
}
 
    while( password.length<charCount ) {
        entity1 = Math.ceil(lower.length * Math.random()*Math.random());
        entity2 = Math.ceil(numeric.length * Math.random()*Math.random());
        entity3 = Math.ceil(punctuation.length * Math.random()*Math.random());
        entity4 = Math.ceil(upper.length * Math.random()*Math.random());
        hold = lower.charAt( entity1 ) 
        hold = (password.length%2==0)?(hold):(hold);
        character += hold;
        if (loweryn === true) {character += lower.charAt ( entity1 );}
        if (numyn === true) {character += numeric.charAt( entity2 );}
        if (puncyn === true) {character += punctuation.charAt( entity3 );}
        if (upperyn === true) {character += upper.charAt( entity4 );}
        password = character;
    }
    password=password.split('').sort(function(){return 0.5-Math.random()}).join('');
    return password.substr(0,len);
}
 
 
 
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
 
  passwordText.value = password;
 
}
 
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
