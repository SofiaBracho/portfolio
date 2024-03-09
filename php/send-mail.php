<?php
    require '../PHPMailer/src/Exception.php';
    require '../PHPMailer/src/PHPMailer.php';
    require '../PHPMailer/src/SMTP.php';
    require 'login-data.php';
 
    use PHPMailer\PHPMailer\PHPMailer;
    use PHPMailer\PHPMailer\Exception;
    
    $remitente = array(
        "correo" => $_POST["correo"],
        "nombre" => $_POST["nombre"]
    );
    $destinatario = $email;
    $asunto = $_POST["nombre"] . " - Portafolio Web";
    $cuerpo = $_POST["mensaje"];

    
    // Enviar correo electrónico
    function enviarCorreo($remitente, $destinatario, $asunto, $cuerpo) { 
        require 'login-data.php';
               
        // Create an instance; passing `true` enables exceptions
        $mail = new PHPMailer(true);

        try {
            $mail->SMTPOptions = array(
                'ssl' => array(
                    'verify_peer' => false,
                    'verify_peer_name' => false,
                    'allow_self_signed' => true
                )
            );
    
            //Server settings
            $mail->SMTPDebug = 0;                      // 2 Enables verbose debug output, 0 doesn't show any debug info
            $mail->isSMTP();                                         //Send using SMTP
            $mail->Host       = 'smtp.gmail.com';                    //Set the SMTP server to send through
            $mail->SMTPAuth   = true;                                //Enable SMTP authentication
            $mail->Username   = $email;          //SMTP username
            $mail->Password   = $password;               //SMTP password
            $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;      // 'ssl'    // 'PHPMailer::ENCRYPTION_SMTPS   //Enable implicit TLS encryption
            $mail->Port       = 587;                                 //TCP port to connect to; use 587 if you have set `SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS`
    
            //Remitent
            $mail->setFrom($remitente["correo"], $remitente["nombre"]);

            //Recipients
            $mail->addAddress($destinatario);

            //Content
            $mail->isHTML(true);                                  //Set email format to HTML
            $mail->Subject = $asunto;
            $mail->Body    = "From: " . $remitente["nombre"] . " - " . $remitente["correo"] . "<br/>" . $cuerpo;
            $mail->AltBody = $cuerpo;
            
            $mail->send();
            
            // Devolver un mensaje de exito
            $respuesta = array(
                "resultado" => "exito"
            );

        } catch (Exception $e) {
            // Devolver un mensaje de error
            $respuesta = array(
                "resultado" => "error",
                "mensaje" => $e->getMessage()
            );
        }

        die (json_encode($respuesta));
    }
    
    enviarCorreo($remitente, $destinatario, $asunto, $cuerpo);
