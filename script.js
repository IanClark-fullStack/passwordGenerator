// Define the generatePassword function seperately
function generatePassword(){
/* ________ Local Variables ________ */
  // Const variable initialized to the value of the user num input 
  let userNumInput = prompt('Select Desired Password Length, Min: 8, Max: 128', '48');

  // const variable for charsets 
  // const 1.
  const alphabet = 'abcedfghijklmnopqrstuvwxyz';
  // const 2.
  const numbers = '0123456789';
  // const 3.
  const special = "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";
  // const 4.
  

  // variable initialized to the value of confirmation strings to be combined and displayed after password generation. 
  let yesGenerated = 'Password generated: ';
  const yesLower = 'added lowercase, ';
  const yesUpper = 'added UPPER, ';
  const yesSpecial = 'add3d sUm $P3C!@l, ';
  const yesNumber = 'added some nums, ';


  // Starting Char Set initialized to the value of an empty string. 
  let startingChars = '';

  // scrambled chars initialized to the value of an empty string 
  let scrambledChars = '';

/* _________________    Conditions & Processes       ____________________ */

// Main Conditional 
  // If the user input does not meet the length requirement, we don't need to move forward.
  if (isNaN(userNumInput) || userNumInput < 8 || userNumInput > 128 ) {
    alert('Stop trying to break me!');
  } else {
      // If user input does meet requirements, Variables are Initialized to the value of user selected boolean. 
    let userSelectLower = confirm('Include lowercase values?');
  
    let userSelectUpper = confirm('How bout Uppercase?');
  
    let userSelectSpecial = confirm('Special Chars?');
  
    const userSelectNum = confirm('Numerical Vals as Well?');
  
      // If the user selects a charset, add it to the value of startingCharSet & add the confirmation string to the final message. 
      if (userSelectLower) {
        startingChars += alphabet;
        yesGenerated += yesLower;
      } 
    
      if (userSelectUpper) {
        startingChars += alphabet.toUpperCase();
        yesGenerated += yesUpper;
      }
  
      if (userSelectSpecial) {
        startingChars += special;
        yesGenerated += yesSpecial;
      }
  
      if (userSelectNum) {
        startingChars += numbers;
        yesGenerated += yesNumber;      
      }
      // At the end of the else condition, display the yesGenerated confirm
      confirm(yesGenerated);
      
    } 


// Main Functionality 
// 1. yates Scramble 

// Spread each character in the string of combined characters, into an array.    
let arrayCharacters = [...startingChars];
// variable i = length of the array of chars 
let i = arrayCharacters.length; 

// temp = to hold the value of a randomly selected element in the array
let tempElement; 

while (i-- > 0) {
    // on each iteration, select a number at random between 0 and the current value of i
    let generateIndex = Math.floor(Math.random() * (i + 1));
    // Then, trade the value stored in tempElement with the value of an element selcted at a random index 
    tempElement = arrayCharacters[generateIndex];

    // Now that the random element has been stored, store the last element in the array
    arrayCharacters[generateIndex] = arrayCharacters[i];
    // Trade the last element in the array with the random  
    arrayCharacters[i] = tempElement; 
}
// Outside of the loop, convert the scrambled array into a string value. 
scrambledChars = arrayCharacters.join('');


// Slice the scrambledChars string beginning with 0 index, and ending at userInputNum 
return scrambledChars.slice(0, userNumInput);

} 
// End generatePassword 

  // Assignment Code
  var generateBtn = document.querySelector("#generate");
  
  // Write password to the #password input
  function writePassword() {
    // 1. Define generatePassword 
        // 2. Return the value of generate password to the global memory 
        // 3. 
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
    // Could I modify the value of passwordText by making it equal to the value produced by generatePassword invokation? 
    passwordText.value = password;
  
  }

  // Add event listener to generate button
  generateBtn.addEventListener("click", writePassword);
