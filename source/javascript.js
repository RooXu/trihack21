  
var sents = [
  "Thrift clothes online",
  "Buy ethical cosmetics",
  "Donate clothes in Philly",
  "DIY to transform my clothes",
  "Rent clothes monthly instead of buying fast-fashion",
  "Compost food scraps",
  "Start growing your own vegetables",
  "Buy Fair-Trade",
  "Buy Fresh Produce from the Haverfarm Farm Stands",
  "Home-grown produce",
  "Avoid plastic products",
  "Don't fly if possible",
  "Use a Philly bikeshare",
  "Shop less online",
  "Switch to paperless billing",
  "Switch to LED light bulbs",
  "Eat less meat"
];
var links = [
  "https://www.thegoodtrade.com/features/shopping-used-clothing-online",
  "https://www.sustainablejungle.com/best-of-sustainable-beauty/best-cruelty-free-vegan-sustainable-makeup-brands-uk-2",
  "https://kensingtonvoice.com/en/here-are-7-places-you-can-donate-clothes-to-in-philly",
  "https://cutediyprojects.com/beauty-style/20-stylish-simple-diy-clothes-revamp-wardrobe",
  "https://www.byrdie.com/best-clothing-rental-services-4788049",
  "https://helpmecompost.com/how-to-make-compost-from-kitchen-waste-the-easy-way",
  "https://www.thespruce.com/before-you-make-your-first-container-garden-847850",
  "https://www.fairtrade.net/about/fairtrade-marks",
  "https://www.haverford.edu/farm/about",
  "https://www.lowes.com/n/ideas-inspiration/easy-vegetables-and-fruits-to-grow-at-home",
  "https://www.unenvironment.org/interactive/beat-plastic-pollution/#:~:text=Around%20the%20world%2C%20one%20million,are%20used%20worldwide%20every%20year.&text=Today%2C%20we%20produce%20about%20300,of%20the%20entire%20human%20population",
  "https://www.theguardian.com/environment/ng-interactive/2019/jul/19/carbon-calculator-how-taking-one-flight-emits-as-much-as-many-people-do-in-a-year",
  "https://www.rideindego.com",
  "https://www.vox.com/the-goods/22214017/online-shopping-pandemic-packaging-ecommerce-waste-plastic",
  "https://www.environmentalleader.com/2017/10/going-paperless-penniless-corporations",
  "https://goenergyeffective.com/blog/top-5-reasons-to-switch-to-led-lighting/",
  "http://www.whyeatlessmeat.com/"
  
];
function newQuote() {
  var randNum = Math.floor(Math.random() * sents.length);

  var link = document.getElementById("myLink");
  // window.open(link.href,'_blank');

  link.innerHTML = sents[randNum];
  link.setAttribute("href", links[randNum]);

  document.getElementById("suggestion_display").innerHTML = sents[randNum];
}
