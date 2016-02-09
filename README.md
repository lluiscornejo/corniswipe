# corniswipe
Swipe Menu Mobile

<div class="row">
                <div class="col12">
                                            <img width="100%" height="auto" src="http://luiscornejo.com/wp-content/uploads/2014/04/corniSwipe.png" class="attachment-post-thumbnail wp-post-image" alt="corniSwipe">                                    </div>
                <div class="col12">
                    <a href="http://luiscornejo.com/2015/10/corniswipe/"><h1>corniSwipe</h1></a>
                    <h3>Herramienta para menús&nbsp;en dispositivos móviles</h3>
<p>Tool menus on mobile devices
Tool for creating menus with mobile functionality. This makes it possible to move the main block of the website or application to discover the menu remains in a lower layer.
</p>
<p><span id="more-304"></span></p>

<p>Developed in pure JavaScript to avoid conflict with other libraries.</p>
<p>With very few lines of code, 200.</p>
<p>I have solved the problem that the main page is moved depending on the angle of movement of the finger on the device by opening the menu with simple vertical scroll. 
I fixed the error to an angle of 60 ° above the horizontal in both directions.</p>
<p><a href="http://luiscornejo.com/wp-content/uploads/2015/10/Captura-de-pantalla-2015-10-15-a-las-19.34.08.png"><img class="alignnone wp-image-305 size-full" style="max-width: 350px;" src="http://luiscornejo.com/wp-content/uploads/2015/10/Captura-de-pantalla-2015-10-15-a-las-19.34.08.png" alt="angulo corniSwipe" width="350" height="auto"></a></p>
<p>&nbsp;</p>
<h4>Features</h4>
<ul>
<li> There are classic menu button to open / close the menu.</li>
<li> If the menu is open, clicking the main content is closed.</li>
<li>Content menu and functional for avoiding mistakes when making a swipe or sweep the finger on the mobile screen with a horizontal angle not Scroll.</li>
<li>The default menu opens 260px, although it is optional and can be easily configured.</li>
<li>Simulating many menus, type "LinkedIn", moving the content to the right and drop opens or closes if the content passes from the middle of the screen.</li>
</ul>
<p>&nbsp;</p>
<div class="row">
<div class="col4"><a href="http://luiscornejo.com/wp-content/uploads/2015/10/corniSwipe.gif"><img class="alignnone wp-image-306 size-full" src="http://luiscornejo.com/wp-content/uploads/2015/10/corniSwipe.gif" alt="corniSwipe" width="349" height="622"></a></div>
</div>
<p>&nbsp;</p>
<h4>Use</h4>
<p>Html:</p>
<div style="border: 1px solid #ccc; height: 350px; overflow: auto; padding: 20px;">
<pre>&lt;head&gt;
   &lt;!-- Other code --&gt;

   <span style="color: #999999;">&lt;link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.min.css"&gt; &lt;!-- opcional --&gt;</span>
   <span style="color: #999999;">&lt;link rel="stylesheet" href="css/grid.css"&gt;&lt;!-- opcional --&gt;</span>
   <span style="color: #3366ff;">&lt;link rel="stylesheet" href="css/corniSwipe.css"&gt;</span>
&lt;/head&gt;
&lt;body&gt;
<span style="color: #3366ff;">&lt;div class="contenedor"&gt;</span>
<span style="color: #3366ff;">   &lt;div class="container-menu"&gt;</span>
<span style="color: #3366ff;">      &lt;ul&gt;</span>
<span style="color: #3366ff;">         &lt;li&gt;&lt;a href="#1"&gt;Menú 1&lt;/a&gt;&lt;/li&gt;</span>
<span style="color: #3366ff;">         &lt;li&gt;&lt;a href="#2"&gt;...&lt;/a&gt;&lt;/li&gt;</span>
<span style="color: #3366ff;">      &lt;/ul&gt;</span>
<span style="color: #3366ff;">   &lt;/div&gt;</span>
<span style="color: #3366ff;">   &lt;div class="contenido"&gt;</span>
<span style="color: #3366ff;">      &lt;div class="container"&gt;</span>
       &lt;!-- contenido --&gt;
