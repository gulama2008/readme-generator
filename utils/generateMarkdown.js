// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch (license) { 
    case 'Apache license 2.0':
      return '![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)'
    case 'Boost Software License 1.0':
      return '![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)'
    case 'BSD 2-clause "Simplified" license':
      return '![License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)'
    case 'BSD 3-clause "New" or "Revised" license':
      return '![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)'
    case 'Creative Commons Zero v1.0 Universal':
      return '![License: CC0-1.0](https://img.shields.io/badge/License-CC0_1.0-lightgrey.svg)'
    case 'Eclipse Public License 2.0':
      return '![License](https://img.shields.io/badge/License-EPL_2.0-red.svg)'
    case 'GNU Affero General Public License v3.0':
      return '![License: AGPL v3](https://img.shields.io/badge/License-AGPL_v3-blue.svg)'
    case 'GNU General Public License v2.0':
      return '![License: GPL v2](https://img.shields.io/badge/License-GPL_v2-blue.svg)'
    case 'GNU General Public License v3.0':
      return '![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)'
    case 'GNU Lesser General Public License v2.1':
      return '![License: LGPL v3](https://img.shields.io/badge/License-LGPL_v3-blue.svg)'
    case 'MIT':
      return '![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)'
    case 'The Unlicense':
      return '![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)'
    default:
      return ""
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch (license) {
    case "Apache license 2.0":
      return "https://opensource.org/licenses/Apache-2.0";
    case "Boost Software License 1.0":
      return "https://www.boost.org/LICENSE_1_0.txt";
    case 'BSD 2-clause "Simplified" license':
      return "https://opensource.org/licenses/BSD-2-Clause";
    case 'BSD 3-clause "New" or "Revised" license':
      return "https://opensource.org/licenses/BSD-3-Clause";
    case "Creative Commons Zero v1.0 Universal":
      return "http://creativecommons.org/publicdomain/zero/1.0/";
    case "Eclipse Public License 2.0":
      return "https://opensource.org/licenses/EPL-2.0";
    case "GNU Affero General Public License v3.0":
      return "https://www.gnu.org/licenses/agpl-3.0";
    case "GNU General Public License v2.0":
      return "https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html";
    case "GNU General Public License v3.0":
      return "https://www.gnu.org/licenses/gpl-3.0";
    case "GNU Lesser General Public License v2.1":
      return "https://www.gnu.org/licenses/lgpl-3.0";
    case "MIT":
      return "https://opensource.org/licenses/MIT";
    case "The Unlicense":
      return "http://unlicense.org/";
    default:
      return "";
  }

}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  let link= renderLicenseLink(license);
  if (license!="No license") {
    return `The application is covered by license ${license}, license link is ${link}`;
  } else { 
    return "";
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {

  let badge = renderLicenseBadge(data.license);
  // let link = renderLicenseLink(data.license);
  let licenseSection = renderLicenseSection(data.license);
  return `# ${data.title} ${badge}
  
## Description

${data.description}

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation

${data.installation}

## Usage

${data.usage}

## License

${licenseSection}

## Contributing

${data.contributing}

## Tests

${data.tests}

## Questions

If you have additional questions, please contact me at: 

My github link: https://github.com/${data.githubUsername}

My email address: ${data.email}
`;
}

module.exports = { generateMarkdown };
