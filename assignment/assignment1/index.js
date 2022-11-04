import {studentList} from "./students.js";

studentList.map((item,i)=>{
    let details = `${item.name}'s roll is ${item.roll}`;
    console.log(details);
});
