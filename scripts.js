

function mostrarMenu() {
     var x = document.getElementById("menu-escondido");
     if (x.style.display === "block") {
          x.style.display = "none";
     } else {
          x.style.display = "block";
     }
}




function mostrarMenuSand() {
     var y = document.getElementById("menu");
     if (y.style.display === "block") {
          y.style.display = "none";
     } else {
          y.style.display = "block";
     }
}

function ampliarMenu(x) {
     if (x.matches) {
          document.getElementById("menu").style.display = "flex";
     } else {
          document.getElementById("menu").style.display = "none";
     }
}

var xx = window.matchMedia("(min-width: 700px)")
ampliarMenu(xx)
xx.addListener(ampliarMenu)
