$(document).ready(function () {
  $('#searchbtn').on('click', function (e) {
    e.preventDefault();

    let query = $('#searchbox').val();
    let url = 'https://newsapi.org/v2/everything?q=' + query + '&apiKey=ab3971f7a2af4190b5dced2f8d0e4719';

    if (query !== '') {
      $.ajax({
        url: url,
        method: 'GET',
        dataType: 'json',

        beforeSend: function () {
          $('#results').show();
        },

        complete: function () {
          // $("#results").hide()
        },
        success: function (results) {
          let output = '';
          let latestNews = results.articles;
          for (let i in latestNews) {
            output += `



    <div class="container">
        <div class="row">
            <div class="col s12 m7">
              <div class="card">
                <div class="card-image">
                  <img src="${results.articles[i].urlToImage}">
                  <span class="card-title">${results.articles[i].title} <br>
                    Author: ${results.articles[i].author} 
                </span>
                </div>
                <div class="card-content">
                    <p> ${results.articles[i].description}</p>
                </div>
                <div class="card-action">
                  <a href="${results.articles[i].url}">${results.articles[i].url}</a>
                </div>
              </div>
            </div>
          </div> 
   

</div>


           `;
            console.log(results);
          }
          if (output !== '') {
            $('#results').html(output);
          } else {
            let notFound = 'this is not available';
            $('#results').html();
          }
        },

        error: function () {
          console.log('error');
        }
      });
    } else {
      console.log('please enter something');
    }
  });
});
