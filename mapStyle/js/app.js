/**
 * Created by webcoder on 7/2/17.
 */
$(function() {
    "use strict";

    // Declaramos la variable global para contener el objeto de google map
    var map;

    // Estilo de los elementos
    var mapStyle = [
        {
            'stylers':[
                {'saturation': -100},
                {'gamma': 1}
            ]
        },
        {
            'elementType': 'labels.text.stroke',
            'stylers':[
                {'visibility': 'off'}
            ]
        },
        {
            'featureType':'road',
            'elementType':'geometry',
            'stylers':[
                {'visibility': 'simplified'}
            ]
        },
        {
            'featureType':'water',
            'stylers':[
                {'visibility':'on'},
                {'saturation':50},
                {'gamma':0},
                {'hue':'#50a5d1'}
            ]
        },
        {
            'featureType':'landscape',
            'elementType':'all',
            'stylers':[
                {'color':'#e2e2e2'}
            ]
        }
    ];

    function loadMap() {

        // Establecer las opciones del mapa
        var mapOptions = {
            // Zoom al cargar (requerido)
            zoom: 11,
            // Centro del mapa (requerido)
            center: new google.maps.LatLng(-34.6084738,-58.38041780000003),

            // Cargar el estilo del mapa
            styles: mapStyle,
        };

        // Obtener el id del contenedor del mapa del div
        var mapId = document.getElementById('map');

        // Crear el mapa
        map = new google.maps.Map(mapId, mapOptions);
    }



    // Cargar el mapa
    google.maps.event.addDomListener(window, 'load', loadMap());

});
