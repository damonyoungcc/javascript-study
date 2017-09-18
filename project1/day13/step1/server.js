var http = require('http')
var path = require('path')
var fs = require('fs')
var url = require('url')


function staticRoot(staticPath, req, res){
  
  //请求里面的req.url，然后用node.js的url模块进行解析，得到一个对象，然后去pathname
  var pathObj = url.parse(req.url, true)
  
  //兼容处理设置成默认的主页
   if(pathObj.pathname === '/'){
    pathObj.pathname += 'index.html'
  } 
  
  var filePath = path.join(staticPath, pathObj.pathname)
  
/*  var fileContent = fs.readFileSync(filePath,'binary')
  res.write(fileContent, 'binary')
  res.end()*/
  
  
  fs.readFile(filePath, 'binary', function(err, fileContent){
    if(err){
      console.log('404')
      res.writeHead(404, 'not found')
      res.end('<h1>404 Not Found</h1>')
    }else{
      console.log('ok')
      res.write(fileContent, 'binary')
      res.end()      
    }
  })
}

//path.resolve()当前文件夹加static，就是static的绝对路径
//也可以用path.join
//__dirname是当前代码执行的文件夹的路径，
var server = http.createServer(function(req, res){
  staticRoot(path.resolve(__dirname, 'static'), req, res)
})

server.listen(8080)
console.log('visit http://localhost:8080' )


