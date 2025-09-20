// To extract the required data from the hundreds of thousands of pages of string response I get from my API, 
// As a developer, I will implement 6 form validation using Regular Regex equations
// That includes: Email; URL; Phone numbers; Credit cards; Hashtags and Currency numbers
// const prompt = require("prompt-sync")({sigint:true});

const prompt = require("prompt-sync")({sigint:true});
// ...existing code...
// A simple intro (Not required - I am using it as a warm up (*smiles*))
let userName = prompt("What is your name: ")
console.log(`Hello ${userName}, please answer those following 6 questions in the console:`)

// Email feature:
