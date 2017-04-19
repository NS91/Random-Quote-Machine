// Binds the getQuote() function to the #quoter button
$('#quoter').on('click', function(){
  getQuote();
});
// Defines the getQuote() function and twitter functionality
function getQuote() {
 const url = "http://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=jsonp&jsonp=?" 
  $.getJSON(url, function(data){
    $('#quote').html(data.quoteText);
    $('#author').html("-" + "  " + data.quoteAuthor);
    $('.twitter-share-button').attr('href', "https://twitter.com/intent/tweet?text=" + data.quoteText + " - " + data.quoteAuthor); 
  });
};
// Calls getQuote() when the app opens to ensure it already displays a quote
getQuote();
