(function () {
// Propiedades
    var propParallax = {
        seccion: document.querySelector('.parallax'),
        recorrido: null,
        limit: null
    }



//Métodos
    var metParallax = {

        inicio: function () {
            window.addEventListener('scroll', metParallax.scrollParallax);
        },

        scrollParallax: function () {
            propParallax.recorrido = window.pageYOffset;
            propParallax.limit = propParallax.seccion.offsetTop + propParallax.seccion.offsetHeight;

            if (propParallax.recorrido > propParallax.seccion.offsetTop - window.outerHeight && propParallax.recorrido <= propParallax.limit) {
                propParallax.seccion.style.backgroundPositionY = (propParallax.recorrido - propParallax.seccion.offsetTop) / 1.5 + 'px';
            } else {
                propParallax.seccion.style.backgroundPositionY = 0;
            }
        }
    }
    metParallax.inicio();
}())


