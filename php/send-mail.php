<?php
 
    $to = "sofia_bracho1@hotmail.com";
    $subject = $_POST["nombre"] . " Portafolio contacto";
    $message = $_POST["mensaje"];
    $headers = "From: " . filter_var($_POST["correo"], FILTER_SANITIZE_EMAIL);

    if( mail($to, $subject, $message, $headers) ) {
        $respuesta = array(
            "resultado" => "exito"
        );
    } else {
        $respuesta = array(
            "resultado" => "error"
        );
    }

    die (json_encode($respuesta));
