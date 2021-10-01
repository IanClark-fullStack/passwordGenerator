// Define the generatePassword function seperately
function generatePassword(){

// const variable for charsets 
  // const 1.
  const alphabet = 'abcedfghijklmnopqrstuvwxyz';
  // const 2.
  const numbers = '0123456789';
  // const 3.
  const special = "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";
  // const 4.
  
  // Const variable initialized to the value of the user num input 
  let userNumInput = prompt('Select Desired Password Length, Min: 8, Max: 128');

  // Variable Initialized to the value of user selected boolean. 
  let userSelectLower = confirm('Include lowercase values?');

  // Variable initialized 
  let userSelectUpper = confirm('How bout Uppercase?');

  let userSelectSpecial = confirm('Special Chars?');

  const userSelectNum = confirm('Numerical Vals as Well?');

  // Starting Char Set initialized to the value of an empty string. 
  let startingChars = '';

  // scrambled chars initialized to the value of an empty string 
  let scrambledChars = '';

// Final Password initialized to the value of an empty string 
var finalPassword = '';


// Main Conditionals 

  // Conditionals 
// NaN Use for Validation 

    // If the user selects a charset, add it to the value of startingCharSet
  if (userSelectLower === true) {
    startingChars += alphabet;
  } 

  if (userSelectUpper === true) {
    startingChars += alphabet.toUpperCase();
  }

  if (userSelectSpecial === true) {
    startingChars += special;
  }

  if (userSelectNum === true) {
    startingChars += numbers;
  }


  // const random variable initialized to the value of 
  // var generateRandomNum = Math.floor(Math.random() * startingChars.length);

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


  // while (finalPassword.length < userNumInput) {
  //   var generateRandomNum = Math.floor(Math.random() * startingChars.length);
  //   finalPassword += startingChars.charAt(generateRandomNum);
  // }


} 
// End generatePassword 




//  for (let i=finalPassword.length - 1; i<userNumInput; i++) {
//   var generateRandomNum = Math.floor(Math.random() * startingChars.length);
//   finalPassword += startingChars.charAt(generateRandomNum);
//  }


    // Return finalPassword to the global memory. 
    // Which is then passed by the invocation of generatePassword within writePassword (but never returned out of the functions local memory)
  
    // Return
  
  
  
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
  
  

  
      
  
  
  
  
  
  // 1a. When answering prompts - Return Input validaton, selection of at least 1 character type
  
  // 1b. All prompts answered : Return Password according to criteria
  
  // 1c. On Password generation
  // What data types need to be defined 
  
  // What processes do we want to interact with those data types
  
  
  
  
  
  
  
  
  
  
    // Psuedo Acceptance Criteria
  
  // 1. On click, Password Generator
    // 2. Criteria Prompt - Select Criteria to Include in Password
  
    // 3. Length Prompt - Choose Preferred Length (between 8 - 128 chars) 
        // Data Type = Number From 8 to 128
            // const userLength = prompt('please choose a password length. min: 8, max: 128.');
          // Defines output length
          // Alert if {low}
          // Alert: else if {typeof userLength !== 'Number'}
          // Alert else if {high}
          // Else {No alert: save the preffered num as variable we can use later}
          
        // let charSetNum = 0;
  
          // Use userLength Var to then,
             // 4. Char Type Processes - Select lowercase, uppercase, numeric, special chars
                
                    // Char Types = Array of Variables?
                      // [lowercase, uppercase, numeric, special chars]
  
                      // If lowercaseConfirm === true 
                            // Then, validate user resonse 
                            // Then, charSetNum++
  
                      // If uppercaseConfirm === true 
                            // Then, validate user resonse 
                            // Then, lowerCaseString.toUpperCase()
                            // Then, charSetNum++
  
                      // If specialCharConfirm === true
                            // Then, validate user resonse 
                            // Then, charSetNum++
                      
                // Make numericalCharConfirm the last Prompt of its kind, we can then check the value of charSetNum, validating that its value is strictly Greater or Equal to 1 
  
                      // If numericalCharConfirm === false && charSetNum < 1 
                            // Then, Throw an alert
                      // In every other case, where the numericalCharConfirm is true. 
                          // Then, charSetNum++
                      
  
                    
  
                            // 
                        
                    // In case user selects 1 character type
      // 
   
      // 