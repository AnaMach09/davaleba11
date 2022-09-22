const nav = ["home", "about", "galerry",  "contact", "offers","location"];
const links = ["index.html",  "about.html", "galerry.html",  "contact.html",  "offers.html", "location.html"];
let navsigrdze = nav.length;
let navtext= "<ul>";
for(let i=0; i<navsigrdze; i++){
    navtext += '<li><a href="' + links [i] + '">' + nav[i] + "</a></li>";
    console.log(navtext);
}
navtext += "</ul>";
console.log(navtext)
document.getElementById("nav").innerHTML = navtext;