const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./generateMarkdown");

//Generates variables for input in node.js
const questions = [
        {
            type: "input",
            name: "title",
            message: "What is your project's title?"
        },
        {
            type:"input",
            name: "description",
            message: "Describe your project."
        },
        {
            type:"input",
            name: "install",
            message:"Describe installation instructions."
        },
        {
            type:"input",
            name: "usage",
            message:"What usage information would you like to include? Leave blank if none."
        }, 
        {
            type: "list",
            name: "license",
            message: "Which license do you use?",
            choices: ["MIT", "IBM", "Mozilla", "Eclipse"],
        },
        {
            type:"input",
            name: "contributions",
            message:"What contributions would you like to credit? Leave blank if none."
        },
        {
            type:"input",
            name: "tests",
            message:"Insert any tests here. Leave blank if none."
        },
        {
            type:"input",
            name: "questions",
            message: "How can you be reached if users have questions?"
        }
 ];
 //Prompts user for input and writes input to README.md
 function init() {
    inquirer.prompt(questions).then(answer => {
        fs.writeFile("README.md", generateMarkdown(answer), function (err) {
            if (err) return console.log(err)
        })
    })
};
//Calls Function
init();
