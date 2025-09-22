// First of all I need to get the references from the forms by defining them into constant variables using:

// id's (for the element)
const emailInput = document.getElementById("email")
const urlInput = document.getElementById("url")
const phoneInput = document.getElementById("phone")
const creditcardInput = document.getElementById("credit")
const currencyInput = document.getElementById("currency")

// classes (especially for the form, to run the validation)
const form = document.querySelector(".container")

// Next I will store the appropriate regex validation into varible for input validation
const emailRegex = /\w+@\w+(\.\w+)+/g;





const urlRegex = ;
const phoneRegex = ;
const creditcardRegex = ;
const currencyRegex = ;

// Here I am adding an event listenner for the "type = submit" for when we click the button to control the output
form.addEventListener("submit", (event) => 
{
    event.preventDefault();
    
    validateForm()
})

// Now, i am defining the functions that will validate/verify each user's input
function validateForm(){
    // Let's first define a varible that correspond to the boolean (true)
    // If it is true, we can submit the form at the end
    // We define false if one of the input does not correspond to the regex...

    let isValid = true
    // email
    if (!emailRegex.test(emailInput.value)) {
        console.log("Invalid E-mail adress");
        isValid = false
    }


// It is simply translate to if the correct regex pattern does not match the userinput, isValid becomes wrong and stops there!
// We do the same thing for the other inputs

    if (!urlRegex.test(urlInput.value)) {
        console.log("Enter a valid url");
        isValid = false
    }

    if (!phoneRegex.test (phoneInput.value)) {
        console.log("Invalid phone number");
        isValid = false
    }

    if (! creditcardRegex.test(creditcardInput.value)) {
        console.log("Invalid credit card number");
        isValid = false
    }

    if (! currencyRegex.test(currencyInput.value)){
        console.log("Invalid currency format");
        isValid = false
    }

    // Here is the main function, it checks the validation inputs
    if (isValid) {
        console.log("Form submitted succesfully, thanks")}

    else {
        console.log("The form has some errors, please check your inputs")}
    }
    

