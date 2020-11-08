var licenseNumber = document.getElementById('licenseNumber');
var names         = document.getElementById('names');
var surnames      = document.getElementById('surnames');
var age           = document.getElementById('age');
var rh            = document.getElementById('rh');
var twoDate       = document.getElementById('two');
var userId        = localStorage.getItem('userId');


eventListeners();

function eventListeners() {
     // Campos del formulario
     licenseNumber.addEventListener('blur', validarCampo);
     names.addEventListener('blur', validarCampo);
     surnames.addEventListener('blur', validarCampo);
     age.addEventListener('blur', validarCampo);
     rh.addEventListener('blur', validarCampo);

     // Boton de enviar en el submit
     twoDate.addEventListener('submit', validarDatos);
}

function validarCampo() {
    // Se valida la longitud del texto y que no este vacio
    validarLongitud(this);
}

function validarDatos(e) {
    e.preventDefault();

    var licenseNumber = document.querySelector('#licenseNumber').value,
        names = document.querySelector('#names').value,
        surnames = document.querySelector('#surnames').value,
        age = document.querySelector('#age').value,
        rh = document.querySelector('#rh').value;


    if (licenseNumber === '' || names === '' || surnames === '' || age === '' || rh === '') {
        // la validacion fallo
        document.getElementById('error').innerHTML = `<p>Llena todos los campos</p>`;

    } else {
        // Ambos campos son correctos, mandar ejecutar Ajax

        // datos que se envian al servidor    
        var datos = new FormData();
        datos.append('licenseNumber', licenseNumber);
        datos.append('names', names);
        datos.append('surnames', surnames );
        datos.append('age', age);
        datos.append('rh', rh);
        datos.append('userId', userId);

        // crear el llamado a ajax

        var xhr = new XMLHttpRequest();
        xhr.open('POST', 'models/model-personTwo.php', true);

        // retornando datos

        xhr.onload = function () {
            if (this.status === 200) {
                var respuesta = JSON.parse(xhr.responseText);
                 //si la respuesta es correcta
                if (respuesta.status === '2') {
                    $("#dash").load('page_three');
                }else {
                    console.log('error');
                }
            }
        }
        // Enviar la peticion
        xhr.send(datos);

    }
}

two();
function two() {
    document.getElementById('userId');
    let two = new FormData();
        // crear el llamado a ajax
        let xhrfour = new XMLHttpRequest();
        two.append('userId', userId);
        xhrfour.open('POST', 'models/model-personTwo.php', true);
        // retornando datos

        xhrfour.onload = function () {
            if (this.readyState === 4 && this.status === 200) {
                var respuesta = JSON.parse(xhrfour.responseText);

                 //si la respuesta es correcta
                 if (respuesta.status === '0') {
                    // Hubo un error
                
                } else {
                    // todo es correcto
                    if (respuesta  === 'licenseNumber', 'names', 'surnames', 'age', 'rh') {
                        // datos
                        document.getElementById('licenseNumber').value      = respuesta.licenseNumber;
                        document.getElementById('names').value              = respuesta.names;
                        document.getElementById('surnames').value           = respuesta.surnames;
                        document.getElementById('age').value                = respuesta.age;   
                        document.getElementById('rh').value                 = respuesta.rh;   
                     }   
            }
        }
    }
    // Enviar la peticion
    xhrfour.send(two);
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