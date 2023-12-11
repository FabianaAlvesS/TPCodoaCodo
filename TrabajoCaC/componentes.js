let miHeader =`
    <div class="span-header">
        <p>Super ofertas de primavera - Envios gratis a todo el pais a partir de 20.000$</p>
    </div>

    <div class="header">
        <div class="logo">
            <img src="imagen/Logo Bicicleteria Minimalista Verde  (1).png">
            <link rel="icon" type="image/jpg" href="Bici.jpg" />
        </div>
        <!--******************** Buscador **************************-->
        <div class="header-busqueda">
            <div class="buscador">
                <form action="" method="post"></form>
                    <input class="CuadroBuscador" type="search" name="buscar Producto" placeholder="Buscar...">
                    <input class="BotonBuscador" type="submit" value="Buscar">
                </form>
            </div>

            <!--******************** menu desplegable **************************-->
            <div class="nav">
                <nav id="Nav">
                    <ul class="items">
                        <li><a href="index.html">Inicio</a></li>
                        <li><a href="productos.html">Productos</a>
                            <ul class="items">
                                <li class="itemMenu"><a href="#">Bicicletas</a></li>
                                <li class="itemMenu"><a href="#">Indumentarias</a></li>
                                <li class="itemMenu"><a href="#">Accesorios</a></li>
                                <li class="itemMenu"><a href="#">Repuestos</a></li>
                                <li class="itemMenu"><a href="#">Marcas</a></li>
                            </ul>
                        </li>
                        <li><a href="servicios.html">Servicios</a>
                            <ul class="items">
                                <li class="itemMenu"><a href="#">Mantenimiento</a></li>
                                <li class="itemMenu"><a href="#">Delivery</a></li>
                                <li class="itemMenu"><a href="#">Eventos</a></li>
                                <li class="itemMenu"><a href="#">Seguridad</a></li>
                                <li class="itemMenu"><a href="#">Salud</a></li>
                            </ul>
                        </li>
                        <li><a href="nosotros.html">Nosotros</a></li>
                        <li><a href="#">Contacto</a></li>
                    </ul>
                </nav>
            </div>
        </div>
        <!--******************** Buscador **************************-->

        <div class="CuentaDeUsuario">
            <a href="Form2.html">Crear cuenta </a>
            <a href="Form3.html">ingresar</a>
            <a href="carrito.html">Mis compras</a>
            <a href="misproductos.html">Mis productos</a>
        </div>
    </div>
`

document.querySelector("header").innerHTML = miHeader;

let miFooter = `
<footer class="pie">

        <div class="pie-sobre_Nosotros"> 
            
            <h3 class="TituloSobreNosotros">Sobre Nosotros</h3>
            
            <p>Tenemos todo para el armado de
            bicicletas adecuadas a cada persona
            según uso, presupuesto y gustos.
            Una bike para cada persona, armá la tuya
            como quieras! Bicicletas de
            competición, XC, 4X, DH, Urban.
            La mayor variedad en bikes, partes,
            repuestos y las mejores marcas</p>
        </div>

        <div class="pie-Ayuda">
            <h3>Ayuda</h3>

            <a href="#"> ¿Como comprar?</a>
            <a href="#"> Cambios & devoluciones</a>
            <a href="#"> Botón de arrepentimiento</a>
        </div>
        
        <div class="pie-Escribinos"> 
            <h3>Escribinos</h3>
            
            <span><i class="fa-brands fa-whatsapp"></i> 23232323</span>
            <span><a href="#"><i class="fa-regular fa-envelope"></i></a> Rodamundo@gmail.com </span>
            <span><a href="#"><i class="fa-sharp fa-regular fa-location-dot"></i></a>calle siempre viva 123 , san rafael gutierres , argentina </span>
        </div>


        <div class="pie-Seguinos"> 
            <h3>Seguinos</h3>
            
            <ul class="ul-redes">
                <li class="li-redes"><a href="https://www.google.com/search?q=facebook&rlz=1C1ONGR_esAR1075AR1075&oq=facebook&gs_lcrp=EgZjaHJvbWUqBwgAEAAYjwIyBwgAEAAYjwIyFQgBEC4YQxiDARjHARixAxjRAxiKBTIGCAIQRRhAMgYIAxBFGDwyBggEEAUYQDIGCAUQRRg8MgYIBhBFGDwyBggHEEUYPNIBCDIyMTVqMGo0qAIAsAIA&sourceid=chrome&ie=UTF-8"><i class="fa-brands fa-facebook" style="color: #0d0d0d;"></i></a></li>
                <li class="li-redes"><a href="https://www.instagram.com/"><i class="fa-brands fa-instagram" style="color: #0c0d0d;"></i></a></li>
            </ul>
        </div>

    </footer>
`

document.querySelector("footer").innerHTML = miFooter;

// let cartas = `

// <section class="contenedor">

// `

// for(let elemento of data) {
//   cartas = cartas + `
//         <div class="item-box">
//             <div class="img-box">
//                 <a href="producto1.html">
//                     <img class="item-img" src= ${elemento.image_url} alt="producto" /></a>
//             </div>

//             <p id="descripcion"> ${elemento.nombre} </p>
//             <span id="precio"> ${elemento.precio} </span>
//         </div>
//   `
// }

// cartas = cartas + `</div>`

// document.querySelector("section").innerHTML = cartas;