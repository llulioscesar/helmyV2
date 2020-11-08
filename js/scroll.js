$('html,body').css('overflow', 'auto');

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