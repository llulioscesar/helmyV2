$(window).scroll(function() {        
    var scroll = $(window).scrollTop();    
    if (scroll > 80) {
       $("#nav").addClass("cabeceraOscura");    
    }else{
       $("#nav").removeClass("cabeceraOscura");
    }
});

$(window).on('load', function(){
   var URLactual = jQuery(location).attr('href');
   if(URLactual === 'http://localhost/project/newPassword'){
      $("#dash").load('index');
   }else {
      $("#dash").load('index');
   }
})

$(window).on('load', function(){
   $("#dash").load('index');
})

$(function() {
   $('#logRe').on('click', function() {
       $("#dash").load('index');
       $("#main li").removeClass("hov");
       return;
   });
});

$(function() {
   $('#loginRe').on('click', function() {
       $("#dash").load('login');
       return;
   });
});

$(function() {
   $('#appRe').on('click', function() {
       $("#dash").load('app');
       return;
   });
});

$(function() {
   $('#redDistriRe').on('click', function() {
       $("#dash").load('red');
       return;
   });
});

$(function() {
   $('#vulDistriRe').on('click', function() {
       $("#dash").load('vuelvete');
       return;
   });
});

$(function() {
   $('#helmyCRe').on('click', function() {
       $("#dash").load('helmyC');
       return;
   });
});

$(function() {
   $('#helmyMRe').on('click', function() {
       $("#dash").load('helmyM');
       return;
   });
});

$(function() {
   $('#helmyCMRe').on('click', function() {
       $("#dash").load('helmyC+M');
       return;
   });
});

$(function() {
   $('#nosotrosRe').on('click', function() {
       $("#dash").load('nosotros');
       return;
   });
});

$(function() {
   $('#contactRe').on('click', function() {
       $("#dash").load('contact');
       return;
   });
});

$(function() {
   $("#main li").click(function() {
     // quitar .seleccionado a todos (por si hay alguno)
     $("#main li").removeClass("hov");
     // agregar seleccionado a "este" elemento.
     $(this).addClass("hov");
   });
});

$(function() {
   $("#main li ul li").click(function() {
     // quitar .seleccionado a todos (por si hay alguno)
     $("#main li ul li").removeClass("hov");
     // agregar seleccionado a "este" elemento.
     $(this).addClass("hov");
   });
});

