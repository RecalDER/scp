
// Cambia el color de fondo a medida que el usuario se desplaza hacia abajo
window.addEventListener("scroll", function() {
    var posicionY = window.scrollY;
    if (posicionY > 25) { 
        minav.style.opacity = 0.5;
        mihead.style.opacity=0.5;
    } else {
        minav.style.opacity = 1;
        mihead.style.opacity=1;
    }
  });