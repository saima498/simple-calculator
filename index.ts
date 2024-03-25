#! /usr/bin/env node
//SHABANG
import inquirer from "inquirer"


const answer = await inquirer.prompt([
{message:"enter first number",type:"number",name:"firstnumber"},
{message:"enter second number",type:"number",name:"secondnumber"},
{
    message:"Select one of the operator to perform operation",
type:"list",
name:"operator",
choices:["addition","subtraction","multiplication","division"],
}
]);
console.log(answer)
if(answer.operator==="addition"){
    console.log(answer.firstnumber +answer.secondnumber)
}
else if(answer.operartor==="subtraction"){
    console.log(answer.firstnumber- answer.secondnumber)
}
else if (answer.operator==="multiplication"){
    console.log(answer.firstnumber * answer.secondnumber)
}
else if (answer.operator==="division"){
    console.log(answer.firstnumber / answer.secondnumber)
}
else{
    console.log("please select valid operator")
}

console.log("the end")










