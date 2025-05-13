const express = require('express');
const router = express.Router();





//Khai baos route
router.get('/', (req, res) => {
  res.send('Hello World AnhTUdz! vaf nodemon')
})


router.get('/abc', (req, res) => {
  res.send('check ABC!')
})

router.get('/test', (req, res) => {
  // res.send('<h1>Test</h1>')
  res.render('sample.ejs') // render file sample.ejs
})

module.exports = router; // xuất ra module router