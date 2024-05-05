#! /usr/bin/env node
import chalk from "chalk";
import inquirer from "inquirer";
console.log(chalk.yellowBright("Student Management System (By:m.a.s)"));
const randomNum = Math.floor(10000 + Math.random() * 90000);
let myBalance = 0;
let question = await inquirer.prompt([
    {
        name: "studentname",
        type: "input",
        message: "Enter student name:",
        validate: function (value) {
            if (value.trim() !== "") {
                return true;
            }
            return "Please enter a non-emty value";
        }
    },
    {
        name: "courses",
        type: "list",
        message: "Select course to enrolled:",
        choices: ["Html & Css", "Javascript", "Typescript", "python", "Advance python"],
    }
]);
const coursefee = {
    "Html & Css": 1500,
    "Javascript": 2000,
    "Typescript": 2500,
    "python": 3000,
    "Advance python": 4500,
};
console.log(`\nCourses fees: ${coursefee[question.courses]}/-\n`);
console.log(`Balance: ${myBalance}\n`);
let paymenttype = await inquirer.prompt([
    {
        name: "payment",
        type: "list",
        message: "Select payment method:",
        choices: ["Bank Tranfer", "Easypaisa", "Jazzcash"],
    },
    {
        name: "amount",
        type: "input",
        message: "Tranfer Money:",
        validate: function (value) {
            if (value.trim() !== "") {
                return true;
            }
            return "Please enter a non-emty value";
        }
    }
]);
console.log(`\nYou select payment method ${paymenttype.payment}`);
const tuitionfees = coursefee[question.courses];
const paymentAmount = parseFloat(paymenttype.amount);
if (tuitionfees === paymentAmount) {
    console.log(`Dear ${question.studentname} you have successfully enrolled in ${question.courses} course\n`);
    let ans = await inquirer.prompt([{
            name: "select",
            type: "list",
            message: "What would you like to do next?",
            choices: ["View Status", "Exit"],
        }]);
    if (ans.select === "View Status") {
        console.log("\n**********Status**********\n");
        console.log(`Student Name:${question.studentname}`);
        console.log(`Student ID:${randomNum}`);
        console.log(`Course:${question.courses}`);
        console.log(`Course Fee Paid:${paymentAmount}`);
        console.log(`Balance:${myBalance += paymentAmount}`);
    }
    else {
        console.log("\nExiting.....\n");
    }
}
else {
    console.log("Not enough\n");
}
//complete, now run in cmd or terminal
