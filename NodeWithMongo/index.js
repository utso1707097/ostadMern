var mongoClient = require('mongodb').MongoClient;
var URL = "mongodb+srv://utso1707097:5uxe83b5@cluster0.nkzbon9.mongodb.net/?retryWrites=true&w=majority";

mongoClient.connect(URL,function(error){
    if(error){
        console.log("Connection failed");
    }
    else{
        console.log("Connection eastablished");
    }
});