var login = document.querySelector('ul.right-ul > li#miCuenta');
var app   = document.querySelector('ul.right-ul > li#app');
var all   =  document.querySelectorAll('ul.right-ul > li');


eventListeners();
function eventListeners(){
    // login.addEventListener('click', logins);
    app.addEventListener('click', apps);
}

// function logins(){
//     login.classList.add('lifocus');
// }

function apps(){
    console.log(login.classList.remove('lifocus'));
}

