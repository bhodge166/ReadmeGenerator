// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== "none") {
    return `![liscense shield](https://img.shields.io/badge/license-${license}-blue)`;
  } else {
    return;
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== "none") {
    return `[the liscense page](https://choosealicense.com/licenses/${license}/)`;
  } else {
    return;
  }
}
// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== "none") {
    return `This project is covered by ${license}. For more information please see ${renderLicenseLink(
      license
    )}`;
  } else {
    return;
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}
  ## Description
${data.description}
## Table of Contents
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)
## Installation
Install using ${data.install}
## Usage
${data.usage}
## License
${renderLicenseSection(data.license)}
## Contributing
If you would like to contribute please ${data.contributing}
## Tests
${data.test}
## Questions
Please reach out with any questions at:
GitHub: [${data.github}](https://github.com/${data.github})
Email: ${data.email}

`;
}

module.exports = generateMarkdown;
