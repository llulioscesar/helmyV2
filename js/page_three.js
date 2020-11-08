var sex           = document.getElementById('sex');
var eps           = document.getElementById('eps');
var arl           = document.getElementById('arl');
var phone         = document.getElementById('phone');
var threeDate     = document.getElementById('three');
var userId        = localStorage.getItem('userId');

eventListeners();

function eventListeners() {
     // Campos del formulario
     sex.addEventListener('blur', validarCampo);
     eps.addEventListener('blur', validarCampo);
     arl.addEventListener('blur', validarCampo);
     phone.addEventListener('blur', validarCampo);

     // Boton de enviar en el submit
     threeDate.addEventListener('submit', validarDatos);
}

function validarCampo() {
    // Se valida la longitud del texto y que no este vacio
    validarLongitud(this);
}


function validarDatos(e) {
    e.preventDefault();

    var sex   = document.querySelector('#sex').value,
        eps   = document.querySelector('#eps').value,
        arl   = document.querySelector('#arl').value,
        phone = document.querySelector('#phone').value;

        
    if (sex === '' || eps === '' || arl === '' || phone === '') {
        // la validacion fallo
        document.getElementById('error').innerHTML = `<p>Llena todos los campos</p>`;

    } else {
        // Ambos campos son correctos, mandar ejecutar Ajax

        // datos que se envian al servidor    
        var datos = new FormData();
        datos.append('sex', sex);
        datos.append('eps', eps);
        datos.append('arl', arl);
        datos.append('phone', phone);
        datos.append('userId', userId);

        // crear el llamado a ajax

        var xhr = new XMLHttpRequest();
        xhr.open('POST', 'models/model-personThree.php', true);

        // retornando datos

        xhr.onload = function () {
            if (this.status === 200) {
                var respuesta = JSON.parse(xhr.responseText);
                 //si la respuesta es correcta
                 if (respuesta.status === '2') {
                    swal({
                        title: 'Datos actualizados',
                        text: 'Los datos se actualizaron correctamente',
                        type: 'success',
                        background: '#000000'
                    }, function(){
                        alert(ok)
                    });
                    $('.swal2-confirm').on('click', function() {
                            $("#dash").load('profile');
                            return;
                        });  
                } else {
                    swal({
                        title: 'Error',
                        text: 'Hubo un error',
                        type: 'error'
                    });
                }
            }
        }
        // Enviar la peticion
        xhr.send(datos);

    }
}

three();
function three() {
    document.getElementById('userId');
    var three = new FormData();
        // crear el llamado a ajax
        var xhrThree = new XMLHttpRequest();
        three.append('userId', userId);
        xhrThree.open('POST', 'models/model-personThree.php', true);
        // retornando datos

        xhrThree.onload = function () {
            if (this.readyState === 4 && this.status === 200) {
                var respuesta = JSON.parse(xhrThree.responseText);

                 //si la respuesta es correcta
                 if (respuesta.status === '0') {
                    // Hubo un error
                    console.log('no hay datos');
              }else {
                if (respuesta  === 'sex', 'eps', 'arl', 'phone') {
                    // datos
                    document.getElementById('sex').value              = respuesta.sex;
                    document.getElementById('eps').value              = respuesta.eps;
                    document.getElementById('arl').value              = respuesta.arl;
                    document.getElementById('phone').value            = respuesta.phone;
                }
            }
        }
    }
    // Enviar la peticion
    xhrThree.send(three);
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