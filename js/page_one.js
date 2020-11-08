var respuesta;
var userId  = localStorage.getItem('userId');

function showContent() {
    documentNumber = document.getElementById("documentNumber");
    var colombianLicense = document.getElementById("colombianLicense").value;
    console.log(colombianLicense);
    if (colombianLicense.checked) {
        documentNumber.style.display='none';
    }
    else {
        documentNumber.style.display='block';
    }
}

var countriesList = document.getElementById("nationality");
var countries; // will contain "fetched" data

fetch("https://restcountries.eu/rest/v2/all")
.then(res => res.json())
.then(data => initialize(data))
.catch(err => console.log("Error:", err));

function initialize(countriesData) {
  countries = countriesData;
  var options = "";
  
  countries.forEach(country => options+=`<option value="${country.name}">${country.name}</option>`);
//   countries.forEach(country => alpha3CodeName[`${country.alpha3Code}`] = country.name);

  countriesList.innerHTML = options;
}

eventListeners();
function eventListeners() {
    document.querySelector('#one').addEventListener('submit', validarRegistro);
}
function validarRegistro(e) {
    e.preventDefault();

    var nationality = document.querySelector('#nationality').value,
        documentType = document.querySelector('#documentType').value,
        documentNumber = document.querySelector('#documentNumber').value,
        colombianLicense = document.querySelector('#colombianLicense').value;


    if (nationality === '' || documentType === '' || documentNumber === '' || colombianLicense === '') {
        // la validacion fallo
        document.getElementById('error').innerHTML = `<p>Llena todos los campos</p>`;

    } else {
        // Ambos campos son correctos, mandar ejecutar Ajax
        // datos que se envian al servidor    
        var datos = new FormData();
        datos.append('nationality',  nationality);
        datos.append('documentType', documentType);
        datos.append('documentNumber', documentNumber);
        datos.append('colombianLicense', colombianLicense);
        datos.append('userId', userId);

        var xhr = new XMLHttpRequest();
        xhr.open('POST', 'models/model-personOne.php', true);

        // retornando datos

        xhr.onload = function () {
            if (this.status === 200) {
                respuesta = JSON.parse(xhr.responseText);
                if(respuesta.status === '2'){
                    // si la respuesta es correcta
                    $("#dash").load('page_two');
                } else {
                    console.log('error');
                }
               
            }
        }
        // Enviar la peticion
        xhr.send(datos);
    }
}

// setTimeout(function date(){
//     $('#enviar').on('click', function() {
//         $("#dash").load('page_two');
//         return;
//     })
// }, 500)

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
                respuesta = JSON.parse(xhrOne.responseText);

                if (respuesta.status === '0') {
                    // Hubo un error
                    
                }else{
                    if (respuesta  === 'nationality', 'documentType', 'documentNumber', 'colombianLicense') {
                        
                        countries();
                        function countries(){
                            var countriesList = document.getElementById("nationality");
                            var countries; // will contain "fetched" data
                                        
                            fetch("https://restcountries.eu/rest/v2/all")
                            .then(res => res.json())
                            .then(data => initialize(data))
                            .catch(err => console.log("Error:", err));
                            
                            function initialize(countriesData) {
                              countries = countriesData;
                              var options = "";
                              
                              countries.forEach(country => options+=`<option value="${country.name}">${country.name}</option>`);
                            //   countries.forEach(country => alpha3CodeName[`${country.alpha3Code}`] = country.name);
                            
                              countriesList.innerHTML = options;
                              displayCountryInfo(countriesList[countriesList.selectedIndex].value);
                            }
                            
                            function displayCountryInfo() {
                                document.querySelector('#nationality').value = respuesta.nationality;
                            }
                            
                        }
                       
                        document.getElementById('documentType').value     = respuesta.documentType;
                        document.getElementById('documentNumber').value   = respuesta.documentNumber;
                        document.getElementById('colombianLicense').value = respuesta.colombianLicense;
                        } 
                }
        }
    }
    
    // Enviar la peticion
    xhrOne.send(one);
}



