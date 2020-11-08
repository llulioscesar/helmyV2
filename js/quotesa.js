var names = document.querySelector('#names');
var surnames = document.querySelector('#surnames');
var plate = document.querySelector('#plate');
var brand = document.querySelector('#brand');
var city = document.querySelector('#city');
var distributor = document.querySelector('#distributor');
var datee = document.querySelector('#fechas');
var timeHours = document.querySelector('#time');
var crear = document.querySelector('#quote');
var dateAll = [];
var day = []
var dayWeek = []
var dayAll = []
var hoursMin = ['HH:MM'];
var hoursMinBd = [];

eventListeners();
function eventListeners(){
    names.addEventListener('blur', validarCampo);
    surnames.addEventListener('blur', validarCampo);
    plate.addEventListener('blur', validarCampo);
    brand.addEventListener('blur', validarCampo);
    city.addEventListener('blur', validarCampo);
    distributor.addEventListener('blur', validarCampo);
    datee.addEventListener('blur', validarCampo);
    timeHours.addEventListener('blur', validarCampo);
    brand.addEventListener('change', cityValue);
    city.addEventListener('change', cityValue);
    distributor.addEventListener('change', distributorValue);
    datee.addEventListener('change', dateValue);
    // Boton de enviar en el submit
    crear.addEventListener('submit', validarDatos);
}

