const http = require('http');
const fs= require('fs');
const port= process.env.PORT||3000;
const server = http.createServer((req,res)=>{
    
    res.setHeader('Content-Type', 'text/html')
    console.log(req)
    if(req.url=='/hello'){
        res.statusCode=200;
        const data = fs.readFileSync('index.html')
        res.end(data.toString()); 
    } 
    
    else if(req.url=='/about'){
        res.statusCode=200;
        res.end('<h1>About Code with harry</h1><p>Hey this is the about code with harry!</p>'); 
    } 
    else if(req.url=='/'){
        res.statusCode=200;
        res.end('<h1> This is CodewithHarry</h1><p>Hey this is the way to rock the world!</p>'); 
    }
    else{
        res.statuscode=404;
        res.end('<h1> Not Found</h1> <p> Hey this page was not found on the server</p>')
    }
})
server.listen(port, ()=>{console.log('Server is listening on port ${port}')
});