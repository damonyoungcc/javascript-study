var http = require('http')

var server = http.createServer(function(request, response){
  //setTimeout(function(){
    
    //response.setHeader("Content-Type","text/plain; charset=utf-8")
    //设置请求体的头部  Content-Type，说明发送给浏览器的格式内容
    //response Header优先级是最高的v
    response.setHeader('Content-Type','text/html,charset=utf-8')
    response.writeHead(202, 'haha')
    response.write('<html><head><meta charset="utf-8" /></head>')
    response.write('<body>')
    response.write('<h1>你好</h1>')
    response.write('</body>')
    
    response.end()
  //},2000);
})

console.log('open http://localhost:8080')
server.listen(8080)