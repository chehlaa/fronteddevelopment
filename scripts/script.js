//variables darkmode: 

var darkmodeButton = document.querySelector('#buttondark');
var bodyelement = document.querySelector('body');

//functions 
function darkmodusbutton(event) {
  bodyelement.classList.toggle('buttondark');
}

//eventlisteners
darkmodeButton.addEventListener('click', darkmodusbutton);