$(function () {
    $('#BtnHelmyCM').on('click', function () {
       $("#back").removeClass("backWe");
       $("#back").removeClass("backn");
       $("#back").addClass("backm");
       $("#back").css("overflow-y", "scroll");
       $('#hom').css("display", "none");
       $('#log').css("display", "block");
       $('#line').css("display", "none");
       $("#dash").load('helmyM');
       return;
    });
});