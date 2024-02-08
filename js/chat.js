//Mensajes guardados
let mensajes = []

//Resize de la caja de texto de un mensaje
function OnInput() {
  this.style.height = 'auto';
  this.style.height = (this.scrollHeight) + "px";
}


//Poner en un fragmento un mensaje
function msg() {
  let msg_user = document.querySelector("#chat-bar-user").value
  let msg_new = document.querySelector("#chat-bar-entrada").value
  
  if(msg_new) {
    mensajes.push(msg_new)
  }
  
  let fragment = document.querySelector("#chat-message-box").innerHTML
  if(mensajes.length == 1) {
    fragment = "";
  }
  fragment += '<div class="mensaje-box">'
  fragment += '<p class="mensaje-user">'+msg_user+'</p>'
  fragment += '<textarea readonly class="mensaje-content">'+msg_new+'</textarea>'
  fragment += '</div>'
  console.log(fragment)
  document.querySelector("#chat-message-box").innerHTML = fragment;
  
  document.querySelector("#chat-bar-entrada").value = '';

  const tx = document.getElementsByTagName("textarea");
  for (let i = 0; i < tx.length; i++) {
    tx[i].setAttribute("style", "height:" + (tx[i].scrollHeight) + "px;overflow-y:hidden;");
    tx[i].addEventListener("input", OnInput, false);
  }
}

//Abrir-cerrar-chat
let estadoChat = false;
function cerrarChat() {
    if(estadoChat) {
        document.querySelector("#closeChat").style.bottom = "10px";
        document.querySelector("#closeChat").innerHTML = "Abrir chat X";
        document.querySelector("#chat-message-box").style.visibility = "hidden";
        document.querySelector("#chat-bar-text").style.visibility = "hidden";
        estadoChat = false
    }
    else {
        document.querySelector("#closeChat").style.bottom = "490px";
        document.querySelector("#closeChat").innerHTML = "Cerrar X";
        document.querySelector("#chat-message-box").style.visibility = "visible";
        document.querySelector("#chat-bar-text").style.visibility = "visible";
        estadoChat = true;
    }
}