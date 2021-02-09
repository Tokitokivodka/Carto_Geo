$(document).ready(function() {

    var img = document.getElementById('needle');
    if(window.DeviceOrientationEvent) {
      window.addEventListener('deviceorientation', function(orientation) {
        img.style.transform = 'rotate(' + orientation.alpha + 'deg)' ;
      }) ;
    }
  
  }) ;
  