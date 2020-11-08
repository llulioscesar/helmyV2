var email        = document.getElementById('email');
var password     = document.getElementById('password');
var btnFacebook  = document.getElementById('customBtnFace');
var btnEnviar    = document.getElementById('enviar');
var login        = document.getElementById('login');
var response;
var res;

eventListeners();

function eventListeners() {
     // Campos del formulario

    $('#enviar').attr('disabled', true);
    
    email.addEventListener('blur', validarCampo);
    password.addEventListener('blur', validarCampo);
    btnFacebook.addEventListener('click', fbLogin);
    // Boton de enviar en el submit
    login.addEventListener('submit', log);
}

function validarCampo() {
    
    // Se valida la longitud del texto y que no este vacio
    validarLongitud(this);

    // Validar unicamente el email
    if(this.type === 'email') {
         validarEmail(this);
    }
  
    if(email.value === ''){
        btnEnviar.disabled = true;
    }else {
        password.addEventListener('keydown', function(){
            btnEnviar.disabled = false;
        })
    }
}

// Cuando se envia el correo
function log(e) {
    e.preventDefault();

    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;

    var datos = new FormData();
    datos.append('email', email);
    datos.append('password', password);

    // crear el llamado a ajax
    var xhr = new XMLHttpRequest();
    xhr.open('POST', 'models/model-login.php', true);
    // retornando datos
    xhr.onload = function () {
        if (this.status === 200) {
            var respuesta = JSON.parse(xhr.responseText);
            var errremove = document.getElementById('err');
            var erradd    = document.getElementById('err');
            //  si la respuesta es correcta
            if (respuesta.status === '1' && res == 1) {
                window.location.href = 'dashboard';
            } else if(respuesta.status === '2'){
                errremove.classList.remove('errverify');
                erradd.innerHTML = `<p>usuario o contraseña invalida</p>`;
                erradd.classList.add('erremail');
            }else if(respuesta.status === '3') {
                errremove.classList.remove('errverify');
                erradd.innerHTML = `<p>usuario o contraseña invalida</p>`;
                erradd.classList.add('erremail');
            }else if (respuesta.status === '0'){
                erradd.innerHTML = `<p>usuario no vereficado</p>`;
                erradd.classList.add('errverify');
            }else {
                if(res == 0){
                    erradd.innerHTML = `<p>Verifica el reCaptcha</p>`;
                    erradd.classList.add('errverify');
                }
            }
        }
    }
    // Enviar la peticion
    xhr.send(datos);
}

// Verifica la longitud del texto en los campos
function validarLongitud(campo) {

    if(campo.value.length > 0 ) {
         campo.style.border = '';
         campo.classList.remove('error');
    } else {
         campo.style.border = '1px solid red';
         campo.classList.add('error');
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

function miFuncion() {
    response = grecaptcha.getResponse();

    if(response.length == 0){
      res = 0;
    } else {
      res = 1;
    }
  }

var googleUser = {};
  var startApp = function() {
    gapi.load('auth2', function(){
      // Retrieve the singvaron for the GoogleAuth library and set up the client.
      auth2 = gapi.auth2.init({
        client_id: '581826916334-25icrtdghmaqmr192gsc37j2i4pne1vf.apps.googleusercontent.com',
        // cookiepolicy: 'single_host_origin',
        // Request scopes in addition to 'profile' and 'email'
        //scope: 'additional_scope'
      });
      attachSignin(document.getElementById('customBtn'));
    });
  };

function attachSignin(element) {
  auth2.attachClickHandler(element, {},
      function(googleUser) {
        var userProfile = googleUser.getBasicProfile();
        var email = userProfile.getEmail();
        var password = 'GOOGLE';

        var datos = new FormData();
        datos.append('email', email);
        datos.append('password', password);

        // crear el llamado a ajax

        var xhr = new XMLHttpRequest();
        xhr.open('POST', 'models/model-login.php', true);

        // retornando datos

        xhr.onload = function () {
            if (this.status === 200) {
                var respuesta = JSON.parse(xhr.responseText);
                 //si la respuesta es correcta
                console.log(respuesta);
                if (respuesta.status === '1') {
                    // si es un nuevo usuario
                    window.location.href = 'dashboard';
                } else {
                    alert("Correo no valido")
                }
            }
        }
        // Enviar la peticion
        xhr.send(datos);
        
      }, function(error) {
        console.log(error, undefined, 2);
      });
}


window.fbAsyncInit = function() {
    FB.init({
      appId      : '243847203703987',
      cookie     : true,
      xfbml      : true,
      version    : 'v8.0'
    });
      
    FB.AppEvents.logPageView();   
      
  };

  (function(d, s, id){
     var js, fjs = d.getElementsByTagName(s)[0];
     if (d.getElementById(id)) {return;}
     js = d.createElement(s); js.id = id;
     js.src = "https://connect.facebook.net/en_US/sdk.js";
     fjs.parentNode.insertBefore(js, fjs);
   }(document, 'script', 'facebook-jssdk'));

    function fbLogin(){
     FB.login(function(response){
         if(response.authResponse){
            fbAfterLogin();
         }
     });
   }
   
   function fbAfterLogin(){
    FB.getLoginStatus(function(response) {
        if (response.status === 'connected') {
            FB.api('/me?fields=id,email,permissions', function(response) {
                var email = response.email;
                var password = 'FACEBOOK';

                var datos = new FormData();
                datos.append('email', email);
                datos.append('password', password);

                var xhr = new XMLHttpRequest();
                xhr.open('POST', 'models/model-login.php', true);

                // retornando datos

                xhr.onload = function () {
                    if (this.status === 200) {
                        var respuesta = JSON.parse(xhr.responseText);
                         //si la respuesta es correcta
                        if (respuesta.status === '2') {
                            // si es un nuevo usuario
                            console.log('login exitoso');

                        }     
                    }
                }
                // Enviar la peticion
                xhr.send(datos);
            });
        }
    });
   }

$(function() {
    $('#requestRe').on('click', function() {
        $("#dash").load('requestPassword');
        return;
    });
 });

