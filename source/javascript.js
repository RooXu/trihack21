var arrr = ['Google',
            'Yahoo',
            'Bing',
            'Duckduckgo']
function newQuote(){
var randomNumber = Math.floor(Math.random() * arrr.length);

document.getElementById("suggestion_display").innerHTML = arrr[randomNumber];

}
