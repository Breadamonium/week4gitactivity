var inquirer = require('inquirer');

inquirer
  .prompt([
    {
        type: "input",
        name: "NameQuestion",
        message: "What is your name"
    }
  ])
  .then((answers) => {
    console.log(answers);
  })
  .catch((error) => {
    if (error.isTtyError) {
      console.log("there is an error");
    } else {
      console.log("there is an error");
    }
  });