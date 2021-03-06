const { create } = require('lodash');
var places = require('places.js');

$(document).ready(function(){

    // Funzione per ricerca e visualizzazione della latitudine e longitudine   
    (function () {
        var selectRadius = $('#radius').val();
        var placesAutocomplete = places({
            appId: 'plMMPUODJ2PK',
            apiKey: '0337776886165fd5d9d75984ac961fa9',
            container: document.querySelector('#address-input')
        });

        var $address = document.querySelector('#address-value')
        placesAutocomplete.on('change', function (e) {
            $address.textContent = e.suggestion.value

            var latitudine = e.suggestion.latlng.lat;
            var inputLat = $("#latitude").val(latitudine);
            
            var longitudine = e.suggestion.latlng.lng;
            var inputLng = $("#longitude").val(longitudine);
        });

        placesAutocomplete.on('clear', function () {
            $address.textContent = 'none';
        });

    })();
 
    slug();
});
// --------------------------------------------

// FUNZIONE AUTOCOMPLETE SLUG - CREATE.BLADE.PHP
function slug(){
    $(document).on("keyup", "#title", 
        function(){
            var titolo = $("#title").val();
            var userId = $("#slug").attr("data-id");
            var titolo2 = titolo.split(" ");
                titolo2.push(userId);
            var slugComplete =  titolo2.join('-');
            var slug = $("#slug").val(slugComplete);
        }
    );
}
