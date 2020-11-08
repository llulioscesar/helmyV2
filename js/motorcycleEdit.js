var alias              = document.getElementById('alias');
var policySoat         = document.getElementById('policySoat');
var noPolicyTwo        = document.getElementById('noPolicyTwo');
var policyTelephoneTwo = document.getElementById('policyTelephoneTwo');
var brand              = document.getElementById('brand');
var plate              = document.getElementById('plate');
var chassis            = document.getElementById('chassis');
var motorcycleDate     = document.getElementById('motorcycle');
var userId             = localStorage.getItem('userId');
var respuestaM         = obtenerMotosLocalStorage();
var num                = obtenerMotoEditarLocalStorage();

eventListeners();
function eventListeners() {
     // Campos del formulario
     alias.addEventListener('blur', validarCampo);
     policySoat.addEventListener('blur', validarCampo);
     noPolicyTwo.addEventListener('blur', validarCampo);
     policyTelephoneTwo.addEventListener('blur', validarCampo);
     brand.addEventListener('blur', validarCampo);
     plate.addEventListener('blur', validarCampo);
     chassis.addEventListener('blur', validarCampo);

     // Boton de enviar en el submit
     motorcycleDate.addEventListener('submit', validarDatos);
}


function validarCampo() {
    // Se valida la longitud del texto y que no este vacio
    validarLongitud(this);
} 

function validarDatos(e) {
    e.preventDefault();

    var alias              = document.querySelector('#alias').value,
        policySoat         = document.querySelector('#policySoat').value,
        noPolicyTwo        = document.querySelector('#noPolicyTwo').value,
        policyTelephoneTwo = document.querySelector('#policyTelephoneTwo').value,
        brand              = document.querySelector('#brand').value,
        plate              = document.querySelector('#plate').value,
        chassis            = document.querySelector('#chassis').value;


    if (alias === '' || policySoat === '' || noPolicyTwo === '' || policyTelephoneTwo === '' || brand === '' || plate === '' || chassis === '') {
        // la validacion fallo
        document.getElementById('error').innerHTML = `<h5>Llena todos los campos</h5>`;
    } else {
        // Ambos campos son correctos, mandar ejecutar Ajax

        // datos que se envian al servidor  
        var threeDigitsWheelReferenceEdit = respuestaM[`threeDigitsWheelReference${num}`];
        var threeDigitsBackupPowerKeyEdit = respuestaM[`threeDigitsBackupPowerKey${num}`];
        var macEdit = respuestaM[`mac${num}`];
        var codeMedit = respuestaM[`codeM${num}`];

        var datos = new FormData();
        datos.append('alias', alias);
        datos.append('policySoat', policySoat);
        datos.append('noPolicyTwo', noPolicyTwo);
        datos.append('policyTelephoneTwo', policyTelephoneTwo);
        datos.append('brand', brand);
        datos.append('plate', plate);
        datos.append('chassis', chassis);
        datos.append('threeDigitsWheelReference', threeDigitsWheelReferenceEdit);
        datos.append('threeDigitsBackupPowerKey', threeDigitsBackupPowerKeyEdit);
        datos.append('mac', macEdit);
        datos.append('codeM', codeMedit);
        datos.append('userId', userId);

        // crear el llamado a ajax

        var xhr = new XMLHttpRequest();
        xhr.open('POST', 'models/model-motorcycle.php', true);

        // retornando datos

        xhr.onload = function () {
            if (this.status === 200) {
                respuestaM = JSON.parse(xhr.responseText);
                 //si la respuesta es correcta
                // console.log(respuesta);
                if (respuestaM.status === '2') {
                    swal({
                        title: 'Datos actualizados',
                        text: 'los datos se actualizaron correctamente',
                        type: 'success',
                        background: '#000000'
                    }, function(){
                        alert(ok)
                    });
                    $('.swal2-confirm').on('click', function() {
                        $("#dash").load('motorcycle');
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

editBikeData();
function editBikeData(){
    document.getElementById('userId');
    
            if (respuestaM) {
                // datos
                document.getElementById('alias').value                  = respuestaM[`alias${num}`];
                document.getElementById('policySoat').value             = respuestaM[`policySoat${num}`];
                document.getElementById('noPolicyTwo').value            = respuestaM[`noPolicyTwo${num}`];
                document.getElementById('policyTelephoneTwo').value     = respuestaM[`policyTelephoneTwo${num}`];
                document.getElementById('brand').value                  = respuestaM[`brand${num}`];
                document.getElementById('plate').value                  = respuestaM[`plate${num}`];
                document.getElementById('chassis').value                = respuestaM[`chassis${num}`]; 
            }      
}


// Comprueba que haya elementos en local storage
function obtenerMotosLocalStorage() {
    var respuestasLS;

    //comprobamos si hay algo en local storage
    if(localStorage.getItem('respuestasM') === null){
        respuestasLS = Object();
    }else{
        respuestasLS = localStorage.getItem('respuestasM');
    }
    // return respuestasLS;
    return JSON.parse(respuestasLS);
}

function obtenerMotoEditarLocalStorage() {
    var num;

    //comprobamos si hay algo en local storage
    if(localStorage.getItem('bikeSelected') === null){
        num = 0;
    }else{
        num = localStorage.getItem('bikeSelected');
    }
    // return respuestasLS;
    return num;
    
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
