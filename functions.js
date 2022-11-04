//simple function
function myName(){
    var x = 10;
    var y = 20;
    var z = x+y;
    console.log(z);
}
myName();

//parameterized function
function add(x,y){
    console.log(x+y);
}
add(10,20);

//Rest parameters
//If we want to pass other than rest parameter the parameters are added on the left side
function addAllNums(...numbers){
    let sum = 0;
    for(let i of numbers){
        sum+=i;
    }
    console.log(sum);
}
addAllNums(1,2,3,4,5);

//Function returns ->javascript a return type dewa lage na
function myFunc(x,y){
    return x+y;
}
console.log(myFunc(2,3));
//function can return function also
function fun1(){
    return 20;
}
function fun2(){
    return fun1();
}
console.log(fun1()+fun2());