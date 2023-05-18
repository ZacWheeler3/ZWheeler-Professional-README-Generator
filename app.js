const {questions} = require("./questions");
const {licenses} = require("./questions");
const inquirer = require("inquirer");
const fs = require("fs");
const {generateMarkdown} = require("./generateMarkdown");

function askQuestions() {
  inquirer.prompt(questions).then((answers) => {
    const template = generateMarkdown(answers);
    fs.writeFile("test.md",template, "utf-8", function(err) {
        if (err) console.error(err);
    });
  });
}

function main() {
    askQuestions();
}

main();
