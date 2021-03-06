/**
 * Created by webcoder on 7/2/17.
 */
$(function() {
    // esta linea indica al navegador que queremos tener cuidad con javascript
    "use strict";

    function inicializarFirebase() {
        // Initialize Firebase
        var config = {
            apiKey: "AIzaSyDK0q-Xdt5fU_S5-wWUvoZFK-khAbPg8w8",
            authDomain: "project-8658726983422493935.firebaseapp.com",
            databaseURL: "https://project-8658726983422493935.firebaseio.com",
            storageBucket: "project-8658726983422493935.appspot.com",
            messagingSenderId: "964797913787"
        };
        firebase.initializeApp(config);
    }

    // Inicializar Firebase
    inicializarFirebase();

    const DatabaseService = firebase.database();

    function obtenerLugarDesdeFormulario($formulario) {
        var lugar = {};

        for (var component in componentForm) {
            document.getElementById(component).disabled = false;
        }

        $.each($formulario.serializeArray(), function(indice, elemento) {
            if (elemento.name === "comuna") {
                // Obtener solo el numero de la comuna
                lugar[elemento.name] = elemento.value.substring(7);
            } else {
                lugar[elemento.name] = elemento.value;
            }

        });

        lugar.creado = new Date().getTime(); // agregar fecha de ingreso

        return lugar;
    }

    function agregarLugar(ruta, lugar) {
        var referencia = DatabaseService.ref(ruta);
        referencia.push(lugar);
    }

    function resetearFormulario() {
        $("input[type=text]").val("");
    }

    $('form#place-form').submit(function(evento) {
        evento.preventDefault();

        var lugar = obtenerLugarDesdeFormulario($(this));
        agregarLugar('lugares', lugar);
        resetearFormulario();
    });

});

    // This example displays an address form, using the autocomplete feature
// of the Google Places API to help users fill in the information.

    var placeSearch, autocomplete;
    var componentForm = {
        //street_number: 'short_name',
        //route: 'long_name',
        locality: 'long_name',
        sublocality_level_1: 'long_name',
        administrative_area_level_2: 'short_name',
        administrative_area_level_1: 'short_name',
        country: 'long_name'
        //postal_code: 'short_name'
    };

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

    // Agregar campos al formulario para barrios de la Capital Federal
    function showForm1() {

        componentForm = {
            sublocality_level_1: 'long_name',
            administrative_area_level_2: 'short_name',
            administrative_area_level_1: 'short_name',
            country: 'long_name'
        };

        var form1 = "";
        form1 += "<div class='form-group'>";
        form1 += "<label for='sublocality_level_1'>Barrio</label>";
        form1 += "<input type='text' class='form-control' id='sublocality_level_1' name='barrio' value='' placeholder='Barrio de CABA' disabled='true'>";
        form1 += "</div>";

        form1 += "<div class='form-group'>";
        form1 += "<label for='administrative_area_level_2'>Comuna</label>";
        form1 += "<input type='text' class='form-control' id='administrative_area_level_2' name='comuna' value='' placeholder='Comuna' disabled='true'>";
        form1 += "</div>";

        form1 += "<div class='form-group'>";
        form1 += "<label for='administrative_area_level_1'>Provincia</label>";
        form1 += "<input type='text' class='form-control' id='administrative_area_level_1' name='provincia' value='' placeholder='Provincia' disabled='true'>";
        form1 += "</div>";

        form1 += "<div class='form-group'>";
        form1 += "<label for='country'>Pais</label>";
        form1 += "<input type='text' class='form-control' id='country' name='pais' value='' placeholder='Pais' disabled='true'>";
        form1 += "</div>";

        form1 += "<button type='reset' class='btn btn-default'>Limpiar</button> ";
        form1 += "<button type='submit' class='btn btn-primary'>Guardar</button>";

        $('#place-form').html(form1);
    }

    // Agregar campos al formulario para barrios de Buenos Aires
    function showForm2() {

        componentForm = {
            locality: 'long_name',
            administrative_area_level_2: 'short_name',
            administrative_area_level_1: 'short_name',
            country: 'long_name'
        };

        var form2 = "";
        form2 += "<div class='form-group'>";
        form2 += "<label for='locality'>Barrio</label>";
        form2 += "<input type='text' class='form-control' id='locality' name='barrio' placeholder='Barrio' disabled='true'>";
        form2 += "</div>";

        form2 += "<div class='form-group'>";
        form2 += "<label for='administrative_area_level_2'>Ciudad/Localidad</label>";
        form2 += "<input type='text' class='form-control' id='administrative_area_level_2' name='localidad' placeholder='Ciudad/Localidad' disabled='true'>";
        form2 += "</div>";

        form2 += "<div class='form-group'>";
        form2 += "<label for='administrative_area_level_1'>Provincia</label>";
        form2 += "<input type='text' class='form-control' id='administrative_area_level_1' name='provincia' placeholder='Provincia' disabled='true'>";
        form2 += "</div>";


        form2 += "<div class='form-group'>";
        form2 += "<label for='country'>Pais</label>";
        form2 += "<input type='text' class='form-control' id='country' name='pais' placeholder='Pais' disabled='true'>";
        form2 += "</div>";

        form2 += "<button type='reset' class='btn btn-default'>Limpiar</button> ";
        form2 += "<button type='submit' class='btn btn-primary'>Guardar</button>";

        $('#place-form').html(form2);
    }

// [START region_fillform]
    function fillInAddress() {
        // Get the place details from the autocomplete object.
        var place = autocomplete.getPlace();
        var barrioCaba = false;

        // Verificar si sublocality_level_1 esta presente
        for (var i = 0; i < place.address_components.length; i++) {
            if (place.address_components[i].types[0] === 'sublocality_level_1') {
                barrioCaba = true;
            }
        }

        // Verificar barrioCaba
        if(barrioCaba) {
            // Mostrar formulario 1
            showForm1();
            console.log('form1');
            //alert("form1");
            //mostrarFormulario();
        } else {
            // Mostrar formulario 2
            showForm2();
            console.log('form2');
            //mostrarFormulario();
        }

        for (var component in componentForm) {
            document.getElementById(component).value = '';
            document.getElementById(component).disabled = true;
        }

        // Get each component of the address from the place details
        // and fill the corresponding field on the form.
        for (var i = 0; i < place.address_components.length; i++) {
            var addressType = place.address_components[i].types[0];

            if (componentForm[addressType]) {
                var val = place.address_components[i][componentForm[addressType]];
                document.getElementById(addressType).value = val;
            }
        }

        //mostrarFormulario();
    }


    function mostrarFormulario() {
        $("#place-form").find(':input').each(function() {
            var elemento = this;
            console.log("elemento.id="+ elemento.id + ", elemento.name=" + elemento.name + ", elemento.value=" + elemento.value);
        });
    }
// [END region_fillform]

// [START region_geolocation]
// Bias the autocomplete object to the user's geographical location,
// as supplied by the browser's 'navigator.geolocation' object.
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
                autocomplete.setBounds(circle.getBounds());
            });
        }
    }
// [END region_geolocation]

//});
