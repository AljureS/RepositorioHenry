let libro = {autor: 'Borges', genero: 'Policial', año: 1990}

let tienePropiedad = libro.hasOwnProperty('autor')//check si una propiedad existe
console.log(tienePropiedad);

//------------------------------------

let todasLasPropiedades = Object.keys(libro) // ver todas las propiedades de un objeto en un array
console.log(todasLasPropiedades);

//-----------------------------------------
let mundo = {continetes: 7, paises: 195, oceanos: 5}
for (let prop in mundo){ //para recorrer un objeto 
    console.log("esta es la porpiedad " + prop);
    console.log("Este es el valor: " + mundo[prop]);
}

//---------------------
let mascota = {
    animal: "Perro", 
    raza: "Samoyedo", 
    amistoso: true, 
    dueña: "Said Aljure",
    info: function(){console.log(("Mi perro es un: ") + this.raza);}
}

mascota.info()