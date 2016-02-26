/**
 * Created by Sunrin on 2016. 1. 15..
 */
initMap = function(){
    map = new google.maps.Map(document.getElementById('profileMap'),{
        center: {lat:-33.867, lng: 151},
        zoom: 1,
        mapTypeControl: false,
        zoomControl: false,
        scaleControl: false,
        minZoom: 1,
        scrollwheel: false,
        maxZoom: 1
    });
    map.setZoom(3);
    map.setCenter({lat:15, lng: 150});
};

/** 나중에 지워야 하는 임시 코드*/
$(document).ready(function(){
    $('video').mouseenter(function(){
            document.getElementsByTagName("video")[0].play();
    });
    $('video').mouseleave(function(){
            document.getElementsByTagName("video")[0].pause();
    });
});
/** 여기까지 */