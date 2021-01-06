$(document).ready(function() {

    navigator.geolocation.getCurrentPosition(function(position) {
      console.log(position) ;
      $('#function1').find('ul').append(
        '<li>Longitude : ' + position.coords.longitude + '</li>',
        "<li>Latitude : " + position.coords.latitude + "</li>",
        "<li>Precision : " + position.coords.accuracy + "</li>",
        "<li>Vitesse : " + position.coords.speed + "</li>",
        "<li>Timestamp : " + position.timestamp + "</li>"
      ) ;
    });
  
    navigator.geolocation.watchPosition(function(position) {
      $('#function2').find('ul').empty() ;
      $('#function2').find('ul').append(
        '<li>Longitude : ' + position.coords.longitude + '</li>',
        "<li>Latitude : " + position.coords.latitude + "</li>",
        "<li>Precision : " + position.coords.accuracy + "</li>",
        "<li>Vitesse : " + position.coords.speed + "</li>",
        "<li>Timestamp : " + position.timestamp + "</li>"
      ) ;
    });
  
  }) ;