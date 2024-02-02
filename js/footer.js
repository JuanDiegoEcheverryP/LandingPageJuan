function validarFormFooter() {
    let nombre = document.querySelector("#footerNombre");
    let email = document.querySelector("#footerEmail");
    let mensaje = document.querySelector("#footerMensaje");

    if(nombre.value == '' || email.value == '' ||mensaje.value == '') {
        if(mensaje.value.length > 300) {
            console.log('%cFormulario no diligenciado correctamente!', 'background: yellow');
            alert("No puede poner mas de 300 caracteres en el mensaje")
        }
        else {
            console.log('%cFormulario no diligenciado correctamente!', 'background: yellow');
            alert("Diligencie todo el formulario")
        }
    } 
    else {
        console.log('%cThis text is red!', 'background: green');
        alert("Gracias por contartar a Diego")
    }
}

document.addEventListener('DOMContentLoaded', function () {
    // Obtener el formulario por su ID
    var formulario = document.getElementById('formFooter');
  
    // Agregar un evento de escucha para el evento de envío del formulario
    formulario.addEventListener('submit', function (event) {
      // Prevenir la acción predeterminada del formulario (recargar la página)
      event.preventDefault();
  
      // Puedes agregar aquí el código para procesar el formulario o realizar otras acciones
  
      // Ejemplo de enviar datos utilizando Fetch API
      // fetch('tu-url-de-procesamiento', {
      //   method: 'POST',
      //   body: new FormData(formulario)
      // })
      // .then(response => response.json())
      // .then(data => {
      //   console.log('Respuesta del servidor:', data);
      // })
      // .catch(error => {
      //   console.error('Error al enviar datos:', error);
      // });
    });
  });