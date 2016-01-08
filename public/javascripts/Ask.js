/**
 * Created by Sunrin on 2016. 1. 8..
 */

$(document).ready(function(){
    $('ul.tabs').tabs();
    $('select').material_select();
    $('video').mouseenter(function(){
        document.getElementsByTagName("video")[0].play();
    })
    $('video').mouseleave(function(){
        document.getElementsByTagName("video")[0].pause();
    })
});