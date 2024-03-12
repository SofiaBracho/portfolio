<?php 
    // Set default language
    $language = "en";
    if(!empty($_GET['lang']) && ($_GET['lang'] == 'es' ||  $_GET['lang'] == 'en')) {
        $language = $_GET['lang'];
    }

    // Set cookie for the language
    $_COOKIE['lang'] = $language;
    setcookie('lang', $_COOKIE['lang']);
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Sofia Bracho | Web Developer</title>
    <!-- Social media cards -->
    <meta property="og:title" content="Sofia Bracho - Web Developer"/>
    <meta property="og:description" content="Portfolio showcasing Sofia's web development projects and other relevant information."/>
    <meta property="og:url" content="https://sofiadevportfolio.000webhostapp.com/" />
    <meta property="og:image" content="https://sofiadevportfolio.000webhostapp.com/img/social-card.jpg" />
    <meta property="og:image:width" content="1200"/>
    <meta property="og:image:height" content="630"/>
    <meta property=”og:type” content=website />
    <meta property="og:site_name" content="Sofia Bracho" />
    <!-- Stylesheets -->
    <script src="js/glide.min.js"></script>
    <link rel="stylesheet" href="css/glide.core.min.css"> 
    <link rel="stylesheet" href="css/normalize.css">
    <link rel="stylesheet" href="css/styles.css">
    <link rel="stylesheet" href="css/side-menu.css">
    <script src="https://kit.fontawesome.com/72df3b1037.js" crossorigin="anonymous"></script>    <link rel="preconnect" href="https://fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css2?family=Lobster&family=Roboto:wght@400;700&display=swap" rel="stylesheet">
    <!-- Alertas -->
    <script src="https://cdn.jsdelivr.net/npm/sweetalert2@11"></script>
    <!-- Emojis https://emoji-css.afeld.me/ -->
    <link href="https://emoji-css.afeld.me/emoji.css" rel="stylesheet">
    <!-- Favicon -->
    <link rel="icon" type="image/x-icon" href="img/favicon.ico">
</head>
<body>

    <?php
        // Shows content of the page according to the language
        if ($_COOKIE['lang'] == "es") {
            require("content_es.php");
        } else {
            require("content_en.php"); // Por defecto en ingles
        }
    ?>
    
    <script src="js/menu.js"></script>
    <script src="js/proyectos.js"></script>
    <script src="js/copy.js"></script>
    <script src="js/carousel.js"></script>
    <script src="js/form.js"></script>
    <script src="js/jquery-1.12.0.min.js"></script>
</body>
</html>