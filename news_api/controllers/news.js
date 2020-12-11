const express = require('express')
const news = express.Router()


// Routes
news.get('/news', (req, res) => {
    res.render('index.ejs')
})



module.exports = news;
