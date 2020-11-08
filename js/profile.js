var btnEnviar = document.getElementById('profileEditRe');
var userId    = localStorage.getItem('userId');

one();
function one() {
    document.getElementById('userId');
    var one = new FormData();
        // crear el llamado a ajax

        var xhrOne = new XMLHttpRequest();
        one.append('userId', userId);
        xhrOne.open('POST', 'models/model-personOne.php', true);
        // retornando datos

        xhrOne.onload = function () {
            if (this.readyState === 4 && this.status === 200) {
                var respuesta = JSON.parse(xhrOne.responseText);

                if (respuesta.status === '0') {
                    // Hubo un error
                    document.getElementById('error').innerHTML = `
                    <h3>no hay datos que mostrar por favor ingresalos</h3>
                    `;//si la respuesta es correcta
                    setTimeout(() => {
                        esconderEdit()
                    }, 500);
                }else{

                    if (respuesta  === 'nationality', 'documentType', 'documentNumber', 'colombianLicense') {
                        // datos
                        document.getElementById('one').innerHTML = `
                              <ul>
                              <li>Nacionalidad: ${respuesta.nationality}</li>
                              <li>Tipo de documento: ${respuesta.documentType}</li>
                              <li>Numero de documento: ${respuesta.documentNumber}</li>
                              <li>Licencia Colombiana: ${respuesta.colombianLicense}</li>
                              </ul>
                              `;  
                    } 
                }
            }
        }
    // Enviar la peticion
    xhrOne.send(one);
}
    
two();
function two() {
    document.getElementById('userId');
    var two = new FormData();
        // crear el llamado a ajax
        var xhrTwo = new XMLHttpRequest();
        two.append('userId', userId);
        xhrTwo.open('POST', 'models/model-personTwo.php', true);
        // retornando datos

        xhrTwo.onload = function () {
            if (this.readyState === 4 && this.status === 200) {
                var respuesta = JSON.parse(xhrTwo.responseText);

                 //si la respuesta es correcta
                 if (respuesta.status === '0') {
                    // Hubo un error
                    document.getElementById('error').innerHTML = `
                    <h3>no hay datos que mostrar por favor ingresalos</h3>
                    `;
                    // setTimeout(() => {
                    //     esconderEdit()
                    // }, 500);
                } else {
                    // todo es correcto
                      if (respuesta  === 'licenseNumber', 'names', 'surnames', 'age', 'rh') {
                        // datos
                        document.getElementById('two').innerHTML = `
                        <ul>
                         <li>Numero de Licencia: ${respuesta.licenseNumber}</li>
                         <li>Nombres: ${respuesta.names}</li>
                         <li>Apellidos: ${respuesta.surnames}</li>
                         <li>Edad: ${respuesta.age}</li>
                         <li>RH: ${respuesta.rh}</li>
                        </ul>
                    `;   
                }   
            }
        }
    }
    // Enviar la peticion
    xhrTwo.send(two);
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
                    document.getElementById('error').innerHTML = `
                    <h3>no hay datos que mostrar por favor ingresalos</h3>
                    `;
                    // setTimeout(() => {
                    //     esconderEdit()
                    // }, 500);
                }else {
                if (respuesta  === 'sex', 'eps', 'arl', 'phone') {
                    // datos
                    document.getElementById('three').innerHTML = `
                    <ul>
                     <li>Sexo:     ${respuesta.sex}</li>
                     <li>EPS:      ${respuesta.eps}</li>
                     <li>ARL:      ${respuesta.arl}</li>
                     <li>Telefono: ${respuesta.phone}</li>
                    </ul>
                `;   
                }
            }
        }
    }
    // Enviar la peticion
    xhrThree.send(three);
}

function esconderEdit(){
    btnEnviar.style.display = 'none'
}

$(function() {
    $('#profileEditRe').on('click', function() {
        $("#dash").load('page_one');
        return;
    });
});