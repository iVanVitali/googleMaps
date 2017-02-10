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
            center: new google.maps.LatLng(-34.6084738,-58.38041780000003),

            // Limitar min/max zoom
            minZoom: 10,
            maxZoom: 15,

            // Map Control
            mapTypeControl: true,
            mapTypeControlOptions:  {
                style: google.maps.MapTypeControlStyle.DROPDOWN_MENU,
                mapTypeIds: [   google.maps.MapTypeId.ROADMAP,
                                google.maps.MapTypeId.SATELLITE,
                                google.maps.MapTypeId.HYBRID,
                                google.maps.MapTypeId.TERRAIN],
                position: google.maps.ControlPosition.TOP_RIGHT
            },

            // Establecer el tipo del mapa (maptype)
            mapTypeId: google.maps.MapTypeId.ROADMAP,

            // 0 a 45 grados, solo valido para los tipos de mapa satellite y terrain
            tilt: 45,

            // Zoom Control
            zoomControl: true,
            zoomControlOptions: {
                style: google.maps.ZoomControlStyle.SMALL,
                position: google.maps.ControlPosition.Right_Bottom
            },

            // Pan Control
            panControl: true,
            panControlOptions: {
                position: google.maps.ControlPosition.Top_Left
            },

            // Street view control
            streetViewControl: false,

            // Overview map (vision del conjunto)
            overviewMapControl: true,
            overviewMapControlOptions: {
                opened: true
            },


        };

        // Obtener el id del contenedor del mapa del div
        var mapId = document.getElementById('map');

        // Crear el mapa
        map = new google.maps.Map(mapId, mapOptions);
    }

    // Cargar el mapa
    google.maps.event.addDomListener(window, 'load', loadMap());

});