function cityValue(){
    dateAll = [];
    userId  = localStorage.getItem('userId');
    var datos = new FormData();
    datos.append('userId', userId);
    // crear el llamado a ajax
    var xhr = new XMLHttpRequest();
    xhr.open('POST', 'models/model-quotes.php', true);

    // retornando datos

    xhr.onload = function () {
        if (this.status === 200) {
            var respuesta = JSON.parse(xhr.responseText);
            if (respuesta.status === '0') {
               console.log('no hay datos');
            }else {
                for(i in respuesta){
                    dateAll.push(respuesta[i])
                }
            }
        }
    }
    // Enviar la peticion
    xhr.send(datos)
    if(city.value == 'Bogotá' && brand.value == 'Akt'){
        for (const option of document.querySelectorAll('#distributor > option')) {
            option.remove();
        }
        for (const option of document.querySelectorAll('#fechas > option')) {
            option.remove();
        }
        for (const option of document.querySelectorAll('#time > option')) {
            option.remove();
        }
        cargarDefault();
        var disBogota = ['Establecimientos', 'Calle. 65 #7-2 a 7-98, chapinero', 'Calle 22 Sur #27-51 a 27-39, BR. Santander'];
        for(let i = 0; i < disBogota.length; i++){
            const opcion = document.createElement('option');
            opcion.value = disBogota[i];
            opcion.textContent = disBogota[i];
            distributor.appendChild(opcion); // Agrega cada opcion
        }
    }else if(city.value == 'Bogotá' && brand.value == 'Yamaha'){
        for (const option of document.querySelectorAll('#distributor > option')) {
            option.remove();
        }
        for (const option of document.querySelectorAll('#fechas > option')) {
            option.remove();
        }
        for (const option of document.querySelectorAll('#time > option')) {
            option.remove();
        }
        cargarDefault();
        var disBogota = ['Establecimientos', 'Calle. 65 #7-2 a 7-98, chapinero', 'Calle 22 Sur #27-51 a 27-39, BR. Santander'];
        for(let i = 0; i < disBogota.length; i++){
            const opcion = document.createElement('option');
            opcion.value = disBogota[i];
            opcion.textContent = disBogota[i];
            distributor.appendChild(opcion); // Agrega cada opcion
        }
    }else if(city.value == 'Bogotá' && brand.value == 'Auteco'){
        for (const option of document.querySelectorAll('#distributor > option')) {
            option.remove();
        }
        for (const option of document.querySelectorAll('#fechas > option')) {
            option.remove();
        }
        for (const option of document.querySelectorAll('#time > option')) {
            option.remove();
        }
        cargarDefault();
        var disBogota = ['Establecimientos', 'Calle. 65 #7-2 a 7-98, chapinero', 'Calle 22 Sur #27-51 a 27-39, BR. Santander'];
        for(let i = 0; i < disBogota.length; i++){
            const opcion = document.createElement('option');
            opcion.value = disBogota[i];
            opcion.textContent = disBogota[i];
            distributor.appendChild(opcion); // Agrega cada opcion
        }
    }else if(city.value == 'Bogotá' && brand.value == 'Auteco Mobility'){
        for (const option of document.querySelectorAll('#distributor > option')) {
            option.remove();
        }
        for (const option of document.querySelectorAll('#fechas > option')) {
            option.remove();
        }
        for (const option of document.querySelectorAll('#time > option')) {
            option.remove();
        }
        cargarDefault();
        var disBogota = ['Establecimientos', 'Calle. 75 #7-2 a 7-98, chapinero', 'Calle 22 Sur #27-51 a 27-39, BR. Santander'];
        for(let i = 0; i < disBogota.length; i++){
            const opcion = document.createElement('option');
            opcion.value = disBogota[i];
            opcion.textContent = disBogota[i];
            distributor.appendChild(opcion); // Agrega cada opcion
        }
    }else if(city.value == 'Bogotá' && brand.value == 'Suzuki'){
        for (const option of document.querySelectorAll('#distributor > option')) {
            option.remove();
        }
        for (const option of document.querySelectorAll('#fechas > option')) {
            option.remove();
        }
        for (const option of document.querySelectorAll('#time > option')) {
            option.remove();
        }
        cargarDefault();
        var disBogota = ['Establecimientos', 'Calle. 75 #7-2 a 7-98, chapinero', 'Calle 22 Sur #27-51 a 27-39, BR. Santander'];
        for(let i = 0; i < disBogota.length; i++){
            const opcion = document.createElement('option');
            opcion.value = disBogota[i];
            opcion.textContent = disBogota[i];
            distributor.appendChild(opcion); // Agrega cada opcion
        }
    }else if(city.value == 'Bogotá' && brand.value == 'Honda'){
        for (const option of document.querySelectorAll('#distributor > option')) {
            option.remove();
        }
        for (const option of document.querySelectorAll('#fechas > option')) {
            option.remove();
        }
        for (const option of document.querySelectorAll('#time > option')) {
            option.remove();
        }
        cargarDefault();
        var disBogota = ['Establecimientos', 'Calle. 75 #7-2 a 7-98, chapinero', 'Calle 22 Sur #27-51 a 27-39, BR. Santander'];
        for(let i = 0; i < disBogota.length; i++){
            const opcion = document.createElement('option');
            opcion.value = disBogota[i];
            opcion.textContent = disBogota[i];
            distributor.appendChild(opcion); // Agrega cada opcion
        }
    }else if(city.value == 'Bogotá' && brand.value == 'Hero'){
        for (const option of document.querySelectorAll('#distributor > option')) {
            option.remove();
        }
        for (const option of document.querySelectorAll('#fechas > option')) {
            option.remove();
        }
        for (const option of document.querySelectorAll('#time > option')) {
            option.remove();
        }
        cargarDefault();
        var disBogota = ['Establecimientos', 'Calle. 75 #7-2 a 7-98, chapinero', 'Calle 22 Sur #27-51 a 27-39, BR. Santander'];
        for(let i = 0; i < disBogota.length; i++){
            const opcion = document.createElement('option');
            opcion.value = disBogota[i];
            opcion.textContent = disBogota[i];
            distributor.appendChild(opcion); // Agrega cada opcion
        }
    }else if(city.value == 'Barranquilla' && brand.value == 'Akt'){
        for (const option of document.querySelectorAll('#distributor > option')) {
            option.remove();
        }
        for (const option of document.querySelectorAll('#fechas > option')) {
            option.remove();
        }
        for (const option of document.querySelectorAll('#time > option')) {
            option.remove();
        }
        cargarDefault();
        var disBarranquilla = ['Establecimientos', 'Calle. 38 #36-173 a 36-1, Centro', 'Calle. 45 #46-142 a 46-304, BR. Abajo'];
        for(let i = 0; i < disBarranquilla.length; i++){
            const opcion = document.createElement('option');
            opcion.value = disBarranquilla[i];
            opcion.textContent = disBarranquilla[i];
            distributor.appendChild(opcion); // Agrega cada opcion
        }
    }else if(city.value == 'Barranquilla' && brand.value == 'Yamaha'){
        for (const option of document.querySelectorAll('#distributor > option')) {
            option.remove();
        }
        for (const option of document.querySelectorAll('#fechas > option')) {
            option.remove();
        }
        for (const option of document.querySelectorAll('#time > option')) {
            option.remove();
        }
        cargarDefault();
        var disBarranquilla = ['Establecimientos', 'Calle. 38 #36-173 a 36-1, Centro', 'Calle. 45 #46-142 a 46-304, BR. Abajo'];
        for(let i = 0; i < disBarranquilla.length; i++){
            const opcion = document.createElement('option');
            opcion.value = disBarranquilla[i];
            opcion.textContent = disBarranquilla[i];
            distributor.appendChild(opcion); // Agrega cada opcion
        }
    }else if(city.value == 'Barranquilla' && brand.value == 'Auteco'){
        for (const option of document.querySelectorAll('#distributor > option')) {
            option.remove();
        }
        for (const option of document.querySelectorAll('#fechas > option')) {
            option.remove();
        }
        for (const option of document.querySelectorAll('#time > option')) {
            option.remove();
        }
        cargarDefault();
        var disBarranquilla = ['Establecimientos', 'Calle. 38 #36-173 a 36-1, Centro', 'Calle. 45 #46-142 a 46-304, BR. Abajo'];
        for(let i = 0; i < disBarranquilla.length; i++){
            const opcion = document.createElement('option');
            opcion.value = disBarranquilla[i];
            opcion.textContent = disBarranquilla[i];
            distributor.appendChild(opcion); // Agrega cada opcion
        }
    }else if(city.value == 'Barranquilla' && brand.value == 'Auteco Mobility'){
        for (const option of document.querySelectorAll('#distributor > option')) {
            option.remove();
        }
        for (const option of document.querySelectorAll('#fechas > option')) {
            option.remove();
        }
        for (const option of document.querySelectorAll('#time > option')) {
            option.remove();
        }
        cargarDefault();
        var disBarranquilla = ['Establecimientos', 'Calle. 38 #36-173 a 36-1, Centro', 'Calle. 45 #46-142 a 46-304, BR. Abajo'];
        for(let i = 0; i < disBarranquilla.length; i++){
            const opcion = document.createElement('option');
            opcion.value = disBarranquilla[i];
            opcion.textContent = disBarranquilla[i];
            distributor.appendChild(opcion); // Agrega cada opcion
        }
    }else if(city.value == 'Barranquilla' && brand.value == 'Suzuki'){
        for (const option of document.querySelectorAll('#distributor > option')) {
            option.remove();
        }
        for (const option of document.querySelectorAll('#fechas > option')) {
            option.remove();
        }
        for (const option of document.querySelectorAll('#time > option')) {
            option.remove();
        }
        cargarDefault();
        var disBarranquilla = ['Establecimientos', 'Calle. 38 #36-173 a 36-1, Centro', 'Calle. 45 #46-142 a 46-304, BR. Abajo'];
        for(let i = 0; i < disBarranquilla.length; i++){
            const opcion = document.createElement('option');
            opcion.value = disBarranquilla[i];
            opcion.textContent = disBarranquilla[i];
            distributor.appendChild(opcion); // Agrega cada opcion
        }
    }else if(city.value == 'Barranquilla' && brand.value == 'Honda'){
        for (const option of document.querySelectorAll('#distributor > option')) {
            option.remove();
        }
        for (const option of document.querySelectorAll('#fechas > option')) {
            option.remove();
        }
        for (const option of document.querySelectorAll('#time > option')) {
            option.remove();
        }
        cargarDefault();
        var disBarranquilla = ['Establecimientos', 'Calle. 38 #36-173 a 36-1, Centro', 'Calle. 45 #46-142 a 46-304, BR. Abajo'];
        for(let i = 0; i < disBarranquilla.length; i++){
            const opcion = document.createElement('option');
            opcion.value = disBarranquilla[i];
            opcion.textContent = disBarranquilla[i];
            distributor.appendChild(opcion); // Agrega cada opcion
        }
    }else if(city.value == 'Barranquilla' && brand.value == 'Hero'){
        for (const option of document.querySelectorAll('#distributor > option')) {
            option.remove();
        }
        for (const option of document.querySelectorAll('#fechas > option')) {
            option.remove();
        }
        for (const option of document.querySelectorAll('#time > option')) {
            option.remove();
        }
        cargarDefault();
        var disBarranquilla = ['Establecimientos', 'Calle. 38 #36-173 a 36-1, Centro', 'Calle. 45 #46-142 a 46-304, BR. Abajo'];
        for(let i = 0; i < disBarranquilla.length; i++){
            const opcion = document.createElement('option');
            opcion.value = disBarranquilla[i];
            opcion.textContent = disBarranquilla[i];
            distributor.appendChild(opcion); // Agrega cada opcion
        }
    }else if(city.value == 'Cali' && brand.value == 'Akt'){
        for (const option of document.querySelectorAll('#distributor > option')) {
            option.remove();
        }
        for (const option of document.querySelectorAll('#fechas > option')) {
            option.remove();
        }
        for (const option of document.querySelectorAll('#time > option')) {
            option.remove();
        }
        cargarDefault();
        var disCali = ['Establecimientos', 'Calle 17 #34-2 a 34-100, BR. Libertad', 'Calle. 28 #23-20 a 23c-68, BR. 20 de Julio'];
        for(let i = 0; i < disCali.length; i++){
            const opcion = document.createElement('option');
            opcion.value = disCali[i];
            opcion.textContent = disCali[i];
            distributor.appendChild(opcion); // Agrega cada opcion
        }
    }else if(city.value == 'Cali' && brand.value == 'Yamaha'){
        for (const option of document.querySelectorAll('#distributor > option')) {
            option.remove();
        }
        for (const option of document.querySelectorAll('#fechas > option')) {
            option.remove();
        }
        for (const option of document.querySelectorAll('#time > option')) {
            option.remove();
        }
        cargarDefault();
        var disCali = ['Establecimientos', 'Calle 17 #34-2 a 34-100, BR. Libertad', 'Calle. 28 #23-20 a 23c-68, BR. 20 de Julio'];
        for(let i = 0; i < disCali.length; i++){
            const opcion = document.createElement('option');
            opcion.value = disCali[i];
            opcion.textContent = disCali[i];
            distributor.appendChild(opcion); // Agrega cada opcion
        }
    }else if(city.value == 'Cali' && brand.value == 'Auteco'){
        for (const option of document.querySelectorAll('#distributor > option')) {
            option.remove();
        }
        for (const option of document.querySelectorAll('#fechas > option')) {
            option.remove();
        }
        for (const option of document.querySelectorAll('#time > option')) {
            option.remove();
        }
        cargarDefault();
        var disCali = ['Establecimientos', 'Calle 17 #34-2 a 34-100, BR. Libertad', 'Calle. 28 #23-20 a 23c-68, BR. 20 de Julio'];
        for(let i = 0; i < disCali.length; i++){
            const opcion = document.createElement('option');
            opcion.value = disCali[i];
            opcion.textContent = disCali[i];
            distributor.appendChild(opcion); // Agrega cada opcion
        }
    }else if(city.value == 'Cali' && brand.value == 'Auteco Mobility'){
        for (const option of document.querySelectorAll('#distributor > option')) {
            option.remove();
        }
        for (const option of document.querySelectorAll('#fechas > option')) {
            option.remove();
        }
        for (const option of document.querySelectorAll('#time > option')) {
            option.remove();
        }
        cargarDefault();
        var disCali = ['Establecimientos', 'Calle 17 #34-2 a 34-100, BR. Libertad', 'Calle. 28 #23-20 a 23c-68, BR. 20 de Julio'];
        for(let i = 0; i < disCali.length; i++){
            const opcion = document.createElement('option');
            opcion.value = disCali[i];
            opcion.textContent = disCali[i];
            distributor.appendChild(opcion); // Agrega cada opcion
        }
    }else if(city.value == 'Cali' && brand.value == 'Suzuki'){
        for (const option of document.querySelectorAll('#distributor > option')) {
            option.remove();
        }
        for (const option of document.querySelectorAll('#fechas > option')) {
            option.remove();
        }
        for (const option of document.querySelectorAll('#time > option')) {
            option.remove();
        }
        cargarDefault();
        var disCali = ['Establecimientos', 'Calle 17 #34-2 a 34-100, BR. Libertad', 'Calle. 28 #23-20 a 23c-68, BR. 20 de Julio'];
        for(let i = 0; i < disCali.length; i++){
            const opcion = document.createElement('option');
            opcion.value = disCali[i];
            opcion.textContent = disCali[i];
            distributor.appendChild(opcion); // Agrega cada opcion
        }
    }else if(city.value == 'Cali' && brand.value == 'Honda'){
        for (const option of document.querySelectorAll('#distributor > option')) {
            option.remove();
        }
        for (const option of document.querySelectorAll('#fechas > option')) {
            option.remove();
        }
        for (const option of document.querySelectorAll('#time > option')) {
            option.remove();
        }
        cargarDefault();
        var disCali = ['Establecimientos', 'Calle 17 #34-2 a 34-100, BR. Libertad', 'Calle. 28 #23-20 a 23c-68, BR. 20 de Julio'];
        for(let i = 0; i < disCali.length; i++){
            const opcion = document.createElement('option');
            opcion.value = disCali[i];
            opcion.textContent = disCali[i];
            distributor.appendChild(opcion); // Agrega cada opcion
        }
    }else if(city.value == 'Cali' && brand.value == 'Hero'){
        for (const option of document.querySelectorAll('#distributor > option')) {
            option.remove();
        }
        for (const option of document.querySelectorAll('#fechas > option')) {
            option.remove();
        }
        for (const option of document.querySelectorAll('#time > option')) {
            option.remove();
        }
        cargarDefault();
        var disCali = ['Establecimientos', 'Calle 17 #34-2 a 34-100, BR. Libertad', 'Calle. 28 #23-20 a 23c-68, BR. 20 de Julio'];
        for(let i = 0; i < disCali.length; i++){
            const opcion = document.createElement('option');
            opcion.value = disCali[i];
            opcion.textContent = disCali[i];
            distributor.appendChild(opcion); // Agrega cada opcion
        }
    }else if(city.value == 'Ibagué' && brand.value == 'Akt'){
        for (const option of document.querySelectorAll('#distributor > option')) {
            option.remove();
        }
        for (const option of document.querySelectorAll('#fechas > option')) {
            option.remove();
        }
        for (const option of document.querySelectorAll('#time > option')) {
            option.remove();
        }
        cargarDefault();
        var disIbague = ['Establecimientos', 'Carrera. 5 #40-123 a 40-3, BR. Los Olivos', 'Calle 19 #1a-2 a 1a-78, Avenida Ferrocarril'];
        for(let i = 0; i < disIbague.length; i++){
            const opcion = document.createElement('option');
            opcion.value = disIbague[i];
            opcion.textContent = disIbague[i];
            distributor.appendChild(opcion); // Agrega cada opcion
        }
    }else if(city.value == 'Ibagué' && brand.value == 'Yamaha'){
        for (const option of document.querySelectorAll('#distributor > option')) {
            option.remove();
        }
        for (const option of document.querySelectorAll('#fechas > option')) {
            option.remove();
        }
        for (const option of document.querySelectorAll('#time > option')) {
            option.remove();
        }
        cargarDefault();
        var disIbague = ['Establecimientos', 'Carrera. 5 #40-123 a 40-3, BR. Los Olivos', 'Calle 19 #1a-2 a 1a-78, Avenida Ferrocarril'];
        for(let i = 0; i < disIbague.length; i++){
            const opcion = document.createElement('option');
            opcion.value = disIbague[i];
            opcion.textContent = disIbague[i];
            distributor.appendChild(opcion); // Agrega cada opcion
        }
    }else if(city.value == 'Ibagué' && brand.value == 'Auteco'){
        for (const option of document.querySelectorAll('#distributor > option')) {
            option.remove();
        }
        for (const option of document.querySelectorAll('#fechas > option')) {
            option.remove();
        }
        for (const option of document.querySelectorAll('#time > option')) {
            option.remove();
        }
        cargarDefault();
        var disIbague = ['Establecimientos', 'Carrera. 5 #40-123 a 40-3, BR. Los Olivos', 'Calle 19 #1a-2 a 1a-78, Avenida Ferrocarril'];
        for(let i = 0; i < disIbague.length; i++){
            const opcion = document.createElement('option');
            opcion.value = disIbague[i];
            opcion.textContent = disIbague[i];
            distributor.appendChild(opcion); // Agrega cada opcion
        }
    }else if(city.value == 'Ibagué' && brand.value == 'Auteco Mobility'){
        for (const option of document.querySelectorAll('#distributor > option')) {
            option.remove();
        }
        for (const option of document.querySelectorAll('#fechas > option')) {
            option.remove();
        }
        for (const option of document.querySelectorAll('#time > option')) {
            option.remove();
        }
        cargarDefault();
        var disIbague = ['Establecimientos', 'Carrera. 5 #40-123 a 40-3, BR. Los Olivos', 'Calle 19 #1a-2 a 1a-78, Avenida Ferrocarril'];
        for(let i = 0; i < disIbague.length; i++){
            const opcion = document.createElement('option');
            opcion.value = disIbague[i];
            opcion.textContent = disIbague[i];
            distributor.appendChild(opcion); // Agrega cada opcion
        }
    }else if(city.value == 'Ibagué' && brand.value == 'Suzuki'){
        for (const option of document.querySelectorAll('#distributor > option')) {
            option.remove();
        }
        for (const option of document.querySelectorAll('#fechas > option')) {
            option.remove();
        }
        for (const option of document.querySelectorAll('#time > option')) {
            option.remove();
        }
        cargarDefault();
        var disIbague = ['Establecimientos', 'Carrera. 5 #40-123 a 40-3, BR. Los Olivos', 'Calle 19 #1a-2 a 1a-78, Avenida Ferrocarril'];
        for(let i = 0; i < disIbague.length; i++){
            const opcion = document.createElement('option');
            opcion.value = disIbague[i];
            opcion.textContent = disIbague[i];
            distributor.appendChild(opcion); // Agrega cada opcion
        }
    }else if(city.value == 'Ibagué' && brand.value == 'Honda'){
        for (const option of document.querySelectorAll('#distributor > option')) {
            option.remove();
        }
        for (const option of document.querySelectorAll('#fechas > option')) {
            option.remove();
        }
        for (const option of document.querySelectorAll('#time > option')) {
            option.remove();
        }
        cargarDefault();
        var disIbague = ['Establecimientos', 'Carrera. 5 #40-123 a 40-3, BR. Los Olivos', 'Calle 19 #1a-2 a 1a-78, Avenida Ferrocarril'];
        for(let i = 0; i < disIbague.length; i++){
            const opcion = document.createElement('option');
            opcion.value = disIbague[i];
            opcion.textContent = disIbague[i];
            distributor.appendChild(opcion); // Agrega cada opcion
        }
    }else if(city.value == 'Ibagué' && brand.value == 'Hero'){
        for (const option of document.querySelectorAll('#distributor > option')) {
            option.remove();
        }
        for (const option of document.querySelectorAll('#fechas > option')) {
            option.remove();
        }
        for (const option of document.querySelectorAll('#time > option')) {
            option.remove();
        }
        cargarDefault();
        var disIbague = ['Establecimientos', 'Carrera. 5 #40-123 a 40-3, BR. Los Olivos', 'Calle 19 #1a-2 a 1a-78, Avenida Ferrocarril'];
        for(let i = 0; i < disIbague.length; i++){
            const opcion = document.createElement('option');
            opcion.value = disIbague[i];
            opcion.textContent = disIbague[i];
            distributor.appendChild(opcion); // Agrega cada opcion
        }
    }else if(city.value == 'Medellín' && brand.value == 'Akt'){
        for (const option of document.querySelectorAll('#distributor > option')) {
            option.remove();
        }
        for (const option of document.querySelectorAll('#fechas > option')) {
            option.remove();
        }
        for (const option of document.querySelectorAll('#time > option')) {
            option.remove();
        }
        cargarDefault();
        var disMedellin = ['Establecimientos', 'Calle 44 #68-2 a 68a-86, BR. Belen', 'Av. 80 #49a-2 a 49a-272, BR. Calasanz'];
        for(let i = 0; i < disMedellin.length; i++){
            const opcion = document.createElement('option');
            opcion.value = disMedellin[i];
            opcion.textContent = disMedellin[i];
            distributor.appendChild(opcion); // Agrega cada opcion
        }
    }else if(city.value == 'Medellín' && brand.value == 'Yamaha'){
        for (const option of document.querySelectorAll('#distributor > option')) {
            option.remove();
        }
        for (const option of document.querySelectorAll('#fechas > option')) {
            option.remove();
        }
        for (const option of document.querySelectorAll('#time > option')) {
            option.remove();
        }
        cargarDefault();
        var disMedellin = ['Establecimientos', 'Calle 44 #68-2 a 68a-86, BR. Belen', 'Av. 80 #49a-2 a 49a-272, BR. Calasanz'];
        for(let i = 0; i < disMedellin.length; i++){
            const opcion = document.createElement('option');
            opcion.value = disMedellin[i];
            opcion.textContent = disMedellin[i];
            distributor.appendChild(opcion); // Agrega cada opcion
        }
    }else if(city.value == 'Medellín' && brand.value == 'Auteco'){
        for (const option of document.querySelectorAll('#distributor > option')) {
            option.remove();
        }
        for (const option of document.querySelectorAll('#fechas > option')) {
            option.remove();
        }
        for (const option of document.querySelectorAll('#time > option')) {
            option.remove();
        }
        cargarDefault();
        var disMedellin = ['Establecimientos', 'Calle 44 #68-2 a 68a-86, BR. Belen', 'Av. 80 #49a-2 a 49a-272, BR. Calasanz'];
        for(let i = 0; i < disMedellin.length; i++){
            const opcion = document.createElement('option');
            opcion.value = disMedellin[i];
            opcion.textContent = disMedellin[i];
            distributor.appendChild(opcion); // Agrega cada opcion
        }
    }else if(city.value == 'Medellín' && brand.value == 'Auteco Mobility'){
        for (const option of document.querySelectorAll('#distributor > option')) {
            option.remove();
        }
        for (const option of document.querySelectorAll('#fechas > option')) {
            option.remove();
        }
        for (const option of document.querySelectorAll('#time > option')) {
            option.remove();
        }
        cargarDefault();
        var disMedellin = ['Establecimientos', 'Calle 44 #68-2 a 68a-86, BR. Belen', 'Av. 80 #49a-2 a 49a-272, BR. Calasanz'];
        for(let i = 0; i < disMedellin.length; i++){
            const opcion = document.createElement('option');
            opcion.value = disMedellin[i];
            opcion.textContent = disMedellin[i];
            distributor.appendChild(opcion); // Agrega cada opcion
        }
    }else if(city.value == 'Medellín' && brand.value == 'Suzuki'){
        for (const option of document.querySelectorAll('#distributor > option')) {
            option.remove();
        }
        for (const option of document.querySelectorAll('#fechas > option')) {
            option.remove();
        }
        for (const option of document.querySelectorAll('#time > option')) {
            option.remove();
        }
        cargarDefault();
        var disMedellin = ['Establecimientos', 'Calle 44 #68-2 a 68a-86, BR. Belen', 'Av. 80 #49a-2 a 49a-272, BR. Calasanz'];
        for(let i = 0; i < disMedellin.length; i++){
            const opcion = document.createElement('option');
            opcion.value = disMedellin[i];
            opcion.textContent = disMedellin[i];
            distributor.appendChild(opcion); // Agrega cada opcion
        }
    }else if(city.value == 'Medellín' && brand.value == 'Honda'){
        for (const option of document.querySelectorAll('#distributor > option')) {
            option.remove();
        }
        for (const option of document.querySelectorAll('#fechas > option')) {
            option.remove();
        }
        for (const option of document.querySelectorAll('#time > option')) {
            option.remove();
        }
        cargarDefault();
        var disMedellin = ['Establecimientos', 'Calle 44 #68-2 a 68a-86, BR. Belen', 'Av. 80 #49a-2 a 49a-272, BR. Calasanz'];
        for(let i = 0; i < disMedellin.length; i++){
            const opcion = document.createElement('option');
            opcion.value = disMedellin[i];
            opcion.textContent = disMedellin[i];
            distributor.appendChild(opcion); // Agrega cada opcion
        }
    }else if(city.value == 'Medellín' && brand.value == 'Hero'){
        for (const option of document.querySelectorAll('#distributor > option')) {
            option.remove();
        }
        for (const option of document.querySelectorAll('#fechas > option')) {
            option.remove();
        }
        for (const option of document.querySelectorAll('#time > option')) {
            option.remove();
        }
        cargarDefault();
        var disMedellin = ['Establecimientos', 'Calle 44 #68-2 a 68a-86, BR. Belen', 'Av. 80 #49a-2 a 49a-272, BR. Calasanz'];
        for(let i = 0; i < disMedellin.length; i++){
            const opcion = document.createElement('option');
            opcion.value = disMedellin[i];
            opcion.textContent = disMedellin[i];
            distributor.appendChild(opcion); // Agrega cada opcion
        }
    }else if(city.value == 'Villavicencion' && brand.value == 'Akt'){
        for (const option of document.querySelectorAll('#distributor > option')) {
            option.remove();
        }
        for (const option of document.querySelectorAll('#fechas > option')) {
            option.remove();
        }
        for (const option of document.querySelectorAll('#time > option')) {
            option.remove();
        }
        cargarDefault();
        var disVillavicencion = ['Establecimientos', 'Carrera. 33 #23-2 a 23-184, BR. San Benito', 'Calle. 10 #12-201 a 12-1, BR. El Estero'];
        for(let i = 0; i < disVillavicencion.length; i++){
            const opcion = document.createElement('option');
            opcion.value = disVillavicencion[i];
            opcion.textContent = disVillavicencion[i];
            distributor.appendChild(opcion); // Agrega cada opcion
        }
    }else if(city.value == 'Villavicencion' && brand.value == 'Yamaha'){
        for (const option of document.querySelectorAll('#distributor > option')) {
            option.remove();
        }
        for (const option of document.querySelectorAll('#fechas > option')) {
            option.remove();
        }
        for (const option of document.querySelectorAll('#time > option')) {
            option.remove();
        }
        cargarDefault();
        var disVillavicencion = ['Establecimientos', 'Carrera. 33 #23-2 a 23-184, BR. San Benito', 'Calle. 10 #12-201 a 12-1, BR. El Estero'];
        for(let i = 0; i < disVillavicencion.length; i++){
            const opcion = document.createElement('option');
            opcion.value = disVillavicencion[i];
            opcion.textContent = disVillavicencion[i];
            distributor.appendChild(opcion); // Agrega cada opcion
        }
    }else if(city.value == 'Villavicencion' && brand.value == 'Auteco'){
        for (const option of document.querySelectorAll('#distributor > option')) {
            option.remove();
        }
        for (const option of document.querySelectorAll('#fechas > option')) {
            option.remove();
        }
        for (const option of document.querySelectorAll('#time > option')) {
            option.remove();
        }
        cargarDefault();
        var disVillavicencion = ['Establecimientos', 'Carrera. 33 #23-2 a 23-184, BR. San Benito', 'Calle. 10 #12-201 a 12-1, BR. El Estero'];
        for(let i = 0; i < disVillavicencion.length; i++){
            const opcion = document.createElement('option');
            opcion.value = disVillavicencion[i];
            opcion.textContent = disVillavicencion[i];
            distributor.appendChild(opcion); // Agrega cada opcion
        }
    }else if(city.value == 'Villavicencion' && brand.value == 'Auteco Mobility'){
        for (const option of document.querySelectorAll('#distributor > option')) {
            option.remove();
        }
        for (const option of document.querySelectorAll('#fechas > option')) {
            option.remove();
        }
        for (const option of document.querySelectorAll('#time > option')) {
            option.remove();
        }
        cargarDefault();
        var disVillavicencion = ['Establecimientos', 'Carrera. 33 #23-2 a 23-184, BR. San Benito', 'Calle. 10 #12-201 a 12-1, BR. El Estero'];
        for(let i = 0; i < disVillavicencion.length; i++){
            const opcion = document.createElement('option');
            opcion.value = disVillavicencion[i];
            opcion.textContent = disVillavicencion[i];
            distributor.appendChild(opcion); // Agrega cada opcion
        }
    }else if(city.value == 'Villavicencion' && brand.value == 'Suzuki'){
        for (const option of document.querySelectorAll('#distributor > option')) {
            option.remove();
        }
        for (const option of document.querySelectorAll('#fechas > option')) {
            option.remove();
        }
        for (const option of document.querySelectorAll('#time > option')) {
            option.remove();
        }
        cargarDefault();
        var disVillavicencion = ['Establecimientos', 'Carrera. 33 #23-2 a 23-184, BR. San Benito', 'Calle. 10 #12-201 a 12-1, BR. El Estero'];
        for(let i = 0; i < disVillavicencion.length; i++){
            const opcion = document.createElement('option');
            opcion.value = disVillavicencion[i];
            opcion.textContent = disVillavicencion[i];
            distributor.appendChild(opcion); // Agrega cada opcion
        }
    }else if(city.value == 'Villavicencion' && brand.value == 'Honda'){
        for (const option of document.querySelectorAll('#distributor > option')) {
            option.remove();
        }
        for (const option of document.querySelectorAll('#fechas > option')) {
            option.remove();
        }
        for (const option of document.querySelectorAll('#time > option')) {
            option.remove();
        }
        cargarDefault();
        var disVillavicencion = ['Establecimientos', 'Carrera. 33 #23-2 a 23-184, BR. San Benito', 'Calle. 10 #12-201 a 12-1, BR. El Estero'];
        for(let i = 0; i < disVillavicencion.length; i++){
            const opcion = document.createElement('option');
            opcion.value = disVillavicencion[i];
            opcion.textContent = disVillavicencion[i];
            distributor.appendChild(opcion); // Agrega cada opcion
        }
    }else if(city.value == 'Villavicencion' && brand.value == 'Hero'){
        for (const option of document.querySelectorAll('#distributor > option')) {
            option.remove();
        }
        for (const option of document.querySelectorAll('#fechas > option')) {
            option.remove();
        }
        for (const option of document.querySelectorAll('#time > option')) {
            option.remove();
        }
        cargarDefault();
        var disVillavicencion = ['Establecimientos', 'Carrera. 33 #23-2 a 23-184, BR. San Benito', 'Calle. 10 #12-201 a 12-1, BR. El Estero'];
        for(let i = 0; i < disVillavicencion.length; i++){
            const opcion = document.createElement('option');
            opcion.value = disVillavicencion[i];
            opcion.textContent = disVillavicencion[i];
            distributor.appendChild(opcion); // Agrega cada opcion
        }
    }
}

