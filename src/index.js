//no es para llamar un elemento del html. Se utiliza para escuchar 
//cualquier evento que le pase al navegador con "load"
window.addEventListener("load", inicio, true)
//admitir en el campo de texto solo letras en mayúscula
//usamos el evento keyUpp para evitar las letras en minuscula
function inicio(){
  document.getElementById("comentario").addEventListener("keyup", function(){
    this.value = this.value.toUpperCase()
  }, true); 

//this.value llama el evento de "comentario"
//this.value.toUpperCase sera igual al comentario escrito pero en mayuscula

  document.getElementById("cifrar").addEventListener("click", function(){
    let texto = document.getElementById("comentario").value
    let desplazamiento = document.getElementById("desplazamiento").value
    console.log(texto)
    //document.getElementById("comentario2").value = cifrar(texto,desplazamiento)
  }, true);
//boton cifrar- el cual tomara ese mensaje escrito y para eso se le agrega .value
//Y la funcion de desplazamiento para que se devuelva el texo a la segunda caja de texto
//las variables texto y desplazamiento 
}