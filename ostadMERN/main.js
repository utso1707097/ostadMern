//anonymous function
var myFunc = function(x){
    return x;
}
console.log(myFunc("Hello"));

//anonymous function can be reassigned

var myFunc = function(...numbers){
    return numbers;
}
console.log(myFunc(1,2,3,4,5));

//arrow function ->soto akare lekha jai ->Is an anonymous funciton
//arrow function cannot be used as constructor

var sum = (x,y)=>{
    console.log("My first arrow function which return sum of two numbers ",x+y);
}
sum(2,3);

var arrowFunc = (...x)=>{
    let sum = 0;
    for(i of x){
        sum+=i;
    }
    return sum;
}
console.log(arrowFunc(1,2,3,4,5));

//array
var myArr = [1,2,3,4,5];
var myArr = new Array('a','b','c');
for(item of myArr){
    console.log(item);
}

//Multidimensional array
var one = [1,2,3,4,5];
var two = [7,8,9,10];
var three = [11,12,13,14];
var total = [one , two, three];
console.log(total);
console.log(total[2][0]);

//array destructuring
var countries = ["BAN","IND","CAN","AUS","PAK"];
var[a, , ,b]=countries;//1st and 4th elem
console.log(a,b);

//ES6 map
var myMap = new Map();
myMap.set(1,'utso');
myMap.set(2,'Mithila');
myMap.set(3,'Sraboni');
console.log(myMap.values());
console.log(myMap.keys());
for(let key of myMap.keys()){
    console.log(key);
}
for(let value of myMap.values()){
    console.log(value);
}

console.log(myMap.get(1));
for(let key of myMap.keys()){
    console.log(key ," ",myMap.get(key));
}
//myMap.clear() ->all clear

console.log(myMap.has(10));

//set

var mySet = new Set();
mySet.add("Bangladesh");
mySet.add("Bhutan");
mySet.add("India");
mySet.add("Bangladesh");
console.log(mySet);
var secondSet = new Set(['A','B','C','D']);
console.log(secondSet);

//clear delete(vlaue) has values Set.size
mySet.clear();
console.log(mySet);
secondSet.delete('C');
console.log(secondSet);
console.log(secondSet.size);
console.log(secondSet.values());
for(item of secondSet){
    console.log(item);
}
console.log(secondSet.has('E'));