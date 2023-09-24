const express = require('express')
const app = express();
const fs = require('fs')
const path = require('path')

const ServerApp = require('../../dist/serverApp').default//用客户端打包的文件
const ReactDOMServer = require('react-dom/server')
const AppString = ReactDOMServer.renderToString(ServerApp)//转成字符串
console.log(AppString)

// const htmlTemplate = fs.readFileSync(path.join(__dirname, '../client/index.html'), 'utf8')//y引入HTML，root文件，
const htmlTemplate = fs.readFileSync(path.join(__dirname, '../../dist/index.html'), 'utf8')//可以直接获取dist目录下的HTML，引入root文件，
console.log(htmlTemplate)
const newHtml = htmlTemplate.replace('<!-- app -->', AppString)//用转换的字符串，将其插入到HTML文件中即可
console.log(newHtml)
app.use(express.static(path.join(__dirname,'../../dist')))//拿到JS文件

//开一个路由，当访问这个路由就可以看到设定的一些内容
app.get('/home', (req, res)=>{
  // console.log("1111",req,res)
  res.send(newHtml)
})
const port = process.env.PORT || 5000
app.listen(port, ()=>console.log(`server on port ${port}`))