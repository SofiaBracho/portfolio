    <!-- MENU -->
    <div id="side-menu" class="menu-collapsed">

        <!-- HEADER -->
        <div id="menu-header">
            <div id="menu-btn">
                <i class="fas fa-bars"></i>
            </div>
            <div id="title"><span>My portfolio</span></div>
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
                    <div class="title"> <span>About me</span> </div>
                </a>
            </div>

            <div class="item" id="tecnologias">
                <a href="#"></a>
                    <div class="icon"> <i class="fas fa-code"></i> </div>
                    <div class="title"> <span>Technologies</span> </div>
                </a>
            </div>

            <div class="item" id="trabajos">
                <a href="#"></a>
                    <div class="icon"> <i class="fa-solid fa-file-code"></i> </div>
                    <div class="title"> <span>Projects</span> </div>
                </a>
            </div>

            <div class="item" id="habilidades">
                <a href="#"></a>
                    <div class="icon"> <i class="fas fa-palette"></i> </div>
                    <div class="title"> <span>Skills</span> </div>
                </a>
            </div>

            <div class="item" id="experiencia">
                <a href="#"></a>
                    <div class="icon"> <i class="fas fa-briefcase"></i> </div>
                    <div class="title"> <span>Experience</span> </div>
                </a>
            </div>

            <div class="item" id="educacion">
                <a href="#"></a>
                    <div class="icon"> <i class="fa-solid fa-graduation-cap"></i> </div>
                    <div class="title"> <span>Education</span> </div>
                </a>
            </div>

            <div class="item-separator"></div>

            <div class="item" id="contacto">
                <a href="#"></a>
                    <div class="icon"> <i class="fas fa-phone-alt"></i> </div>
                    <div class="title"> <span>Contact</span> </div>
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
                    <img src="" alt="Sofia's picture" class="foto">
                    <!-- <p class=saludo>¡Hola!</p> -->
                    <h1 class="title">Hi! <i class="em em-wave" aria-role="presentation" aria-label="WAVING HAND SIGN"></i>
                        <br> 
                        I'm Sofia Bracho,
                        <br>
                        Front-end developer
                    </h1>
                    <p class="resumen">Designing and developing experiences that make people's lives easier, by means of web applications.</p>
                    <button class="btn btn-contact">Contact me</button>
                </div>
            </div>
        </div>

        <!-- SOBRE MI -->
        <div class="contenedor sobre-mi">
            <h2>About me</h2>
            <div>
                <div class="descripcion">
                    <p>
                        I am a <b>frontend web developer</b> with studies in Informatics Engineering (IT) and experience in the design field. <b>Bilingual</b> (spanish and english). I am passionate about technology in general and art as a means of expression. I believe that combining these two disciplines unleashes a great creative potential, allowing to create unique digital experiences through programming.
                    </p>
                </div>

                <img id="foto" src="img/foto.jpg" alt="Foto personal">
            </div>

        </div>
        
        <!-- TECNOLOGIAS -->
        <div class="tecnologias contenedor">
            <h2>Technologies</h2>
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
            <h2>Projects</h2>
            <ul class="lista-proyectos">

                <li class='proyecto'>
                    <div class="info-proyecto">
                        <img src="img/trabajos/piensa.jpg" alt="Imagen del proyecto">
                        <div>
                            <div>
                                <div class="titulo-proyecto">
                                    <h3>Virtual Classroom "PIENSA"</h3>
                                </div>
                                <p>Educational system for the Territorial Polytechnic University of Maracaibo (UPTMA). It has sessions for students, teachers, coordinators and administrator. It offers functions such as publishing and evaluating activities, communication between teachers and students, planning classes, tracking grades, sharing documents and books, managing schedules, profiles, academic periods and automatic database backups.</p>
                            </div>
                            <div id="tecnologias">
                                Technologies used:
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
                        <a class="disabled">
                            <i class="fa-solid fa-x"></i>
                            <p>Code not available</p>
                            <br>
                            <small>(The repository is private)</small>
                        </a>
                    </div>
                </li>

                <li class='proyecto'>
                    <div class="info-proyecto">
                        <img src="img/trabajos/mini-diary.jpg" alt="Imagen del proyecto">
                        <div>
                            <div>
                                <div class="titulo-proyecto">
                                    <h3>Mini Diary web</h3>
                                </div>
                                <p>Personal diary application. It contains functionalities such as import and export of data in JSON format, creation of user accounts, pagination, creating, editing and deleting journal entries. Its design is minimalist and responsive. Inspired in Mini Diary desktop app by Samuel Meuli</p>
                            </div>
                            <div id="tecnologias">
                                Technologies used:
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
                            <p>View code</p>
                        </a>
                        <!-- <a href="https://github.com/SofiaBracho/diary-web" target="_blank">
                            <i class="fas fa-link"></i>
                            <p>Visit App</p>
                        </a> -->
                    </div>
                </li>
                
                <li class='proyecto'>
                    <div class="info-proyecto">
                        <img src="img/trabajos/clima.jpg" alt="Imagen del proyecto">
                        <div>
                            <div>
                                <div class="titulo-proyecto">
                                    <h3>Weather app</h3>
                                </div>
                                <p>This application developed with React uses a geolocation API to obtain the user's location. It then shows the estimate of the weather at your location, with data such as temperature, wind chill, humidity, pressure and wind speed.</p>
                            </div>
                            <div id="tecnologias">
                                Technologies used:
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
                        <a href="https://github.com/SofiaBracho/weather" target="_blank">
                            <i class="fa-solid fa-code"></i>
                            <p>View code</p>
                        </a>
                    </div>
                </li>

                <div id="mas-proyectos">

                    <li class='proyecto'>
                        <div class="info-proyecto">
                            <img src="img/trabajos/fashion.jpg" alt="Imagen del proyecto">
                            <div>
                                <div>
                                    <div class="titulo-proyecto">
                                        <h3>Bella exclusiva fashion budget</h3>
                                    </div>
                                    <p>Web based application that calculates a fair Budget for tailor-made clothing according to the difficulty of manufacturing (depends on garments, materials and size), considering variables like the cost per hour of work and a control variable.</p>
                                </div>
                                <div id="tecnologias">
                                    Technologies used:
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
                            <a href="https://github.com/SofiaBracho/fashion-budget" target="_blank">
                                <i class="fa-solid fa-code"></i>
                                <p>View code</p>
                            </a>
                        </div>
                    </li>

                    <li class='proyecto'>
                        <div class="info-proyecto">
                            <img src="img/trabajos/flashcards.jpg" alt="Imagen del proyecto">
                            <div>
                                <div>
                                    <div class="titulo-proyecto">
                                        <h3>Flashcards language learning App</h3>
                                    </div>
                                    <p>This Django application allows users to create and study flashcards, track their progress, and review learned words. It includes features such as proficiency tracking, statistics, and user authentication.</p>
                                </div>
                                <div id="tecnologias">
                                    Technologies used:
                                    <div>
                                        <div class="tecnologia html">
                                            <i class="fa-brands fa-html5"></i>HTML5
                                        </div>
                                        <div class="tecnologia css">
                                            <i class="fa-brands fa-css3-alt"></i>CSS
                                        </div>
                                        <div class="tecnologia bootstrap">
                                            <i class="fa-brands fa-bootstrap"></i>Bootstrap
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
                            <a href="https://github.com/SofiaBracho/flashcards" target="_blank">
                                <i class="fa-solid fa-code"></i>
                                <p>View code</p>
                            </a>
                        </div>
                    </li>

                    <li class='proyecto'>
                        <div class="info-proyecto">
                            <img src="img/trabajos/network.jpg" alt="Imagen del proyecto">
                            <div>
                                <div>
                                    <div class="titulo-proyecto">
                                        <h3>Social network</h3>
                                    </div>
                                    <p>This is a twitter-like social network built using Django and asyncronous JavaScript. It allows users to create accounts, follow other users, post messages, and like posts.</p>
                                </div>
                                <div id="tecnologias">
                                    Technologies used:
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
                            <a href="https://github.com/SofiaBracho/social-network" target="_blank">
                                <i class="fa-solid fa-code"></i>
                                <p>View code</p>
                            </a>
                        </div>
                    </li>
                    
                    <li class='proyecto'>
                        <div class="info-proyecto">
                            <img src="img/trabajos/email.jpg" alt="Imagen del proyecto">
                            <div>
                                <div>
                                    <div class="titulo-proyecto">
                                        <h3>Email client simulation</h3>
                                    </div>
                                    <p>Email simulation single page app using Python, Django and asyncronous Javascript. Allows users to compose, send, archive, and reply to emails in a single page using JavaScript and python end-points in the back-end.</p>
                                </div>
                                <div id="tecnologias">
                                    Technologies used:
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
                            <a href="https://github.com/SofiaBracho/email-app" target="_blank">
                                <i class="fas fa-link"></i>
                                <p>View code</p>
                            </a>
                        </div>
                    </li>

                </div>
                
                <a href="#" id="ver-mas">Show more</a>
            </ul>
        </div>

        <!-- HABILIDADES -->
        <div id="bg-habilidades">
            <div class="habilidades contenedor">
                <h3>Skills</h3>
                <p>My hard and soft skills</p>
                <div class="contenedor-habilidades">

                        <div>
                            <small>Programming</small>
                            <div class="habilidad">
                                <div class="barra">
                                    <div class="h-80"></div>
                                </div>
                                <div class="descripcion">
                                    <i class="fa fa-code"></i>
                                    <p>Programming</p>
                                </div>
                            </div>
                        </div>
                        
                        <div>
                            <small>Version control</small>
                            <div class="habilidad">
                                <div class="barra">
                                    <div class="h-40"></div>
                                </div>
                                <div class="descripcion">
                                    <i class="fa-solid fa-code-merge"></i>
                                    <p>Version control</p>
                                </div>
                            </div>
                        </div>
                        
                        <div>
                            <small>Design</small>
                            <div class="habilidad">
                                <div class="barra">
                                    <div class="h-70"></div>
                                </div>
                                <div class="descripcion">
                                    <i class="fa-solid fa-pen-nib"></i>
                                    <p>Design</p>
                                </div>
                            </div>
                        </div>

                        <div>
                            <small>Layout</small>        
                            <div class="habilidad">
                                <div class="barra">
                                    <div class="h-60"></div>
                                </div>
                                <div class="descripcion">
                                    <i class="fa-solid fa-table-cells-large"></i>
                                    <p>Layout</p>
                                </div>
                            </div>
                        </div>    

                        <div>
                            <small>Social Media Marketing</small>
                            <div class="habilidad">
                                <div class="barra">
                                    <div class="h-30"></div>
                                </div>
                                <div class="descripcion">
                                    <i class="fa-solid fa-hashtag"></i>
                                    <p>Social Media Marketing</p>
                                </div>
                            </div>
                        </div>

                        <div>
                            <small>Problem Solving</small>
                            <div class="habilidad">
                                <div class="barra">
                                    <div class="h-60"></div>
                                </div>
                                <div class="descripcion">
                                    <i class="fa-solid fa-gears"></i>
                                    <p>Problem Solving</p>
                                </div>
                            </div>
                        </div>

                        <div>
                            <small>Attention to detail</small>
                            <div class="habilidad">
                                <div class="barra">
                                    <div class="h-50"></div>
                                </div>
                                <div class="descripcion">
                                    <i class="fa-solid fa-magnifying-glass"></i>
                                    <p>Attention to detail</p>
                                </div>
                            </div>
                        </div>

                </div>
            </div>
        </div>

        <!-- EXPERIENCIA -->
        <div class="contenedor experiencia">
            <h2>Experience</h2>
            <div>
                <div>
                    <h4><i class="fa-solid fa-code"></i>Development</h4>
                    <p>
                        Although I currently have no specific work experience in the industry, <b>I have developed personal and academic projects</b> using different technologies and frameworks, which <b>demonstrates my ability to build dynamic, responsive and efficient web applications</b>.
                    </p>
                    
                    <h4><i class="fa-solid fa-pen-nib"></i>Design</h4>
                    <div class="exp-laboral">
                        <div class="exp-encabezado">
                            <div>
                                <img src="img/mega.jpg" alt="Distribuciones Mega">
                                <div>
                                    <p><b>Graphic Designer</b></p>
                                    <p>Distribuciones Mega</p>
                                </div>
                            </div>
                            <div>
                                <p><b>05/2022 - 03/2023</b></p>
                                <p>Venezuela</p>
                            </div>
                        </div>
                        <ul class="responsabilidades">
                            <li>Create audiovisual content for social media</li>
                            <li>Design commercials and promotional material</li>
                            <li>Collaborate on brand design, taking into account corporate and stylistic colors</li>
                            <li>Design packaging, containers and labels for physical products</li>
                        </ul>
                    </div>
                    
                    <br>

                    <div class="exp-laboral">
                        <div class="exp-encabezado">
                            <div>
                                <img src="img/lugardeprovision.jpg" alt="Lugar de provisiones">
                                <div>
                                    <p><b>Graphic designer & Social Media</b></p>
                                    <p>Lugar de provisiones</p>
                                </div>
                            </div>
                            <div>
                                <p><b>01/2022 - 03/2022</b></p>
                                <p>Venezuela</p>
                            </div>
                        </div>
                        <ul class="responsabilidades">
                            <li>Designing content for social media</li>
                            <li>Crafting content strategies and campaigns</li>
                            <li>Publishing and monitoring social media platforms</li>
                        </ul>
                    </div>
                </div>
            </div>

        </div>

        <!-- EDUCACION -->
        <div class="contenedor educacion">
            <h2>Education</h2>
            <div>
                <div>
                    <h4><i class="fa-solid fa-building-columns"></i>University</h4>
                    <div class="titulacion">
                        <div class="titulacion-encabezado">
                            <div>
                                <img src="img/uptma.jpg" alt="UPTMA">
                                <div>
                                    <p><b>Informatics Engineering</b></p>
                                    <p>Universidad Politécnica Territorial de Maracaibo (UPTMA)</p>
                                </div>
                            </div>
                            <div>
                                <p><b>2018 - 2024</b></p>
                                <p>Venezuela</p>
                            </div>
                        </div>
                        <ul class="logros">
                            <li>Member of the investigation committee</li>
                            <li>Preventive maintenance project for computers in Agri-Food and Geosciences PNF's</li>
                            <li>Development of e-learning web application for the university as a final project</li>
                            <li>GPA: 18/20</li>
                        </ul>
                    </div>

                    <h4><i class="fa-solid fa-graduation-cap"></i>Certifications</h4>
                    <div id="cursos">
                        <div class="curso">
                            <img src="img/cs50.jpg" alt="CS50 Imagen">
                            <div>
                                <div>
                                    <p><b>CS50: Introduction to Computer Science</b></p>
                                    <ul>
                                        <li>Algorithms</li>
                                        <li>Data structures</li>
                                        <li>C, Python, SQL and JavaScript</li>
                                    </ul>
                                </div>
                                <a  href="https://cs50.harvard.edu/certificates/5809ec72-9dec-46be-81c8-8f015cc20a24" class="btn bnt-ver-cert" target="_blank">View certificate</a>
                            </div>
                        </div>

                        <div class="curso">
                            <img src="img/cs50web.jpg" alt="CS50Web Imagen">
                            <div>
                                <div>
                                    <p><b>CS50 Web Programming with Python and JavaScript</b></p>
                                    <ul>
                                        <li>Web Development</li>
                                        <li>Python and Django</li>
                                        <li>JavaScript and React</li>
                                        <li>Bootstrap</li>
                                    </ul>
                                </div>
                                <a  href="https://certificates.cs50.io/cc0d7ec3-5b88-469f-8f21-dd18350667da.pdf?size=letter" class="btn bnt-ver-cert" target="_blank">View certificate</a>
                            </div>
                        </div>

                        
                        <div class="curso">
                            <img src="img/cs50cy.jpg" alt="CS50 Cyber Security Image">
                            <div>
                                <div>
                                    <p><b>CS50 Introduction to Cybersecurity</b></p>
                                    <ul>
                                        <li>Securing Accounts, data, systems, and software</li>
                                        <li>Preserving privacy online</li>
                                    </ul>
                                </div>
                                <a  href="https://certificates.cs50.io/a4769cd3-4733-42c3-9777-421fd9b4817a.pdf?size=letter" class="btn bnt-ver-cert" target="_blank">View certificate</a>
                            </div>
                        </div>

                        <div class="curso">
                            <img src="img/marketing.jpg" alt="Marketing Digital Imagen">
                            <div>
                                <div>
                                    <p><b>Bases for creating a Digital Brand from Scratch</b></p>
                                    <ul>
                                        <li>Visual identity</li>
                                        <li>Differentiation and Positioning</li>
                                        <li>Benchmarking</li>
                                    </ul>
                                </div>
                                <a  href="https://drive.google.com/file/d/11j-Q4UyegNCuuufIRJPASRwfTaRBCd-N/view?usp=sharing" class="btn bnt-ver-cert" target="_blank">View certificate</a>
                            </div>
                        </div>

                        <div class="curso">
                            <img src="img/ef-set.jpg" alt="EF-Set Imagen">
                            <div>
                                <div>
                                    <p><b>EF SET Standard English Exam</b></p>
                                    <ul>
                                        <li>Understand written and spoken English with ease</li>
                                        <li>Understand even an accelerated and native rhythm</li>
                                        <li>Abstract complex texts</li>
                                    </ul>
                                </div>
                                <a  href="https://www.efset.org/cert/LQ3Ryg" class="btn bnt-ver-cert" target="_blank">View certificate</a>
                            </div>
                        </div>

                        <div class="curso cursando">
                            <img src="img/meta.jpg" alt="Curso Meta Frontend Developer Imagen">
                            <div>
                                <div>
                                    <p><b>Meta Front-End Developer Professional Certificate</b></p>
                                    <ul>
                                        <li>Fron-End Development with React</li>
                                        <li>UX/UI Design</li>
                                        <li>Version control</li>
                                    </ul>
                                </div>
                                <a class="btn bnt-ver-cert btn-disabled">In progress...</a>
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
                    <h3>Developing the website of your dreams!</h3>
                    <p>Using modern technologies, with a unique design and adaptable to all devices so that you can make your online project a reality. </p>
                    <a href="files/cv.pdf"  target="_blank">
                        <button class="btn btn-ghost">Discover more</button>
                    </a>
                </div>
            </div>
        </div>

        <!-- CONTACTO -->
        <div class="contact-wrapper">
            <h2>Contact</h2>
            <div class="contenedor contacto">
                <div class="datos-contacto">
                    <div id="direccion">
                        <i class="fa-solid fa-location-dot"></i> <p>Maracaibo, venezuela</p>
                    </div>
                    <div id="tel">
                        <i class="fa-brands fa-whatsapp"></i>
                        <a href="https://wa.me/584127222453" target="_blank" tooltip="Text me!" tooltip-position="bottom">+58 0412-7222453</a>
                    </div>
                    <div id="email">
                        <span class="mail-info">
                            <i class="fas fa-envelope"></i>
                            <p class="mail-text" tooltip="Click to copy!" tooltip-position="bottom">sofiabrachodev@gmail.com</p>
                        </span>
                    </div>
                    <div id="cv">
                        <a href="files/cv.pdf" class="button gradient-animated-button on-hover" target="_blank">
                            <i class="fa-solid fa-file"></i>
                            <span class="gradient"></span>View my resume
                        </a>
                    </div>
                </div>
                <form id="form-contacto">
                    <input type="text" id="nombre" placeholder="Your name" required>
                    <input type="email" id="correo" placeholder="Your email" required>
                    <textarea id="mensaje" cols="30" rows="10" placeholder="Message content" required></textarea>
        
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