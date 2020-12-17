const express = require('express')
const news = express.Router()
const NewsAPI = require('newsapi');
const newsapi = new NewsAPI('ab3971f7a2af4190b5dced2f8d0e4719');

// Models
const News = require('../models/news')

news.get('/json', async (req, res) => {
    try {
      const news = await News.find()
      res.send(news)
    } catch (err) {
      res.send(err.message)
    }
  })





// Routes

// Main page
news.get('/', async (req, res) => {
    console.log('test')
    newsapi.v2.everything({
        // q: 'bitcoin',
        sources: 'bbc-news,the-verge',
        domains: 'bbc.co.uk, techcrunch.com',
        language: 'en',
        sortBy: 'relevancy',
      }).then(response => {
          console.log(response)
        res.render('index.ejs', {response})
      });
})

// headline page
news.get('/headline', async (req, res) => {
    newsapi.v2.topHeadlines({
    // sources: 'bbc-news,the-verge',
    // q: 'bitcoin',
    category: 'business',
    language: 'en',
    country: 'us'
  }).then(response => {
    console.log(response);
    res.render('headline.ejs', {response})
  });

})

module.exports = news;
