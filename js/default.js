$(window).scroll(function () {
   var scroll = $(window).scrollTop();
   if (scroll > 80) {
      $("#nav").addClass("cabeceraOscura");
   } else {
      $("#nav").removeClass("cabeceraOscura");
   }
});

$(window).on('load', function () {
   var URLactual = jQuery(location).attr('href');
   if (URLactual === 'http://localhost/project/newPassword') {
      $("#dash").load('index');
   } else {
      $("#dash").load('index');
   }
})

$(window).on('load', function () {
   $("#back").removeClass("backn");
   $("#back").removeClass("backWe");
   $('#hom').css("display", "block");
   $('#log').css("display", "none");
   $("#dash").load('index');
})

$(function () {
   $('#homRe').on('click', function () {
      $('#log').css("display", "none");
      $("#dash").load('index');
      $("#main li").removeClass("hov");
      return;
   });
});

$(function () {
   $('#logRe').on('click', function () {
      $("#back").removeClass("backn");
      $("#back").removeClass("backWe");
      $("#back").css("overflow-y", "hidden");
      $('#hom').css("display", "block");
      $('#log').css("display", "none");
      $('#line').css("display", "block");
      $("#dash").load('index');
      $("#main li").removeClass("hov");
      return;
   });
});

$(function () {
   $('#loginRe').on('click', function () {
      $("#back").removeClass("backn");
      $('#hom').css("display", "none");
      $('#log').css("display", "block");
      $('#line').css("display", "none");
      $("#dash").load('login');
      return;
   });
});

$(function () {
   $('#appRe').on('click', function () {
      $("#back").removeClass("backn");
      $("#back").removeClass("backWe");
      $('#hom').css("display", "none");
      $('#log').css("display", "block");
      $('#line').css("display", "none");
      $("#dash").load('app');
      return;
   });
});

$(function () {
   $('#productsRe').on('click', function () {
      $("#back").removeClass("backWe");
      $("#back").addClass("backn");
      $('#hom').css("display", "none");
      $('#log').css("display", "block");
      $('#line').css("display", "none");
      $("#dash").load('products');
      return;
   });
});

$(function () {
   $('#redDistriRe').on('click', function () {
      $("#back").removeClass("backWe");
      $("#back").removeClass("backn");
      $('#hom').css("display", "none");
      $('#log').css("display", "block");
      $('#line').css("display", "none");
      $("#dash").load('red');
      return;
   });
});

// $(function () {
//    $('#vulDistriRe').on('click', function () {
//       $("#dash").load('vuelvete');
//       return;
//    });
// });

$(function () {
   $('#weRe').on('click', function () {
      $("#back").removeClass("backn");
      $("#back").addClass("backWe");
      $("#back").css("overflow-y", "scroll");
      $('#hom').css("display", "none");
      $('#log').css("display", "block");
      $('#line').css("display", "none");
      $("#dash").load('we');
      return;
   });
});

$(function () {
   $('#contactRe').on('click', function () {
      $("#back").removeClass("backWe");
      $("#back").removeClass("backn");
      $('#hom').css("display", "none");
      $('#log').css("display", "block");
      $('#line').css("display", "none");
      $("#dash").load('contact');
      return;
   });
});

$(function () {
   $("#main li").click(function () {
      // quitar .seleccionado a todos (por si hay alguno)
      $("#main li").removeClass("hov");
      // agregar seleccionado a "este" elemento.
      $(this).addClass("hov");
   });
});

$(function () {
   $("#main li ul li").click(function () {
      // quitar .seleccionado a todos (por si hay alguno)
      $("#main li ul li").removeClass("hov");
      // agregar seleccionado a "este" elemento.
      $(this).addClass("hov");
   });
});