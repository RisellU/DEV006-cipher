import cipher from './cipher.js';

window.addEventListener("load", inicio)

function inicio(){

  document.getElementById("comentario").addEventListener("keyup", function() {
    this.value = this.value.toUpperCase();
  })
    

  document.getElementById("cifrar").addEventListener("click", function(){
    let text = document.getElementById("comentario").value
    let desplazamiento = document.getElementById("desplazamiento").value
    document.getElementById("comentario2").value = cipher.cifrar(text, desplazamiento)
    
  })

  document.getElementById("descifrar").addEventListener("click", function(){

    let text = document.getElementById("comentario").value
    let desplazamiento = document.getElementById("desplazamiento").value
    
  })
  
}