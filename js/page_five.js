var userId  = localStorage.getItem('userId');

eventListeners();
function eventListeners() {
    document.querySelector('#five').addEventListener('submit', validarRegistro);
}

function validarRegistro(e) {
    e.preventDefault();

    var namesSecondEmergencyContact = document.querySelector('#namesSecondEmergencyContact').value,
        surnamesSecondEmergencyContact = document.querySelector('#surnamesSecondEmergencyContact').value,
        numberSecondEmergencyContact = document.querySelector('#numberSecondEmergencyContact').value;


    if (e) {
        // la validacion fallo
         // datos que se envian al servidor    
         var datos = new FormData();
         datos.append('namesSecondEmergencyContact', namesSecondEmergencyContact);
         datos.append('surnamesSecondEmergencyContact', surnamesSecondEmergencyContact);
         datos.append('numberSecondEmergencyContact', numberSecondEmergencyContact);
         datos.append('userId', userId);
 
         // crear el llamado a ajax
 
         var xhr = new XMLHttpRequest();
         xhr.open('POST', 'models/model-personFive.php', true);
 
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
 

    } else {
        // Ambos campos son correctos, mandar ejecutar Ajax
        console.log('error');
       
    }
}

five();
function five() {
    document.getElementById('userId');
    var five = new FormData();
        // crear el llamado a ajax
        var xhrfive = new XMLHttpRequest();
        five.append('userId', userId);
        xhrfive.open('POST', 'models/model-personFive.php', true);
        // retornando datos

        xhrfive.onload = function () {
            if (this.readyState === 4 && this.status === 200) {
                var respuesta = JSON.parse(xhrfive.responseText);

                 //si la respuesta es correcta
                 if (respuesta.status === '0') {
                    // Hubo un error
                    
              } else {
                if (respuesta  === 'namesSecondEmergencyContact', 'surnamesSecondEmergencyContact', 'numberSecondEmergencyContact') {
                    // datos
                    document.getElementById('namesSecondEmergencyContact').value       = respuesta.namesSecondEmergencyContact;
                    document.getElementById('surnamesSecondEmergencyContact').value     = respuesta.surnamesSecondEmergencyContact;
                    document.getElementById('numberSecondEmergencyContact').value       = respuesta.numberSecondEmergencyContact;
                }
            }
        }
    }
    // Enviar la peticion
    xhrfive.send(five);
}