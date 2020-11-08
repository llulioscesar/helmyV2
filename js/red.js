$('html,body').css('overflow', 'auto');
var busq = [];
var service;
var infowindow;
var nombresGlobal   = ["HelmyBogotá", "HelmyBarranquilla", "HelmyCali", "HelmyIbagué", "HelmyMedellín", "HelmyVillavicencion"];
var puntosDireccion = ["Calle 13 #32-76, Bogotá, Colombia", "Carrera 38A, Barranquilla, Colombia", "Carrera 26 #34, Cali, Valle del Cauca, Colombia", "Carrera 30 Sur #13 - 35, Ibagué, Colombia", "Carrera 38 #54 - 97, Medellín, Colombia", "Calle 15 Av Maracos, Villavicencio, Colombia"];
var puntosTelefono  = ["+57 330-450-6590", "+57 310-469-4309", "+57 340-254-5421", "+57 300-654-2435", "+57 315-435-6563", "+57 312-546-9812"]
var dist = ['hola Bogotá', 'HOLA Barranquilla']
var buscar = document.querySelector('#buscar');
var redtext = document.querySelector('#redText');
var city   = document.querySelector('#city');
const spinner = document.querySelector('#cargando');
const dat = document.querySelector('#dat');
const datt = document.querySelector('#datt');
// const mapGloball = document.querySelector('#map');

eventListeners();
function eventListeners(){
    buscar.addEventListener('click', cargarMap);
}

mapGlobal();
function mapGlobal(){
    //Crear resultado
    const div = document.createElement('div');
    div.classList.add('datGlobal');
    // // Mostrar el spinner
    const spinner = document.querySelector('#cargando');
    spinner.style.display = 'block';
    dat.style.display = 'none';

    setTimeout(() => {
        spinner.style.display = 'none'; // Se borra el spinner 
        datt.appendChild(div);
        initMap();
    }, 2000)
}


function initMap() {
    var locations = [
        ['Bogota', 4.653333, -74.083652],
        ['Barranquilla', 10.979967, -74.801308],
        ['Cali', 3.451792, -76.532494],
        ['Ibague', 4.44466, -75.243001],
        ['Medellin', 6.244338, -75.573553],
        ['Villavicencion', 4.131511, -73.620667]
    ];
      
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 6,
        mapTypeControl: false,
        streetViewControl: false,  
        center: new google.maps.LatLng(7.4754577,-74.8704292),
        mapTypeId: google.maps.MapTypeId.ROADMAP
    });
      
    var marker, i;

    var infoWindow = new google.maps.InfoWindow();
    
    function pinSymbol(color) {
        return {
          path: 'M 0,0 C -2,-20 -10,-22 -10,-30 A 10,10 0 1,1 10,-30 C 10,-22 2,-20 0,0 z M -2,-30 a 2,2 0 1,1 4,0 2,2 0 1,1 -4,0',
          fillColor: color,
          fillOpacity: 1,
          strokeColor: '#000',
          strokeWeight: 2,
          scale: 1,
        };
    }

    for (i = 0; i < locations.length; i++) {  
      marker = new google.maps.Marker({
          position: new google.maps.LatLng(locations[i][1], locations[i][2]),
          icon: pinSymbol("#0090ff"),
          animation: google.maps.Animation.DROP,
          map: map
      });
    
      google.maps.event.addListener(marker, 'click', (function(marker, i) {
        return function() {
            infoWindow.setContent(locations[i][0]);
            var city = infoWindow.getContent(marker);
            styleSelect(city);
        }
      })(marker, i));
    }
    datGlobal();
}

function styleSelect(city){
   
}

function cargarMap(){
    busq = [];
    hide();
 }
 
 function hide(){
     let t = redtext.value + ' ' + city.value;
     busq.push(t);
     let encuentra = false;
     for(let i = 0; i < busq.length; i++){
         for(let j = 0; j < dist.length; j++){
             if(busq[i] == dist[j]){
                 encuentra = true;
                 break;
             }
         }
         if(!encuentra){
            if(busq[0] === " Bogotá" || busq[0] === " Barranquilla" || busq[0] === " Cali" || busq[0] === " Ibagué" || busq[0] === " Medellín" || busq[0] === " Villavicencion"){
                cargarMapCity();
            }else if(busq[0] === " Colombia"){
                initMap();
            }else{
                console.log('no lo es');
            }
             break;
         }
     }
     if(encuentra){
         console.log(busq);
         console.log(dist);
         alert("Si son iguales");
     }
 }
 
 function cargarMapCity(){
    spinner.style.display = 'block';
     mapInte();
     //Crear resultado
     const div = document.createElement('div');
     div.classList.add('datGlobal');
 
     setTimeout(() => {
         datt.appendChild(div);
         dateM();
     }, 1500)
 }

