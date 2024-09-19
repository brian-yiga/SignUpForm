//Select all relevant input and button elements
//Add a event listener to the Submit button to prevent the default form submission behavior and perform basic validation
//Create a display error function to display an error message to the user 

const fullNames = document.querySelector("#fullnames");
const emailAddress = document.querySelector("#email");
const userName = document.querySelector("#username");
const passwordInputOne = document.querySelector("#password1");
const passwordInputTwo = document.querySelector("#password2");
const button = document.querySelector("button");

function displayError (message){
  alert(message);
};

button.addEventListener('click', function(event){
    event.preventDefault(); 

    let isValid = true;
    if (fullNames.value === '') {
      displayError('Please enter your full name.');
      isValid = false;
    }
  
    if (emailAddress.value === '') {
      displayError('Please enter your email address.');
      isValid = false;
    } else if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(emailAddress.value)) { 
      displayError('Please enter a valid email address.');
      isValid = false;
    }
  
    if (userName.value === '') {
      displayError('Please choose a username.');
      isValid = false;
    }
  
    if (passwordInputOne.value === '') {
      displayError('Please enter a password.');
      isValid = false;
    } else if (passwordInputOne.value.length < 6) {
      displayError('Password must be at least 6 characters long.');
      isValid = false;
    }
  
    if (passwordInputTwo.value === '') {
      displayError('Please confirm your password.');
      isValid = false;
    } else if (passwordInputOne.value !== passwordInputTwo.value) {
      displayError('Passwords do not match.');
      isValid = false;
    }
  
   
    if (isValid) {
      console.log('Form submission is valid!'); // I WANT TO LEARN HOW TO LINK IT TO THE LOGIN PAGE FROM HERE
      window.location.href = ""
    }
});


