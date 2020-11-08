$('html,body').css('overflow', 'auto');

var names    = document.getElementById('name');
var surname  = document.getElementById('surname');
var email    = document.getElementById('email');
var phone    = document.getElementById('phone');
var message  = document.getElementById('message');
var map      = document.getElementById('map');


eventListeners();

function eventListeners() {

  names.addEventListener('focus', validarCampo);
  surname.addEventListener('focus', validarCampo);
  email.addEventListener('focus', validarCampo);
  phone.addEventListener('focus', validarCampo);
  message.addEventListener('focus', validarCampo);

}

function validarCampo(){
     validarLongitud(this);

     email.addEventListener('blur', validarCampos);
     phone.addEventListener('input', numbers);
}

function validarCampos(){
     // Validar unicamente el email
    if(this.type === 'email') {
     validarEmail(this);
    }
}

// Verifica la longitud del texto en los campos
function validarLongitud(campo) {
     campo.classList.add('bord');
     names.addEventListener('blur', validarCampoTwo);
     surname.addEventListener('blur', validarCampoTwo);
     email.addEventListener('blur', validarCampoTwo);
     phone.addEventListener('blur', validarCampoTwo);
     message.addEventListener('blur', validarCampoTwo);
     
}

function validarCampoTwo(){
    validarLongitudTwo(this);
}

function validarLongitudTwo(campo){
     if(campo.value.length > 0 ) {
          campo.style.border = '';
          campo.classList.remove('bord');
     } else {
          campo.classList.add('bord');
     }
}

function validarEmail(campo) {
     var email = campo.value;
     if(email.indexOf('@') !== -1 ) {
          campo.style.border = '';
          campo.classList.remove('error');
     } else {
          campo.style.border = '1px solid red';
          campo.classList.add('error');
     }
}

function numbers(e){
     var value = e.target.value;
     e.target.value = value.replace(/[^A-Z\d-]/, "");
}
