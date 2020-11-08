var btnEnviarOne = document.getElementById('enviarOneRe');
var btnEnviarTwo = document.getElementById('enviarTwoRe');
var userId       = localStorage.getItem('userId');

eventListeners();

function eventListeners() {
    document.querySelector('#four');;
}

fourOne();

function fourOne() {
    document.getElementById('userId');
    let fourOne = new FormData();
    // crear el llamado a ajax
    let xhrcontactOne = new XMLHttpRequest();
    fourOne.append('userId', userId);
    xhrcontactOne.open('POST', 'models/model-personFour.php', true);
    // retornando datos
    xhrcontactOne.onload = function () {
        if (this.readyState === 4 && this.status === 200) {
            let respuesta = JSON.parse(xhrcontactOne.responseText);

            //si la respuesta es correcta
            if (respuesta.status === '0') {
                btnEnviarOne.disabled = true;
                    document.getElementById('errorr').innerHTML = `
                    <h4>no hay primer contacto que mostrar </h4>
                    `;
                    setTimeout(() => {
                        esconderEditOne()
                    }, 500);
            } else {
                if (respuesta === 'firstEmergencyContactNames', 'surnamesFirstEmergencyContact', 'firstEmergencyContactNumber') {
                    // datos
                    document.getElementById('errorr').classList.remove('errorrone');
                    document.getElementById('contact_one').innerHTML = `
                     <ul>
                     <div class="contactOne"><h4>Primer contacto de emergencia</h4></div>
                     <div class="lineOne"></div>
                     <li><div class="oneDate">Nombres:</div><h1 class="oneDateHone">${respuesta.firstEmergencyContactNames.split(' ', 1)} ${respuesta.surnamesFirstEmergencyContact.split(' ', 1)}<h1></li>
                     <li><div class="oneDate">Telefono:</div><h1>${respuesta.firstEmergencyContactNumber}</h1></li>
                     </ul>
                    `;
                }
            }
        }
    }
    // Enviar la peticion
    xhrcontactOne.send(fourOne);
}

function esconderEditOne(){
    btnEnviarOne.style.display = 'none'
}

eventListeners();

function eventListeners() {
    document.querySelector('#four');;
}

fourTwo();

function fourTwo() {
    document.getElementById('userId');
    let fourTwo = new FormData();
    // crear el llamado a ajax
    let xhrcontactTwo = new XMLHttpRequest();
    fourTwo.append('userId', userId);
    xhrcontactTwo.open('POST', 'models/model-personFive.php', true);
    // retornando datos

    xhrcontactTwo.onload = function () {
        if (this.readyState === 4 && this.status === 200) {
            let respuesta = JSON.parse(xhrcontactTwo.responseText);

            //si la respuesta es correcta
            if (respuesta.status === '0') {
                // Hubo un error
                btnEnviarTwo.disabled = true;
                     document.getElementById('errorrr').innerHTML = `
                    <h4>no hay segundo contacto que mostrar</h4>
                    `;
                    setTimeout(() => {
                        esconderEditTwo()
                    }, 500);
            } else {
                if (respuesta === 'namesSecondEmergencyContact', 'surnamesSecondEmergencyContact', 'numberSecondEmergencyContact') {
                    // datos
                    document.getElementById('errorrr').classList.remove('errorrone');
                    document.getElementById('contact_two').innerHTML = `
                     <ul>
                     <div class="contactTwo"><h4>Segundo contacto de emergencia</h4></div>
                     <div class="lineTwo"></div>
                     <li><div class="oneDate">Nombres:</div><h1 class="oneDateH">${respuesta.namesSecondEmergencyContact.split(' ', 1)} ${respuesta.surnamesSecondEmergencyContact.split(' ', 1)}</h1></li>
                     <li><div class="twoDate">Telefono:</div><h1>${respuesta.numberSecondEmergencyContact}</h1></li>
                     </ul>
                    `;
                }
            }
        }
    }
    // Enviar la peticion
    xhrcontactTwo.send(fourTwo);
}

function esconderEditTwo(){
    btnEnviarTwo.style.display = 'none'
}

$(function () {
    $('#enviarOneRe').on('click', function () {
        $("#dash").load('page_four');
        return;
    });
});

$(function () {
    $('#enviarTwoRe').on('click', function () {
        $("#dash").load('page_five');
        return;
    });
});