<span style="color: #3366ff;">      &lt;/div&gt;</span>
<span style="color: #3366ff;">   &lt;/div&gt;</span>
<span style="color: #3366ff;">&lt;/div&gt;</span>
<span style="color: #3366ff;">&lt;script type="text/javascript" src="js/corniSwipe.js"&gt;&lt;/script&gt;</span></pre>
</div>
<p>Css:</p>
<div style="border: 1px solid #ccc; height: 350px; overflow: auto; padding: 20px;">
<pre><span style="color: #3366ff;">body {</span>
<span style="color: #3366ff;"> background: #505050;</span>
<span style="color: #3366ff;">}</span></pre>
<pre><span style="color: #3366ff;">.contenedor {</span>
<span style="color: #3366ff;"> width: 100%;</span>
<span style="color: #3366ff;"> height: 100%;</span>
<span style="color: #3366ff;"> margin: 0 auto;</span>
<span style="color: #3366ff;"> overflow: hidden;</span>
<span style="color: #3366ff;"> position: relative;</span>
<span style="color: #3366ff;"> z-index: 1;</span>
<span style="color: #3366ff;">}</span></pre>
<pre><span style="color: #3366ff;">.contenido {</span>
<span style="color: #3366ff;"> position: relative;</span>
<span style="color: #3366ff;"> z-index: 2;</span>
<span style="color: #3366ff;"> width: 100%;</span>
<span style="color: #3366ff;"> width: 100%;</span>
<span style="color: #3366ff;"> height: 100%;</span>
<span style="color: #3366ff;"> float: left;</span>
<span style="color: #3366ff;"> background: orange;</span>
<span style="color: #3366ff;"> left: 0;</span>
<span style="color: #3366ff;"> overflow: auto;</span>
<span style="color: #3366ff;"> -webkit-overflow-scrolling: touch;</span>
<span style="color: #3366ff;">}</span></pre>
<pre><span style="color: #3366ff;">.container-menu {</span>
<span style="color: #3366ff;"> position: absolute;</span>
<span style="color: #3366ff;"> z-index: 0;</span>
<span style="color: #3366ff;"> width: 100%;</span>
<span style="color: #3366ff;"> height: 100%;</span>
<span style="color: #3366ff;"> background: #505050;</span>
<span style="color: #3366ff;"> overflow: auto;</span>
<span style="color: #3366ff;"> -webkit-overflow-scrolling: touch;</span>
<span style="color: #3366ff;">}</span></pre>
<pre><span style="color: #3366ff;">.abrir-cerrar {</span>
<span style="color: #3366ff;"> display: inline-block;</span>
<span style="color: #3366ff;"> margin-right: 20px;</span>
<span style="color: #3366ff;">}</span></pre>
</div>
<p>&nbsp;</p>
<p>Javascript</p>
<div style="border: 1px solid #ccc; height: 350px; overflow: auto; padding: 20px;">
<pre><span style="color: #999999;">/*</span>
<span style="color: #999999;">Title: CorniSwipe</span>
<span style="color: #999999;">Description: Herramienta para desplazar menus y otras tareas similares</span>
<span style="color: #999999;">Author: Luis Cornejo</span>
<span style="color: #999999;">Site: www.luiscornejo.com</span>
<span style="color: #999999;">*/</span>

<span style="color: #3366ff;">function principalSwipe(elem) {</span>

<span style="color: #3366ff;"> this.element = elem;</span>
<span style="color: #3366ff;"> this.element.posCursor = 0;</span>
<span style="color: #3366ff;"> this.element.style.transition = 'none';</span>
<span style="color: #3366ff;"> this.anguloArriba = -60;</span>
<span style="color: #3366ff;"> this.anguloAbajo = 60;</span>

<span style="color: #3366ff;">}</span>

<span style="color: #3366ff;">principalSwipe.prototype.propiedades = function() {</span>
<span style="color: #3366ff;"> this.element.cerrar = true</span>
<span style="color: #3366ff;">}</span>

<span style="color: #3366ff;">//Elementos del Dom</span>

<span style="color: #3366ff;">var pagina = document.querySelector('.contenido');</span>
<span style="color: #3366ff;">var contenedor = document.querySelector(".contenedor");</span>
<span style="color: #3366ff;">var menu = document.querySelector(".container-menu");</span>

<span style="color: #3366ff;">var anchoContenedor = contenedor.offsetWidth;</span>
<span style="color: #3366ff;">var posCursorInicioX, posCursorActualX, cerrado, posCursorInicioY, posCursorActualY;</span>
<span style="color: #3366ff;">var anchoVentana = window.innerWidth;</span>

<span style="color: #3366ff;">principalSwipe.prototype.inicio = function() {</span>

<span style="color: #3366ff;"> if (navigator.userAgent.match(/Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile/i)) {</span>
<span style="color: #3366ff;"> this.element.addEventListener('touchstart', mouseDown, false);</span>
<span style="color: #3366ff;"> this.element.addEventListener('touchend', mouseUp, false);</span>
<span style="color: #3366ff;"> } else {</span>
<span style="color: #3366ff;"> this.element.addEventListener('mousedown', mouseDown, false);</span>
<span style="color: #3366ff;"> this.element.addEventListener('mouseup', mouseUp, false);</span>
<span style="color: #3366ff;"> }</span>
<span style="color: #3366ff;">}</span>

<span style="color: #3366ff;">//Crear objeto</span>

