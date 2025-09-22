// First of all I need to get the references from the forms by defining them into constant variables using:


// classes (especially for the form, to run the validation)
const form = document.querySelector(".container")

// id's (for the element)
const emailInput = document.getElementById("email")
const urlInput = document.getElementById("url")
const phoneInput = document.getElementById("phone")
const creditcardInput = document.getElementById("credit")
const currencyInput = document.getElementById("currency")



// Next I will store the appropriate regex validation into varible for input validation
// Reminder: every regex code starts with / (it's actually means starts here or ends here)
const emailRegex = /\w+@\w+(\.\w+)+/g;
// \w: means any alphanumeric character and serves to introduce the first name but so far it only accepts one character
// +: to mean at least one character, to allow the user to put more characters 
// @: to include alt as it necessery for an email adress!
// \w+: for the domain name (like gmail, yahoo, etc)
// (\.\w+)+: to include the domain extension (like .com, .org, etc) and the \. is to escape the dot as it has a special meaning in regex
// g: global flag to search for all matches in the input string




const urlRegex = /.*/;        // This just matches any character
const phoneRegex = /.*/;      // Or you can use / / for an empty regex
const creditcardRegex = /.*/;
const currencyRegex = /.*/;

// Here I am adding an event listenner for the "type = submit" for when we click the button to control the output
form.addEventListener("submit", (event) => 
{
    event.preventDefault();
    
    validateForm()
})

// Now, i am defining the functions that will validate/verify each user's input
function validateForm() {
    let isValid = true;
    
    // Clear previous error messages (if any)
    const errorMessages = document.querySelectorAll('.error-message');
    errorMessages.forEach(msg => msg.remove());

    // Validate Email
    if (!emailRegex.test(emailInput.value)) {
        displayError(emailInput, 'Please enter a valid email address.');
        isValid = false;
    }

    // Validate URL
    if (!urlRegex.test(urlInput.value)) {
        displayError(urlInput, 'Please enter a valid URL.');
        isValid = false;
    }
    
    // Validate Credit Card Number
    if (!creditCardRegex.test(creditInput.value)) {
        displayError(creditInput, 'Please enter a valid 16-digit credit card number.');
        isValid = false;
    }

    // Validate Currency Amount
    if (!currencyRegex.test(currencyInput.value)) {
        displayError(currencyInput, 'Please enter a valid currency amount (e.g., $19.99).');
        isValid = false;
    }

    // If all validations pass
    if (isValid) {
        console.log('Form submitted successfully! Data is valid.');
        // Here you would typically submit the form data to an API
        // For example: form.submit(); or use the Fetch API
        // displaySuccessMessage();
    }
}    

function displayError(inputElement, message) {
    const errorDiv = document.createElement('div');
    errorDiv.className = 'error-message';
    errorDiv.style.color = 'red';
    errorDiv.style.fontSize = '12px';
    errorDiv.textContent = message;
    
    // Insert the error message after the input element
    inputElement.parentElement.insertBefore(errorDiv, inputElement.nextSibling);
}