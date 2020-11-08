var userId = document.querySelector('#userId');

localStorage.setItem('userId', userId.value);

(function (global) { 

    if(typeof (global) === "undefined") {
        throw new Error("window is undefined");
    }

    var _hash = "!";
    var noBackPlease = function () {
        global.location.href += "#";

        // making sure we have the fruit available for juice (^__^)
        global.setTimeout(function () {
            global.location.href += "!";
        }, 50);
    };

    global.onhashchange = function () {
        if (global.location.hash !== _hash) {
            global.location.hash = _hash;
        }
    };

    global.onload = function () {            
        noBackPlease();

        // disables backspace on page except on input fields and textarea..
        document.body.onkeydown = function (e) {
            var Elm = e.target.nodeName.toLowerCase();
            if (e.which === 8 && (Elm !== 'input' && Elm  !== 'textarea')) {
                e.preventDefault();
            }
            // stopping event bubbling up the DOM tree..
            e.stopPropagation();
        };          
    }

})(window);

user();
function user() {
    document.getElementById('userId');
    let user = new FormData();
        // crear el llamado a ajax
        let xhr = new XMLHttpRequest();
        user.append('userId', userId);
        xhr.open('POST', 'models/model-user.php', true);
        // retornando datos

        xhr.onload = function () {
            if (this.readyState === 4 && this.status === 200) {
                let respuesta = JSON.parse(xhr.responseText);

                 //si la respuesta es correcta
                 if (respuesta.status === '0') {
                    // // Hubo un error
                    // document.getElementById('error').innerHTML = `
                    // <h1>no hay datos que mostrar por favor ingresalos</h1>
                    // `;
                    console.log('no hay nada');
                } else {
                    // todo es correcto
                      if (respuesta  === 'names', 'surnames') {
                        // datos
                        document.getElementById('user').innerHTML = `
                        <ul>
                         <li>Bienvenido, ${respuesta.names.split(' ', 1)}</li>
                        </ul>
                    `;   
                }   
            }
        }
    }
    // Enviar la peticion
    xhr.send(user);
}

// function removeLS(){
//     localStorage.clear(); 
// }

$(function() {
    $('#startRe').on('click', function() {
        $("#dash").load('start');
        return;
    });
});

$(window).on('load', function(){
    $("#dash").load('start');
})

$(function() {
    $('#profileRe').on('click', function() {
        $("#dash").load('profile');
        return;
    });
});

$(function() {
        $('#motorcycleRe').on('click', function() {
            $("#dash").load('motorcycle');
            return;
        });   
});

$(function() {
    $('#helmetRe').on('click', function() {
        $("#dash").load('helmet');
        return;
    });
});

$(function() {
    $('#contactsRe').on('click', function() {
        $("#dash").load('contacts');
        return;
    });
});

$(function() {
    $('#quotesRe').on('click', function() {
        $("#dash").load('quotes');
        return;
    });
});