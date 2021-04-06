const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./generateMarkdown");

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
            type:"input",
            name: "contributions",
            message:"What coontributions would you like to credit? Leave blank if none."
        },
        {
            type:"input",
            name: "tests",
            message:"Insert any tests here. Leave blank if none."
        },
 ];
function init() {
    inquirer.prompt(questions).then(answer => {
        fs.writeFile("README.md", generateMarkdown(answer), function (err) {
            if (err) return console.log(err)
        })
    })
};

init();
