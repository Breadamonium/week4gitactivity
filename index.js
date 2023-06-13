var inquirer = require('inquirer');
var fs = require('fs');

inquirer
  .prompt([
    {
        type: "input",
        name: "nameQuestion",
        message: "What is your name?"
    },
    {
        type: "input",
        name: "githubQuestion",
        message: "What is your github handle?"
    },
    {
        type: "input",
        name: "locationQuestion",
        message: "Where do you live?"
    },
    {
        type: "input",
        name: "linkedInQuestion",
        message: "What is your linkedin url?"
    },
    {
        type: "input",
        name: "bioQuestion",
        message: "What is your favorite food?"
    }
  ])
  .then((answers) => {
    console.log(answers);
    fs.appendFile("index.html", answers.nameQuestion, (error) => error ? console.log(error) : console.log("Success"));
  })
  .catch((error) => {
    if (error.isTtyError) {
      console.log("there is an error");
    } else {
      console.log("there is an error");
    }
  });