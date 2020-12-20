$(function () {
    $('#BtnMProducto').on('click', function () {
       $("#back").removeClass("backWe");
       $("#back").removeClass("backn");
       $("#back").removeClass("backd");
       $("#back").addClass("backm");
       $("#back").css("overflow-y", "scroll");
       $('#hom').css("display", "none");
       $('#log').css("display", "block");
       $('#line').css("display", "none");
       $("#dash").load('helmyM');
       return;
    });
});

$(function () {
    $('#BtnCProducto').on('click', function () {
       $("#back").removeClass("backWe");
       $("#back").removeClass("backn");
       $("#back").removeClass("backm");
       $("#back").removeClass("backd");
       $("#back").addClass("backc");
       $("#back").css("overflow-y", "scroll");
       $('#hom').css("display", "none");
       $('#log').css("display", "block");
       $('#line').css("display", "none");
       $("#dash").load('helmyC');
       return;
    });
});

var names = document.getElementById('name');
var tel   = document.getElementById('tel');
var email = document.getElementById('email');
var data  = document.getElementById('products');

eventListeners();
function eventListeners() {
    // Campos del formulario
    names.addEventListener('blur', validarCampo);
    tel.addEventListener('blur', validarCampo);
    email.addEventListener('blur', validarCampo);
    // Boton de enviar en el submit
    data.addEventListener('submit', validarDatos);
}

function validarDatos(e) {
    e.preventDefault();

    let names  = document.getElementById('name').value,
        tel  = document.getElementById('tel').value,
        email   = document.getElementById('email').value;

    if (names === '' || tel === '' || email === '') {
        document.getElementById('error').innerHTML = `<h5>Falta información</h5>`;
        setInterval(function(){
            document.getElementById('error').innerHTML = ``;
        }, 5000);
    } else {
        var datos = new FormData();
        datos.append('names', names);
        datos.append('phone', tel);
        datos.append('email', email);

        var xhr = new XMLHttpRequest();
        xhr.open('POST', 'models/model-data.php', true);

        // retornando datos
        xhr.onload = function () {
            if (this.status === 200) {
                var respuesta = JSON.parse(xhr.responseText);
                 //si la respuestaHelmet es correcta
                if (respuesta.status === '1') {
                    document.getElementById('bien').innerHTML = `<h5>Datos registrados correctamente</h5>`;
                    setTimeout(function(){
                        document.getElementById('bien').innerHTML = ``;
                    }, 5000);
                    data.reset();
                } else {
                    document.getElementById('error').innerHTML = `<h5>Ya tenemos tus datos registrados</h5>`;
                    setTimeout(function(){
                        document.getElementById('error').innerHTML = ``;
                    }, 10000);
                    data.reset();
                }
            }
        }
        // Enviar la peticion
        xhr.send(datos);
    }
}

function validarCampo() {
    // Se valida la longitud del texto y que no este vacio
    validarLongitud(this);

    if(this.type === 'email') {
        validarEmail(this);
    }
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