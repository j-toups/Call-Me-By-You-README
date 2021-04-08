
// Creates a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}
  
  ## License 
  ![License](https://img.shields.io/badge/License-${data.license}-blue.svg)
  ![https://opensource.org/licenses/${data.license}]

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