<span style="color: #3366ff;">var pag = new principalSwipe(pagina)</span>

<span style="color: #3366ff;">//Propiedades objeto</span>

<span style="color: #3366ff;">pag.element.ancho = 260; //Ancho del menú</span>
<span style="color: #3366ff;">pag.element.cerrar = true; //Click en contenido con menú abierto cierra el menú</span>
<span style="color: #3366ff;">pag.enlaceCerrar = true; //Click en link de menú abierto cierra el menú</span>


<span style="color: #3366ff;">menu.style.width = pag.element.ancho+'px';</span>


<span style="color: #3366ff;">//Eventos</span>

<span style="color: #3366ff;">function mouseDown(event) {</span>

<span style="color: #3366ff;"> pag.element.style.transition = 'none';</span>
<span style="color: #3366ff;"> posCursorInicioX = event.clientX;</span>
<span style="color: #3366ff;"> posCursorInicioY = event.clientY;</span>

<span style="color: #3366ff;"> if (navigator.userAgent.match(/Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile/i)) {</span>
<span style="color: #3366ff;"> posCursorInicioX = event.touches[0].clientX;</span>
<span style="color: #3366ff;"> posCursorInicioY = event.touches[0].clientY;</span>
<span style="color: #3366ff;"> }</span>

<span style="color: #3366ff;"> if (navigator.userAgent.match(/Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile/i)) {</span>
<span style="color: #3366ff;"> this.addEventListener('touchmove', mouseMove, false);</span>
<span style="color: #3366ff;"> } else {</span>
<span style="color: #3366ff;"> this.addEventListener('mousemove', mouseMove, false);</span>
<span style="color: #3366ff;"> }</span>

<span style="color: #3366ff;"> var posElementX = pagina.getBoundingClientRect().left;</span>
<span style="color: #3366ff;"> var posContenedorX = contenedor.getBoundingClientRect().left;</span>

<span style="color: #3366ff;"> if (posElementX - 1 == posContenedorX || posElementX == posContenedorX) {</span>

<span style="color: #3366ff;"> cerrado = true;</span>

<span style="color: #3366ff;"> } else {</span>
<span style="color: #3366ff;"> cerrado = false;</span>

<span style="color: #3366ff;"> }</span>

<span style="color: #3366ff;">}</span>

<span style="color: #3366ff;">function mouseMove(event) {</span>

<span style="color: #3366ff;"> posCursorActualX = event.clientX;</span>
<span style="color: #3366ff;"> posCursorActualY = event.clientY;</span>

<span style="color: #3366ff;"> if (navigator.userAgent.match(/Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile/i)) {</span>
<span style="color: #3366ff;"> posCursorActualX = event.touches[0].clientX;</span>
<span style="color: #3366ff;"> posCursorActualY = event.touches[0].clientY;</span>
<span style="color: #3366ff;"> }</span>

<span style="color: #3366ff;"> var calcX = Number(posCursorActualX - posCursorInicioX);</span>
<span style="color: #3366ff;"> var calcY = Number(posCursorActualY - posCursorInicioY);</span>
<span style="color: #3366ff;"> var angulo = calcY / calcX;</span>
<span style="color: #3366ff;"> var anguloLimiteArriba = Math.tan(pag.anguloArriba);</span>
<span style="color: #3366ff;"> var anguloLimiteAbajo = Math.tan(pag.anguloAbajo)</span>

<span style="color: #3366ff;"> if (calcX &lt; 0) {</span>

<span style="color: #3366ff;"> if (cerrado) {</span>

<span style="color: #3366ff;"> var calcX = 0; //Deshabilita el swipe cuando está cerrado</span>

<span style="color: #3366ff;"> } else {</span>

<span style="color: #3366ff;"> var calcX = Number(posCursorActualX - posCursorInicioX + pag.element.ancho);</span>
<span style="color: #3366ff;"> }</span>

<span style="color: #3366ff;"> } else {</span>

<span style="color: #3366ff;"> if (anguloLimiteArriba &gt; angulo || anguloLimiteAbajo &lt; angulo) {</span>

<span style="color: #3366ff;"> var calcX = null;</span>

<span style="color: #3366ff;"> } else {</span>

<span style="color: #3366ff;"> var calcX = Number(posCursorActualX - posCursorInicioX);</span>
<span style="color: #3366ff;"> }</span>

<span style="color: #3366ff;"> }</span>

<span style="color: #3366ff;"> this.style.transform = 'translate3d(' + calcX + 'px, 0, 0)';</span>

<span style="color: #3366ff;">}</span>

