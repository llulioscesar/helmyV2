eventListeners();

function eventListeners() {
    document.querySelector('#requestpass').addEventListener('submit', validarRequest);
}

function validarRequest(e) {
    e.preventDefault();

    var email = document.querySelector('#email').value;

    if (email === '') {
        // la validacion fallo
       document.getElementById('error').innerHTML = `<p>llena el campo</p>`;
        
    } else {

        var datos = new FormData();
        datos.append('email', email);
        // crear el llamado a ajax

        var xhr = new XMLHttpRequest();
        xhr.open('POST', 'models/model-requestPassword.php', true);

        // retornando datos
        xhr.onload = function () {
            if (this.status === 200) {
                var respuesta = JSON.parse(xhr.responseText);
                console.log(respuesta);

                //  si la respuesta es correcta
                if (respuesta.status === '1') {
                    // si es un nuevo usuario
                    swal({
                        title: 'Solicitud enviada',
                        text: 'se acaba de enviar la solicitud a tu correo por favor verifica',
                        type: 'success'
                    }, function(){
                        alert(ok)
                    });
                    $('.swal2-confirm').on('click', function() {
                            $("#dash").load('index');
                            return;
                        });  
                } else if(respuesta.status === '2'){
                    // si es un nuevo usuario
                    swal({
                        title: 'Solicitud enviada',
                        text: 'se acaba de enviar la solicitud a tu correo por favor verifica',
                        type: 'success'
                    }, function(){
                        alert(ok)
                    });
                    $('.swal2-confirm').on('click', function() {
                            $("#dash").load('index');
                            return;
                        }); 
                }else {
                    // Hubo un error
                    swal({
                        title: 'Informacion Invalida',
                        type: 'error'
                    });
                }
            }
        }
        // Enviar la peticion
        xhr.send(datos);
    }
}
