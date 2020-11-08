var btnQuotes = document.querySelector('#quote');
var btnConsult = document.querySelector('#consult');

eventListener();
function eventListener(){
    btnQuotes.addEventListener('click', appointments);
    btnConsult.addEventListener('click', consult);
}

function appointments(){
    $("#dash").load('quotesa');
}

function consult(){
    $("#dash").load('view-quote');
}