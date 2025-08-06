document.addEventListener("DOMContentLoaded", function() {
    function initCarousels() {
        document.querySelectorAll('.imagenes').forEach(el => {
            if (!el._glideInstance) { // Check if already initialized
                el._glideInstance = new Glide(el, {
                  type: 'carousel',
                  perView: 3,
                  focusAt: 'center',
                  gap: 50,
                  breakpoints: {
                    800: {
                      perView: 2
                    },
                    480: {
                      perView: 1
                    }
                  }
              }).mount();
            }
        });
    }

    initCarousels();

    document.addEventListener('languageChanged', function() {
        setTimeout(initCarousels, 50);
    });
});