function cargarDefault(){
    const opcion = document.createElement('option');
    opcion.value = '';
    opcion.textContent = 'DD/MM/YYYY';
    datee.appendChild(opcion); // Agrega cada opcion
    const opcionTime = document.createElement('option');
    opcionTime.value = '';
    opcionTime.textContent = 'HH:MM';
    time.appendChild(opcionTime); // Agrega cada opcion
}

function distributorValue(){
    hoursMinBd = []
    dayWeek = [];
    dayAll  = [];
    day = [];
    if(distributor.value == 'Calle. 65 #7-2 a 7-98, chapinero' || distributor.value == 'Calle 22 Sur #27-51 a 27-39, BR. Santander' || distributor.value == 'Carrera. 33 #23-2 a 23-184, BR. San Benito'){
        var distributorone  = document.querySelector('#distributor').value;
        var datos = new FormData();
        datos.append('distributor', distributorone);
        var xhr = new XMLHttpRequest();
        xhr.open('POST', 'models/model-quotes.php', true);

        // retornando datos

        xhr.onload = function () {
            if (this.status === 200) {
                var respuesta = JSON.parse(xhr.responseText);
                //si la respuesta es correcta
                if (respuesta.status === '0') {
                    dateAddress();
                }else {
                    for(i in respuesta){
                        hoursMinBd.push(respuesta[i]);
                    }
                    dateAddress();
                }
            }
        }
        // Enviar la peticion
        xhr.send(datos);
    }
}


