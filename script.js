let singapore = [ 1.29,103.82]; // #1 Singapore latlng
// let singapore = [14.52,121.10]; // #1 Philippines latlng
let map = L.map('map').setView(singapore, 13); // #2 Set the center point

// setup the tile layers
L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw' //demo access token
}).addTo(map);

let singaporeMarker = L.marker([1.35, 103.80]);
singaporeMarker.addTo(map);
singaporeMarker.bindPopup("<p>Singapore</p>")

singaporeMarker.addEventListener('click', function(){
    alert("Singapore");
})

let circle = L.circle([1.35166526, 103.773663572], {
    color: 'red',
    fillColor:"orange",
    fillOpacity:0.5,
    radius: 500
})

// add it to the map
circle.addTo(map);

let singaporeZooMarker = L.marker([1.403717, 103.793974]);
let singaporeDiscoveryMarker = L.marker([1.332690, 103.679042]);
let jurongBirdParkMarker = L.marker([1.319025, 103.706668]);

singaporeZooMarker.addTo(map);
singaporeDiscoveryMarker.addTo(map);
jurongBirdParkMarker.addTo(map);