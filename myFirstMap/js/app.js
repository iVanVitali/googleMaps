/**
 * Created by webcoder on 7/2/17.
 */
$(function() {
    "use strict";

    // Declaramos la variable global para contener el objeto de google map
    var map;

    function loadMap() {

        // Establecer las opciones del mapa
        var mapOptions = {
            // Zoom al cargar (requerido)
            zoom: 11,
            // Centro del mapa (requerido)
            center: new google.maps.LatLng(-34.6084738,-58.38041780000003)
        };

        // Obtener el id del contenedor del mapa del div
        var mapId = document.getElementById('map');

        // Crear el mapa
        map = new google.maps.Map(mapId, mapOptions);
    }

    // Cargar el mapa
    google.maps.event.addDomListener(window, 'load', loadMap());

});
