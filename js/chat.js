let mensajes = []

function msg() {
  let msg_new = document.querySelector("#chat-bar-entrada").value
  if(msg_new) {
    mensajes.push(msg_new)
  }
  
  let fragment = ''
  
  for(a of mensajes) {
    fragment += '<div class="mensaje-box">'
    fragment += '<p class="mensaje-user">You</p>'
    fragment += '<p class="mensaje-content">'+a+'</p>'
    fragment += '</div>'
  }
  console.log(fragment)
  document.querySelector("#chat-message-box").innerHTML = fragment;
  
  document.querySelector("#chat-bar-entrada").value = '';
}

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
        document.querySelector("#closeChat").style.bottom = "480px";
        document.querySelector("#closeChat").innerHTML = "Cerrar X";
        document.querySelector("#chat-message-box").style.visibility = "visible";
        document.querySelector("#chat-bar-text").style.visibility = "visible";
        estadoChat = true;
    }
}