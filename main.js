#! /usr/bin/env node
import inquirer from "inquirer";
let todos = []; //shoper []
let condition = true;
while (condition) {
    let todosQuestions = await inquirer.prompt([
        {
            name: "firstQuestion",
            type: "input",
            message: "What would you like to add in your todos?"
        },
        {
            name: "secondQuestion",
            type: "confirm",
            message: "Would you like to add more in your todos?",
            default: "true"
        },
    ]);
    todos.push(todosQuestions.firstQuestion);
    console.log(todos);
    //The loop is running on the based of this variable condition
    condition = todosQuestions.secondQuestion;
}
