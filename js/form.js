(() => {
    let formulario = document.querySelector("#form-contacto");
    let nombre = document.querySelector("#nombre");
    let correo = document.querySelector("#correo");
    let mensaje = document.querySelector("#mensaje");

    formulario.addEventListener("submit", (e) =>{
        e.preventDefault();

        let datos = new FormData(formulario);
        datos.append("nombre", nombre.value);
        datos.append("correo", correo.value);
        datos.append("mensaje", mensaje.value);

        let xhr = new XMLHttpRequest();

        xhr.open("post", "php/send-mail.php", true);


        xhr.onreadystatechange = (respuesta) => {
            if (xhr.readyState == 4) {
               if(xhr.status == 200){
                    respuesta=JSON.parse(xhr.responseText);
                    if(respuesta.resultado=="exito") {
                        Swal.fire({
                            icon: "success",
                            text: "El email ha sido enviado",
                            showConfirmButton: false,
                            timer: 1500
                        });
                    }
                } else {
                    Swal.fire({
                        icon: "error",
                        text: "Ha ocurrido un error al enviar el email",
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            }
        }

        xhr.send(datos);

        formulario.reset();
    });
})();