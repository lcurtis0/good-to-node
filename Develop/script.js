

const inquirer = require('inquirer'); // inquirer is give prompts (js files) for the array the user inputs into
const fs = require("fs/promises");
const generateMarkdown = require('./utils/generateMarkdown'); // generateMarkdown has buttons inorder to create  license badges


const questions = [ // questions array
    {
        type: 'input', // type shows what of prompted question will be given 
        message: 'What would you like your project title to be?',
        name: 'Title' //Assigned name of the question
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
        type: "list", //list gives options to the user
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
    },
    {
        type: 'input',
        message: 'What tests have you done for the project?',
        name: 'tests'
    },
    {
        type: 'input',
        message: 'What would you say to a user if they had any questions?',
        name: 'questions'
    }


];







function writeToFile(filename, data) { //The function will not start until file system writes "filename" and "data"
    fs.writeFile(filename, data)
        .then(() => console.log("Your file has been created!"))
        .catch((err) => console.error("There was an error: " + err))
}



function init() {

    console.log("Hello and welcome to the README Generator!");
    console.log("Let's get started...");

    inquirer.prompt(questions)// inquirer.prompt holds question

        .then(async (answers) => { //cannot start function until all answers are in (async + await)
            const markdown = await generateMarkdown(answers); // answers come back from generateMarkdown
            writeToFile('README.md', markdown); //Finally creates a README with answers inside
        })

        .catch((error) => {
            if (error) {
                console.log("Error caught: " + error);
            } else {
                console.log("Another type of error: perhaps did not answer questions correctly");
            }
        });

}

init();