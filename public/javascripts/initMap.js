/**
 * Created by Sunrin on 2015. 12. 28..
 */
function initMap(){
    map = new google.maps.Map(document.getElementById('map'),{
        center: {lat:151.207,lng: -33.867},
        zoom: 6,
        mapTypeControl: false,
        zoomControl: false,
        scaleControl: false,
        minZoom:6,
        maxZoom:6
    });
    var infoWindow = new google.maps.InfoWindow({map: map});
    var marker = new google.maps.Marker({
        position: {lat:37.53, lng: 126.95},
        map: map,
        title: 'Current Place'
    });
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
            var pos = {
                lat: position.coords.latitude,
                lng: position.coords.longitude
            };
            marker.setPosition(pos);
            infoWindow.setPosition(pos);
            infoWindow.setContent('현재 위치');
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
                { "saturation": -100 },
                { "lightness": 75 },
                { "gamma": 0.01 },
                { "invert_lightness": true },
                { "visibility": "on" }
            ]
        }
    ];

    map.setOptions({styles: styles});
    initAutocomplete();
}

function handleLocationError(browserHasGeolocation, infoWindow, pos) {
    infoWindow.setPosition({lat:37.53, lng: 126.95});
    map.setZoom(6);
    map.setCenter({lat:37.53, lng: 126.95});
    infoWindow.setContent(browserHasGeolocation ?
        '위치를 불러올 수 없습니다' :
        '위치정보가 지원되지 않는 브라우저입니다');
}
