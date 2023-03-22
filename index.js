const inquirer = require("inquirer");
const fs = require('fs');
const Manager = require("./lib/Manager");
const Intern = require("./lib/Intern");
const Engineer = require("./lib/Engineer");
const renderHTML = require("./src/generateHTML");
const path = require('path');

const { writeFile } = require('fs').promises;

const employee = [];

// TODO Create an array of questions for user.

// TODO Questions to add an intern
const addIntern = () => {
    return inquirer.prompt([
    {
        type: 'input',
        name: 'name',
        message: 'Provide the Interns full name?'
    },
    {
        type: 'input',
        name: 'id',
        message: 'Enter the Interns employee id.'
    },
    {
        type: 'input',
        name: 'email',
        message: 'Enter the Interns email address.'
    },
    {
        type: 'input',
        name: 'school',
        message: 'Enter the name of the interns school.'
    }
]);
};
// TODO Question to add an engineer
const addEngineer = () => {
    return inquirer.prompt([
    {
        type: 'input',
        name: 'name',
        message: 'Provide the Engineers full name?'
    },
    {
        type: 'input',
        name: 'id',
        message: 'Enter the Engineers employee id.'
    },
    {
        type: 'input',
        name: 'email',
        message: 'Enter the Engineers email address.'
    },
    {
        type: 'input', 
        name: 'github',
        message: 'Provide the Engineers github id'
    }
]);
};
// TODO Question to add an employee(non-mgmt) 
const addEmpl = () => {
    return inquirer.prompt([
    {
        type: 'input',
        name: 'name',
        message: 'Provide the Employees full name?'
    },
    {
        type: 'input',
        name: 'id',
        message: 'Enter the Employees employee id.'
    },
    {
        type: 'input',
        name: 'email',
        message: 'Enter the Employee email address.'
    },
]);
};
// TODO Question to add a new MGMT
const addMgmt = () => {
    return inquirer.prompt([
    {
        type: 'input',
        name: 'name',
        message: 'Provide the Managers full name?'
    },
    {
        type: 'input',
        name: 'id',
        message: 'Enter the Managers employee id.'
    },
    {
        type: 'input',
        name: 'email',
        message: 'Enter the Managers email address.'
    },
    {
        type: 'input',
        name: 'officeNumber',
        message: 'Provide the Managers office number.'
    }
]);
};

//TODO Create function to add new intern.
function newIntern () {

}

//TODO Create function to add new Engineer.
function newEngineer() {

}
//TODO Create function to add new Employee.
function newEmployee() {

}
//TODO Create function to add new MGMT.


// TODO Create a function to write HTML file
// function writeToFile(fileName, data) {
//     return fs.promises.writeFile(path.join(process.cwd(), fileName), data);
// }

// TODO function to call init(); -- ref W9-#28miniProject
const init = () => {
    addIntern()
    .then((answers) => writeFile('index.html', renderHTML(answers)))
    .then(() => console.log('Successfully wrote to index.html'))
    .catch((err) => console.error(err));
};

init();