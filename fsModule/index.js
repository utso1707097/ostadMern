var fs = require('fs');
var http = require('http');
var server = http.createServer(function(request,response){
    if(request.url="/"){

        //synchronous
        let error = fs.unlinkSync("demoSyncRenamed.txt");
        if(error){
            response.writeHead(200,{'Content-Type':'text/html'});
            response.write("File delete failed");
            response.end();
        }
        else{
            response.writeHead(200,{'Content-Type':'text/html'});
            response.write("File delete succeed");
            response.end();
        }
        /*
        let myData = fs.readFileSync('home.html');
        response.writeHead(200,{'Content-Type':'text/html'});
        response.write(myData);
        response.end();

        
        var error = fs.writeFileSync('demoSync.txt','welcome to file sync');
        if(error){
            response.writeHead(200,{'Content-Type':'text/html'});
            response.write("file write failed");
            response.end();
        }
        else{
            response.writeHead(200,{'Content-Type':'text/html'});
            response.write("file write success");
            response.end();
        }
        
        var error = fs.renameSync('demoSync.txt','demoSyncRenamed.txt');
        if(error){
            response.writeHead(200,{'Content-Type':'text/html'});
            response.write("File rename failed");
            response.end();
        }
        else{
            response.writeHead(200,{'Content-Type':'text/html'});
            response.write("File rename succeed");
            response.end();
        }
        */


        //asynchronous
        /*

        //to Read
        fs.readFile('home.html',function(error,data){
            response.writeHead(200,{'Content-Type':'text/html'});
            response.write(data);
            response.end();
        });
        
        //to write
        fs.writeFile('demo.txt','welcome to bangladesh',function(error){
            if(error){
                response.writeHead(200,{'Content-Type':'text/html'});
                response.write("file write failed");
                response.end();
            }
            else{
                response.writeHead(200,{'Content-Type':'text/html'});
                response.write("file write success");
                response.end();
            }
        });

        //to rename
        fs.rename('demo.txt','demoRenamed.txt',function(error){
            if(error){
                response.writeHead(200,{'Content-Type':'text/html'});
                response.write("File rename failed");
                response.end();
            }
            else{
                response.writeHead(200,{'Content-Type':'text/html'});
                response.write("File rename succeed");
                response.end();
            }
        });

        //to delete
       fs.unlink('demoRenamed.txt',function(error){
        if(error){
            response.writeHead(200,{'Content-Type':'text/html'});
            response.write("File delete failed");
            response.end();
        }
        else{
            response.writeHead(200,{'Content-Type':'text/html'});
            response.write("File delete succeed");
            response.end();
        }
       });
        */
       
    }

    
});
server.listen(4040);
console.log("server runs successfully")