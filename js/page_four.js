var firstEmergencyContactNames        = document.getElementById('firstEmergencyContactNames');
var surnamesFirstEmergencyContact     = document.getElementById('surnamesFirstEmergencyContact');
var firstEmergencyContactNumber       = document.getElementById('firstEmergencyContactNumber');
var fourDate                          = document.getElementById('four');
var userId                            = localStorage.getItem('userId');

eventListeners();
function eventListeners() {
    // Campos del formulario
    firstEmergencyContactNames.addEventListener('blur', validarCampo);
    surnamesFirstEmergencyContact.addEventListener('blur', validarCampo);
    firstEmergencyContactNumber.addEventListener('blur', validarCampo);
    // Boton de enviar en el submit
    fourDate.addEventListener('submit', validarDatos);
}

function validarCampo() {
    // Se valida la longitud del texto y que no este vacio
    validarLongitud(this);
} 

function validarDatos(e) {
    e.preventDefault();

    var firstEmergencyContactNames = document.querySelector('#firstEmergencyContactNames').value,
        surnamesFirstEmergencyContact = document.querySelector('#surnamesFirstEmergencyContact').value,
        firstEmergencyContactNumber = document.querySelector('#firstEmergencyContactNumber').value;


    if (firstEmergencyContactNames === '' || surnamesFirstEmergencyContact === '' || firstEmergencyContactNumber === '') {
        // la validacion fallo
        document.getElementById('error').innerHTML = `<h5>llena todos los campos</h5>`;
    } else {
        // Ambos campos son correctos, mandar ejecutar Ajax

        // datos que se envian al servidor    
        var datos = new FormData();
        datos.append('firstEmergencyContactNames', firstEmergencyContactNames);
        datos.append('surnamesFirstEmergencyContact', surnamesFirstEmergencyContact);
        datos.append('firstEmergencyContactNumber', firstEmergencyContactNumber);
        datos.append('userId', userId);

        // crear el llamado a ajax

        var xhr = new XMLHttpRequest();
        xhr.open('POST', 'models/model-personFour.php', true);

        // retornando datos

        xhr.onload = function () {
            if (this.status === 200) {
                var respuesta = JSON.parse(xhr.responseText);
                 //si la respuesta es correcta
                 if (respuesta.status === '2') {
                    swal({
                        title: 'Datos actualizados',
                        text: 'los datos se actualizaron correctamente',
                        type: 'success',
                        background: '#000000'
                    }, function(){
                        alert(ok)
                    });
                    $('.swal2-confirm').on('click', function() {
                            $("#dash").load('contacts');
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

four();
function four() {
    document.getElementById('userId');
    var four = new FormData();
        // crear el llamado a ajax
        var xhrfour = new XMLHttpRequest();
        four.append('userId', userId);
        xhrfour.open('POST', 'models/model-personFour.php', true);
        // retornando datos

        xhrfour.onload = function () {
            if (this.readyState === 4 && this.status === 200) {
                var respuesta = JSON.parse(xhrfour.responseText);

                 //si la respuesta es correcta
                 if (respuesta.status === '0') {
                    // Hubo un error
                   console.log('error');
              } else {
                if (respuesta  === 'firstEmergencyContactNames', 'surnamesFirstEmergencyContact', 'firstEmergencyContactNumber') {
                    // datos
                    document.getElementById('firstEmergencyContactNames').value        = respuesta.firstEmergencyContactNames;
                    document.getElementById('surnamesFirstEmergencyContact').value     = respuesta.surnamesFirstEmergencyContact;
                    document.getElementById('firstEmergencyContactNumber').value       = respuesta.firstEmergencyContactNumber;
                }     
            }
        }
    }
    // Enviar la peticion
    xhrfour.send(four);
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