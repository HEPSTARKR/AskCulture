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
        maxZoom: 1,
        draggable: false
    });
    var styles = [
        {
            "elementType": "geometry.fill",
            "stylers": [
                { "weight": 0.1 },
                { "saturation": -80 },
                { "lightness": 75 },
                { "gamma": 0.01 },
                { "invert_lightness": true },
                { "visibility": "on" }
            ]
        }
    ];
    map.setZoom(3);
    map.setCenter({lat:15, lng: 150});
    map.setOptions({styles: styles});
};