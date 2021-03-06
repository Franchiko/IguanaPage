//Propiedades
var propLightbox = {
	imgContainer: document.getElementsByClassName("card"),
	imagenCLick: null,
	cuerpoDom: document.getElementsByTagName("body")[0],
	lightbox_container: null,
	modal: null,
};
//Metodos
var metLightbox = {
	inicio: function () {
		for (let i = 0; i < propLightbox.imgContainer.length; i++) {
			propLightbox.imgContainer[i].addEventListener(
				"click",
				metLightbox.capturaImagen
			);
		}
	},
	capturaImagen: function () {
		propLightbox.imagenCLick = this;
		metLightbox.lightbox(propLightbox.imagenCLick);
	},

	lightbox: function (imagenCLick) {
		propLightbox.cuerpoDom
			.appendChild(document.createElement("DIV"))
			.setAttribute("id", "lightbox_container");

		propLightbox.lightbox_container = document.getElementById("lightbox_container");

		propLightbox.lightbox_container.style.width = "100%";
		propLightbox.lightbox_container.style.height = "100%";
		propLightbox.lightbox_container.style.position = "fixed";
		propLightbox.lightbox_container.style.zIndex = "1000";
		propLightbox.lightbox_container.style.background = "rgba(0,0,0, 0.8)";
		propLightbox.lightbox_container.style.top = "0";
		propLightbox.lightbox_container.style.left = "0";

		propLightbox.lightbox_container
			.appendChild(document.createElement("DIV"))
			.setAttribute("id", "modal");
		propLightbox.modal = document.getElementById("modal");
		propLightbox.modal.style.height = "100%";
		propLightbox.modal.appendChild(document.createElement("IMG")).setAttribute("src");
	},
};
metLightbox.inicio();
