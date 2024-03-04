(() => {
    // $(".inline").colorbox({inline:true, width:"50%"});

    const contMasProyectos = document.getElementById('mas-proyectos')
    const btnVerMasProyectos = document.getElementById('ver-mas')
    // Check current page language
    const urlParams = new URLSearchParams(window.location.search);
    const lang = urlParams.get('lang');

    btnVerMasProyectos.addEventListener('click', handleClick)

    function handleClick(e) {
        e.preventDefault()

        if (contMasProyectos.style.display != "block") {
            contMasProyectos.style.display = "block"
            btnVerMasProyectos.innerHTML = (lang=='es') ? 'Ver menos' : 'Show less'
            console.log('make visible')
        } else {
            contMasProyectos.style.display = "none"
            btnVerMasProyectos.innerHTML = (lang=='es') ? 'Ver más' : 'Show more'
            console.log('make invisible')
        }
    }
})()