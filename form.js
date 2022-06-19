(function () {
  //Propiedades
  var propForm = {
    form: document.formulario_contacto,
    elements: document.formulario_contacto.elements,
    error: null,
    textoError: null,
  };

  //Métodos

  var metForm = {
    inicio: function () {
      for (let index = 0; index < propForm.elements.length; index++) {
        if (
          propForm.elements[index].type == "text" ||
          propForm.elements[index].type == "email" ||
          propForm.elements[index].nodeName.toLowerCase() == "textarea"
        ) {
          propForm.elements[index].addEventListener(
            "focus",
            metForm.focusInput
          );
          propForm.elements[index].addEventListener("focus", metForm.blurInput);
        }
      }
      propForm.form.addEventListener("submit", metForm.validarInput);
    },
    focusInput: function () {
      this.parentElement.children[1].className = "label active";
    },
    blurInput: function () {
      if (this.value == "") {
        this.parentElement.children[1].className = "label";
      }
    },
    validarInput: function (e) {
      for (let i = 0; i < propForm.elements.length; i++) {
        if (propForm.elements[i].value == "") {
          e.preventDefault();

          if (propForm.elements[i].parentElement.children.length < 3) {
            propForm.error = document.createElement("p");
            propForm.textoError = document.createTextNode(
              "Por favor llena el campo con tu " + propForm.elements[i].name
            );
            propForm.error.appendChild(propForm.textoError);
            propForm.error.className = "error";

            propForm.elements[i].parentElement.appendChild(propForm.error);
          }
        } else {
          if (propForm.elements[i].parentElement.children.length >= 3) {
            propForm.error =
              propForm.elements[i].parentElement.getElementsByTagName("p")[0];
            propForm.elements[i].parentElement.removeChild(propForm.error);
          }
        }
      }
    },
  };
  metForm.inicio();
})();
