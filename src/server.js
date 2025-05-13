require('dotenv').config()
const express = require('express') //comon.js
const configViewEngine = require('./config/viewEngine'); //comon.js
const webRoutes = require('./routes/web'); //comon.js



const app = express() // app express
const port = process.env.PORT || 8888; // port
const hostname = process.env.HOSTNAME // hostname



//config template engine
configViewEngine(app) // gọi hàm configViewEngine để cấu hình template engine
app.unsubscribe('/',webRoutes) // sử dụng router webRoute để xử lý các yêu cầu đến đường dẫn '/';



//khai bao route co the them khi update
app.use('/',webRoutes);


//chạy ứng dụng
app.listen(port,hostname,() => {
  console.log(`Example app listening on port ${port}`)
})
