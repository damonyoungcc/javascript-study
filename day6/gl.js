//js有且只有一个全局对象，在浏览器中是window，在node.js环境中，也有唯一全局对象，交global
//在node交互环境下输入：
global.console
//会输出以下信息
/*Console {
  log: [Function: bound log],
  info: [Function: bound log],
  warn: [Function: bound warn],
  error: [Function: bound warn],
  dir: [Function: bound dir],
  time: [Function: bound time],
  timeEnd: [Function: bound timeEnd],
  trace: [Function: bound trace],
  assert: [Function: bound assert],
  Console: [Function: Console] }*/

//process也是node.js提供的一个对象，它代表当前Node.js进程，通过process对象可以拿到许多有用的信息
/*> process === global.process
true
    > process.version
'v7.10.0'
    > process.platform
'darwin'
    > process.arch
'x64'
    > process.cwd()
'/Volumes/D/study/javascript-study'
    > process.chdir('/private/nostill')  //切换当前目录
Error: ENOENT: no such file or directory, uv_chdir
at repl: 1:9
at ContextifyScript.Script.runInThisContext(vm.js:23:33)
at REPLServer.defaultEval(repl.js:339:29)
at bound (domain.js:280:14)
at REPLServer.runBound[as eval] (domain.js:293:12)
at REPLServer.onLine(repl.js:536:10)
at emitOne (events.js:101:20)
at REPLServer.emit(events.js:191:7)
at REPLServer.Interface._onLine(readline.js:241:10)
at REPLServer.Interface._line(readline.js:590:8)
    > process.cwd()
'/Volumes/D/study/javascript-study'*/

//js是由事件驱动的单线程模型，node.js也不例外。node.js不断执行响应事件的js函数，直到没有任何响应事件的函数可以执行
//此时node.js就退出了。

//在test.js中举例。