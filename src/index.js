import cipher from './cipher.js';

    

document.getElementById("cifrar").addEventListener("click", function(){
  const text = document.getElementById("comentario").value
  const desplazamiento = document.getElementById("desplazamiento").value
  document.getElementById("comentario2").value = cipher.encode(text, desplazamiento) 
})

document.getElementById("descifrar").addEventListener("click", function(){

  const text = document.getElementById("comentario").value
  const desplazamiento = document.getElementById("desplazamiento").value
  document.getElementById("comentario2").value = cipher.decode(text, desplazamiento)
})
  
