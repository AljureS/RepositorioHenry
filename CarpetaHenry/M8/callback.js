let devuelvoUsuario = function () {
    return 'Said'
}

let devuelvoSaludo = function (){
    return 'Hola'
}

let saludar = function (cb1,cb2) {
    return cb1() + ' ' + cb2()
}

let resultado = saludar(devuelvoSaludo, devuelvoUsuario)
console.log(resultado);

//--------------------------------
let devuelvoFrase = function(comida){
    return "Hoy quiero comer: " + comida 
}

let hablar = function(comida,cb){
    return cb(comida)
}

let fraseFinal = hablar("Pizza",devuelvoFrase)
console.log(fraseFinal);

//--Asi se verifica que si se envio una funcion callback---

function cambiarCadena(string, callback) {

    if (callback) {
        let resultado = callback(string)
        return resultado
    } else return string
}