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