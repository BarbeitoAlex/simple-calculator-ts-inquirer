import inquirer = require('inquirer');

import validateNum from '../utils/validateNumber';

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
        validate: (answer) => validateNum(answer)
    },{
        type: 'input',
        name: 'number2',
        message: 'Introduce another number:',
        validate: (answer) => validateNum(answer)
    }
]
