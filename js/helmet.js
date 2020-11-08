var respuestaHelmet;
var numTotalHelmet;
var helmetNum = 0;
var btnEnviar = document.getElementById('helmetEditRe');
var btnDelete   = document.getElementById('delete');
var btnLeftAll  = document.querySelector('.hLeftAll');
var btnLeft     = document.querySelector('.hLeft');
var btnRight    = document.querySelector('.hRight');
var btnRightAll = document.querySelector('.hRightAll');
var userId      = localStorage.getItem('userId');

helmet();
function helmet(){
        let helmet = new FormData();
        // crear el llamado a ajax
        let xhrHelmet = new XMLHttpRequest();
        helmet.append('userId', userId);
        xhrHelmet.open('POST', 'models/model-helmet.php');
        // retornando datos

        xhrHelmet.onload = function () {
            if (this.readyState === 4 && this.status === 200) {
                respuestaHelmet = JSON.parse(xhrHelmet.responseText);
                 //si la respuestaHelmet es correcta
                if (respuestaHelmet.status === "0") {
                 // HUBO UN ERROR 
                document.getElementById('error').innerHTML = `
                <h3>no hay datos que mostrar</h3>
                `;
                setTimeout(() => {
                    esconderDelete();
                    esconderBotones();
                    esconderEdit();
                }, 500);

                } else {
                    document.getElementById('error').classList.remove('helmetNumError');
                    if(respuestaHelmet){
                        if(localStorage.getItem('helmetSelected') === null){
                            showHelmet(0);
                        }else{
                           let helmetEdited = localStorage.getItem('helmetSelected');
                           showHelmet(helmetEdited);
                           localStorage.removeItem('helmetSelected');
                        }
                        numTotalHelmet = respuestaHelmet.numHelmets;
                        updateNumbersArray(0);
                    }
            }
        }
    }  
    // Enviar la peticion
    xhrHelmet.send(helmet);
}

function esconderDelete(){
    btnDelete.style.display = 'none';
};

function esconderBotones(){
    btnLeftAll.style.display = 'none';
    btnLeft.style.display = 'none';
    btnRight.style.display = 'none';
    btnRightAll.style.display = 'none';
};

function esconderEdit(){
    btnEnviar.style.display = 'none'
}

//Almacena datos en el local storage
function guardarDatosLocalStorage(){
    //toma el valor de un arreglo con datos de LS o vacio
    localStorage.setItem('respuestasH', JSON.stringify(respuestaHelmet)); // todas las motos quedan almacenadas en local storage// todas las motos quedan almacenadas en local storage
}

function showHelmet(num){
    updateNumbersArray(num);
    document.getElementById('helmet').innerHTML = 
    `
    <ul>
    <div class="helmetNum"><h4>Casco ${parseInt(num) + 1}</h4></div>
    <li>Marca:                          ${respuestaHelmet[`brand${num}`]}</li>
    <li>Talla:                          ${respuestaHelmet[`size${num}`]}</li>
    <li>Alias:                          ${respuestaHelmet[`alias${num}`]}</li>
    </ul>
    `; 
};

function editHelmet(e){
    guardarDatosLocalStorage();
};

function left(){
    if(helmetNum - 1 >= 0){
        helmetNum = helmetNum - 1;
    }
    showHelmet(helmetNum);
}

function leftAll(){
    helmetNum = 0;
    showHelmet(helmetNum);
}

function right(){
    if(helmetNum + 1 < numTotalHelmet){
        helmetNum = helmetNum + 1 ;
    } 
    showHelmet(helmetNum);
}

function rightAll(){
    helmetNum = numTotalHelmet - 1;
    showHelmet(helmetNum);
};

function updateNumbersArray(helmetSelected){
    let numbers = document.getElementById("numbers");
    numbers.innerHTML = "";
    if(numTotalHelmet>10){
        let limitInf;
        let limitSup;
        if(helmetSelected<6){
            limitInf = 1;
            limitSup = 10;
        }else {
            limitInf = helmetSelected - 4;
            limitSup = helmetSelected + 5;
        };
        if(helmetSelected >= numTotalHelmet-5){
            limitInf = numTotalHelmet - 9;
            limitSup = numTotalHelmet;
        };
        for(let i = limitInf-1; i < limitSup; i++){
           numbers.innerHTML += `<a class="numbersH" href='javascript:void(0)' onclick=showHelmetFromArray(${i})>${i+1}</a>`;
        };
    }else {
        for(let i = 0; i < numTotalHelmet; i++){
            numbers.innerHTML += `<a class="numbersH" href='javascript:void(0)' onclick=showHelmetFromArray(${i})>${i+1}</a>`;
        };
    };
    localStorage.setItem('helmetSelected', helmetSelected);
};

function showHelmetFromArray(num){
    helmetNum = num;
    showHelmet(helmetNum);
}

$(function() {
    $('#helmetEditRe').on('click', function() {
        $("#dash").load('helmetEdit');
        return;
    });
});