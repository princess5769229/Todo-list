#! /usr/bin/env node

import inquirer  from "inquirer"
let todos = []// shopper []
let condition = true;

while(condition)
{
    let todoQuestions = await inquirer.prompt(
 [
    {
        name: "firstQuestion",
        type: "input",
        message: "What would you like to add your todos?",
    },
    {
        name: "secondQuestion",
        type: "confirm", // when type is confirm answer is in yes or no
        message: "What would like to add more in your todos?",
        default: "true",
    }
]
);
todos.push(todoQuestions.firstQuestion);
console.log(todos)
// The loop is running on the based of this vriable condition
condition = todoQuestions.secondQuestion;
}
