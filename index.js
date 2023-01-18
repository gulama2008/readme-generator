// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');
// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    message: "What is the title of your project?",
    name: "title",
  },
  {
    type: "input",
    message: "Please enter a description of your project: ",
    name: "description",
  },
  {
    type: "input",
    message: "Please enter the installation instructions: ",
    name: "installation",
  },
  {
    type: "input",
    message: "Please enter the usage information: ",
    name: "usage",
  },
  {
    type: "input",
    message: "Please enter the contribution guidelines: ",
    name: "contributing",
  },
  {
    type: "input",
    message: "Please enter the test instructions: ",
    name: "tests",
  },
  {
    type: "list",
    message: "Please choose a license from the list of options below: ",
      choices: [
        'Apache license 2.0',
        'Boost Software License 1.0',
        'BSD 2-clause "Simplified" license',
        'BSD 3-clause "New" or "Revised" license',
        'Creative Commons Zero v1.0 Universal',
        'Eclipse Public License 2.0',
        'GNU Affero General Public License v3.0',
        'GNU General Public License v2.0',
        'GNU General Public License v3.0',
        'GNU Lesser General Public License v2.1',
        'MIT',
        'Mozilla Public License 2.0',
        'The Unlicense'],
    name: "license",
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, generateMarkdown.generateMarkdown(data), (err) => { 
        if (err) {
            console.log(err);
        } else { 
            console.log('Readme file has been successfully created!');
        }
    })
}

// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt(questions)
        .then((data) => { 
            writeToFile('README.md', data);
        })
}

// Function call to initialize app
init();
