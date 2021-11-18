#! /usr/bin/env node

//to make global 
//1- npm init -y
//2- package.json add bin:{command:"file name"}
//3- npm link

let helperfile=require("./commands/help.js");
//console.log(helperfile);
let organizefile=require("./commands/organize.js");
let viewfile=require("./commands/view.js");
console.log("hello");
let a;
let input=process.argv.slice(2);
//node mycli.js [view,dirname,tree];
let command=input[0];
switch(command)
{
    case "view":
        viewfile.fn(input[1],input[2]);
        break;
    case "organize":
        organizefile.fn(input[1]);
        break;
    case "help":
        helperfile.fn();
        break;
    default:
        console.log("invalid command type help for commands");
        break;
}