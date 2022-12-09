var express = require('express');
var app = express();

//for request body with json
var bodyParser = require('body-parser');
var multer = require('multer');
const e = require('express');
app.use(bodyParser.json());

//for uploading file
var storage = multer.diskStorage({
    destination:(req,file,callback)=>{
        callback(null,'./uploads');
    },
    filename:(req,file,callback)=>{
        callback(null,file.originalname);
    }
});

var upload = multer({
    storage: storage,
    fileFilter:(req,file,callback)=>{
        if(file.mimetype == 'image/png' || file.mimetype == "image/jpg" || file.mimetype == "image/jpeg"){
            callback(null,true);
        }
        else{
            callback(null,false);
            return callback(new Error('Only .png and .jpg format allowed'));
        }
    }
}).single('myfile');

app.get("/",(req,res)=>{
    res.send("Hello express JS");
});

//Working with post request URL,query,body,header route = create-user


//try this to use this API http://localhost:8000/create-user?userName=Utso&age=23
//post with URL query
app.post("/create-user",(req,res)=>{
    let userName = req.query.userName;
    let age = req.query.age;
    res.send(`user Name is ${userName} & age is ${age}`)
});

//post with URL header
app.post("/password",(req,res)=>{
    
    let password = req.header("password");
    let retypePassword = req.header("retypePassword");

    if(password === retypePassword){
        res.send(`password and retype password matched & pass is ${password}`);
    }
    else{
        res.send(`password and retype password not matched password:${password} retypePassword:${retypePassword}`);
    }
})

//post with URL body
app.post('/about',(req,res)=>{
    let JSONData = req.body;
    let name = JSONData['name'];
    let profession = JSONData['profession'];
    res.send(`My name is ${name} and I am a ${profession}`);
});

//file upload
app.post('/upload-picture',(req,res)=>{
    upload(req,res,(error)=>{
        if(error){
            res.send("Only .png and .jpg format allowed");
        }
        else{
            res.send("File upload success");
        }
    });
});

//file download
app.get('/download-picture',(req,res)=>{
    res.download("./uploads/utso.jpg");
})

app.listen(8000,()=>{
    console.log(`Server Listen Success at http://localhost:8000`);
});