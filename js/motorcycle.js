var respuestaMotorcycle;
var numTotalMotorcycle;
var bikeNum     = 0;
var btnEnviar   = document.getElementById('motorcycleEditRe');
var btnDelete   = document.getElementById('delete');
var btnLeftAll  = document.querySelector('.mLeftAll');
var btnLeft     = document.querySelector('.mLeft');
var btnRight    = document.querySelector('.mRight');
var btnRightAll = document.querySelector('.mRightAll');
var userId      = localStorage.getItem('userId');

motorcycle();
function motorcycle() {
    document.getElementById('userId');
    let motorcycle = new FormData();
    motorcycle.append('userId', userId);
        // crear el llamado a ajax

        let xhrMotorcycle = new XMLHttpRequest();
        xhrMotorcycle.open('POST', 'models/model-motorcycle.php', true);
        // retornando datos

        xhrMotorcycle.onload = function () {
            if (this.readyState === 4 && this.status === 200) {
                respuestaMotorcycle = JSON.parse(xhrMotorcycle.responseText);
                 //si la respuestaMotorcycle es correcta
                if (respuestaMotorcycle.status === "0") {
                 // datos
                document.getElementById('error').innerHTML = `
                <h3>no hay datos que mostrar</h3>
                `;
                setTimeout(() => {
                    esconderDelete();
                    esconderBotones();
                    esconderEdit();
                }, 500);
                } else {
                    document.getElementById('error').classList.remove('motorcycleNumError');
                    if(localStorage.getItem('bikeSelected') === null){
                        showBike(0);
                    }else{
                       let motorcycleEdited = localStorage.getItem('bikeSelected');
                       showBike(motorcycleEdited);
                       localStorage.removeItem('bikeSelected');
                    }
                    numTotalMotorcycle = respuestaMotorcycle.numMotorcycle;
                    updateNumbersArray(0);
                }
            }
        }  
    // Enviar la peticion
    xhrMotorcycle.send(motorcycle);
}

function esconderDelete(){
    btnDelete.style.display = 'none';
}

function esconderBotones(){
    btnLeftAll.style.display  = 'none';
    btnLeft.style.display     = 'none';
    btnRight.style.display    = 'none';
    btnRightAll.style.display = 'none';
}

function esconderEdit(){
    btnEnviar.style.display = 'none'
}

//Almacena datos en el local storage
function guardarDatosLocalStorage(){
    //toma el valor de un arreglo con datos de LS o vacio
    localStorage.setItem('respuestasM', JSON.stringify(respuestaMotorcycle)); // todas las motos quedan almacenadas en local storage// todas las motos quedan almacenadas en local storage
}

function showBike(num){
        updateNumbersArray(num);
        document.getElementById('motorcycle').innerHTML = 
        `
        <ul>
        <div class="motorcycleNum"><h4> Moto ${parseInt(num) + 1}</h4></div>
        <li>Alias:                          ${respuestaMotorcycle[`alias${num}`]}</li>
        <li>Primera poliza:                 ${respuestaMotorcycle[`policySoat${num}`]}</li>
        <li>Segunda poliza:                 ${respuestaMotorcycle[`noPolicyTwo${num}`]}</li>
        <li>Numero segunda poliza:          ${respuestaMotorcycle[`policyTelephoneTwo${num}`]}</li>
        <li>Marca:                          ${respuestaMotorcycle[`brand${num}`]}</li>
        <li>Plate:                          ${respuestaMotorcycle[`plate${num}`]}</li>
        <li>Chasis:                         ${respuestaMotorcycle[`chassis${num}`]}</li>
        <li>Referencia de rueda:            ${respuestaMotorcycle[`threeDigitsWheelReference${num}`]}</li>
        <li>Copia de encendido:             ${respuestaMotorcycle[`threeDigitsBackupPowerKey${num}`]}</li>
        </ul>
        `; 
};




function editBike(){
    // codigo para pasar motorcycleEdit.js
    guardarDatosLocalStorage();
};

function left(){
    if(bikeNum - 1 >= 0){
        bikeNum = bikeNum - 1;
    }
    showBike(bikeNum);
}

function leftAll(){
    bikeNum = 0;
    showBike(bikeNum);
}

function right(){
    if(bikeNum + 1 < numTotalMotorcycle){
        bikeNum = bikeNum + 1;
    } 
    showBike(bikeNum);
}

function rightAll(){
    bikeNum = numTotalMotorcycle - 1;
    showBike(bikeNum);
};

function updateNumbersArray(bikeSelected){
    // console.log(bikeSelected);
    let numbers = document.getElementById("numbers");
    numbers.innerHTML = "";
    if(numTotalMotorcycle>10){
        let limitInf;
        let limitSup;
        if(bikeSelected<6){
            limitInf = 1;
            limitSup = 10;
        }else {
            limitInf = bikeSelected - 4;
            limitSup = bikeSelected + 5;
        };
        if(bikeSelected >= numTotalMotorcycle -5){
            limitInf = numTotalMotorcycle - 9;
            limitSup = numTotalMotorcycle;
        };
        for(let i = limitInf-1; i < limitSup; i++){
           numbers.innerHTML += `<a class="numbers" href='javascript:void(0)' onclick=showBikeFromArray(${i})>${i+1}</a>`;
        }; 
    }else {
        for(let i = 0; i < numTotalMotorcycle; i++){
            numbers.innerHTML += `<a class="numbers" href='javascript:void(0)' onclick=showBikeFromArray(${i})>${i+1}</a>`;
        };
    };
    localStorage.setItem('bikeSelected', bikeSelected);
}; 

function showBikeFromArray(num){
    bikeNum = num;
    showBike(bikeNum);
}

$(function() {
    $('#motorcycleEditRe').on('click', function() {
        $("#dash").load('motorcycleEdit');
        return;
    });
});