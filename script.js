// First of all I need to get the references from the forms by defining them into constant variables using:


// classes (especially for the form, to run the validation)
const form = document.querySelector(".container")

// id's (for the element)
const emailInput = document.getElementById("email")
const urlInput = document.getElementById("url")
const phoneInput = document.getElementById("phone")
const creditInput = document.getElementById("credit")
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


const urlRegex = /^(https?:\/\/)?([\w.-]+)\.([a-z]{2,6})([\/\w.-]*)*\/?$/i;
// ^ and $: anchor the regex to the start and end of the string (must match the whole input)
// (https?:\/\/)?: optional "http://" or "https://"
// [\w.-]+: domain name (letters, numbers, underscores, dots, or dashes)
// \.: literal dot (escaped since dot is special in regex)
// ([a-z]{2,6}): top-level domain like com, org, net (2 to 6 letters)
// ([\/\w.-]*)*: optional path like /page or /folder/file
// \/?$: optional trailing slash
// i: case insensitive (so .COM or .Org still works)

const phoneRegex = /^\(?\d{3}\)?[-.\s]?\d{3}[-.\s]?\d{4}$/;
// ^ and $: start and end of the string
// \(?\d{3}\)?: optional parentheses around the first 3 digits (area code)
// [-.\s]?: optional separator (dash, dot, or space)
// \d{3}: next 3 digits
// [-.\s]?: another optional separator
// \d{4}: final 4 digits

const creditCardRegex = /^\d{4}([ -]?\d{4}){3}$/;
// ^ and $: full string must match
// \d{4}: first block of 4 digits
// ([ -]?\d{4}){3}: repeat 3 times → optional space or dash + 4 digits
// This covers formats like "1234 5678 9012 3456" or "1234-5678-9012-3456"

const currencyRegex = /^\$?\d{1,3}(,\d{3})*(\.\d{2})?$/;
// ^ and $: start and end anchors
// \$?: optional dollar sign
// \d{1,3}: 1 to 3 digits at the start
// (,\d{3})*: optional groups like ,234 for thousand separators
// (\.\d{2})?: optional decimal point with exactly 2 digits (for cents)
// Matches "$19.99", "$1,234.56", or even "123"


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
    

    // Validate Phone Number
    if (!phoneRegex.test(phoneInput.value)) {
        displayError(phoneInput, 'Please enter a valid phone number (e.g., 123-456-7890).');
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