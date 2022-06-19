(function () {
    //Propiedades//

var PropSlider = {
    slider: document.getElementById('slider'),
    primerSlide: null

}


//Metodos//

var metSlider = {
    inicio: function () {
        setInterval(metSlider.moverSlide, 3000);
    },

    moverSlide: function () {
        PropSlider.slider.style.transition = 'all 1s ease';
        PropSlider.slider.style.marginLeft = '-100%';
        setTimeout(function () {
            PropSlider.primerSlide = PropSlider.slider.firstElementChild;
            PropSlider.slider.appendChild(PropSlider.primerSlide);
            PropSlider.slider.style.transition = 'unset';
            PropSlider.slider.style.marginLeft = '0';
        }, 1000);
    }

}
metSlider.inicio();

}())

