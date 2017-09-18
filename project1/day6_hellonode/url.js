//nodejs中url模块的学习
//学习三个方法，
//url.parse(urlStr,[parseQueryString],)   用来解析url地址，解析成一个对象
//url.format(urlObj)             将url对象格式化成一个字符串
//url.resolve(from,to)           将两个参数拼接成浏览器识别的东西

//http://www.imooc.com/video/6710
url.parse('http://www.imooc.com/video/6710');

//===============================================================================

/*Url {
  protocol: 'http:',    //底层使用的协议
  slashes: true,        //是否有协议的双斜线
  auth: null,           // 
  host: 'www.imooc.com',    // IP地址或者域名
  port: null,               //端口
  hostname: 'www.imooc.com',     //主机名      
  hash: null,                    // 页面锚点，加#号滚到的指定位置
  search: null,                  // 查询字符串参数
  query: null,                   //发送给服务器的数据
  pathname: '/video/6710',       //访问资源的路径名
  path: '/video/6710',            //  路径
  href: 'http://www.imooc.com/video/6710'      //未被解析的值    
}*/

url.format({
  protocol: 'http:',  
  slashes: true,       
  auth: null,          
  host: 'www.imooc.com',    
  port: null,              
  hostname: 'www.imooc.com',        
  hash: null,                   
  search: null,                
  query: null,                   
  pathname: '/video/6710',       
  path: '/video/6710',            
  href: 'http://www.imooc.com/video/6710'        
})

//结果'http://www.imooc.com/video/6710'

//=============================================================================

url.resolve('http://imooc.com/','/course/list')
//结果：'http://imooc.com/course/list'

//parse方法的扩展
url.parse()


querystring.stringfy()  