function dateAddress(){
    var hoy  = new Date();
    var ddWeek  = hoy.getUTCDay();
    var dd   = hoy.getDate();
    var mm   = hoy.getMonth()+1;
    var yyyy = hoy.getFullYear();
    day.push(dd)
    day.push(mm)
    day.push(yyyy)
    dayWeek.push(ddWeek)
    fechasDisponibles();
}

function fechasDisponibles(){
    if(dayWeek == 1){
        for(var i = 0; i < 5; i++){
            var p = day[0]+'-'+day[1]+'-'+day[2];
            day[0] += 1
            dayAll.push(p);
        }
        cargarFechas();
    }else if(dayWeek == 2){
        for(var i = 0; i < 4; i++){
            var p = day[0]+'-'+day[1]+'-'+day[2];
            day[0] += 1
            dayAll.push(p);
        }
        dayRest();
        cargarFechas();
    }else if(dayWeek == 3){
        for(var i = 0; i < 3; i++){
            var p = day[0]+'-'+day[1]+'-'+day[2];
            day[0] += 1
            dayAll.push(p);
        }
        dayRest();
        cargarFechas();
    }else if(dayWeek == 4){
        for(var i = 0; i < 2; i++){
            var p = day[0]+'-'+day[1]+'-'+day[2];
            day[0] += 1
            dayAll.push(p);
        }
        dayRest();
        cargarFechas();
    }else if(dayWeek == 5){
        for(var i = 0; i < 1; i++){
            var p = day[0]+'-'+day[1]+'-'+day[2];
            day[0] += 1
            dayAll.push(p);
        }
        dayRest();
        cargarFechas();
    }
}

