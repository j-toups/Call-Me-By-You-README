const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./generateMarkdown");
var path = require('path')
var filename = path.dirname('/generateMarkdown.js')
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
            name: "contribution",
            message:"What coontributions would you like to credit? Leave blank if none."
        },
        {
            type:"input",
            name: "tests",
            message:"Insert any tests here. Leave blank if none."
        },
 ];
 
function writeFile() {
    fs.writeFile(path.join(__dirname, filename), data, function (err) {
        if (err) return console.log(err)
    })
};

function init() {
    inquirer.prompt(questions).then(answer => {
        generateMarkdown(answer)
    })
};

init();
