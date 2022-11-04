for(var i=1;i<=3;i++){
    console.log("Allah");
}
//for of loop
var nameArray = ['utso','mithila','rocky','rahi','tushar'];
for(let oneName of nameArray){
    console.log(oneName);
}

var cities = ['Dhaka','Khulna','Chuadanga','Barishal'];
for(let city of cities){
    console.log(city);
}

//for in loop ->object er jnne best
var myself = {
    firstName: 'utso',
    lastName : 'mollik',
    age : 23,
};

for(let prop in myself){
    console.log(prop);
}

for(let prop in myself){
    console.log(myself[prop]);
}

for(let prop in myself){
    console.log(prop+" : "+myself[prop]);
}