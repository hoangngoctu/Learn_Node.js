
const getHomePage = (req, res) => {
    //procses data
    //call model
    res.send('Hello World AnhTUdz! vaf nodemon')
}

const getABC = (req, res) => {
    res.send('Hello ABC')
}

const getTest = (req, res) => {
    res.render('sample.ejs')
}


module.exports = {
    getHomePage, getABC, getTest
}