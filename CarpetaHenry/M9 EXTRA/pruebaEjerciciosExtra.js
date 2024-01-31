function deObjetoAarray(objeto) {
    // Recibes un objeto. Tendrás que crear un arreglo de arreglos.
    // Cada elemento del arreglo padre será un nuevo arreglo que contendrá dos elementos.
    // Estos elementos debe ser cada par clave:valor del objeto recibido.
    // [EJEMPLO]: {D: 1, B: 2, C: 3} ---> [['D', 1], ['B', 2], ['C', 3]].
    // Tu código:
    let array =[]
    for (let prop in objeto) {
        let subArray =[]
        subArray.push(prop)
        subArray.push(objeto[prop])
    
        array.push(subArray)
    }

    return array 
}

let obj = {D: 1, B: 2, C: 3}
//console.log(deObjetoAarray(obj));

//-----------------------------------------------------------------

function numberOfCharacters(string) {
    // La función recibe un string. Debes recorrerlo y retornar un objeto donde cada propiedad es una de las
    // letras del string, y su valor es la cantidad de veces que se repite en el string.
    // Las letras deben estar en orden alfabético.
    // [EJEMPLO]: "adsjfdsfsfjsdjfhacabcsbajda" ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 }
    // Tu código:
    let objeto = {}
    let arrayPropiedades = string.split('').sort()
    
    for (let i = 0; i < arrayPropiedades.length; i++) {
        if (objeto[arrayPropiedades[i]]) {
            objeto[arrayPropiedades[i]]+= 1
        } else {
            objeto[arrayPropiedades[i]] = 1;
        }
    }
    return objeto
}

let str1 = "adsjfdsfsfjsdjfhacabcsbajda"
//console.log(numberOfCharacters(str1));

//------------------------------------------------------------------

function capToFront(string) {
    // Recibes un string con algunas letras en mayúscula y otras en minúscula.
    // Debes enviar todas las letras en mayúscula al comienzo del string.
    // Retornar el string.
    // [EJEMPLO]: soyHENRY ---> HENRYsoy
    // Tu código:
    let minusculas = ""
    let mayusculas = ""
    
    for (let i = 0; i < string.length; i++) {
        if(string[i].toLowerCase() === string[i]){
            minusculas = minusculas + string[i]
        } else {
            mayusculas = mayusculas + string[i]
        }
    }
    return mayusculas + minusculas
}

let str2 = "soyHENRY"
//console.log(capToFront(str2));

//-----------------------------------------------------------------------------

function asAmirror(frase) {
    // Recibes una frase. Tu tarea es retornar un nuevo string en el que el orden de las palabras sea el mismo.
    // La diferencia es que cada palabra estará escrita al inverso.
    // [EJEMPLO]: "The Henry Challenge is close!"  ---> "ehT yrneH egnellahC si !esolc"
    // Tu código:
    let arrayFrase = frase.split(" ")
    let arrayReverso = []
    let fraseReverso

    for (let i = 0; i < arrayFrase.length; i++) {
        let stringReverso = arrayFrase[i].split('').reverse().join('')
        arrayReverso.push(stringReverso)
    }
    return fraseReverso = arrayReverso.join(" ")
}


let str3 = "The Henry Challenge is close!"
//console.log(asAmirror(str3));

//---------------------------------------------------------------------------------------

function capicua(numero) {
    // Si el número que recibes es capicúa debes retornar el string: "Es capicua".
    // Caso contrario: "No es capicua".
    // Tu código:
    let numString = numero.toString()
    let numStringReverse = numero.toString().split("").reverse().join("")

    if (numString === numStringReverse) {
        return "Es capicua"
    } else return "No es capicua"
}

let numPrueba = 15351
//console.log(capicua(numPrueba));

//------------------------------------------------------------------------------------------

function deleteAbc(string) {
    // Tu tarea es eliminar las letras "a", "b" y "c" del string recibido.
    // Retorna el string sin estas letras.
    // Tu código:
    let arrayABC = string.split("")

    arrayABC = arrayABC.filter(elemento => (elemento !== "a") && (elemento !== "b") && (elemento !== "c"));

    return arrayABC.join("")
}

let stringConABC= "abcHenray"

//console.log(deleteAbc(stringConABC));

//---------------------------------------------------------------------------------------   

function sortArray(arrayOfStrings) {
    // Recibes un arreglo de strings.
    // Debe retornar un nuevo arreglo, pero con las palabras ordenadas en orden creciente a partir
    // de la longitud de cada string.
    // [EJEMPLO]: ["You", "are", "beautiful", "looking"]  ---> [“You", "are", "looking", "beautiful"]
    // Tu código:
    let nuevoArray = arrayOfStrings.sort((a, b) => a.length - b.length)
    //se le da una funcion  a sort(), com parametro, para que  se organice el array en base a una metrica especifica, en este caso la longuitud   
    // el sort  recorre el array comprando todos los elementos por pares 
    return nuevoArray
}

let prueba7 = ["You", "are", "beautiful", "looking"]

//console.log(sortArray(prueba7));

//-----------------------------------------------------------------------------

function buscoInterseccion(array1, array2) {
    // Recibes dos arreglos de números.
    // Debes retornar un nuevo arreglo en el que se guarden los elementos en común entre ambos arreglos.
    // [EJEMPLO]: [4,2,3] U [1,3,4] = [3,4].
    // Si no tienen elementos en común, retornar un arreglo vacío.
    // [PISTA]: los arreglos no necesariamente tienen la misma longitud.
    // Tu código:
    let setArray2 = new Set(array2)
    // Se creo un elemento Set, que es una collecion de elementos unicos 
    let nuevoArreglo = array1.filter(elemento => setArray2.has(elemento))
    // Se filtra el array 1 con los elementos que se encuentren el el array2(transformado en set)

    return nuevoArreglo
}

let arr1 = [4,2,3,5]
let arr2 = [1,3,4]

console.log(buscoInterseccion(arr1, arr2));