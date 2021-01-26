let Night = false ;

$(document).ready(function() {
  // Exo 1.1
  
  // Canvas Dessin maison 
  BBC() ;

  // Exo 1.2
  // Dessin SVG
  $('#soleil').click(function() {
    if(!Night) {
      Night = true ;
      document.getElementById('ciel').className.baseVal = 'night' ;
    } else {
      Night = false ;
      document.getElementById('ciel').className.baseVal = 'day' ;
    }
  }) ;

}) ;

function BBC() {
	var canvas = document.getElementById('canvas');
	var ctx = canvas.getContext('2d');
	var img = new Image();
	img.src = './src/images/l-auberge-nordique.jpg' ;
	img.onload = function() {
 
	var scale = Math.min(canvas.width / img.width, canvas.height / img.height);
  
	var x = (canvas.width / 2) - (img.width / 2) * scale;
	var y = (canvas.height / 2) - (img.height / 2) * scale;
	ctx.drawImage(img, x, y, img.width * scale, img.height * scale);

    var soleil = new Path2D();
    soleil.arc(75, 50, 25, 0, Math.PI * 2);
    ctx.fillStyle = '#eba434' ;
    ctx.fill(soleil);

    ctx.beginPath() ;
    ctx.fillStyle = '#e8dbb7' ;
    ctx.fillRect(150, canvas.height - 90, 75, 80) ;

    ctx.beginPath() ;
    ctx.fillStyle = '#c0c5f0' ;
    ctx.fillRect(170, canvas.height - 45, 25, 35) ;

    ctx.beginPath() ;
    ctx.fillStyle = '#ed1313' ;
    ctx.moveTo(150, canvas.height - 90);
    ctx.lineTo(187.5, 175);
    ctx.lineTo(225, canvas.height - 90);
    ctx.fill();
  }
}