eventListeners();


function eventListeners() {
    document.querySelector('#newpassword').addEventListener('submit', validarPassword);
}

function validarPassword(e) {
    e.preventDefault();

    let password = document.querySelector('#password').value,
        cofpassword = document.querySelector('#cofpassword').value;
        updatePassword = 1;


    if (password === '' || cofpassword === '') {
        // la validacion fallo
        document.getElementById('error').innerHTML = `<p>llena los campos</p>`;

    } else if (password != cofpassword) {
        document.getElementById('error').innerHTML = `<p>las contraseñas no coinciden</p>`;

    } else {
        // Ambos campos son correctos, mandar ejecutar Ajax
        // datos que se envian al servidor    
        var datos = new FormData();
        datos.append('password', password);
        datos.append('updatePassword', updatePassword);

        // crear el llamado a ajax

        var xhr = new XMLHttpRequest();
        xhr.open('POST', 'models/model-newPassword.php', true);

        // retornando datos

        xhr.onload = function () {
            if (this.status === 200) {
                let respuesta = JSON.parse(xhr.responseText);
                 //si la respuesta es correcta
                console.log(respuesta);
                if (respuesta.status === '2') {
                    // si es un nuevo usuario
                    swal({
                        title: 'Contraseña Actualizada',
                        type: 'success'
                    }, function(){
                        alert(ok)
                    });
                    $('.swal2-confirm').on('click', function() {
                            window.location.replace("http://localhost/project/");
                            return;
                        });  
                } else {
                    if (respuesta.status === '0') {
                      // Hubo un error
                      console.log('error');
                    }
                }
            }
        }
        // Enviar la peticion
        xhr.send(datos);
    }
}
