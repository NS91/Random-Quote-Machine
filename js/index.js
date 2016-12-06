$('#quoter').on('click', function(){
  getQuote();
});

function getQuote() {
 const url = "http://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=jsonp&jsonp=?" 
  $.getJSON(url, function(data){
    $('#quote').html(data.quoteText);
    $('#author').html("-" + "  " + data.quoteAuthor);
    $('.twitter-share-button').attr('href', "https://twitter.com/intent/tweet?text=" + data.quoteText + " - " + data.quoteAuthor); 
  });
};

getQuote();