const express = require('express') //comon.js
// import express from 'express' //es6
const path = require('path') //comon.js
require('dotenv').config()
// console.log(">>> check env:",process.env)




const app = express() // app express
const port = process.env.PORT || 8888; // port
const hostname = process.env.HOSTNAME // hostname



//config template engine
app.set('views', path.join(__dirname, 'views')) //dường dẫn đến thư mục views
app.set('view engine', 'ejs') 



//Khai baos route
app.get('/', (req, res) => {
  res.send('Hello World AnhTUdz! vaf nodemon')
})


app.get('/abc', (req, res) => {
  res.send('check ABC!')
})

app.get('/test', (req, res) => {
  // res.send('<h1>Test</h1>')
  res.render('sample.ejs') // render file sample.ejs
})






//chạy ứng dụng
app.listen(port,hostname,() => {
  console.log(`Example app listening on port ${port}`)
})
