(function () {
    //Propiedades
    var propTabs = {
        primer_encabezado: document.getElementById('encabezado-menu').firstElementChild,
        primer_contenido: document.getElementById('contenido-menu').firstElementChild,
        enlaces_encabezado: document.querySelectorAll('#encabezado-menu li a'),
        li_encabezado: document.querySelectorAll('#encabezado_menu li'),
        divs_contenido: document.querySelectorAll('#contenido-menu > div'),
        contenido_activo: null
    }

    //Metodos
    var metTabs = {
        inicio: function () {
            propTabs.primer_encabezado.className = 'active';
            propTabs.primer_contenido.className = 'active';

            for (let index = 0; index < propTabs.enlaces_encabezado.length; index++) {
               propTabs.enlaces_encabezado[index].addEventListener('click', metTabs.evento);
            }
        },

        evento: function(e){
            e.preventDefault();
            for (let index = 0; index < propTabs.li_encabezado.length; index++) {
                propTabs.li_encabezado[index].className = '';
            }
            for (let index = 0; index < propTabs.divs_contenido.length; index++) {
                propTabs.divs_contenido[index].className = '';
            }
            this.parentElement.className = 'active';
            propTabs.contenido_activo = this.getAttribute('href');
            document.querySelector(propTabs.contenido_activo).className = 'active';
            setTimeout(function () { 
                document.querySelectorAll(propTabs.contenido_activo).style.opacity = 1;
            }, 300);
        }
    }
    metTabs.inicio();
}())