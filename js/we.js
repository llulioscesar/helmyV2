$(function () {
    $('#BtnProductos').on('click', function () {
       $("#back").removeClass("backWe");
       $("#back").addClass("backn");
       $("#back").css("overflow-y", "scroll");
       $('#hom').css("display", "none");
       $('#log').css("display", "block");
       $('#line').css("display", "none");
       $("#dash").load('products');
       return;
    });
});