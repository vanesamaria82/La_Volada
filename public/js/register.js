window.addEventListener("load", () => {

    let form = document.querySelector('.formulario');
    let errorsHTML = document.querySelector(".validaciones");


    form.addEventListener("submit", (event) => {

        // Array de errores

        let errorsList = [];

        // NAME

        if(form.name.value == "") {
            errorsList.push("El nombre está vacío");
        } else if (form.name.value.length < 2) {
            errorsList.push("El nombre debe tener al menos 2 caracteres");
        };

        // CONTRASEÑA

        if(form.password.value == "") {
            errorsList.push("La contraseña está vacía");
        } else if (form.password.value.length < 8) {
            errorsList.push("La constraseña debe contener al menos 8 caracteres");
        };


        // EMAIL

        // declaro un regex

        let emaillReg = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

        if(form.email.value == "") {
            errorsList.push("Escribe un email");
        } else if (!emailReg.test(form.email.value)) {
            errorsList.push("Debe contener un email valido");
        };

        // IMAGEN

        

        // agregar al listado (inicialmente vacio) los errores como elementos <li>
        // si hay errores, prevengo que se envien
            if (errorsList.length > 0) {
                event.preventDefault();
                errorsHTML.innerHTML = "";
                errorsList.forEach(error => {
                    errorsHTML.innerHTML += "<li class='viewErrores'>" + "* " + error + "</li>";
                });
            }
    })

    const maxCaracteres = 250;
    const comentarioInput = document.querySelector("#comment");
    const contador = document.querySelector("#contador");

    // funcion para actualizar contador de caracteres dispobibles en comentario

    function actualizarContador() {
        let caracteresRestantes = maxCaracteres - comentarioInput.value.length;
        contador.textContent = caracteresRestantes;
    };
    comentarioInput.addEventListener("input", actualizarContador);

    // Llamar a actualizarContador para establecer el contador inicial al cargar la página
    actualizarContador();
});
