const path = require('path') //thư viện path để xử lý đường dẫn
const express = require('express') //thư viện express để tạo ứng dụng web

const configViewEngine = (app) => {
    app.set('views', path.join('./src', 'views')) //dường dẫn đến thư mục views
    app.set('view engine', 'ejs');

    //Config static file
    app.use(express.static(path.join('./src', 'public'))) //dường dẫn đến thư mục public
}

module.exports = configViewEngine;// xuất ra module configViewEngine
