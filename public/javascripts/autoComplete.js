/**
 * Created by Sunrin on 2015. 12. 28..
 */
var placeSearch, autocomplete;
function initAutocomplete() {
    // Create the autocomplete object, restricting the search to geographical
    // location types.
    autocomplete = new google.maps.places.Autocomplete(
        /** @type {!HTMLInputElement} */(document.getElementById('autocomplete')),
        {types: ['geocode']});

    // When the user selects an address from the dropdown, populate the address
    // fields in the form.
    autocomplete.addListener('place_changed', fillInAddress);
}
function fillInAddress() {
    // Get the place details from the autocomplete object.
    var place = autocomplete.getPlace();
    var str = place.address_components[place.address_components.length-1].long_name;
    for (var i= place.address_components.length-2; i>=0; i--){
        str= str+' '+place.address_components[i].long_name;
    }
    console.log(place);
    pos=place.geometry.location;
    map.setCenter({lat: pos.lat(),lng: pos.lng()});
    marker.setPosition({lat: pos.lat(),lng: pos.lng()});
    str+document.getElementById('autocomplete').value;
    document.getElementById('realValue').value=str;
    $('#realValue').attr('lat',pos.lat);
    $('#realValue').attr('lng',pos.lng);
    if($('.submitBubble')){
        $('.submitBubble').show();
    }
}
function geolocate() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
            var geolocation = {
                lat: position.coords.latitude,
                lng: position.coords.longitude
            };
            var circle = new google.maps.Circle({
                center: geolocation,
                radius: position.coords.accuracy
            });
            try {
                autocomplete.setBounds(circle.getBounds());
            }catch(e){
                initAutocomplete();
                alert('지도 로딩에 실패했습니다.')
                location.reload();
            }
        });
    }
}