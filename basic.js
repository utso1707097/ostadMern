var studentAge = 55;
console.log("My age is",studentAge);
var studentName = 'Mithila';
console.log(typeof studentAge);
console.log(typeof studentName);

var firstName = "Utso";
var lastName ="Mollik";
var fullname = firstName+ " " + lastName ;
console.log(fullname);

var price1 =parseInt('31');
var price2 = parseInt('23');
console.log(price1+price2);
/*
price++
price+=10
price-=10
price--

*/

gpa = '3.24';
parsedGpa = parseFloat(gpa);
console.log(parsedGpa);

//strict equality === loose equality
//strict equality used everywhere
const first = 5;
const second = '5';
if(first == second )console.log('equal');
if(first=== second)console.log('strictly equal');
else console.log('strictly not equal');


var fishPrice = 700;
var myBudget = 1000;
var warranty = 2;
if(fishPrice>myBudget){
    console.log("Out of my budged");
}
else if(fishPrice==myBudget){
    console.log("Don't buy you will be out of money");
}

else{
    if(warranty>2){
        console.log("Buy it");
    }
    else{
        console.log("DOn't buy it");
    }
}


var isGraduated = false;
var salary = 75000;
var haveCar = true;
if((isGraduated && haveCar) || salary> 50000){
    console.log("Marry him");
}
else {
    console.log("Fuck him");
}