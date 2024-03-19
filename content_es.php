    <!-- MENU -->
    <div id="side-menu" class="menu-collapsed">

        <!-- HEADER -->
        <div id="menu-header">
            <div id="menu-btn">
                <i class="fas fa-bars"></i>
            </div>
            <div id="title"><span>Mi portafolio</span></div>
        </div>

        <!-- PROFILE -->
        <div id="profile">
            <div id="photo"><img src="img/foto.jpg" alt="Profile Photo"></div>

            <div id="name"><span>Sofia Bracho</span></div>
        </div>

        <!-- ITEMS -->
        <div id="menu-items">
            <div class="item" id="sobre-mi">
                <a href="#"></a>
                    <div class="icon"> <i class="fa-solid fa-address-card"></i> </div>
                    <div class="title"> <span>Sobre mí</span> </div>
                </a>
            </div>

            <div class="item" id="tecnologias">
                <a href="#"></a>
                    <div class="icon"> <i class="fas fa-code"></i> </div>
                    <div class="title"> <span>Tecnologías</span> </div>
                </a>
            </div>

            <div class="item" id="trabajos">
                <a href="#"></a>
                    <div class="icon"> <i class="fa-solid fa-file-code"></i> </div>
                    <div class="title"> <span>Proyectos</span> </div>
                </a>
            </div>

            <div class="item" id="habilidades">
                <a href="#"></a>
                    <div class="icon"> <i class="fas fa-palette"></i> </div>
                    <div class="title"> <span>Habilidades</span> </div>
                </a>
            </div>

            <div class="item" id="experiencia">
                <a href="#"></a>
                    <div class="icon"> <i class="fas fa-briefcase"></i> </div>
                    <div class="title"> <span>Experiencia</span> </div>
                </a>
            </div>

            <div class="item" id="educacion">
                <a href="#"></a>
                    <div class="icon"> <i class="fa-solid fa-graduation-cap"></i> </div>
                    <div class="title"> <span>Educación</span> </div>
                </a>
            </div>

            <div class="item-separator"></div>

            <div class="item" id="contacto">
                <a href="#"></a>
                    <div class="icon"> <i class="fas fa-phone-alt"></i> </div>
                    <div class="title"> <span>Contacto</span> </div>
                </a>
            </div>
        </div>

        <!-- TOGGLE LANG -->
        <div id="toggle-lang">
            <?php 
                // Toggle current language, default english
                if ($_COOKIE['lang'] == "es") { ?>
                    <a href="index.php?lang=en">
                        <img src="img/language/us.svg" width="30" height="25" alt="US Flag">
                        <p>EN</p>
                        <span>English</span>
                    </a>
            <?php } else { ?>
                    <a href="index.php?lang=es">
                        <img src="img/language/es.svg" width="30" height="25" alt="ES Flag">
                        <p>ES</p>
                        <span>Español</span>
                    </a>
            <?php }
            ?>
        </div>
    </div>

    <!-- MAIN -->
    <div class="cuerpo">
        <!-- HEADER -->
        <div class="hero"></div>
        <div class="contenedor-hero">
            <div class="contenedor">
                <header class="header">
                    <img src="img/logo.png" alt="Logo" class="logo">
                </header>

                <div class="datos">
                    <h1 class="title">Hola! <i class="em em-wave" aria-role="presentation" aria-label="WAVING HAND SIGN"></i>
                        <br> 
                        Soy Sofia Bracho,
                        <br>
                        Desarrolladora frontend
                    </h1>
                    <p class="resumen">Diseño y desarrollo experiencias que hacen la vida de las personas más fácil, por medio de aplicaciones web.</p>
                    <button class="btn btn-contact">Contáctame</button>
                </div>
            </div>
        </div>

        <!-- SOBRE MI -->
        <div class="contenedor sobre-mi">
            <h2>Sobre mi</h2>
            <div>
                <div class="descripcion">
                    <p>
                        Soy <b>desarrolladora web frontend</b> con estudios en Ingeniería Informática y experiencia en el área de diseño. <b>Biligue</b> (español e inglés). Me apasiona la tecnología en general y el arte como medio de expresión. Creo que al combinar estas dos disciplinas se libera un gran potencial creativo, permitiendo crear experiencias digitales únicas a través de la programación.  
                    </p>
                </div>

                <img id="foto" src="img/foto.jpg" alt="Foto personal">
            </div>

        </div>

        <!-- TECNOLOGIAS -->
        <div class="tecnologias contenedor">
            <h2>Tecnologías</h2>
            <!-- Carrousel con logos y nivel de progreso-->
            <div class="glide imagenes">
                
                <div class="glide__track" data-glide-el="track">
                    <ul class="glide__slides">
                        <li class="glide__slide">
                            <div id="html">
                                <img src="img/logos/html.png" alt="HTML5">
                                <p>HTML5</p>
                                <div class="barra">
                                    <div class="progreso"></div>
                                </div>
                            </div>
                        </li>
                        <li class="glide__slide">
                            <div id="css" class="big">
                                <img src="img/logos/css.png" alt="CSS3">
                                <p>CSS3</p>
                                <div class="barra">
                                    <div class="progreso"></div>
                                </div>
                            </div>
                        </li>
                        <li class="glide__slide">
                            <div id="javascript" class="big">
                                <img src="img/logos/javascript.png" alt="JavaScript">
                                <p>JavaScript</p>
                                <div class="barra">
                                    <div class="progreso"></div>
                                </div>
                            </div>
                        </li>
                        <li class="glide__slide">
                            <div id="mysql">
                                <img src="img/logos/mysql.png" alt="MySQL">
                                <p>MySQL</p>
                                <div class="barra">
                                    <div class="progreso"></div>
                                </div>
                            </div>
                        </li>
                        <li class="glide__slide">
                            <div id="php">
                                <img src="img/logos/php.png" alt="PHP">
                                <p>PHP</p>
                                <div class="barra">
                                    <div class="progreso"></div>
                                </div>
                            </div>
                        </li>
                        <li class="glide__slide">
                            <div id="git">
                                <img src="img/logos/git.png" alt="GIT">
                                <p>GIT</p>
                                <div class="barra">
                                    <div class="progreso"></div>
                                </div>
                            </div>
                        </li>
                        <li class="glide__slide">
                            <div id="github">
                                <img src="img/logos/github.png" alt="GitHub">
                                <p>GitHub</p>
                                <div class="barra">
                                    <div class="progreso"></div>
                                </div>
                            </div>
                        </li>
                        <li class="glide__slide">
                            <div id="bootstrap">
                                <img src="img/logos/bootstrap.png" alt="Bootstrap">
                                <p>Bootstrap</p>
                                <div class="barra">
                                    <div class="progreso"></div>
                                </div>
                            </div>
                        </li>
                        <li class="glide__slide">
                            <div id="react">
                                <img src="img/logos/react.png" alt="React">
                                <p>React</p>
                                <div class="barra">
                                    <div class="progreso"></div>
                                </div>
                            </div>
                        </li>
                        <li class="glide__slide">
                            <div id="python">
                                <img src="img/logos/python.png" alt="Python">
                                <p>Python</p>
                                <div class="barra">
                                    <div class="progreso"></div>
                                </div>
                            </div>
                        </li>
                        <!-- <li class="glide__slide">
                            <div id="cplusplus" class="big">
                                <img src="img/logos/c++.png" alt="C++">
                                <p>C++</p>
                                <div class="barra">
                                    <div class="progreso"></div>
                                </div>
                            </div>
                        </li> -->
                    </ul>
                </div>

                <div class="glide__arrows" data-glide-el="controls">
                    <button class="glide__arrow glide__arrow--left" data-glide-dir="<"><i class="fas fa-chevron-left"></i></button>
                    <button class="glide__arrow glide__arrow--right" data-glide-dir=">"><i class="fas fa-chevron-right"></i></button>
                </div>
                
            </div>

        </div>

        <!-- PROYECTOS -->
        <!-- Agregar contenedor con sombras y margenes a los lados excepto en mobile -->
        <div class="contenedor-proyectos">
            <h2>Proyectos</h2>
            <ul class="lista-proyectos">

                <li class='proyecto'>
                    <div class="info-proyecto">
                        <img src="img/trabajos/piensa.jpg" alt="Imagen del proyecto">
                        <div>
                            <div>
                                <div class="titulo-proyecto">
                                    <h3>Aula Virtual "PIENSA"</h3>
                                </div>
                                <p>Sistema educativo para la Universidad Politécnica Territorial de Maracaibo. Tiene sesiones para estudiantes, profesores, coordinadores y administrador. Ofrece funciones como publicar y evaluar actividades, comunicación entre profesores y estudiantes, planificar clases, dar seguimiento a calificaciones, compartir documentos y libros, manejar horarios, perfiles, periodos académicos y respaldos automáticos de la base de datos.</p>
                            </div>
                            <div id="tecnologias">
                                Tecnologías utilizadas:
                                <div>
                                    <div class="tecnologia html">
                                        <i class="fa-brands fa-html5"></i></i>HTML5
                                    </div>
                                    <div class="tecnologia css">
                                        <i class="fa-brands fa-css3-alt"></i></i>CSS
                                    </div>
                                    <div class="tecnologia javascript">
                                        <i class="fa-brands fa-js"></i>JavaScript
                                    </div>
                                    <div class="tecnologia php">
                                        <i class="fa-brands fa-php"></i>PHP
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="cortina">
                        <a href="https://aulavirtual-piensa.000webhostapp.com/login.php" target="_blank">
                            <i class="fa-solid fa-link"></i>
                            <p>Demo en vivo</p>
                        </a>
                        <a class="disabled">
                            <i class="fa-solid fa-x"></i>
                            <p>Repositorio privado</p>
                        </a>
                    </div>
                </li>

                <li class='proyecto'>
                        <div class="info-proyecto">
                            <img src="img/trabajos/fashion.jpg" alt="Imagen del proyecto">
                            <div>
                                <div>
                                    <div class="titulo-proyecto">
                                        <h3>Bella exclusiva presupuestos de moda</h3>
                                    </div>
                                    <p>Aplicación web que calcula un Presupuesto justo de ropa a la medida según la dificultad de confección (depende de prendas, materiales y talla), considerando variables como el costo por hora de trabajo y una variable de control manejada por el administrador.</p>
                                </div>
                                <div id="tecnologias">
                                    Tecnologías utilizadas:
                                    <div>
                                        <div class="tecnologia html">
                                            <i class="fa-brands fa-html5"></i>HTML5
                                        </div>
                                        <div class="tecnologia css">
                                            <i class="fa-brands fa-css3-alt"></i>CSS
                                        </div>
                                        <div class="tecnologia javascript">
                                            <i class="fa-brands fa-js"></i>JavaScript
                                        </div>
                                        <div class="tecnologia bootstrap">
                                            <i class="fa-brands fa-bootstrap"></i>Bootstrap
                                        </div>
                                        <div class="tecnologia python">
                                            <i class="fa-brands fa-python"></i>Python
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="cortina">
                            <a href="https://fashion-budget-production.up.railway.app/" target="_blank">
                                <i class="fa-solid fa-link"></i>
                                <p>Demo en vivo</p>
                            </a>
                            <a href="https://github.com/SofiaBracho/fashion-budget" target="_blank">
                                <i class="fa-solid fa-code"></i>
                                <p>Ver código</p>
                            </a>
                        </div>
                </li>

                <li class='proyecto'>
                    <div class="info-proyecto">
                        <img src="img/trabajos/flashcards.jpg" alt="Imagen del proyecto">
                        <div>
                            <div>
                                <div class="titulo-proyecto">
                                    <h3>Aplicación Tarjetas didácticas para aprendizaje de idiomas</h3>
                                </div>
                                <p>Esta aplicación de Django permite a los usuarios crear y estudiar tarjetas didácticas, realizar un seguimiento de su progreso y revisar las palabras aprendidas. Incluye funciones como seguimiento de competencia, estadísticas y autenticación de usuarios.</p>
                            </div>
                            <div id="tecnologias">
                                Tecnologías utilizadas:
                                <div>
                                    <div class="tecnologia html">
                                        <i class="fa-brands fa-html5"></i>HTML5
                                    </div>
                                    <div class="tecnologia css">
                                        <i class="fa-brands fa-css3-alt"></i>CSS
                                    </div>
                                    <div class="tecnologia javascript">
                                        <i class="fa-brands fa-js"></i>JavaScript
                                    </div>
                                    <div class="tecnologia python">
                                        <i class="fa-brands fa-python"></i>Python
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="cortina">
                        <a href="https://flashcards.up.railway.app/" target="_blank">
                            <i class="fa-solid fa-link"></i>
                            <p>Demo en vivo</p>
                        </a>    
                        <a href="https://github.com/SofiaBracho/flashcards" target="_blank">
                            <i class="fa-solid fa-code"></i>
                            <p>Ver código</p>
                        </a>
                    </div>
                </li>

                <div id="mas-proyectos">

                    <li class='proyecto'>
                        <div class="info-proyecto">
                            <img src="img/trabajos/mini-diary.jpg" alt="Imagen del proyecto">
                            <div>
                                <div>
                                    <div class="titulo-proyecto">
                                        <h3>Mini Diary web</h3>
                                    </div>
                                    <p>Aplicación de diario personal. Contiene funcionalidades como importación y exportación de datos en formato JSON, creación de cuentas de usuario, paginación, y CRUD de entradas diarias. Su diseño es minimalista y responsive.</p>
                                </div>
                                <div id="tecnologias">
                                    Tecnologías utilizadas:
                                    <div>
                                        <div class="tecnologia html">
                                            <i class="fa-brands fa-html5"></i></i>HTML5
                                        </div>
                                        <div class="tecnologia css">
                                            <i class="fa-brands fa-css3-alt"></i></i>CSS
                                        </div>
                                        <div class="tecnologia javascript">
                                            <i class="fa-brands fa-js"></i>JavaScript
                                        </div>
                                        <div class="tecnologia php">
                                            <i class="fa-brands fa-php"></i>PHP
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="cortina">
                            <a href="https://github.com/SofiaBracho/diary-web" target="_blank">
                                <i class="fa-solid fa-code"></i>
                                <p>Ver código</p>
                            </a>
                        </div>
                    </li>
                
                    <li class='proyecto'>
                        <div class="info-proyecto">
                            <img src="img/trabajos/clima.jpg" alt="Imagen del proyecto">
                            <div>
                                <div>
                                    <div class="titulo-proyecto">
                                        <h3>Aplicación del clima</h3>
                                    </div>
                                    <p>Esta aplicación desarrollada con React utiliza una API de geolocalización para obtener la ubicación del usuario. Posteriormente muestra la estimación del clima en tu ubicación, con datos como la temperatura, sensación térmica, humedad, presión y velocidad del viento.</p>
                                </div>
                                <div id="tecnologias">
                                    Tecnologías utilizadas:
                                    <div>
                                        <div class="tecnologia html">
                                            <i class="fa-brands fa-html5"></i></i>HTML5
                                        </div>
                                        <div class="tecnologia css">
                                            <i class="fa-brands fa-css3-alt"></i></i>CSS
                                        </div>
                                        <div class="tecnologia react">
                                            <i class="fa-brands fa-react"></i>React
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="cortina">
                            <a href="https://sofiabracho.github.io/weather/" target="_blank">
                                <i class="fa-solid fa-link"></i>
                                <p>Demo en vivo</p>
                            </a>
                            <a href="https://github.com/SofiaBracho/weather" target="_blank">
                                <i class="fa-solid fa-code"></i>
                                <p>Ver código</p>
                            </a>
                        </div>
                    </li>

                    <li class='proyecto'>
                        <div class="info-proyecto">
                            <img src="img/trabajos/network.jpg" alt="Imagen del proyecto">
                            <div>
                                <div>
                                    <div class="titulo-proyecto">
                                        <h3>Red social</h3>
                                    </div>
                                    <p>Esta es una red social similar a Twitter creada con Django y JavaScript asíncrono. Permite a los usuarios crear cuentas, seguir a otros usuarios, publicar mensajes y dar me gusta a las publicaciones.</p>
                                </div>
                                <div id="tecnologias">
                                    Tecnologías usadas:
                                    <div>
                                        <div class="tecnologia html">
                                            <i class="fa-brands fa-html5"></i>HTML5
                                        </div>
                                        <div class="tecnologia css">
                                            <i class="fa-brands fa-css3-alt"></i>CSS
                                        </div>
                                        <div class="tecnologia javascript">
                                            <i class="fa-brands fa-js"></i>JavaScript
                                        </div>
                                        <div class="tecnologia python">
                                            <i class="fa-brands fa-python"></i>Python
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="cortina">
                            <a href="https://social-network-production-4b10.up.railway.app/" target="_blank">
                                <i class="fa-solid fa-link"></i>
                                <p>Demo en vivo</p>
                            </a>
                            <a href="https://github.com/SofiaBracho/social-network" target="_blank">
                                <i class="fa-solid fa-code"></i>
                                <p>Ver código</p>
                            </a>
                        </div>
                    </li>
                    
                    <li class='proyecto'>
                        <div class="info-proyecto">
                            <img src="img/trabajos/email.jpg" alt="Imagen del proyecto">
                            <div>
                                <div>
                                    <div class="titulo-proyecto">
                                        <h3>Simulación de cliente de correo electrónico</h3>
                                    </div>
                                    <p>Aplicación de simulación de correo electrónico de una sola página que utiliza Python, Django y Javascript asíncrono. Permite a los usuarios redactar, enviar, archivar y responder correos electrónicos en una sola página utilizando JavaScript y puntos finales de Python en el back-end.</p>
                                </div>
                                <div id="tecnologias">
                                    Tecnologías usadas:
                                    <div>
                                        <div class="tecnologia html">
                                            <i class="fa-brands fa-html5"></i>HTML5
                                        </div>
                                        <div class="tecnologia css">
                                            <i class="fa-brands fa-css3-alt"></i>CSS
                                        </div>
                                        <div class="tecnologia javascript">
                                            <i class="fa-brands fa-js"></i>JavaScript
                                        </div>
                                        <div class="tecnologia python">
                                            <i class="fa-brands fa-python"></i>Python
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="cortina">
                            <a href="https://email-app-production.up.railway.app/" target="_blank">
                                <i class="fa-solid fa-link"></i>
                                <p>Demo en vivo</p>
                            </a>
                            <a href="https://github.com/SofiaBracho/email-app" target="_blank">
                                <i class="fa-solid fa-code"></i>
                                <p>Ver código</p>
                            </a>
                        </div>
                    </li>
                </div>
                
                <a href="#" id="ver-mas">Ver más</a>
            </ul>
        </div>

        <!-- HABILIDADES -->
        <div id="bg-habilidades">
            <div class="habilidades contenedor">
                <h3>Habilidades</h3>
                <p>Mis habilidades técnicas y blandas</p>
                <div class="contenedor-habilidades">

                        <div>
                            <small>Programación</small>
                            <div class="habilidad">
                                <div class="barra">
                                    <div class="h-80"></div>
                                </div>
                                <div class="descripcion">
                                    <i class="fa fa-code"></i>
                                    <p>Programación</p>
                                </div>
                            </div>
                        </div>
                        
                        <div>
                            <small>Control de versiones</small>
                            <div class="habilidad">
                                <div class="barra">
                                    <div class="h-40"></div>
                                </div>
                                <div class="descripcion">
                                    <i class="fa-solid fa-code-merge"></i>
                                    <p>Control de versiones</p>
                                </div>
                            </div>
                        </div>
                        
                        <div>
                            <small>Diseño</small>
                            <div class="habilidad">
                                <div class="barra">
                                    <div class="h-70"></div>
                                </div>
                                <div class="descripcion">
                                    <i class="fa-solid fa-pen-nib"></i>
                                    <p>Diseño</p>
                                </div>
                            </div>
                        </div>

                        <div>
                            <small>Maquetación</small>        
                            <div class="habilidad">
                                <div class="barra">
                                    <div class="h-60"></div>
                                </div>
                                <div class="descripcion">
                                    <i class="fa-solid fa-table-cells-large"></i>
                                    <p>Maquetación</p>
                                </div>
                            </div>
                        </div>    

                        <div>
                            <small>Marketing en RRSS</small>
                            <div class="habilidad">
                                <div class="barra">
                                    <div class="h-30"></div>
                                </div>
                                <div class="descripcion">
                                    <i class="fa-solid fa-hashtag"></i>
                                    <p>Marketing en RRSS</p>
                                </div>
                            </div>
                        </div>

                        <div>
                            <small>Resolución de problemas</small>
                            <div class="habilidad">
                                <div class="barra">
                                    <div class="h-60"></div>
                                </div>
                                <div class="descripcion">
                                    <i class="fa-solid fa-gears"></i>
                                    <p>Resolución de problemas</p>
                                </div>
                            </div>
                        </div>

                        <div>
                            <small>Atención al detalle</small>
                            <div class="habilidad">
                                <div class="barra">
                                    <div class="h-50"></div>
                                </div>
                                <div class="descripcion">
                                    <i class="fa-solid fa-magnifying-glass"></i>
                                    <p>Atención al detalle</p>
                                </div>
                            </div>
                        </div>

                </div>
            </div>
        </div>

        <!-- EXPERIENCIA -->
        <div class="contenedor experiencia">
            <h2>Experiencia</h2>
            <div>
                <div>
                    <h4><i class="fa-solid fa-code"></i>Desarrollo</h4>
                    <p>
                        Si bien actualmente no tengo experiencia laboral específica en la industria, <b>he desarrollado proyectos personales y académicos</b> utilizando diferentes tecnologías y frameworks, lo que <b>demuestra mi capacidad para construir aplicaciones web</b> dinámicas, responsivas y eficientes.
                    </p>
                    <!-- <p> Además, puedo extrapolar mi experiencia previa para crear <b>diseños atractivos, funcionales e intuitivos</b>, optimizando la <b>experiencia del usuario</b>.</p> -->
                    
                    <h4><i class="fa-solid fa-pen-nib"></i>Diseño</h4>
                    <div class="exp-laboral">
                        <div class="exp-encabezado">
                            <div>
                                <img src="img/mega.jpg" alt="Distribuciones Mega">
                                <div>
                                    <p><b>Diseñadora gráfica</b></p>
                                    <p>Distribuciones Mega</p>
                                </div>
                            </div>
                            <div>
                                <p><b>05/2022 - 03/2023</b></p>
                                <p>Venezuela</p>
                            </div>
                        </div>
                        <ul class="responsabilidades">
                            <li>Crear contenido audiovisual para las redes sociales</li>
                            <li>Diseñar anuncios publicitarios y material promocional</li>
                            <li>Colaborar en el diseño de la marca, teniendo en cuenta los colores corporativos y estilísticos</li>
                            <li>Diseño de empaquetados, envases y etiquetas para productos físicos</li>
                        </ul>
                    </div>
                    
                    <br>

                    <div class="exp-laboral">
                        <div class="exp-encabezado">
                            <div>
                                <img src="img/lugardeprovision.jpg" alt="Lugar de provisiones">
                                <div>
                                    <p><b>Diseñadora gráfica y Social Media</b></p>
                                    <p>Lugar de provisiones</p>
                                </div>
                            </div>
                            <div>
                                <p><b>01/2022 - 03/2022</b></p>
                                <p>Venezuela</p>
                            </div>
                        </div>
                        <ul class="responsabilidades">
                            <li>Diseñar contenido para las redes sociales</li>
                            <li>Elaboración de estrategias de contenidos y campañas</li>
                            <li>Publicar y supervisar las plataformas de medios sociales</li>
                        </ul>
                    </div>
                </div>
            </div>

        </div>

        <!-- EDUCACION -->
        <div class="contenedor educacion">
            <h2>Educación</h2>
            <div>
                <div>
                    <h4><i class="fa-solid fa-building-columns"></i>Universidad</h4>
                    <div class="titulacion">
                        <div class="titulacion-encabezado">
                            <div>
                                <img src="img/uptma.jpg" alt="UPTMA">
                                <div>
                                    <p><b>Ingeniería Informática</b></p>
                                    <p>Universidad Politécnica Territorial de Maracaibo</p>
                                </div>
                            </div>
                            <div>
                                <p><b>2018 - 2024</b></p>
                                <p>Venezuela</p>
                            </div>
                        </div>
                        <ul class="logros">
                            <li>Miembro del comité de investigación</li>
                            <li>Proyecto de mantenimiento preventivo a los equipos del PNF en Agroalimentación y Geociencias</li>
                            <li>Desarrollo de aplicación web de educación en línea para la universidad</li>
                            <li>Rendimiento: 18/20</li>
                        </ul>
                    </div>

                    <h4><i class="fa-solid fa-graduation-cap"></i>Certificaciones</h4>
                    <div id="cursos">
                        <div class="curso">
                            <img src="img/cs50.jpg" alt="CS50 Imagen">
                            <div>
                                <div>
                                    <p><b>CS50: Introducción a las Ciencias de la Computación</b></p>
                                    <ul>
                                        <li>Algoritmos</li>
                                        <li>Estructuras de datos</li>
                                        <li>C, Python, SQL y JavaScript</li>
                                    </ul>
                                </div>
                                <a  href="https://cs50.harvard.edu/certificates/5809ec72-9dec-46be-81c8-8f015cc20a24" class="btn bnt-ver-cert" target="_blank">Ver certificado</a>
                            </div>
                        </div>

                        <div class="curso">
                            <img src="img/cs50web.jpg" alt="CS50Web Imagen">
                            <div>
                                <div>
                                    <p><b>CS50 Programación Web con Python y JavaScript</b></p>
                                    <ul>
                                        <li>Desarrollo Web</li>
                                        <li>Python y Django</li>
                                        <li>JavaScript y React</li>
                                        <li>Bootstrap</li>
                                    </ul>
                                </div>
                                <a  href="#" class="btn bnt-ver-cert" target="_blank">Ver certificado</a>
                            </div>
                        </div>

                        <div class="curso">
                            <img src="img/marketing.jpg" alt="Marketing Digital Imagen">
                            <div>
                                <div>
                                    <p><b>Bases para crear una Marca Digital desde Cero</b></p>
                                    <ul>
                                        <li>Identidad visual</li>
                                        <li>Diferenciación y Posicionamiento</li>
                                        <li>Benchmarking</li>
                                    </ul>
                                </div>
                                <a  href="#" class="btn bnt-ver-cert" target="_blank">Ver certificado</a>
                            </div>
                        </div>

                        <div class="curso">
                            <img src="img/ef-set.jpg" alt="EF-Set Imagen">
                            <div>
                                <div>
                                    <p><b>Examen de Inglés Estándar de EF SET</b></p>
                                    <ul>
                                        <li>Entender con facilidad inglés escrito y hablado</li>
                                        <li>Comprender inclusive un ritmo acelerado y nativo</li>
                                        <li>Abtraer textos complejos</li>
                                    </ul>
                                </div>
                                <a  href="https://www.efset.org/cert/LQ3Ryg" class="btn bnt-ver-cert" target="_blank">Ver certificado</a>
                            </div>
                        </div>

                        <div class="curso cursando">
                            <img src="img/meta.jpg" alt="Curso Meta Frontend Developer Imagen">
                            <div>
                                <div>
                                    <p><b>Certificado Profesional de Desarrollador Meta Front-End</b></p>
                                    <ul>
                                        <li>Desarrollo Fron-End con React</li>
                                        <li>Diseño UX/UI</li>
                                        <li>Control de versiones</li>
                                    </ul>
                                </div>
                                <a class="btn bnt-ver-cert btn-disabled">Cursando...</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- SERVICIOS -->
        <div class="servicios">
            <img src="img/servicio.jpg" alt="Servicios" class="responsive">
            <div class="texto">
                <div>
                    <h3>¡Desarrollo la web que soñaste!</h3>
                    <p>Utilizando tecnologías modernas, con un diseño único y adaptable a todos los dispositivos para que hagas realidad tu proyecto online. </p>
                    <a href="files/cv_es.pdf"  target="_blank">
                        <button class="btn btn-ghost">Descubre más</button>
                    </a>
                </div>
            </div>
        </div>

        <!-- CONTACTO -->
        <div class="contact-wrapper">
            <h2>Contacto</h2>
            <div class="contenedor contacto">
                <div class="datos-contacto">
                    <div id="direccion">
                        <i class="fa-solid fa-location-dot"></i> <p>Maracaibo, venezuela</p>
                    </div>
                    <div id="tel">
                        <i class="fa-brands fa-whatsapp"></i>
                        <a href="https://wa.me/584127222453" target="_blank" tooltip="Escríbeme" tooltip-position="bottom">+58 0412-7222453</a>
                    </div>
                    <div id="email">
                        <span class="mail-info">
                            <i class="fas fa-envelope"></i>
                            <p class="mail-text" tooltip="Click para copiar" tooltip-position="bottom">sofiabrachodev@gmail.com</p>
                        </span>
                    </div>
                    <div id="cv">
                        <a href="files/cv_es.pdf" class="button gradient-animated-button on-hover" target="_blank">
                            <i class="fa-solid fa-file"></i>
                            <span class="gradient"></span>Ver mi Currículum
                        </a>
                    </div>
                </div>
                <form id="form-contacto">
                    <input type="text" id="nombre" placeholder="Tu nombre" required>
                    <input type="email" id="correo" placeholder="Tu correo" required>
                    <textarea id="mensaje" cols="30" rows="10" placeholder="Tu mensaje" required></textarea>
        
                    <input type="submit" class="btn btn-submit">
                </form>
            </div>
        </div>

        <!-- FOOTER -->
        <footer id="footer">
            <p id="copyright">Sofia Bracho 2024 ©</p>
            <div class="social">
                <!-- <a href="https://www.facebook.com/SofiaBrach0" target="_blank"><i class="fab fa-facebook-f"></i></a> -->
                <!-- <a href="https://twitter.com/Brachosofia1" target="_blank"><i class="fab fa-twitter"></i></a> -->
                <!-- <a href="https://www.instagram.com/sofiabrach0/" target="_blank"><i class="fab fa-instagram"></i></i></a> -->
                <a href="https://github.com/sofiaBracho" target="_blank"><i class="fab fa-github"></i></i></a>
                <a href="https://ve.linkedin.com/in/sofiabrach0" target="_blank"><i class="fab fa-linkedin"></i></i></a>
            </div>
        </footer>

    </div>