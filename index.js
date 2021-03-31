var inquirer = require("inquirer");
var fs = require("fs");

function readme() {
    inquirer.prompt([
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
            message:"Insert any tests here.Leave blank if none."
        },

    ])
    .then ((answer) => {
        console.log(answer.title);
        console.log(answer.description);
        console.log(answer.install);
        console.log(answer.usage);
        console.log(answer.contribution);
        console.log(answer.tests);
    });
}
const write = (data) => {
    const html=`
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>New Profile</title>
    </head>
    <body>
        <h1 class = "readme">${data.title}</h1>
        <div class ="readme">${data.description}</div>
        <div class="readme">${data.install}</div>
        <div class="readme">${data.usage}</div>
        <div class="readme">${data.contribution}</div>
        <div class="readme">${data.tests}</div>
    <script type="text/javascript" src="index.js"></script>
    </body>     
    </html> 
    `; 
    fs.writeFile('index.html', html, function (err) {
        if (err) return console.log(err);
        console.log('README created!');
    })
}
