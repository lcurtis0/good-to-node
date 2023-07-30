// TODO: Include packages needed for this application

const package = require('./package.json');
const inquirer = require('inquirer');
const fs = require("fs/promises");
const { writeFile } = require('fs');

function writeToFile(answers) {

    return `
    ## ${answers.name}

# Description

This files are created to complete the Module two challenge-2

${answers.description}

${answers.learned}

Table of Contents
- [Description](#Decription)
- [Installation](#Installation)
- [Usage](#Usage)
- [Credits](#Credits)
- [License](#License)
- [Deployment](#Deployment)

# Usage
${answers.accomplish}

![alttext](.${answers.assets} ${answers.images} ${answers.imageName}) 


# Credits

Credit to W3schools.com for understanding media Queries. (Tutorial)

URL: https://www.w3schools.com/css/css_rwd_mediaqueries.asp

Credit to coolors for color variety.

URL: https://coolors.co/


# License

N/A

# Deployment
Evaluated environment url: https://lcurtis0.github.io/Turtle-Necklace/

Badges
N/A

How to Contribute
N/A

Tests
N/A
 `

}

console.log("Hello and welcome to the README Generator!");
console.log("Let's get started...");

// TODO: Create an array of questions for user input
inquirer
    .prompt([
        { /* Pass your questions in here */
            type: 'input',
            message: 'What would you like your project title to be?',
            name: 'name'
        },
        {
            type: 'input',
            message: 'What would you like your description to be?',
            name: 'description'
        },
        {
            type: 'input',
            message: 'What is something you learned throughout this process?',
            name: 'learned'
        },
        {
            type: 'input',
            message: 'Now that you created this application, how do you hope the users will use it?',
            name: 'accomplish'
        },
        {
            type: 'confirm',
            message: 'Images are necessary for completing a README file. Do you have an assets folder?',
            name: 'assets',
            default: false,
            transformer: (answer) => (answer ? '/assets' : '')
        },
        {
            type: 'confirm',
            message: 'If you have a images folder?',
            name: 'images',
            default: false,
            transformer: (answer) => (answer ? '/images' : '')
        },
        {
            type: 'input',
            message: 'what is the name of your image? [Note: Please do not include file type i.e. imageofRover.png]',
            name: 'imageName'
        },
        {
            type: 'list',
            message: 'what type of file is your image?',
            choice: ['.jpg', '.jpeg', '.png', '.TIFF'],
            filter(val) {
                return val.toLowerCase();
                name: 'fileType'
            },
        }
    ])

    .then((answers) => {
        // Use user feedback for... whatever!!
        console.log("Here is what you wrote");
        console.log(answers);
        writeToFile(answers);

        const writeFile = writeToFile();

        fs.writeFile("README.md", writeFile)
            .then(() => console.log("Your file has been created!"))
            .catch((err) => console.error("There was an error: " + err))

    })
    .catch((error) => {
        if (error.isTtyError) {
            // Prompt couldn't be rendered in the current environment
            console.log("error");
        } else {
            // Something else went wrong
            console.log("another type of error");
        }
    });

const questions = [];



// TODO: Create a function to write README file

/*
const renderQuestion = process.argv[2];
const answer = process.argv[3];

function writeToFile(fileName, data) {}

function writeToFile('Newile.txt', data) {}
*/



//FileSystem.appendfile('NEW-README.md', `${process.argv[2]}`, (err)=> 
//    err ? console.error(err) : console.log('file created'))




// TODO: Create a function to initialize app
function init() { }

// Function call to initialize app
init();