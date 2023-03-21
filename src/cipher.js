//const cipher = {
//crear funciones para hacer el cifrado

 function cifrar(texto,desplazamiento){
  let resultado = "";
    let letras = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    desplazamiento = (desplazamiento % 26);
    if (texto){
      for (let i = 0; i<texto.length; i++){
        if (letras.indexOf(texto[i])!=-1){
          let posicion = ((letras.indexOf(texto[i])+desplazamiento)%26);
          resultado += letras[posicion];
        }
        else {
          resultado += texto[i];
      }
    }
 }
 return resultado;  
}
  //la variable posicion se creo para hacer el calculo del desplazamiento

//};

//export default cipher
