import cipher from './cipher.js';

    

  document.getElementById("cifrar").addEventListener("click", function(){
    let text = document.getElementById("comentario").value
    let desplazamiento = document.getElementById("desplazamiento").value
    document.getElementById("comentario2").value = cipher.cifrar(text, desplazamiento) 
  })

  document.getElementById("descifrar").addEventListener("click", function(){

    let text = document.getElementById("comentario").value
    let desplazamiento = document.getElementById("desplazamiento").value
    document.getElementById("comentario2").value = cipher.descifrar(text, desplazamiento)
  })
  
