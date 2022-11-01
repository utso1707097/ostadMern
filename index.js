//"use strict";
console.log('Hello world');

function myName(){
    name = "Utso";
}
myName();

let poorCountry = ['Bangladesh','Srilanka'];
let richCountry = [...poorCountry,'China','America','Italy'];

console.log(richCountry)

//without spread
let MiddleCountry = ['Iran','Canada'];
richCountry.push(MiddleCountry);
console.log(richCountry);

//Rest parameter

function sum(...numbers){
    let sum = 0;
    for(let i of numbers){
        sum+=i;
    }
    console.log(sum);
}
sum(1,2,3,4,5);

//if you want to use more parameters with rest parameter then it must be used at first
avg(5,1,2,3,4,5);
function avg(a,...numbers){
    let sum = 0;
    for(let i of numbers){
        sum+=i;
    }
    console.log(sum/a);
}

//Dynamic function ->The function which declared with constructor has no name
var showName = function(name){
    return name;
}
console.log(showName("Utso Mollik"));

//var let const
//var ->redeclare reassign
//let ->reassign
//const -> declare and assign once

var color = 'Red';
color = 'blue';
console.log(color);

var color = 'Green';
console.log(color);

let myNumber = 14;
console.log(myNumber);
myNumber = 15;
console.log(myNumber);

const pi = 3.1416;
console.log(pi);

//variable scope
//local scope
//global scope
function myFunction(){
    var name = 'EcmaScript';
    console.log(name);
}
myFunction();

//variable hoisting ->Uttolon ->value assign hobe age declare pore
studentName = 'Rabbil Hasan';
console.log(studentName);
var studentName;
