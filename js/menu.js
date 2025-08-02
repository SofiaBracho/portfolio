document.addEventListener("DOMContentLoaded", function() {
    // Language management
    const languageToggles = document.querySelectorAll("#language-toggle");
    const langFlags = document.querySelectorAll("#lang-flag");
    const langCodes = document.querySelectorAll("#lang-code");
    const langTexts = document.querySelectorAll("#lang-text");
    const contentEn = document.getElementById("content-en");
    const contentEs = document.getElementById("content-es");
    const cuerpos = document.querySelectorAll(".cuerpo");

    // Menu elements - get buttons from both menus
    const body = document.querySelector("body");
    const menus = document.querySelectorAll("#side-menu");
    const menuBtns = document.querySelectorAll("#menu-btn");
    const btnContacts = document.querySelectorAll(".btn-contact");
    const menuItems = document.querySelectorAll(".item");

    // Get current language
    function getCurrentLanguage() {
        const urlParams = new URLSearchParams(window.location.search);
        const urlLang = urlParams.get("lang");
        const storedLang = localStorage.getItem("language");
        const cookieLang = document.cookie
            .split("; ")
            .find((row) => row.startsWith("lang="))
            ?.split("=")[1];
        return urlLang || storedLang || cookieLang || "en";
    }

    // Update toggle buttons
    function updateToggleButtons(lang) {
        langFlags.forEach((flag) => {
            flag.src = lang === "es" ? "img/language/us.svg" : "img/language/es.svg";
            flag.alt = lang === "es" ? "US Flag" : "ES Flag";
        });

        langCodes.forEach((code) => {
            code.textContent = lang === "es" ? "EN" : "ES";
        });

        langTexts.forEach((text) => {
            text.textContent = lang === "es" ? "English" : "Español";
        });
    }

    // Set language and update UI
    function setLanguage(lang) {
        // Update content visibility
        if (lang === "es") {
            contentEn.style.display = "none";
            contentEs.style.display = "block";
        } else {
            contentEn.style.display = "block";
            contentEs.style.display = "none";
        }

        // Reset menu to collapsed state
        menus.forEach((menu) => {
            menu.classList.remove("menu-expanded");
            menu.classList.add("menu-collapsed");
        });
        cuerpos.forEach((content) => {
            content.classList.remove("bg-gray")
        });

        // Update storage
        localStorage.setItem("language", lang);
        document.cookie = `lang=${lang}; path=/; max-age=31536000`;

        // Update buttons
        updateToggleButtons(lang);

        // Update URL
        const url = new URL(window.location.href);
        url.searchParams.set("lang", lang);
        window.history.pushState({}, "", url);
    }

    // Handle language toggle
    function handleLanguageToggle(e) {
        e.preventDefault();
        const currentLang = getCurrentLanguage();
        const newLang = currentLang === "es" ? "en" : "es";
        setLanguage(newLang);
    }

    // Initialize language
    const currentLang = getCurrentLanguage();
    setLanguage(currentLang);

    // Add event listeners to all toggle buttons
    languageToggles.forEach((toggle) => {
        toggle.addEventListener("click", handleLanguageToggle);
    });

    // Menu toggle functionality - add to both buttons
    menuBtns.forEach(btn => {
        btn.addEventListener("click", function() {
            menus.forEach((menu) => {
                menu.classList.toggle("menu-expanded");
                menu.classList.toggle("menu-collapsed");
            });
            body.classList.toggle("body-expanded");
            cuerpos.forEach((content) => {
                content.classList.toggle("bg-gray")
            });
        });
    });

    // Contact buttons - add to both versions
    btnContacts.forEach(btn => {
        btn.addEventListener("click", function() {
            scrollToSection("contacto");
        });
    });

    // Menu item clicks - add to all items in both menus
    menuItems.forEach((item) => {
        item.addEventListener("click", (e) => {
            e.preventDefault();
            let id;

            if (e.target.id) id = e.target.id;
            else if (e.target.parentElement.id) id = e.target.parentElement.id;
            else if (e.target.parentElement.parentElement.id)
                id = e.target.parentElement.parentElement.id;

            scrollToSection(id);
            
            // Close menu if expanded
            menus.forEach(menu => {
                menu.classList.remove("menu-expanded");
                menu.classList.add("menu-collapsed");
            });
            body.classList.remove("body-expanded");
            cuerpos.forEach((content) => {
                content.classList.remove("bg-gray")
            });
        });
    });

    // Scroll to section function
    function scrollToSection(id) {
        let container;
        if (id == "habilidades") {
            container = document.querySelector("." + id + ".contenedor")?.parentElement;
        } else if (id == "trabajos") {
            container = document.querySelector(".contenedor-proyectos");
        } else {
            container = document.querySelector("." + id + ".contenedor");
        }
        
        if (container) {
            window.scroll({
                top: container.offsetTop,
                behavior: "smooth"
            });
        }
    }

    // Skills animation
    const animado = document.querySelectorAll(".habilidad .barra");
    const contenedorHabilidades = document.querySelector("#bg-habilidades");

    function checkSkillsAnimation() {
        if (contenedorHabilidades.offsetTop - 200 < document.documentElement.scrollTop) {
            animado.forEach((e) => {
                e.classList.add("animado");
            });
            // Remove listener after animation triggers
            window.removeEventListener("scroll", checkSkillsAnimation);
        }
    }

    window.addEventListener("scroll", checkSkillsAnimation);
    checkSkillsAnimation(); // Check on load in case already in view
});