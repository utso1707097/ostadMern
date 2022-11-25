/*To see assignment is working uncomment the below
comments one by one, run and comment again.
*/
const {client} = require("./dbconfig");

const insertSingleDoc = async()=>{
    try {
        const database = client.db("crud_project");
        const students = database.collection("students");
        const doc ={
            name : "Hasanur Rahman",
            roll : "1707096",
            email :"rahman1707096@stud.kuet.ac.bd",
            year : "4th",
        }
        const result = await students.insertOne(doc);
        console.log(`A document was inserted with the _id: ${result.insertedId}`); //problem 1:This line isn't outputs correctly 
    } catch (error) {
        console.log(error);
    }finally{
        await client.close();
    }
}

const insertMultipleDoc = async()=>{
    try {
        const database = client.db("crud_project");
        const students = database.collection("students");
        const docs =[
        {
            name:"Md Samaul Haque Malik",
            roll : "1707097",
            email : "malik1707097@stud.kuet.ac.bd",
            year : "4th",
        },
        {
            name:"Rakib Ul Hasan Sifat",
            roll : "1707095",
            email : "sifat1707095@stud.kuet.ac.bd",
            year : "4th",
        },
        {
            name:"Sharmina Al Azad",
            roll : "1707093",
            email : "azad1707093@stud.kuet.ac.bd",
            year : "4th",
        },
        {
            name:"Asfaqul Adel Siam",
            roll : "1707094",
            email : "siam1707094@stud.kuet.ac.bd",
            year : "4th",
        },
        {
            name:"Dipta Mohon Das",
            roll : "1707099",
            email : "das1707099@stud.kuet.ac.bd",
            year : "4th",
        }
        ];
        const result = await students.insertMany(docs);
        console.log('All documents were inserted');
    } catch (error) {
        console.log(error);
    }finally{
        await client.close();
    }
}

const findSingleDoc = async ()=>{
    try {
        const database = client.db("crud_project");
        const students = database.collection("students");
        query = { roll : "1707096"};
        const result = await students.findOne(query);
        console.log(result);
    } catch (error) {
        console.log(error);
    }finally{
        await client.close();
    }
}

const findMultipleDoc = async()=>{
    try {
        const database = client.db("crud_project");
        const students = database.collection("students");
        query = {};
        //query = {}; //to find all
        //const result = await students.find(query);
        const cursor = students.find(query); //data will be in the form of chunk

        if((await students.estimatedDocumentCount()) ===0 ){   //problem 2 :This if is not executing when there was no data in database
            console.log("No document found!");

        }else{
            const users = await cursor.toArray();
            await users.forEach(user=>console.log(user));;
        }

    } catch (error) {
        console.log(error);
    }finally{
        await client.close();
    }
}

const updateSingleDoc = async()=>{
    try {
        const database = client.db("crud_project");
        const students = database.collection("students");
        const filter = {name : "Hasanur Rahman"};
        const options = { upsert : true};
        const updateDoc = {
            $set: {
                year : "3rd"
            }
        };
        const result = await students.updateOne(filter,updateDoc,options);
        console.log(`${result.matchedCount} document(s) matched the filter, updated ${result.modifiedCount} document(S)`)
    } catch (error) {
        console.log(error);
    }finally{
        await client.close();
    }
}
const updateMultipleDoc = async()=>{
    try {
        const database = client.db("crud_project");
        const students = database.collection("students");
        const filter = {};
        const options = {upsert : true};
        const updateDoc = {
            $set:{
                university: "Khulna University of Engineering & Technology"
            }
        }
        const result = await students.updateMany(filter,updateDoc);
        console.log("Updated multiple docs successfully");
    } catch (error) {
        console.log(error);
    }finally{
        await client.close();
    }
}

const deleteSingleDoc = async ()=>{
    try {
        const database = client.db("crud_project");
        const students = database.collection("students");
        const query = {name: "Hasanur Rahman"};
        const result = await students.deleteOne(query);
        console.log("Deletion successful of one document");
    } catch (error) {
        console.log(error);
    }finally{
        await client.close();
    }
}

const deleteMultipleDoc = async ()=>{
    try {
        const database = client.db("crud_project");
        const students = database.collection("students");
        const query = {};
        const result = await students.deleteMany(query);
        console.log("Deletion successful all document");
    } catch (error) {
        console.log(error);
    }finally{
        await client.close();
    }
}


//insertSingleDoc();
//findMultipleDoc();
//insertMultipleDoc();
//findMultipleDoc();
//updateSingleDoc();
//findSingleDoc();
//updateMultipleDoc();
//findMultipleDoc();
//deleteSingleDoc();
//findMultipleDoc();
//deleteMultipleDoc();
//findMultipleDoc();