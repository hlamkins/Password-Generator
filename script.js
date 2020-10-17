// Assignment Code
let generateBtn = document.querySelector("#generate");
let lower = "abcdefghijklmnopqrstuvwxyz";
let upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let numbers = "0123456789";
let specChar = " !#$@%^&*(){}?/~`|";

// Write password to the #password input
function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Function created to prompt user for variables to password
function generatePassword() {
  let passLength = prompt("How many characters should your password contain?");
  if (passLength >= 8 && passLength <= 148) {
  } else {
    alert("Password must be between 8 and 148 characters.");
    return generatePassword();
  }
  let lowerCase = confirm(
    "Do you want your password to include lowercase letters?"
  );

  let upperCase = confirm(
    "Do you want your password to include uppercase letters?"
  );

  let numChoice = confirm("Do you want your password to include numbers?");

  let symChoice = confirm("Do you want your password to include symbols?");

  let eligibleChars = "";

  // Statements to add characters according to user selections
  if (lowerCase === true) {
    eligibleChars = eligibleChars + lower;
  }
  if (upperCase === true) {
    eligibleChars = eligibleChars + upper;
  }
  if (numChoice === true) {
    eligibleChars = eligibleChars + numbers;
  }
  if (symChoice === true) {
    eligibleChars = eligibleChars + specChar;
  }

  let finalPassword = password (passLength, eligibleChars);
  return finalPassword;
}

//Creates password 
function password(passLength, eligibleChars) {
  let pwd = "";
  for (var i = 0; i < passLength; i++) {
    pwd += eligibleChars.charAt(Math.floor(Math.random() * eligibleChars.length));
  }
  return pwd; //Writes password to the page
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
