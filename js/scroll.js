// $("body").css("overflow", "auto");

$(window).on('load', function () {
    $("#nav").css("background", "#000000");
 })

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