function dayRest(){
    var dayZero =  hoursMinBd.filter(val => dayAll[0].includes(val));
    var dayOne =  hoursMinBd.filter(val => dayAll[1].includes(val));
    if(dayZero.length == 5){
        dayAll =  dayAll.filter(val => !dayZero.includes(val));
    }if(dayZero.length < 5) {
        console.log('menor que 5');
    }
}

function cargarFechas(){
    for(let j = 0; j < dayAll.length; j++){
        const opcion = document.createElement('option');
        opcion.value = dayAll[j];
        opcion.textContent = dayAll[j];
        datee.appendChild(opcion); // Agrega cada opcion
    }
}

function dateValue(){
    if(datee.value){
        dateHours();
    }
}

function dateHours(){
    for (const option of document.querySelectorAll('#time > option')) {
        option.remove();
    }
    var hours = 18;
    var time = [];
    for(let i = 8; i < hours; i++){
        time.push(i);
    }; 
    time.forEach(function(elemento) {
       var yy = elemento +':'+ 30 +':'+ 0 + 0
       hoursMin.push(yy);
    });
    hoursMin =  hoursMin.filter(val => !hoursMinBd.includes(val));
    for(let h = 0; h < hoursMin.length; h++){
        const opcion = document.createElement('option');
        opcion.value = hoursMin[h];
        opcion.textContent = hoursMin[h];
        timeHours.appendChild(opcion); // Agrega cada opcion
    }
}


