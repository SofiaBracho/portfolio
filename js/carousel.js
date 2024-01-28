(function () {
    var glide = new Glide('.imagenes', {
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
    }).mount()

})();