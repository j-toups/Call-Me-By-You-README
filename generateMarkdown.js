
// Creates a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # License 
  ![License](https://img.shields.io/badge/License-${data.license}-blue.svg)

  # ${data.title}

  ## Description 
  ${data.description}

  ## Table of Contents 
      
  * [Installation](#installation)
  * [Usage](#usage)
  * [Contributions](#contributions)
  * [Tests](#tests)
  * [Questions](#questions)
      
  ## Installation Instructions
  ${data.install}

  ## Usage
  ${data.usage}

  ## Contributions
  ${data.contributions}

  ## Tests
  ${data.tests}

  ## Questions
   ${data.tests}`;
}

module.exports = generateMarkdown;