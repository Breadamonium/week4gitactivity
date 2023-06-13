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
    writeAnsweresToHTML(answers);

  })
  .catch((error) => {
    if (error.isTtyError) {
      console.log("there is an error");
    } else {
      console.log("there is an error");
    }
  });

function writeAnsweresToHTML(answers) {
    var name = answers.nameQuestion;
    var location = answers.locationQuestion;
    var github = answers.githubQuestion;
    var bio = answers.bioQuestion;
    var linkedIn = answers.linkedInQuestion;
    console.log(name);
    console.log(location);
    console.log(github);
    console.log(bio);
    console.log(linkedIn);


    var htmlToWrite = `<!DOCTYPE html>
                            <html lang="en">
                            <head>
                            <meta charset="UTF-8">
                            <meta name="viewport" content="width=device-width, initial-scale=1.0">
                            <meta http-equiv="X-UA-Compatible" content="ie=edge">
                            <meta name="Description" content="Enter your description here" />
                            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css">
                            <title>This was created by NodeJS</title>
                            </head>

                            <body>
                            <main class="d-flex min-vh-100 bg-dark">
                                <div class="container-fluid my-auto">
                                <h1 class="display-2 text-center text-light">Cards</h1>
                                <div class="row justify-content-center">

                                    <div class="col-12 col-sm-6 mb-3">
                                    <div class="card">
                                        <div class="col-12 col-md-8">
                                            <div class="card-body">
                                            <h5 class="card-title">${name}</h5>
                                            <p class="card-text">My location is: ${location}</p>
                                            <p class="card-text"><small class="text-muted">Github url: ${github}</small></p>
                                            <p> My favorite food is: ${bio} </p>
                                            <a href="${linkedIn}">${linkedIn}</a>
                                            </div>
                                        </div>
                                        </div>
                                    </div>
                                    </div>

                                    <div class="col-12 text-center">
                                    <!-- back btn -->
                                    <h6><a href="./index.html">&larr; Go Back</a></h6>
                                    </div>
                                </div>
                                </div>
                            </main>

                            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>
                            </body>

                            </html>`;
    fs.writeFile("index.html", htmlToWrite, (error) => error ? console.log(error) : console.log("Success"));
}