function mapInte(){
    var borrarDiv = document.querySelector('#datt');
    var borrarDivv = document.querySelector('.datGlobal');
    var gar = borrarDiv.removeChild(borrarDivv);
}

function dateM(){
    if(busq[0] === " Bogotá"){
        initMapAddressBogota();
    }else if(busq[0] === " Barranquilla"){
        initMapAddressBarranquilla()
    }else if(busq[0] === " Cali"){
        initMapAddressCali()
    }else if(busq[0] === " Ibagué"){
        initMapAddressIbagué()
    }else if(busq[0] === " Medellín"){
        initMapAddressMedellín()
    }else if(busq[0] === " Villavicencion"){
        initMapAddressVillavicencion()
    }
}

function initMapAddressBogota() {
    var location = [
        ['Bogota', 4.61648,-74.0941347],
        ['Bogota', 4.625826,-74.1602225]
    ];
      
    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 14,
      mapTypeControl: false,
      streetViewControl: false,  
      center: new google.maps.LatLng(7.4754577,-74.8704292),
      mapTypeId: google.maps.MapTypeId.ROADMAP
    });
      
    var marker, i;
    
    function pinSymbol(color) {
        return {
          path: 'M 0,0 C -2,-20 -10,-22 -10,-30 A 10,10 0 1,1 10,-30 C 10,-22 2,-20 0,0 z M -2,-30 a 2,2 0 1,1 4,0 2,2 0 1,1 -4,0',
          fillColor: color,
          fillOpacity: 1,
          strokeColor: '#000',
          strokeWeight: 2,
          scale: 1,
        };
    }

    for (i = 0; i < location.length; i++) {  
      marker = new google.maps.Marker({
          position: new google.maps.LatLng(location[i][1], location[i][2]),
          icon: pinSymbol("#0090ff"),
          animation: google.maps.Animation.DROP,
          map: map
      });
      centrarA(marker, map);
      google.maps.event.addListener(marker, 'click', (function(marker, i) {
          return function() {
            infowindow.setContent(location[i][0]);
            infowindow.open(map, marker);
          }
      })(marker, i));
    }
    setTimeout(() => {
        redCity();
    }, 500)
}

function initMapAddressBarranquilla() {
    var location = [
        ['Barranquilla', 10.9869175,-74.81690],
        ['Barranquilla', 10.969028,-74.807264]
    ];
      
    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 14,
      mapTypeControl: false,
      streetViewControl: false,  
      center: new google.maps.LatLng(7.4754577,-74.8704292),
      mapTypeId: google.maps.MapTypeId.ROADMAP
    });
      
    var marker, i;
    
    function pinSymbol(color) {
        return {
          path: 'M 0,0 C -2,-20 -10,-22 -10,-30 A 10,10 0 1,1 10,-30 C 10,-22 2,-20 0,0 z M -2,-30 a 2,2 0 1,1 4,0 2,2 0 1,1 -4,0',
          fillColor: color,
          fillOpacity: 1,
          strokeColor: '#000',
          strokeWeight: 2,
          scale: 1,
        };
    }

    for (i = 0; i < location.length; i++) {  
      marker = new google.maps.Marker({
          position: new google.maps.LatLng(location[i][1], location[i][2]),
          icon: pinSymbol("#0090ff"),
          animation: google.maps.Animation.DROP,
          map: map
      });
      centrarB(marker, map);
      google.maps.event.addListener(marker, 'click', (function(marker, i) {
          return function() {
            infowindow.setContent(location[i][0]);
            infowindow.open(map, marker);
          }
      })(marker, i));
    }
    setTimeout(() => {
        redCity();
    }, 500)
}

