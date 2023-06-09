//  Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== 'None') {
    return `![Repo LIcense](https://img.shields.io/badge/license-${license}-green.svg)`;
  }
  return '';
}

//  Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== 'None') {
    return `\n* [License](#license)\n`;
  }
  return '';
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ${renderLicenseBadge(data.licenses)}
  ## Description

  ${data.description}

  ## Table of Contents 

* [Installation](#installation)

* [Usage](#usage)


${renderLicenseLink(data.licenses)}

* [Contributing](#contributing)

* [Tests](#tests)

* [Questions](#questions)
`;
}

module.exports = generateMarkdown;
