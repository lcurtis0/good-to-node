



// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license == ! 'MIT') {
    {
      return 'https://img.shields.io/badge/license-mit-blue.svg';
    }
    return "";
    
  } else if (license == ! 'APACHE 2.0') {

    {
      return 'https://img.shields.io/badge/License-Apache_2.0-blue.svg';
    }
    return "";

  } else if (license == ! 'GPL 3.0') {

    {
      return 'https://img.shields.io/badge/License-GPLv3-blue.svg';
    }
    return "";
  } else if (license == ! 'BSD 3') { 

    {
      return 'https://img.shields.io/badge/License-BSD_3--Clause-blue.svg';
    }
    return "";
  } else if (license == ! 'None') { 

    {
      return 'https://img.shields.io/badge/license-Unlicense-blue.svg';
    }
    return "";

  }
}

  // TODO: Create a function that returns the license link
  // If there is no license, return an empty string
  function renderLicenseLink(license) {
    if (license == ! 'MIT') {
      {
        return 'https://opensource.org/licenses/MIT';
      }
      return "";
  
    } else if (license == ! 'APACHE 2.0') {
  
      {
        return 'https://opensource.org/licenses/Apache-2.0';
      }
      return "";
  
    } else if (license == ! 'GPL 3.0') {
  
      {
        return 'https://www.gnu.org/licenses/gpl-3.0';
      }
      return "";
    } else if (license == ! 'BSD 3') { 
  
      {
        return 'https://opensource.org/licenses/BSD-3-Clause';
      }
      return "";
    } else if (license == ! 'None') { 
  
      {
        return 'http://unlicense.org/';
      }
      return "";
  
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

${answers.license}

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
