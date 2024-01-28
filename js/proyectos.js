(() => {
    // $(".inline").colorbox({inline:true, width:"50%"});

    const contMasProyectos = document.getElementById('mas-proyectos')
    const btnVerMasProyectos = document.getElementById('ver-mas')

    btnVerMasProyectos.addEventListener('click', (e) => {
        e.preventDefault()
        contMasProyectos.style.display = "block"
        console.log('make visible')
    })
})()