function initMapAddressCali() {
    var location = [
        ['Cali', 3.4348589,-76.5149688],
        ['Cali', 3.442782,-76.5283002]
    ];
      
    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 14,
      mapTypeControl: false,
      streetViewControl: false,  
      center: new google.maps.LatLng(7.4754577,-74.8704292),
      mapTypeId: google.maps.MapTypeId.ROADMAP
    });
      
    var marker, i;
    
    function pinSymbol(color) {
        return {
          path: 'M 0,0 C -2,-20 -10,-22 -10,-30 A 10,10 0 1,1 10,-30 C 10,-22 2,-20 0,0 z M -2,-30 a 2,2 0 1,1 4,0 2,2 0 1,1 -4,0',
          fillColor: color,
          fillOpacity: 1,
          strokeColor: '#000',
          strokeWeight: 2,
          scale: 1,
        };
    }

    for (i = 0; i < location.length; i++) {  
      marker = new google.maps.Marker({
          position: new google.maps.LatLng(location[i][1], location[i][2]),
          icon: pinSymbol("#0090ff"),
          animation: google.maps.Animation.DROP,
          map: map
      });
      centrarC(marker, map);
      google.maps.event.addListener(marker, 'click', (function(marker, i) {
          return function() {
            infowindow.setContent(location[i][0]);
            infowindow.open(map, marker);
          }
      })(marker, i));
    }
    setTimeout(() => {
        redCity();
    }, 500)
}

function initMapAddressIbagué() {
    var location = [
        ['Ibagué', 4.4414496,-75.2378313],
        ['Ibagué', 4.442675,-75.226094]
    ];
      
    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 14,
      mapTypeControl: false,
      streetViewControl: false,  
      center: new google.maps.LatLng(7.4754577,-74.8704292),
      mapTypeId: google.maps.MapTypeId.ROADMAP
    });
      
    var marker, i;
    
    function pinSymbol(color) {
        return {
          path: 'M 0,0 C -2,-20 -10,-22 -10,-30 A 10,10 0 1,1 10,-30 C 10,-22 2,-20 0,0 z M -2,-30 a 2,2 0 1,1 4,0 2,2 0 1,1 -4,0',
          fillColor: color,
          fillOpacity: 1,
          strokeColor: '#000',
          strokeWeight: 2,
          scale: 1,
        };
    }

    for (i = 0; i < location.length; i++) {  
      marker = new google.maps.Marker({
          position: new google.maps.LatLng(location[i][1], location[i][2]),
          icon: pinSymbol("#0090ff"),
          animation: google.maps.Animation.DROP,
          map: map
      });
      centrarC(marker, map);
      google.maps.event.addListener(marker, 'click', (function(marker, i) {
          return function() {
            infowindow.setContent(location[i][0]);
            infowindow.open(map, marker);
          }
      })(marker, i));
    }
    setTimeout(() => {
        redCity();
    }, 500)
}

function initMapAddressMedellín() {
    var location = [
        ['Medellín', 6.2481651,-75.5592983],
        ['Medellín', 6.2497033,-75.5687505]
    ];
      
    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 14,
      mapTypeControl: false,
      streetViewControl: false,  
      center: new google.maps.LatLng(7.4754577,-74.8704292),
      mapTypeId: google.maps.MapTypeId.ROADMAP
    });
      
    var marker, i;
    
    function pinSymbol(color) {
        return {
          path: 'M 0,0 C -2,-20 -10,-22 -10,-30 A 10,10 0 1,1 10,-30 C 10,-22 2,-20 0,0 z M -2,-30 a 2,2 0 1,1 4,0 2,2 0 1,1 -4,0',
          fillColor: color,
          fillOpacity: 1,
          strokeColor: '#000',
          strokeWeight: 2,
          scale: 1,
        };
    }

    for (i = 0; i < location.length; i++) {  
      marker = new google.maps.Marker({
          position: new google.maps.LatLng(location[i][1], location[i][2]),
          icon: pinSymbol("#0090ff"),
          animation: google.maps.Animation.DROP,
          map: map
      });
      centrarC(marker, map);
      google.maps.event.addListener(marker, 'click', (function(marker, i) {
          return function() {
            infowindow.setContent(location[i][0]);
            infowindow.open(map, marker);
          }
      })(marker, i));
    }
    setTimeout(() => {
        redCity();
    }, 500)
}

