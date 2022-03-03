// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");
const fs = require("fs");

// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    message: "What is the name of your app?",
    name: "title",
  },
  {
    type: "input",
    message: "What does your app do?",
    name: "description",
  },
  {
    type: "input",
    message: "What is this app used for?",
    name: "usage",
  },
  {
    type: "input",
    message: "What is the installation process?",
    name: "install",
  },
  {
    type: "input",
    message: "Please include any tests:",
    name: "test",
  },
  {
    type: "list",
    message: "Please choose the applicable liscense:",
    name: "license",
    choices: ["MIT", "APACHE 2.0", "GPL 3.0", "BSD 3", "none"],
  },
  {
    type: "input",
    message: "How can users contribute?",
    name: "contributing",
  },
  {
    type: "input",
    message: "What is your github username",
    name: "github",
  },
  {
    type: "input",
    message: "What is your email?",
    name: "email",
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) =>
    err ? console.error(err) : console.log("Created file")
  );
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then((response) => {
        writeToFile("README.md", generateMarkdown(response))
    })
}

// Function call to initialize app
init();