<span style="color: #3366ff;">function mouseUp() {</span>

<span style="color: #3366ff;"> posCursorInicioY = posCursorActualY;</span>
<span style="color: #3366ff;"> this.removeEventListener('mousemove', mouseMove, false);</span>

<span style="color: #3366ff;"> var pagina = document.querySelector('.contenido');</span>

<span style="color: #3366ff;"> pag.x = pagina.getBoundingClientRect().left;</span>

<span style="color: #3366ff;"> if (pagina.getBoundingClientRect().left &lt; (anchoVentana / 2)) {</span>

<span style="color: #3366ff;"> this.style.transform = 'translate3d(0px, 0, 0)';</span>


<span style="color: #3366ff;"> } else {</span>

<span style="color: #3366ff;"> var pagina = document.querySelector('.contenido');</span>
<span style="color: #3366ff;"> this.style.transform = 'translate3d(' + pag.element.ancho + 'px, 0, 0)';</span>

<span style="color: #3366ff;"> }</span>

<span style="color: #3366ff;"> pag.element.style.transition = '0.2s ease';</span>
<span style="color: #3366ff;">}</span>

<span style="color: #3366ff;">pag.inicio();</span>


<span style="color: #3366ff;">//Botón abrir-cerrar</span>

<span style="color: #3366ff;">var botonAbrirCerrar = document.querySelector('.abrir-cerrar');</span>

<span style="color: #3366ff;">botonAbrirCerrar.addEventListener('click', abrirCerrar, false);</span>

<span style="color: #3366ff;">function abrirCerrar() {</span>

<span style="color: #3366ff;"> var posElementX = pagina.getBoundingClientRect().left;</span>
<span style="color: #3366ff;"> var posContenedorX = contenedor.getBoundingClientRect().left;</span>

<span style="color: #3366ff;"> if (posElementX - 1 == posContenedorX || posElementX == posContenedorX) {</span>

<span style="color: #3366ff;"> cerrado = true;</span>
<span style="color: #3366ff;"> pagina.style.transform = 'translate3d(' + pag.element.ancho + 'px, 0, 0)';</span>

<span style="color: #3366ff;"> } else {</span>
<span style="color: #3366ff;"> cerrado = false;</span>
<span style="color: #3366ff;"> pagina.style.transform = 'translate3d(0px, 0, 0)';</span>

<span style="color: #3366ff;"> }</span>
<span style="color: #3366ff;">}</span>

<span style="color: #3366ff;">//Cerrar Menu clicando el contenido</span>

<span style="color: #3366ff;">pagina.addEventListener('click', cerrarMenu, false);</span>

<span style="color: #3366ff;">function cerrarMenu() {</span>
<span style="color: #3366ff;"> if (navigator.userAgent.match(/Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile/i)) {</span>
<span style="color: #3366ff;"> var posElementX = pagina.getBoundingClientRect().left;</span>
<span style="color: #3366ff;"> var posContenedorX = contenedor.getBoundingClientRect().left;</span>
<span style="color: #3366ff;"> if (posElementX - 1 == posContenedorX || posElementX == posContenedorX) {</span>

<span style="color: #3366ff;"> cerrado = true;</span>

<span style="color: #3366ff;"> } else {</span>
<span style="color: #3366ff;"> cerrado = false;</span>
<span style="color: #3366ff;"> pagina.style.transform = 'translate3d(0px, 0, 0)';</span>

<span style="color: #3366ff;"> }</span>
<span style="color: #3366ff;"> }</span>
<span style="color: #3366ff;">}</span>

<span style="color: #3366ff;">//Click enlace menú cierra Menú</span>

<span style="color: #3366ff;">var enlaceMenu = document.querySelectorAll('.container-menu a');</span>

<span style="color: #3366ff;">if (pag.enlaceCerrar == true) {</span>

<span style="color: #3366ff;"> for (var i = 0; i &lt; enlaceMenu.length; i++) {</span>
<span style="color: #3366ff;"> enlaceMenu[i].addEventListener('click', enlaceCerrar, false);</span>
<span style="color: #3366ff;"> }</span>

<span style="color: #3366ff;"> function enlaceCerrar() {</span>

<span style="color: #3366ff;"> cerrado = false;</span>
<span style="color: #3366ff;"> pagina.style.transform = 'translate3d(0px, 0, 0)';</span>
<span style="color: #3366ff;"> var link = this.getAttribute("href");</span>
<span style="color: #3366ff;"> console.log(link)</span>
<span style="color: #3366ff;"> setTimeout(function() {</span>
<span style="color: #3366ff;"> window.location = link;</span>
<span style="color: #3366ff;"> }, 300);</span>

<span style="color: #3366ff;"> }</span>
<span style="color: #3366ff;">}</span></pre>
</div>
<p>&nbsp;</p>
<p>Link: <a title="corniSwipe" href="http://luiscornejo.com/dev/corniSwipe/" target="_blank">corniSwipe</a></p>
