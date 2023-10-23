//'YourName' PROJECT DISPLAYS THE INPUTED FIRST AND LAST NAMES AS WELL AS A PREDEFINED SUPPORTIVE MESSAGE
//THIS IS A BEGINNER JAVASCRIPT PROGRAM I AM MAKING TO REINFORCE MY LEARNING
//SO DON'T EXPECT OPTIMIZED CODE
//CREATED BY: CHRISTIAN SEIPLE 


//DECLARATIONS AND PROMPTS

const prompt = require("prompt-sync")();

var FirstName = prompt("What is your first name?");
var LastName = prompt("What is your last name?");

//RETURNED STRING AND MESSAGE

console.log(FirstName + " " + LastName + "?" + " What a respectable name!");