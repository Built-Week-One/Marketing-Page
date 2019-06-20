// Index.js - By Carl Stanley 
// Start with Site Content. 


// Get Button text from siteContect obj

//let paragraph = siteContent.paragraphs;

//let newP1 = document.createElement("p");

//newP1.setAttribute('innerHTML',paragraph[0]);

//let btmTxt = document.getElementsByClassName('btm-text');

//btmTxt.paragraph

const navigation = document.querySelector('Nav');

let Nav = document.getElementsByTagName('Nav');

let newLink1 = document.createElement("a");

let newLink2 = document.createElement("a");

let newLink3 = document.createElement("a");

let newLink4 = document.createElement("a");

let newLink5 = document.createElement("a");

newLink1.innerHTML = siteContent.menu[0];
newLink1.setAttribute('href',`${siteContent.a[0]}`);
newLink1.style.color = '#212529';
newLink1.style.fontSize = '1.6rem';

newLink2.innerHTML = siteContent.menu[1];
newLink2.setAttribute('href',`${siteContent.a[1]}`);
newLink2.style.color = '#212529';
newLink2.style.fontSize = '1.6rem';
 


 


 


