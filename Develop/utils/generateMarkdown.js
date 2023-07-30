
// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if(license === 'Academic Free License v3.0'){
    answers.badge = al
  }

}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if(license){
    
  }

}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  return answers.license
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(answers) {
  return `# ${answers.Title}

## Table of Contents
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)
- [Deployment](#deployment)

## Description

${answers.purpose}

${answers.description}

${answers.learned}

## Usage
${answers.accomplish}

## Credits

${answers.credit}

URL: ${answers.creditURL}

## License

${renderLicenseSection(answers.license)}

## Deployment

User:${answers.username}

Github: https://github.com/${answers.username}

Deployment URL:${answers.deployment} 

Contact email: ${answers.email}

## Badges

${answers.badge}

## How to Contribute

${answers.contribute}

## Tests

${answers.tests}

`;
}

module.exports = generateMarkdown;
