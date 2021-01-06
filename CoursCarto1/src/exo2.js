$(document).ready(function() {

    navigator.geolocation.getCurrentPosition(function(position) {
      console.log(position) ;
      $('#func1').find('ul').append(
        '<li>Longitude : ' + position.coords.longitude + '</li>',
        "<li>Latitude : " + position.coords.latitude + "</li>",
        "<li>Precision : " + position.coords.accuracy + "</li>",
        "<li>Vitesse : " + position.coords.speed + "</li>",
        "<li>Timestamp : " + position.timestamp + "</li>"
      ) ;
    });
  
    navigator.geolocation.watchPosition(function(position) {
      $('#func2').find('ul').empty() ;
      $('#func2').find('ul').append(
        '<li>Longitude : ' + position.coords.longitude + '</li>',
        "<li>Latitude : " + position.coords.latitude + "</li>",
        "<li>Precision : " + position.coords.accuracy + "</li>",
        "<li>Vitesse : " + position.coords.speed + "</li>",
        "<li>Timestamp : " + position.timestamp + "</li>"
      ) ;
    });
  
  }) ;