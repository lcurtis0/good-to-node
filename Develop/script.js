// TODO: Include packages needed for this application

const inquirer = require('inquirer'); // inquirer is 
const fs = require("fs/promises");
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    { /* Pass your questions in here */
        type: 'input',
        message: 'What would you like your project title to be?',
        name: 'Title'
    },
    {
        type: 'input',
        message: 'What is ther purpose of your project?',
        name: 'purpose'
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
        type: 'input',
        message: 'Is there anyone you would want to credit?',
        name: 'credit'
    },
    {
        type: 'input',
        message: 'What is the URL of person, company or org you would like to credit?',
        name: 'creditURL'
    },

    {
        type: "list",
        name: "license",
        message: "What kind of license should your project have?",
        choices: ["MIT", "APACHE 2.0", "GPL 3.0", "BSD 3", "None"],
    },

    {
        type: 'input',
        message: 'What is your Github username?',
        name: 'username'
    },
    {
        type: 'input',
        message: 'What your deployment link deployment?',
        name: 'deployment'
    },
    {
        type: 'input',
        message: 'What is your contact email?',
        name: 'email'
    },

    {
        type: 'input',
        message: 'How can someone contribute?',
        name: 'contribute'
    }


];



// TODO: Create a function to write README file



function writeToFile(filename, data) {
    console.log(data);
    fs.writeFile(filename, data)
        .then(() => console.log("Your file has been created!"))
        .catch((err) => console.error("There was an error: " + err))
}


// TODO: Create a function to initialize app
function init() {

    console.log("Hello and welcome to the README Generator!");
    console.log("Let's get started...");

    inquirer.prompt(questions)

        .then(async(answers) => {
            const markdown = await generateMarkdown(answers);
            // Use user feedback for... whatever!!
            console.log(markdown);
            writeToFile('NEW-README.md', markdown);

        })

        .catch((error) => {
            if (error) {
                // Prompt couldn't be rendered in the current environment
                console.log("Error caught: " + error);
            } else {
                // Something else went wrong
                console.log("Another type of error: perhaps did not answer questions correctly");
            }
        });

}

// Function call to initialize app
init();