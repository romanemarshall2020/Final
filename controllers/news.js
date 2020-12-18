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
        domains: 'bbc.co.uk, techcrunch.com, yahoo.com',
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
    language: 'en',
    country: 'us'
  }).then(response => {
    console.log(response);
    res.render('headline.ejs', {response})
  });

})


// // Search Page
// news.get('/search', async (req, res) => {

//   $(document).ready(function(){
  
//     $("#searchbtn").on("click", function(e){
//       e.preventDefault();
  
//       let query = $("#searchbox").val();
//       let url = "https://newsapi.org/v2/everything?q="+query+"&apiKey=ab3971f7a2af4190b5dced2f8d0e4719";
  
//       if(query !== ""){
  
//         $.ajax({
//           url: url,
//           method: "GET",
//           dataType: "json",
  
//           beforeSend: function(){
//             $("#results").show();
//           },
  
//           complete: function(){
//             $("#results").hide()
//           },
//           success: function(response){
//            let output = "";
//            let latestNews = response.articles;
//            for(let i in latestNews) {
//              output += `
  
  
  
//       <div class="container">
//           <div class="row">
//               <div class="col s12 m7">
//                 <div class="card">
//                   <div class="card-image">
//                     <img src="${response.articles[i].urlToImage}">
//                     <span class="card-title">${response.articles[i].title} <br>
//                       Author: ${response.articles[i].author} 
//                   </span>
//                   </div>
//                   <div class="card-content">
//                       <p> ${response.articles[i].description}</p>
//                   </div>
//                   <div class="card-action">
//                     <a href="${response.articles[i].url}">${response.articles[i].url}</a>
//                   </div>
//                 </div>
//               </div>
//             </div> 
     
  
//   </div>
  
  
  
  
  
//               // <h4>${latestNews[i].title}</h4>
//               // <img src="${latestNews[i].urlToImage}">
//               // <p>${latestNews[i].description}</p> 
//               // <p>Published on: ${latestNews[i].publishedAt}</p> 
//               // <a>${latestNews[i].url}</a>
  
//              `;
//              console.log(response)
//            }
//           },
  
//           error: function(){
//             console.log("error");
//           }
  
  
//         });
  
//       }else{
//         console.log('please enter something')
//       }
//       res.render("search.ejs", {response})
//     })
//   })
  
//   })

module.exports = news;
