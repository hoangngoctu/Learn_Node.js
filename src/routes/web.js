const express = require('express');
const {getHomePage,getABC,getTest} = require('../controllers/homeController'); // import hàm getHomepage từ homeController.js
const router = express.Router(); // tạo một router mới

//route.Method('router', handler)

//dinh nghĩa các route
router.get('/', getHomePage);
router.get('/abc',getABC);
router.get('/test',getTest)


module.exports = router; // xuất ra module router