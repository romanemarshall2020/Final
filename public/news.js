// const NewsAPI = require('newsapi');
// const newsapi = new NewsAPI('ab3971f7a2af4190b5dced2f8d0e4719');
// const bodyParser = require('body-parser');

const { response } = require("express");

// import $ from 'jquery';
// window.jQuery = window.$ = $;
// $(selector).hide();




$(document).ready(function(){

  $("#searchbtn").on("click", function(e){
    e.preventDefault();

    let query = $("#searchbox").val();
    let url = "https://newsapi.org/v2/everything?q="+query+"&apiKey=ab3971f7a2af4190b5dced2f8d0e4719";

    if(query !== ""){

      $.ajax({
        url: url,
        method: "GET",
        dataType: "json",

        beforeSend: function(){
          $("#results").show();
        },

        complete: function(){
          $("#results").hide()
        },
        success: function(response){
         let output = "";
         let latestNews = response.articles;
         for(let i in latestNews) {
           output += `



    <div class="container">
        <div class="row">
            <div class="col s12 m7">
              <div class="card">
                <div class="card-image">
                  <img src="${response.articles[i].urlToImage}">
                  <span class="card-title">${response.articles[i].title} <br>
                    Author: ${response.articles[i].author} 
                </span>
                </div>
                <div class="card-content">
                    <p> ${response.articles[i].description}</p>
                </div>
                <div class="card-action">
                  <a href="${response.articles[i].url}">${response.articles[i].url}</a>
                </div>
              </div>
            </div>
          </div> 
   

</div>





            // <h4>${latestNews[i].title}</h4>
            // <img src="${latestNews[i].urlToImage}">
            // <p>${latestNews[i].description}</p> 
            // <p>Published on: ${latestNews[i].publishedAt}</p> 
            // <a>${latestNews[i].url}</a>

           `;
           console.log(response)
         }
        },

        error: function(){
          console.log("error");
        }


      });

    }else{
      console.log('please enter something')
    }
    res.render("search.ejs", {response})
  })
})









// // To query /v2/top-headlines
// // All options passed to topHeadlines are optional, but you need to include at least one of them
// newsapi.v2.topHeadlines({
//   sources: 'bbc-news,the-verge ',
//   q: 'bitcoin',
//   category: 'business',
//   language: 'en',
//   country: 'us'
// }).then(response => {
//   console.log(response);
//   /*
//     {
//       status: "ok",
//       articles: [...]
//     }
//   */
// });
// // To query /v2/everything
// // You must include at least one q, source, or domain
// newsapi.v2.everything({
//   q: 'bitcoin',
//   sources: 'bbc-news,the-verge',
//   domains: 'bbc.co.uk, techcrunch.com',
//   from: '2017-12-01',
//   to: '2017-12-12',
//   language: 'en',
//   sortBy: 'relevancy',
//   page: 2
// }).then(response => {
//   console.log(response);
//   /*
//     {
//       status: "ok",
//       articles: [...]
//     }
//   */
// });
// // To query sources
// // All options are optional
// newsapi.v2.sources({
//   category: 'technology',
//   language: 'en',
//   country: 'us'
// }).then(response => {
//   console.log(response);
//   /*
//     {
//       status: "ok",
//       sources: [...]
//     }
//   */
// });

