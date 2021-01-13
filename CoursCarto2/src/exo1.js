let exo2

$(document).ready(function() {

    exo2 = $('#exo2') ;
  
    navigator.geolocation.getCurrentPosition(function(position) {
      var firstDiv = exo2.find('.fun1') ;
      firstDiv.find('ul').append(
        "<li>Longitude : " + position.coords.longitude + "</li>",
        "<li>Latitude : " + position.coords.latitude + "</li>",
        "<li>Precision : " + position.coords.accuracy + "</li>",
        "<li>Vitesse : " + position.coords.speed + "</li>",
        "<li>Timestamp : " + position.timestamp + "</li>"
      ) ;
    });
  
    navigator.geolocation.watchPosition(function(position) {
      var secondDiv = exo2.find('.fun2') ;
      secondDiv.find('ul').empty() ;
      secondDiv.find('ul').append(
        '<li>Longitude : ' + position.coords.longitude + '</li>',
        "<li>Latitude : " + position.coords.latitude + "</li>",
        "<li>Precision : " + position.coords.accuracy + "</li>",
        "<li>Vitesse : " + position.coords.speed + "</li>",
        "<li>Timestamp : " + position.timestamp + "</li>"
      ) ;
    });

    // Map exo 1
var mymap = L.map('mapid').setView([43.7090064,
  7.2139693000000005], 13);
  L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoidG9raXRva2l2b2RrYSIsImEiOiJjazg0OGR1c28wMWR6M21zOHF1M25raXJtIn0.ULyMfQ0tLZuilnHo-ogT9Q', {
      attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
      maxZoom: 18,
      id: 'mapbox/streets-v11',
      tileSize: 512,
      zoomOffset: -1,
      accessToken: 'your.mapbox.access.token'
  }).addTo(mymap);
  
  // Afficher le marqueur de ma maison.
  var marker = L.marker([43.7090064,
  7.2139693000000005]).addTo(mymap);
  
  // Afficher un cercle des lieux de l'IUT de Sophia.
  var circle = L.circle([43.6151674, 7.0701629], {
      color: 'red',
      fillColor: '#f03',
      fillOpacity: 0.5,
      radius: 500
  }).addTo(mymap);
  
  // Afficher un Polygone.
  var polygon = L.polygon([
      [51.509, -0.08],
      [51.503, -0.06],
      [51.51, -0.047]
  ]).addTo(mymap);
  
  // Displaying popup markers.
  marker.bindPopup("<b>Yo!</b><br>C'est chez moi! Cool non?").openPopup();
  circle.bindPopup("I am a circle.");
  polygon.bindPopup("I am a polygon.");
  
  // Affichage du texte.
  var x = document.getElementById("demo");
  
  // Map exo 2
  var layer = new L.StamenTileLayer("terrain");
  var mymap2 = new L.Map("mapid2", {
      center: new L.LatLng(25.495347, -80.068359),
      zoom: 4
  });
  L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoiYWRyaWVudnUiLCJhIjoiY2s3dm1lNnA5MDZ1aTNsbHV3OTJidGtvcCJ9.k15psxpTijlOjIjErJKRow', {
      attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
      maxZoom: 18,
      id: 'mapbox/streets-v11',
      tileSize: 512,
      zoomOffset: -1,
      accessToken: 'your.mapbox.access.token'
  }).addTo(mymap2);
  mymap2.addLayer(layer);
  
  // Triangle
  var polygon = L.polygon([
      [25.495347, -80.068359],
      [18.367559, -66.533203],
      [32.150037, -64.599609]
  ], {color: 'red'}).addTo(mymap2);

  $('.btn').click(function() {
  
    $('.text').text('loading . . .');
    
    $.ajax({
      type:"GET",
      url:"https://api.meetup.com/2/cities",
      success: function(data) {
        $('.text').text(JSON.stringify(data));
      },
      dataType: 'jsonp',
    });
    
  });
});

// Bouton pour get la position.
function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else { 
    x.innerHTML = "Geolocation is not supported by this browser.";
  }
}

// Bouton pour Show la position.
function showPosition(position) {
  x.innerHTML = "Latitude: " + position.coords.latitude + 
  "<br>Longitude: " + position.coords.longitude + "<br>Précision de la longitude et latitiude : " + position.coords.accuracy + "<br>Altitude : " + position.coords.altitude + "<br>Précision de l'altitude : " + position.coords.altitudeAccuracy + "<br>Distance calculée entre ma position et Marseille: " + getDistanceFromLatLonInKm(position.coords.latitude,position.coords.longitude,43.2976423,5.3694705) + " km.";
} 

// Calcul de la distance entre deux points
function getDistanceFromLatLonInKm(lat1,lon1,lat2,lon2) {
  var R = 6371; // Radius of the earth in km
  var dLat = deg2rad(lat2-lat1);  // deg2rad below
  var dLon = deg2rad(lon2-lon1); 
  var a = 
    Math.sin(dLat/2) * Math.sin(dLat/2) +
    Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) * 
    Math.sin(dLon/2) * Math.sin(dLon/2)
    ; 
  var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
  var d = R * c; // Distance en km
  return d;
}

function deg2rad(deg) {
  return deg * (Math.PI/180)
}