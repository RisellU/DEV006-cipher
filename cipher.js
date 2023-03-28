//crear funciones para hacer el cifrado
const cipher = {



  encode: function(texto,desplazamiento){
    let resultado = "";
    const mayusculas = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const minusculas = "abcdefghijklmnopqrstuvwxyz";
    let valueInt = parseFloat(desplazamiento);

    if (valueInt % 1 === 0 && valueInt > 0){
      valueInt = (valueInt % 26);
      if (texto){
        for (let i = 0; i<texto.length; i++){
          
          if (mayusculas.indexOf(texto[i])!==-1){
            const posicion = ((mayusculas.indexOf(texto[i])+valueInt)%26);
            resultado += mayusculas[posicion];
          }
          else if (minusculas.indexOf(texto[i])!==-1){
            const posicion = ((minusculas.indexOf(texto[i])+valueInt)%26);
            resultado += minusculas[posicion];
          } else {
            resultado += texto[i];
          }
        }
      }
    } else{
      throw new TypeError("Ingrese un número entero y una cadena")
      
    }

    
    return resultado;  
  },

  decode: function(texto, desplazamiento){
    let resultado = "";
    let valueInt = parseFloat(desplazamiento);
    const mayusculas = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const minusculas = "abcdefghijklmnopqrstuvwxyz";

    if (valueInt % 1 === 0 && valueInt > 0){
      valueInt = (valueInt % 26);
      if (texto){
        for (let i = 0; i<texto.length; i++){
          
          if (mayusculas.indexOf(texto[i])!==-1){
            const posicion = (((mayusculas.indexOf(texto[i])-valueInt)+26)%26);
            resultado += mayusculas[posicion];
          }
          else if (minusculas.indexOf(texto[i])!==-1){
            const posicion = (((minusculas.indexOf(texto[i])-valueInt)+26)%26);
            resultado += minusculas[posicion];
          } else {
            resultado += texto[i];
          }
        }
      }
    } else{
      throw new TypeError("Ingrese un número y una cadena")
      
    }
    return resultado;   
  }
}
export default cipher

