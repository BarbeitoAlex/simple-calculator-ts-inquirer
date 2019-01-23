import inquirer = require('inquirer');

import { choices, questions } from './inquirer/prompt';
import Calculator from './model/Calculator';

const cal = new Calculator();

inquirer.prompt(questions).then((answers: inquirer.Answers) => {
    let op: string = answers['operate'];
    let n1: number = Number(answers['number1']);
    let n2: number = Number(answers['number2']);
    let result: number | undefined;

    switch(op) {
        case choices[0]: result = cal.add(n1,n2); break;
        case choices[1]: result = cal.subt(n1,n2); break;
        case choices[2]: result = cal.mul(n1,n2); break;
        case choices[3]: result = cal.div(n1,n2); break;
    }

    console.log(`\n Result: ${result} \n`);
})
