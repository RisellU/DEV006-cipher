//crear funciones para hacer el cifrado
const cipher = {

  cifrar: function(texto,desplazamiento){
  let resultado = "";
    const letras = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

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
},

descifrar: function(texto, desplazamiento){
  if (!texto)
    return "";
  const letras = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  desplazamiento = (desplazamiento % 26);
  return texto.replace(/[A-Z]/ig, c=> letras[(letras.indexOf(c)-desplazamiento)%26]);
} 
//la variable posicion se creo para hacer el calculo del desplazamiento
}
export default cipher

