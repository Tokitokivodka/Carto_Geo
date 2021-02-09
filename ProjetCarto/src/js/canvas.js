$(document).ready(function() {

    var canvas = document.getElementById('boussoleCanvas') ;
    var ctx = canvas.getContext('2d');
    var boussole = new Image();
    var aiguille = new Image() ;
    boussole.src = './src/image/compass.png' ;
    aiguille.src = './src/image/needle.png' ;
  
    if(window.DeviceOrientationEvent) {
      window.addEventListener('deviceorientation', function(orientation) {
        moveNeedle(orientation);
      }) ;
    }
  
    function moveNeedle(orientation) {
      console.log(orientation) ;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(boussole, 0, 0);
      ctx.save();
      ctx.translate(100, 100);
      ctx.rotate(orientation.alpha * (Math.PI / 180));
      ctx.drawImage(aiguille, -100, -100);
      ctx.restore();
    }
  
  }) ;