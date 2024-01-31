let miObjeto = {
    conBalon: ["Futbol", "Basket", "Rugby"],
    sinBalon: ["Box", "Surf"]
}

let persona = {
    nombre: "lucas",
    edad: 26,
    estudios: {esProgramador: true}
}

persona.nombre = "Said "// cambio el valor de la propiedad en el objeto 
persona.edad = 22

//console.log(persona.edad);

//--------------------------------------------------------
let autos = {}

autos.marca = ["Ford", "Audi", "Ferrari"] // crear nueva propiedad
//delete autos.marca // Eliinar propiedades 

//console.log(autos)

//-----------------------------------------------------
let misFunciones = {
    saludar: function () {
        console.log("Hola");
    }
}

misFunciones.saludar()

//-----------------------------------------

let atuendos = {
    manos: ['Guantes', 'Anillos'],
    pies: ['Zapatos', 'Zoquetes']
}
//console.log(atuendos.manos);

atuendos["piernas"] = ['Bermudas', 'Pantalones'] // dot-notation

console.log(atuendos.piernas);

let comidas = {}
let diferenciaDeNotaciones = function(propUno, propDos){//bracket notation
    comidas[propUno] = ['Frutas', 'Vegetales'];
    comidas[propDos] = ['Hamburguesas', 'Papas fritas']
}

diferenciaDeNotaciones('saludable', 'no Saludable')
console.log(comidas);





