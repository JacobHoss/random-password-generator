// Assignment Code

var generateBtn = document.querySelector("#generate");


function generatePassword( len ) {

    var charCount = prompt("How many characters would you like your password to have? It can have a length from 8 to 128.").trim();

    var lower = "abcdefghijklmnopqrstuvwxyz";

    var lowerChar = confirm("Would you like to include lower case letters?");

    var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    var upperChar = confirm("Would you like to include upper case letters?");

    var numeric = '0123456789';

    var numericChar = confirm("Would you like to include numeric characters?");

    var special = '!@#$%^&*()_+~`|}{[]\:;?><,./-=';

    var specialChar = confirm("Would you like to include special Characters?");

    var password = "";

    var character = "";

    // If the user selects "No" for every prompt, this If statement will run.
    if (lowerChar === false && numericChar === false && upperChar === false && specialChar === false) {

        return ("If you choose \"No\" for everything, then we won't give you a password...");
        
        }

    // If the user inputs a value greater than or equal to 8, or less than or equal to 128, this If statement will run.
    if (charCount >= 8 && charCount <= 128 ) {

    while ( password.length<charCount ) {

        entity1 = (lower.length * Math.random());

        entity2 = (numeric.length * Math.random());

        entity3 = (special.length * Math.random());

        entity4 = (upper.length * Math.random());

        hold = password.charAt( entity1 );

        hold = (password.length%2==0)?(hold):(hold);

        character += hold;

        if (lowerChar === true) {character += lower.charAt ( entity1 );}

        if (numericChar === true) {character += numeric.charAt( entity2 );}

        if (specialChar === true) {character += special.charAt( entity3 );}

        if (upperChar === true) {character += upper.charAt( entity4 );}

        password = character;

    }

    password=password.split('').sort(function(){return Math.random()}).join('');

    return password.substr(0,len);
} else {
    // This else statement returns text to the center box when the user inputs anything less than 8 or greater than 128
    return "I told you to pick between 8 and 128 characters!";
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