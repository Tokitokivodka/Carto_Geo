$(document).ready(function() {

    let exo2 = $('#exo2') ;
    let exo3 = $('#exo3') ;
  
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
  
    if(window.DeviceOrientationEvent) {
      window.addEventListener('deviceorientation', function(orientation) {
        var firstDiv = exo3.find('.func1') ;
        setTimeout(function () {
          firstDiv.empty() ;
          firstDiv.find('ul').append(
            "<li>Alpha : " + orientation.alpha + "</li>",
            "<li>Beta : " + orientation.beta + "</li>",
            "<li>Gamma : " + orientation.gamma + "</li>"
          ) ;
        }, 1000);
        console.log(firstDiv.find('ul')) ;
      });
    }
  
    if(window.DeviceMotionEvent) {
      window.addEventListener('devicemotion', function(orientation) {
        var secondDiv = exo3.find('.func2') ;
        setTimeout(function () {
          secondDiv.find('ul').empty() ;
          secondDiv.find('ul').append(
            "<li>Acceleration X : " + orientation.acceleration.x + "</li>",
            "<li>Acceleration Y : " + orientation.acceleration.y + "</li>",
            "<li>Acceleration Z : " + orientation.acceleration.z + "</li>",
            "<li>Rotation alpha : " + orientation.rotationRate.alpha + "</li>",
            "<li>Rotation beta : " + orientation.rotationRate.beta + "</li>",
            "<li>Rotation gamma : " + orientation.rotationRate.gamma + "</li>"
          ) ;
        }, 1000);
      });
    }
  }) ;