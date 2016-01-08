/**
 * Created by Sunrin on 2015. 12. 28..
 */
var a
function initMap(){
    map = new google.maps.Map(document.getElementById('map'),{
        center: {lat:151.207,lng: -33.867},
        zoom: 6,
        mapTypeControl: false,
        zoomControl: false,
        scaleControl: false,
        minZoom: 6,
        scrollwheel: false,
        maxZoom: 6,
        draggable: false
    });
    marker = new google.maps.Marker({
        position: {lat:37.53, lng: 126.95},
        map: map,
        title: 'Current Place'
    });
    pos = {lat:151.207,lng: -33.867};
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
            pos = {
                lat: position.coords.latitude,
                lng: position.coords.longitude
            };
            marker.setPosition(pos);
            map.setCenter(pos);
        }, function() {
            handleLocationError(true, infoWindow, map.getCenter());
        });
    } else {
        handleLocationError(false, infoWindow, map.getCenter());
    }
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
    var bounds = {
        north: 40.20519700699742,
        south: 37.467608955693408,
        east: 136.33811576250002,
        west: 130.93284232500002
    };
    imageMap = new google.maps.GroundOverlay(
        '/images/dokdo.png',
        bounds);
    imageMap.setMap(map);
    a = imageMap
    map.setOptions({styles: styles});
    if(document.getElementById('autocomplete')){
        initAutocomplete();
        map.addListener('bounds_changed',function(){
            map.setCenter(pos);
        });
    }
    else{
        map.minZoom=2;
        map.draggable=true
        map.setZoom(2);
        marker.setMap(null);
    }
}

function handleLocationError(browserHasGeolocation, infoWindow, pos) {
    infoWindow.setPosition({lat:37.53, lng: 126.95});
    map.setZoom(6);
    map.setCenter({lat:37.53, lng: 126.95});
}