function validarDatos(e) {
    e.preventDefault();
    var names           = document.querySelector('#names').value,
        surnames        = document.querySelector('#surnames').value, 
        plate           = document.querySelector('#plate').value, 
        brand           = document.querySelector('#brand').value,
        city            = document.querySelector('#city').value,
        distributor     = document.querySelector('#distributor').value,
        date            = document.querySelector('#fechas').value,
        timeHours       = document.querySelector('#time').value;
        userId          = localStorage.getItem('userId');

    if (names === '' || surnames === '' || plate === '' || brand === '' || city === '' || distributor === 'Establecimiento' || date === '' || timeHours === 'HH:MM') {
        // la validacion fallo
        document.querySelector('#error').innerHTML = `<h5>Llena todos los campos</h5>`;
        setTimeout(() => {
            document.querySelector('#error').innerHTML = ``;
        }, 3000);
        // validarCampo();
    } else {
        var datos = new FormData();
        datos.append('names', names);
        datos.append('surnames', surnames);
        datos.append('documentNumber', dateAll[0]);
        datos.append('email', dateAll[1]);
        datos.append('surnames', surnames);
        datos.append('plate', plate);
        datos.append('brand', brand);
        datos.append('city', city);
        datos.append('distributor', distributor);
        datos.append('date', date);
        datos.append('time', timeHours);
        datos.append('userId', userId);
        // crear el llamado a ajax

        var xhr = new XMLHttpRequest();
        xhr.open('POST', 'models/model-quotes.php', true);

        // retornando datos

        xhr.onload = function () {
            if (this.status === 200) {
                var respuesta = JSON.parse(xhr.responseText);
                //si la respuesta es correcta
                console.log(respuesta);

                if (respuesta.status === '1') {
                    swal({
                        title: 'Cita Agendada',
                        text: 'La cita se agendo correctamente por favor revisa tu correo.',
                        type: 'success',
                        background: '#000000'
                    });  
                    //Reiniciar el formulario
                    crear.reset();
                }else {
                    swal({
                        title: 'La cita con la placa' + ' ' + plate + ' ' + 'ya existe',
                        text: 'Agenda una nueva cita con una placa diferente o verifica bien tu placa.',
                        type: 'error',
                        background: '#000000'
                    });
                }
            }
        }
        // Enviar la peticion
        xhr.send(datos);

    }
}

function validarCampo() {
    // Se valida la longitud del texto y que no este vacio
    validarLongitud(this);
} 

// Verifica la longitud del texto en los campos
function validarLongitud(campo) {
    if(campo.value.length > 0 ) {
         campo.style.border = '';
         campo.classList.remove('error');
    } else {
         campo.style.border = '1px solid red';
         campo.classList.add('error');
    }
}
