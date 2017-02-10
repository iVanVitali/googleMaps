/**
 * Created by webcoder on 7/2/17.
 */
$(function() {
    "use strict";

    // Declaramos la variable global para contener el objeto de google map
    var map;

    function loadMap() {

        var mapOptions = {
            zoom: 11,
            center: new google.maps.LatLng(-34.6084738,-58.38041780000003)
        };

        var mapId = document.getElementById('map');

        map = new google.maps.Map(mapId, mapOptions);
    }


    google.maps.event.addDomListener(window, 'load', loadMap());

});
