import inquirer from 'inquirer';
inquirer
    .prompt([
        {type: 'input', name: 'name', message: 'What is your name?'},
        {type: 'input', name: 'age', message: 'How old are you?'},
        {type: 'input', name: 'tall', message: 'How tall are you?'},
        {type: 'input', name: 'gender', message: 'Whats your gender?'},
        {type: 'input', name: 'color', message: 'Whats your favorite color?'},
        {type: 'input', name: 'major', message: 'Who is winning the CSGO Rio major?'},
    ])
    .then((answers) => {
        console.log(`My name is ${answers.name} `);
        console.log(`I am ${answers.age} years old`);
        console.log(`I am ${answers.tall} tall`);
        console.log(`I am a ${answers.gender} `);
        console.log(`My favorite color is ${answers.color} `);
        console.log(`${answers.major} is winning the CSGO Rio major`);

});
        