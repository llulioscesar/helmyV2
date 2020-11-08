var brand              = document.getElementById('brand');
var size               = document.getElementById('size');
var alias              = document.getElementById('alias');
var helmetDate         = document.getElementById('helmet');
var userId             = localStorage.getItem('userId');
var respuestaHelmet = obtenerCascosLocalStorage();
var num = obtenerCascoEditarLocalStorage()

eventListeners();
function eventListeners() {
    // Campos del formulario
    brand.addEventListener('blur', validarCampo);
    size.addEventListener('blur', validarCampo);
    alias.addEventListener('blur', validarCampo);
    // Boton de enviar en el submit
    helmetDate.addEventListener('submit', validarDatos);
}

function validarCampo() {
    // Se valida la longitud del texto y que no este vacio
    validarLongitud(this);
} 

function validarDatos(e) {
    e.preventDefault();

    let brand  = document.querySelector('#brand').value,
        alias  = document.querySelector('#alias').value,
        size   = document.querySelector('#size').value;

    if (brand === '' || size === '' || alias === '') {
        // la validacion fallo
        document.getElementById('error').innerHTML = `<h5>llena todos los campos</h5>`;
    } else {
        // Ambos campos son correctos, mandar ejecutar Ajax

        // datos que se envian al servidor  
        let customColorEdit = respuestaHelmet[`customColo${num}`];
        let macEdit = respuestaHelmet[`mac${num}`];

        let datos = new FormData();
        datos.append('brand', brand);
        datos.append('size', size);
        datos.append('alias', alias);
        datos.append('customColor', customColorEdit);
        datos.append('mac', macEdit);
        datos.append('userId', userId);

        var xhr = new XMLHttpRequest();
        xhr.open('POST', 'models/model-helmet.php', true);

        // retornando datos

        xhr.onload = function () {
            if (this.status === 200) {
                respuestaHelmet = JSON.parse(xhr.responseText);
                 //si la respuestaHelmet es correcta
                console.log(respuestaHelmet);
                if (respuestaHelmet.status === '2') {
                    swal({
                        title: 'Datos actualizados',
                        text: 'los datos se actualizaron correctamente',
                        type: 'success',
                        background: '#000000'
                    }, function(){
                        alert(ok)
                    });
                    $('.swal2-confirm').on('click', function() {
                            $("#dash").load('helmet');
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

editHelmetData();
function editHelmetData(){
    document.getElementById('userId');
    
            if (respuestaHelmet) {
                // datos
                document.getElementById('brand').value     = respuestaHelmet[`brand${num}`]; 
                document.getElementById('size').value      = respuestaHelmet[`size${num}`]; 
                document.getElementById('alias').value     = respuestaHelmet[`alias${num}`];
            }      
}

// Comprueba que haya elementos en local storage
function obtenerCascosLocalStorage() {
    let respuestasLS;

    //comprobamos si hay algo en local storage
    if(localStorage.getItem('respuestasH') === null){
        respuestasLS = Object();
    }else{
        respuestasLS = localStorage.getItem('respuestasH');
    }
    // return respuestasLS;
    return JSON.parse(respuestasLS);
}

function obtenerCascoEditarLocalStorage() {
    let num;

    //comprobamos si hay algo en local storage
    if(localStorage.getItem('helmetSelected') === null){
        num = 0;
    }else{
        num = localStorage.getItem('helmetSelected');
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