  
var sents = ['Thrift clothes online',
            'Buy ethical cosmetics',
            'Donate clothes in Philly',
            'DIY to transform my clothes']
var links = ["https://www.thegoodtrade.com/features/shopping-used-clothing-online",
            "https://www.sustainablejungle.com/best-of-sustainable-beauty/best-cruelty-free-vegan-sustainable-makeup-brands-uk-2/
",
            "https://kensingtonvoice.com/en/here-are-7-places-you-can-donate-clothes-to-in-philly/",
            "https://cutediyprojects.com/beauty-style/20-stylish-simple-diy-clothes-revamp-wardrobe/"]
function newQuote(){
var randNum = Math.floor(Math.random() * sents.length);
   
var link = document.getElementById("myLink");
           // window.open(link.href,'_blank');
            
    link.innerHTML = sents[randNum];
    link.setAttribute('href', links[randNum]);
            
document.getElementById("suggestion_display").innerHTML = sents[randNum];

}
