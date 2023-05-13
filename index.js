//  Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');
const generateMarkdown = require('generateMarkdown');


// Create an array of questions for user input
const questions = [ 
    {
        type: 'input',
        name: 'tittle',
        message: 'What is your tittle?',
      },
      {
        type: 'input',
        name: 'description',
        message: 'please give decription of project',
      },
      {
        type: 'input',
        name: 'install',
        message: 'please provide installation ?',
      },
      {
        type: 'input',
        name: 'usage',
        message: 'please provide usage instructions for your project',
      },
      {
        type: 'input',
        name: 'github',
        message: 'Enter your GitHub Username',
      },
      {
        type: 'input',
        name: 'email',
        message: 'please provide your email',
      },
      {
        type: 'list',
        name: 'licenses',
        message: 'please choose a licenses from below',
        choices: ['BSD_3', 'MIT', 'APACHE_2.0', 'GPL_3.0',  'None'],
      },
      {
        type: 'input',
        name: 'test',
        message: 'please provide test command to run the tests',
        default: 'npm run test'
      },
      {
        type: 'input',
        name: 'contriubuting',
        message: 'How to contribute to this project',
      },
];

//  Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

//  Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((response) => {
        console.log('response = ', response);
        writeToFile('README.md', generateMarkdown(response));
      });
}

// Function call to initialize app
init();
