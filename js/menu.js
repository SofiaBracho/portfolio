const btn = document.querySelector('#menu-btn');
const menu = document.querySelector('#side-menu');
const menuItem = document.querySelectorAll(".item");
const body = document.querySelector(".cuerpo");
const btnContact = document.querySelector(".btn-contact");

btnContact.addEventListener('click', () => {
    btnMenu('contacto')
})

//Expandir y contraer menú
btn.addEventListener('click', () => {
    menu.classList.toggle("menu-expanded");
    menu.classList.toggle("menu-collapsed");
    body.classList.toggle("bg-gray");

    document.querySelector('body').classList.toggle('body-expanded');
});


//Detecta el boton del menu que fue presionado
menuItem.forEach(item => {
    item.addEventListener("click", (e)=>{
        e.preventDefault();
        let id;

        if(e.target.id) id=e.target.id;
        else if (e.target.parentElement.id) id=e.target.parentElement.id;
        else if (e.target.parentElement.parentElement.id) id=e.target.parentElement.parentElement.id;

        btnMenu(id);
    })
    
});

//Lleva el scroll hacia el contenedor indicado
function btnMenu(id) {
    let contenedor = document.querySelector("." + id + ".contenedor");
    if(id=='habilidades') {
        contenedor = document.querySelector("." + id + ".contenedor").parentElement;        
    }
    else if(id=='trabajos') {
        contenedor = document.querySelector(".contenedor-proyectos");
    }
    let scrollCont=contenedor.offsetTop;

    window.scroll({
        top: scrollCont,
        behavior: 'smooth'
    });

}

//Animación de texto
const animado = document.querySelectorAll('.habilidad .barra');
const contenedorHabilidades = document.querySelector('#bg-habilidades');

document.addEventListener('scroll', () => {
    let scroll = document.documentElement.scrollTop;

    if(contenedorHabilidades.offsetTop -200 < scroll) {

        animado.forEach(e => {
            e.classList.add('animado');
        });

    }
})
