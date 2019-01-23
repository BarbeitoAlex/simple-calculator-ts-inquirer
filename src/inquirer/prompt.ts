import inquirer = require('inquirer');

export const choices = ['+ Addition', '- Subtraction', '* Multiplication', '/ Division']

export const questions: inquirer.Questions = [
    {
        type: 'list',
        name: 'operate',
        message: 'Select a operator',
        choices: choices
    },{
        type: 'input',
        name: 'number1',
        message: 'Introduce a number:',
        validate: (answer) => {
            let valid = !isNaN(answer);
            return valid || 'Enter a valid number';
        }
    },{
        type: 'input',
        name: 'number2',
        message: 'Introduce another number:',
        validate: (answer) => {
            let valid = !isNaN(answer);
            return valid || 'Enter a valid number';
        }
    }
]
