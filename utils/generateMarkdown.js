// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== "none") {
    return `![liscense shield](https://img.shields.io/badge/license-${license}-blue)`;
  } else {
    return "";
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== "none") {
    switch (license) {
      case "MIT":
        return `[the liscense page](https://choosealicense.com/licenses/mit/)`;
      case "BSD3":
        return `[the liscense page](https://choosealicense.com/licenses/bsd-3-clause/)`;
      case "APACHE2.0":
        return `[the liscense page](https://choosealicense.com/licenses/apache-2.0/)`;
      case "GPL3.0":
        return `[the liscense page](https://choosealicense.com/licenses/gpl-3.0/)`;
      default:
        console.log(none);
    }
  } else {
    return "";
  }
}
// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== "none") {
    return `This project is licensed under ${license}. For more information please see ${renderLicenseLink(
      license
    )}`;
  } else {
    return "";
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}
  ## Table of Contents
  - [Description](#description)
  - [License](#license)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)
## Description
${data.description}
## License
${renderLicenseSection(data.license)}
## Installation
Install using ${data.install}
## Usage
${data.usage}
## Contributing
If you would like to contribute please ${data.contributing}
## Tests
${data.test}
## Questions
Please reach out with any questions at: <br />
GitHub: [${data.github}](https://github.com/${data.github})<br />
Email: ${data.email}

`;
}

module.exports = generateMarkdown;
