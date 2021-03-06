// Prendo la latitudine
var mapLat = $('#house-lat').data("lat");
// Prendo la longitidine
var mapLon = $('#house-lon').data("lon");

// Inizializzo la mappa
var mymap = L.map('mapid').setView([mapLat, mapLon], 13);

L.tileLayer('https://api.maptiler.com/maps/streets/{z}/{x}/{y}.png?key=g4tVPhdOiCmsJLWTlyc1', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'your.mapbox.access.token'
}).addTo(mymap);

// Variabile pin
var marker = L.marker([mapLat, mapLon]).addTo(mymap);


