var sents = ['Google',
            'Yahoo',
            'Bing',
            'Duckduckgo']
var links = ["google.com",
            "yahoo.com",
            "bing.com",
            "duckduckgo.com"]
function newQuote(){
var randNum = Math.floor(Math.random() * sents.length);
   
var link = document.getElementById("myLink");
            window.open(link.href,_blank);
            
    link.innerHTML = sents[randNum];
    link.setAttribute('href', links[randNum]);
            
document.getElementById("suggestion_display").innerHTML = sents[randNum];

}
