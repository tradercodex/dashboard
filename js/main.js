const boton = document.getElementById('boton-sidebar')
const html = document.getElementById('html')
const botonSidebarLeft = document.getElementById('boton-sidebar_left')
const navbar = document.getElementById('content-buttons')
const botonFixed = document.getElementById('content-button_fixed')
const sidebar = document.getElementById('sidebar')
const contenedor = document.getElementById('main')

boton.addEventListener('click', function() {
    sidebar.classList.toggle('toggle');
    contenedor.classList.toggle('main');
    botonFixed.classList.remove('block');
    botonFixed.classList.add('align');
})

botonFixed.addEventListener('click', function() {
    sidebar.classList.toggle('toggle');
    contenedor.classList.toggle('main')
})

botonSidebarLeft.addEventListener('click', function() {
    html.classList.toggle('nav-open');
})

function mostrarBotonFixed() {
    let scroll = document.documentElement.scrollTop
    console.log(scroll)
    if(scroll >= 25) {
        navbar.classList.add('none');
        botonFixed.classList.add('block');
    } else {
        navbar.classList.remove('none');
        botonFixed.classList.remove('block');
    }
}


window.addEventListener('scroll', mostrarBotonFixed);