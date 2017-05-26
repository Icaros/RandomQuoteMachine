function inIframe() {
  try {
    return window.self !== window.top;
  } catch (e) {
    return true;
  }
}

function openURL(url){
  window.open(url);
}

var quote = '';
var author = '';

function getQuote() {
  $.ajax({
    headers: {
      'X-Mashape-Key': 'wT3BA6E3BpmshA5uIYnKKg5tIX5ep1xfCKTjsnxl7m4nbPdCc5',
      'Accept': 'application/json',
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    url: 'https://andruxnet-random-famous-quotes.p.mashape.com/?cat=',
    success: function(result) {
      if (typeof result === 'string') {
        result = JSON.parse(result);
      }

      quote = result.quote;
      author = result.author;

      $('#tweetQuote').attr('href', 'https://twitter.com/intent/tweet?text=' + encodeURIComponent('"' + quote + '" ' + author));
      $('#quoteText').text(result.quote);
      $('#quoteAuthor').html(result.author);
    }
  });
}

$(document).ready(function() {
  getQuote();
  $('#newQuote').on('click', getQuote);
});
