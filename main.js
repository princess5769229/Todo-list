"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const inquirer_1 = __importDefault(require("inquirer"));
let todos = []; // shopper []
let condition = true;
while (condition) {
    let todoQuestions = await inquirer_1.default.prompt([
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
    ]);
    todos.push(todoQuestions.firstQuestion);
    console.log(todos);
    // The loop is running on the based of this vriable condition
    condition = todoQuestions.secondQuestion;
}
