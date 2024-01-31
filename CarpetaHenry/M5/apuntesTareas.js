//07
    let numTest = 5
    let stringTest = "Siu"
    let booleanTest = true

    function esTipoDato(valor) {
    // La función recibe un argumento "valor".
    // Retorna el tipo de dato de este valor.
    // Por ejemplo: "string", "number", "boolean", "object", etc.
    // Tu código:
    return typeof valor; //Utilizando typeof valor, obtenemos el tipo de dato de valor.
    }
    console.log(esTipoDato(stringTest));
    console.log(esTipoDato(numTest));
    console.log(esTipoDato(booleanTest));


    module.exports = esTipoDato;

//08
    let num = 5.23
    function esNumeroEntero(numero) {
    // La función recibe un argumento "numero".
    // Verifica si este es un número entero o no.
    // Returna true si lo es, de lo contrario, retorna false.
    // Tu código:
    return Number.isInteger(numero);
        //Utiliza Number.isInteger(numero) para verificar si numero es un entero.
        //Si numero es un entero, Number.isInteger devuelve true; de lo contrario, devuelve false.
    }

    console.log(esNumeroEntero(num))

//10 
    function esFechaValida(fecha) {
        // La función recibe un argumento "fecha".
        // Comprueba si este corresponde a una fecha válida.
        // Si es así, retorna true, sino retorna false.
        // Tu código:
        // Intenta crear un objeto Date con el argumento
    
        
        if (fecha.toString()== "Invalid Date"){
        return false
        }
        //Si la fecha / se creo a partir / del objeto Date
        if (fecha instanceof Date){
        return true
        } else return false 
    
    }

//11
    let edadUsuario = 20

    function esMayorDeEdad(fechaNacimiento) {
    // La función recibe un argumento "fechaNacimiento" correspondiente a la fecha
    // de nacimiento de una persona.
    // Determina si esta persona es mayor de edad (tiene 18 años o más).
    // Devuelve true si lo es, caso contrario, retorna false.
    // PISTA: Investiga el método getFullYear() de la clase Date para obtener el año actual.
    // Tu código:

    let año = fechaNacimiento.getFullYear()
    
    let añoActual = new Date ().getFullYear()

    if(añoActual - año > 18){
        return true 
    } else return false 

    }

