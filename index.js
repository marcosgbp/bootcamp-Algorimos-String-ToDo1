/*
    Crea una función que, dada una cadena, devuelva todo el contenido de esa cadena, 
    pero sin espacios en blanco.
    Si se da la cadena "Pl ayTha tF u nkyM usi c", devuelve "PlayThatFunkyMusic".
*/
function removeBlank(cadena){
    let result = '';
    for (let i = 0; i < cadena.length; i++) {
      if (cadena[i] != ' ') {
        result += cadena[i];
      }
    }
    return result;
}
let cadena = "Pl ayTha tF u   nkyM usi c";
console.log(removeBlank(cadena))
/*
    Crea una función de JavaScript que, dada una cadena, devuelva el número entero formado
    por los dígitos de la cadena. Dado "0s1a3y5w7h9a2t4? 6! 8? 0", la función debería devolver
    el número 1357924680.
*/
function getNumber(cadena2){
    let result = [];
    for (let i = 0; i < cadena2.length; i++) {
        if(!isNaN(cadena2[i])){
            result += cadena2[i];
        }
      }
    return result;
}
let cadena2 = "0s1a3y5w7h9a2t4? 6! 8? 0";
cadena2 = removeBlank(cadena2);
console.log(getNumber(cadena2));
/*
    Crea una función que, dada una cadena, devuelva el acrónimo de la cadena 
    (solo las primeras letras, en mayúscula).Dado "no hay almuerzo gratis. 
    Debes pagar por tu comida", devuelve "NHAG-DPPTC".Dado "¡En vivo desde Nueva York,
    es sábado por la noche!", devuelve "ENDNYESPLN".
*/
function acronimo(cadena3) {
    let cadena3Arr = cadena3.split(' ');
    let result = '';
    for (let i = 0; i < cadena3Arr.length; i++) {
      if (cadena3Arr[i] !== '') {
        result += cadena3Arr[i][0].toUpperCase();
      }
    }
    return result;
}
let cadena3 = "no hay almuerzo gratis. Debes pagar por tu comida!";
console.log(acronimo(cadena3));

/*
    Acepta una cadena y devuelve el número de caracteres sin espacio que encuentre en una cadena.
    Por ejemplo, dado, "Amor, me estás volviendo loca", devuelve 29 (no 35).
*/
function countBlank(cadena4){
    let result = 1;
    for (let i = 0; i < cadena4.length; i++) {
      if (cadena4[i] != ' ') {
        result ++;
      }
    }
    return result;
}
let cadena4 = "Amor, me estás volviendo loca";
console.log(countBlank(cadena4));

/*
    Dada una matriz de cadenas y un valor (longitud), 
    elimina las cadenas más cortas que la longitud de la matriz.
*/
function deleteShortWord(cadena5, indice){
    let newCadena5=[];
    for(let i = 0; i<cadena5.length; i++){
        if(cadena5[i].length>indice){
            newCadena5.push(cadena5[i]);
        }
    }
    return newCadena5;
}
let cadena5 = ["hola", "hi", "Bienvenido"];
let indice = 3;
console.log(deleteShortWord(cadena5, indice));