/**
 * Created by Sunrin on 2016. 1. 5..
 */
$(document).ready(function() {
    $('select').material_select();
    $('.searchInputBox i').hide();
    $('.searchInputBox input').focus(function(){
       $('.searchInputBox i').fadeIn()
    });
    $('.searchInputBox input').blur(function(){
        $('.searchInputBox i').fadeOut()
    });
    $('.searchNav').hide();
});
