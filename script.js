// Assignment Code
let generateBtn = document.querySelector("#generate");
let lower = "abcdefghijklmnopqrstuvwxyz";
let upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
let numbers = "0123456789"
let symbols =  " `~!@#$%^&*()-_=+[]{}\|?/.<>'"

// Write password to the #password input
function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword() {
  let passLength = prompt("How many characters do should your password contain?")
  let lowerCase = confirm("Do you want your password to include lowercase letters?")
  let upperCase = confirm("Do you want your password to include uppercase letters?")
  let numChoice = confirm("Do you want your password to include numbers?")
  let symChoice = confirm("Do you want your password to include symbols?")
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
  
