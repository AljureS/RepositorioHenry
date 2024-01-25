function cuidadoConelConsoleLog(nombre) {
    console.log(nombre);
    return nombre
}

function otraFuncion() {
    return(
        "El nombre retornado por la funcion cuidadoConelConsoleLog es:  " +
        cuidadoConelConsoleLog('Said')
    )
}

function cuidadoConElReturn(nombre) {
    return nombre
    //apenas hay un return, la funcion se va a dejar de ejecutar
    console.log(nombre)    
}