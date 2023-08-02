
// This is the badage function returning an image if the choice (answers.license) equals to the values
function renderLicenseBadge(license) {
  if (license === 'MIT') {
    
      return '![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)';
    } else if (license === 'APACHE 2.0') {

      return '![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)';
    } else if (license === 'GPL 3.0') {

      return '![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)';
  } else if (license === 'BSD 3') { 

      return '![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)';
  } else if (license === 'None') { 

      return '![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)';
  } else {
    return '';
  }
}
// This function returns the links equal to the chosen license
  function renderLicenseLink(license) {
    if (license === 'MIT') {
        return 'https://opensource.org/licenses/MIT';
      } else if (license === 'APACHE 2.0') {
        return 'https://opensource.org/licenses/Apache-2.0';
      } else if (license === 'GPL 3.0') {
        return 'https://www.gnu.org/licenses/gpl-3.0';
    } else if (license === 'BSD 3') { 
        return 'https://opensource.org/licenses/BSD-3-Clause';
    } else if (license === 'None') { 
        return 'http://unlicense.org/';
    } else {
      return'';
    }

}
// this function calls on the badge and link functions and returns to itself
  function renderLicenseSection(license) {
    return `${renderLicenseLink(license)} 
            ${renderLicenseBadge(license)}`
  }

  //This function happens after getting answers and below (80) the renderLicense function is called
  function generateMarkdown(answers) {

    return `# ${answers.Title}

    ${renderLicenseBadge(answers.license)}

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

This Project uses the ${answers.license} license. Please discretion when using or sharing.
For more information please click the link below.

${renderLicenseSection(answers.license)}

## Deployment

User:${answers.username}

Github: https://github.com/${answers.username}

Deployment URL:${answers.deployment} 

## How to Contribute

${answers.contribute}

## Tests

${answers.tests}

## Questions

${answers.questions}

Contact email: ${answers.email}

`;
  }

//Explorts the function
  module.exports = generateMarkdown;
