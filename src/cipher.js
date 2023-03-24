//crear funciones para hacer el cifrado
const cipher = {

  cifrar: function(texto,desplazamiento){
  let resultado = "";
    const mayusculas = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const minusculas = "abcdefghijklmnopqrstuvwxyz";
    let valueInt = parseFloat(desplazamiento)

    
    if (valueInt % 1 === 0 && valueInt > 0){
      valueInt = (valueInt % 26);
    if (texto){
      for (let i = 0; i<texto.length; i++){
        if (mayusculas.indexOf(texto[i])!=-1){
          let posicion = ((mayusculas.indexOf(texto[i])+valueInt)%26);
          resultado += mayusculas[posicion];
        }
        else if (minusculas.indexOf(texto[i])!=-1){
         let posicion = ((minusculas.indexOf(texto[i])+valueInt)%26);
        resultado += minusculas[posicion];
      } else {
        resultado += texto[i];
      }
    }
 }
    } else{
      alert("Ingrese un número entero y mayor que 0")
      
    }

    
 return resultado;  
},

descifrar: function(texto, desplazamiento){
  if (!texto)
    return "";
  const letras = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  desplazamiento = (desplazamiento % 52);
  return texto.replace(/[aA-zZ]/ig, c=> letras[(letras.indexOf(c)-desplazamiento)%52]);
} 
//la variable posicion se creo para hacer el calculo del desplazamiento
}
export default cipher