function initMapAddressVillavicencion() {
    var location = [
        ['Villavicencion', 4.1350482,-73.6169499],
        ['Villavicencion', 4.1293203,-73.6243342]
    ];
      
    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 14,
      mapTypeControl: false,
      streetViewControl: false,  
      center: new google.maps.LatLng(7.4754577,-74.8704292),
      mapTypeId: google.maps.MapTypeId.ROADMAP
    });
      
    var marker, i;
    
    function pinSymbol(color) {
        return {
          path: 'M 0,0 C -2,-20 -10,-22 -10,-30 A 10,10 0 1,1 10,-30 C 10,-22 2,-20 0,0 z M -2,-30 a 2,2 0 1,1 4,0 2,2 0 1,1 -4,0',
          fillColor: color,
          fillOpacity: 1,
          strokeColor: '#000',
          strokeWeight: 2,
          scale: 1,
        };
    }

    for (i = 0; i < location.length; i++) {  
      marker = new google.maps.Marker({
          position: new google.maps.LatLng(location[i][1], location[i][2]),
          icon: pinSymbol("#0090ff"),
          animation: google.maps.Animation.DROP,
          map: map
      });
      centrarC(marker, map);
      google.maps.event.addListener(marker, 'click', (function(marker, i) {
          return function() {
            infowindow.setContent(location[i][0]);
            infowindow.open(map, marker);
          }
      })(marker, i));
    }
    setTimeout(() => {
        redCity();
    }, 500)
}

function centrarA(marker, map){
    map.setZoom(12);
    map.setCenter(marker.getPosition());
    spinner.style.display = 'none';
}

function centrarB(marker, map){
    map.setZoom(13);
    map.setCenter(marker.getPosition());
    spinner.style.display = 'none';
}

function centrarC(marker, map){
    map.setZoom(15);
    map.setCenter(marker.getPosition());
    spinner.style.display = 'none';
}

// function centrarM(marker, map){
//     map.setZoom(1);
//     map.setCenter(marker.getPosition());
//     spinner.style.display = 'none';
// }

function datGlobal(){
    dat.style.display = 'block';
    var divData = document.querySelector('.datGlobal')
    for(i in nombresGlobal){
        divData.innerHTML += `<ul class="datGlobalMaps"><li><h3>${nombresGlobal[i]}</h3>${'<br>'}<h5>${puntosDireccion[i]}</h5>${'<br>'}<h4>${puntosTelefono[i]}</h4></li></ul>`;
    };
};

function redCity(){
    dat.style.display = 'block';
    var divData = document.querySelector('.datGlobal')
    if(busq[0] === " Bogotá"){
            divData.innerHTML += `<ul class="datGlobalMaps"><li><h3>${nombresGlobal[0]}</h3>${'<br>'}<h5>${puntosDireccion[0]}</h5>${'<br>'}<h4>${puntosTelefono[0]}</h4></li></ul>`;
    }else if(busq[0] === " Barranquilla"){
        divData.innerHTML += `<ul class="datGlobalMaps"><li><h3>${nombresGlobal[1]}</h3>${'<br>'}<h5>${puntosDireccion[1]}</h5>${'<br>'}<h4>${puntosTelefono[1]}</h4></li></ul>`;
    }else if(busq[0] === " Cali"){
        divData.innerHTML += `<ul class="datGlobalMaps"><li><h3>${nombresGlobal[2]}</h3>${'<br>'}<h5>${puntosDireccion[2]}</h5>${'<br>'}<h4>${puntosTelefono[2]}</h4></li></ul>`;
    }else if(busq[0] === " Ibagué"){
        divData.innerHTML += `<ul class="datGlobalMaps"><li><h3>${nombresGlobal[3]}</h3>${'<br>'}<h5>${puntosDireccion[3]}</h5>${'<br>'}<h4>${puntosTelefono[3]}</h4></li></ul>`;
    }else if(busq[0] === " Medellín"){
        divData.innerHTML += `<ul class="datGlobalMaps"><li><h3>${nombresGlobal[4]}</h3>${'<br>'}<h5>${puntosDireccion[4]}</h5>${'<br>'}<h4>${puntosTelefono[4]}</h4></li></ul>`;
    }else if(busq[0] === " Villavicencion"){
        divData.innerHTML += `<ul class="datGlobalMaps"><li><h3>${nombresGlobal[5]}</h3>${'<br>'}<h5>${puntosDireccion[5]}</h5>${'<br>'}<h4>${puntosTelefono[5]}</h4></li></ul>`;
    }
};