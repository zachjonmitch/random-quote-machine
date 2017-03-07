var quotes = [
  {color: "#3b609b", quote: "First", author: "-First"},
  {color: "#9b3b3b", quote: "Second", author: "-Second"},
  {color: "#3b9b81", quote: "Third", author: "-Third"},
  {color: "#7da5a4", quote: "Fourth", author: "-Fourth"}
];

function handle() {
  //Variable to shuffle through the "quotes" array.
  var randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
  //Display quotes/authors and change background colors.
  $("body, .button, .social").css("background-color", randomQuote.color); 
  $(".quote").html(randomQuote.quote).css("color", randomQuote.color);
  $(".author").html(randomQuote.author).css("color", randomQuote.color);
  //Share quote when .social div is clicked.
  var currentQuote = randomQuote.quote;
  var currentAuthor = randomQuote.author;
  $(".social").click(function() {
    window.open('https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=' + '"' + currentQuote + ' "' + currentAuthor);
  });
};

//Call the handle function on .ready and .click.
$(document).ready(function() {
  handle()
  $(".button").click(handle);
});