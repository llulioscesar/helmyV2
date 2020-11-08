var consult = document.querySelector('#consult');
var quotes = document.querySelector('#listado-quotes');

consultAll();
function consultAll(){
    var userId  = localStorage.getItem('userId');
    var datos = new FormData();
    datos.append('userId', userId);
    // crear el llamado a ajax
    var xhr = new XMLHttpRequest();
    xhr.open('POST', 'models/model-views.php', true);
    // retornando datos
    xhr.onload = function () {
        if (this.status === 200) {
            var respuesta = JSON.parse(xhr.responseText);
            //si la respuesta es correcta
            if (respuesta.status === '0') {
                console.log('no hay datos');
            }else {
                consult.classList.add('consultViews');
                var numQuotes = respuesta['numQuotes'] - 1;
                for(var i = 0; i <= numQuotes; i++){
                    quotes.innerHTML += `
                        <tr>
                            <td class="cont-td">
                                <p class="cont-p">${respuesta[`names${i}`]}</p>
                            </td>
                            <td class="cont-td">
                                <p class="cont-p">${respuesta[`surnames${i}`]}</p>
                            </td>
                            <td class="cont-td">
                                <p class="cont-p">${respuesta[`plate${i}`]}</p>
                            </td>
                            <td class="cont-td">
                                <p class="cont-p">${respuesta[`brand${i}`]}</p>
                            </td>
                            <td class="cont-td">
                                <p class="cont-p">${respuesta[`city${i}`]}</p>
                            </td>
                            <td class="cont-td">
                                <p class="cont-p">${respuesta[`distributor${i}`]}</p>
                            </td>
                            <td class="cont-td">
                                <p class="cont-p">${respuesta[`date${i}`]}</p>
                            </td>
                            <td class="cont-td">
                                <p class="cont-p">${respuesta[`time${i}`]}</p>
                            </td>
                            <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200 text-sm leading-5">
                                <a href="#" data-cliente="${respuesta[`plate${i}`]}" class="cont-delete"><img src="css/images/trash-2.svg" alt="Eliminar"></a>
                            </td>
                        </tr>
                    `;
                }
            }
        }
    }
    // Enviar la peticion
    xhr.send(datos);
}

eventListener();
function eventListener(){
    quotes.addEventListener('click', deleteQuote);
};

function deleteQuote(e){
    console.log(e.target);
}