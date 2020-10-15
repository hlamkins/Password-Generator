// Assignment Code
let generateBtn = document.querySelector("#generate");
let lower = "abcdefghijklmnopqrstuvwxyz";
let upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
let numbers = "0123456789"
let specChar = " !#$@%^&*(){}?/\~`|"


// Write password to the #password input
function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword() {

let passLength = (prompt)("How many characters should your password contain?"));

let lowerCase = confirm("Do you want your password to include lowercase letters?");
let upperCase = confirm("Do you want your password to include uppercase letters?");
let numChoice = confirm("Do you want your password to include numbers?");
let symChoice = confirm("Do you want your password to include symbols?");

let eligibleChars = ""

if (lowerCase === true) {
  eligibleChars = eligibleChars + lower;
if (upperCase === true) {
  eligibleChars = eligibleChars + upper;
} 
if (numChoice === true) {
  eligibleChars = eligibleChars + numbers;
}
if (symChoice === true) {
  eligibleChars = eligibleChars + specChar;
}








// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
