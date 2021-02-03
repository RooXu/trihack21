var arrr = ["Google",
              "Yahoo",
              "Bing",
              "Duckduckgo"][
              "google.com",
              "yahoo.com",
              "bing.com",
              "Duckduckgo"];
var randomNumber = Math.floor(Math.random() * arrr.length);

document.getElementById("suggestion_display").innerHTML = arrr[0][randomNumber];

