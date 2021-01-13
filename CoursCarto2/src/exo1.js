$(document).ready(function() {

  navigator.geolocation.getCurrentPosition(function(position){

    console.log(position) ;
    // Exo 1
    //OpenStreetMap
    var mapOSM = L.map('mapOSM').setView([position.coords.latitude, position.coords.longitude], 10);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      maxZoom: 15
    }).addTo(mapOSM);

    L.marker([position.coords.latitude, position.coords.longitude]).addTo(mapOSM)
    .bindPopup('On sait que tu te trouve ici, On vient pour toi...')
    .openPopup();

    L.marker([43.7013, 7.2681]).addTo(mapOSM)
    .bindPopup("Nice")
    .openPopup();

    // Exo 2
    // Stamen's map
    const triangleCoords = [
      { lat: 25.774, lng: -80.19 },
      { lat: 18.466, lng: -66.118 },
      { lat: 32.321, lng: -64.757 },
    ];
    var lay1 = new L.StamenTileLayer("terrain");
    var bermudeTriangle = L.polygon(triangleCoords, {
      color:'red',
      fillColor: '#f03',
      fillOpacity: 0.5
    }) ;
    var StamenBermudes = new L.Map("StamenBermudes", {
      center: new L.LatLng(24.886, -70.268),
      zoom: 4,
      maxZoom: 15
    });
    StamenBermudes.addLayer(lay1);
    StamenBermudes.addLayer(bermudeTriangle) ;

    var lay2 = new L.StamenTileLayer("terrain");
    var rond = L.circle([position.coords.latitude, position.coords.longitude], {
      radius: position.coords.accuracy
    }) ;
    var StamenPos = new L.Map("StamenPos", {
      center: new L.LatLng(position.coords.latitude, position.coords.longitude),
      zoom: 12,
      maxZoom: 15
    });
    StamenPos.addLayer(lay2) ;
    StamenPos.addLayer(rond) ;

    let latitudedutruc = L.latLng(position.coords.latitude, position.coords.longitude);
    let distancationdesecurelol = latitudedutruc.distanceTo(L.latLng(43.2969500, 5.3810700));
    $("#distance").text(distancationdesecurelol);

    // Exo3
    // Ajouter du décors
    $.ajax({
      type: "GET",
      url: "./geojson/routes-metropolitaines-202012.geojson",
      success: function(data) {
        var mapVelos = L.map('pisteCyclable').setView([43.7013, 7.2681], 10);
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
          attribution: '&copy; <a href="https://www.openstreetmap.org/copyright%22%3EOpenStreetMap</a> contributors',
          maxZoom: 15
        }).addTo(mapVelos);
        L.geoJSON(JSON.parse(data), {
          color: 'purple'
        }).addTo(mapVelos);
      }
    }) ;
  });
}) ;
