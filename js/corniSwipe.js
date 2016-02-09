/*
Title: CorniSwipe
Description: Herramienta para desplazar menus y otras tareas similares
Author: Luis Cornejo
Site: www.luiscornejo.com
*/

function principalSwipe(elem) {

    this.element = elem;
    this.element.posCursor = 0;
    this.element.style.transition = 'none';
    this.anguloArriba = -60;
    this.anguloAbajo = 60;

}

principalSwipe.prototype.propiedades = function() {
    this.element.cerrar = true
}

//Elementos del Dom

var pagina = document.querySelector('.contenido');
var contenedor = document.querySelector(".contenedor");
var menu = document.querySelector(".container-menu");

var anchoContenedor = contenedor.offsetWidth;
var posCursorInicioX, posCursorActualX, cerrado, posCursorInicioY, posCursorActualY;
var anchoVentana = window.innerWidth;

window.addEventListener("resize", ventanaRecalcular);
function ventanaRecalcular(){
    anchoVentana = window.innerWidth;
}

principalSwipe.prototype.inicio = function() {

    if (navigator.userAgent.match(/Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile/i)) {
        this.element.addEventListener('touchstart', mouseDown, false);
        this.element.addEventListener('touchend', mouseUp, false);
    } else {
        this.element.addEventListener('mousedown', mouseDown, false);
        this.element.addEventListener('mouseup', mouseUp, false);
    }
}

//Crear objeto

var pag = new principalSwipe(pagina)

//Propiedades objeto

pag.element.ancho = 260; //Ancho del menú
pag.element.cerrar = true; //Click en contenido con menú abierto cierra el menú
pag.enlaceCerrar = true; //Click en link de menú abierto cierra el menú


menu.style.width = pag.element.ancho+'px';


//Eventos

function mouseDown(event) {

    pag.element.style.transition = 'none';
    posCursorInicioX = event.clientX;
    posCursorInicioY = event.clientY;

    if (navigator.userAgent.match(/Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile/i)) {
        posCursorInicioX = event.touches[0].clientX;
        posCursorInicioY = event.touches[0].clientY;
    }

    if (navigator.userAgent.match(/Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile/i)) {
        this.addEventListener('touchmove', mouseMove, false);
    } else {
        this.addEventListener('mousemove', mouseMove, false);
    }

    var posElementX = pagina.getBoundingClientRect().left;
    var posContenedorX = contenedor.getBoundingClientRect().left;

    if (posElementX - 1 == posContenedorX || posElementX == posContenedorX) {

        cerrado = true;

    } else {
        cerrado = false;

    }

}

function mouseMove(event) {

    posCursorActualX = event.clientX;
    posCursorActualY = event.clientY;

    if (navigator.userAgent.match(/Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile/i)) {
        posCursorActualX = event.touches[0].clientX;
        posCursorActualY = event.touches[0].clientY;
    }

    var calcX = Number(posCursorActualX - posCursorInicioX);
    var calcY = Number(posCursorActualY - posCursorInicioY);
    var angulo = calcY / calcX;
    var anguloLimiteArriba = Math.tan(pag.anguloArriba);
    var anguloLimiteAbajo = Math.tan(pag.anguloAbajo)

    if (calcX < 0) {

        if (cerrado) {

            var calcX = 0; //Deshabilita el swipe cuando está cerrado

        } else {

            var calcX = Number(posCursorActualX - posCursorInicioX + pag.element.ancho);
        }

    } else {

        if (anguloLimiteArriba > angulo || anguloLimiteAbajo < angulo) {

            var calcX = null;

        } else {

            var calcX = Number(posCursorActualX - posCursorInicioX);
        }

    }

    this.style.transform = 'translate3d(' + calcX + 'px, 0, 0)';

}

function mouseUp() {

    posCursorInicioY = posCursorActualY;
    this.removeEventListener('mousemove', mouseMove, false);

    var pagina = document.querySelector('.contenido');

    pag.x = pagina.getBoundingClientRect().left;

    if (pagina.getBoundingClientRect().left < (anchoVentana / 2)) {

        this.style.transform = 'translate3d(0px, 0, 0)';


    } else {

        var pagina = document.querySelector('.contenido');
        this.style.transform = 'translate3d(' + pag.element.ancho + 'px, 0, 0)';

    }

    pag.element.style.transition = '0.2s ease';
}

pag.inicio();


//Botón abrir-cerrar

var botonAbrirCerrar = document.querySelector('.abrir-cerrar');

botonAbrirCerrar.addEventListener('click', abrirCerrar, false);

function abrirCerrar() {

    var posElementX = pagina.getBoundingClientRect().left;
    var posContenedorX = contenedor.getBoundingClientRect().left;

    if (posElementX - 1 == posContenedorX || posElementX == posContenedorX) {

        cerrado = true;
        pagina.style.transform = 'translate3d(' + pag.element.ancho + 'px, 0, 0)';

    } else {
        cerrado = false;
        pagina.style.transform = 'translate3d(0px, 0, 0)';

    }
}

//Cerrar Menu clicando el contenido

pagina.addEventListener('click', cerrarMenu, false);

function cerrarMenu() {
    if (navigator.userAgent.match(/Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile/i)) {
        var posElementX = pagina.getBoundingClientRect().left;
        var posContenedorX = contenedor.getBoundingClientRect().left;
        if (posElementX - 1 == posContenedorX || posElementX == posContenedorX) {

            cerrado = true;

        } else {
            cerrado = false;
            pagina.style.transform = 'translate3d(0px, 0, 0)';

        }
    }
}

//Click enlace menú cierra Menú

var enlaceMenu = document.querySelectorAll('.container-menu a');

if (pag.enlaceCerrar == true) {

    for (var i = 0; i < enlaceMenu.length; i++) {
        enlaceMenu[i].addEventListener('click', enlaceCerrar, false);
    }

    function enlaceCerrar() {

        cerrado = false;
        pagina.style.transform = 'translate3d(0px, 0, 0)';
        var link = this.getAttribute("href");
        console.log(link)
        setTimeout(function() {
            window.location = link;
        }, 300);

    }
}
