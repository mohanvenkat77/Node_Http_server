const http=require('http')
const fs=require('fs')
const { log } = require('console')

const server=http.createServer(function(req,res){
    fs.readFile('./index.html', 'utf8',(err,data)=>{
        if(err) log(err)
        res.writeHead(200)
        res.write(data)
        res.end()
    })
 
})

server.listen(8080,(req,res)=>{
    log("server is running on port 8080")
})