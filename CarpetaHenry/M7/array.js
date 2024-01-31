Array.isArray(arr)//pa comprobar que un array si es array

//-------------------------

let listCompras =[]

listCompras[3] = 'Tomates'
listCompras[1] = 'Lechuga'

listCompras.push('Beer')

//console.log(listCompras[1]);
//console.log(listCompras.length);

listCompras.pop() // eliminar el ultimo elemento
listCompras.unshift('Beer','leche')// añade elemnto(s) al incio del array
listCompras.shift()// eliina primer elemento del array 

//console.log(listCompras);

//-------------------------------------------------

let pintores = ['Picasso', 'Velázquez', 'Van Gogh', 'Dalí']

let incluyeDali = pintores.includes('Monet')// un booleano que da si x elemento esta en el array 

//console.log(incluyeDali);

//--------------------------------------------------

let numeros = [10,4,8,9]
let compleCondicion = numeros.every((nums) =>{//si todos los elemtos del array cumplen una condicion
    return nums > 5
})
//console.log(compleCondicion);

//------------------------------------------------------
let palabra = "Zait"
let string1 = palabra.split("")//String => Array 
string1.shift()
string1.unshift('S')

string1.pop()
string1.push('d')

//console.log(string1);

let revString1 =string1.reverse()//volterar un Array
console.log(revString1);

let palabra2 = string1.join("")//Array => String
//console.log(typeof(palabra2));
//console.log(palabra2);

//----------------------------------------------------------
let numbers =[1, 2, 3, 4]
//numbers.forEach((num) => console.log(num))
//este metodo realiza alguna accion sobre el arreglo que esta recorriendo (recorre 1x1)
numbers.forEach((num) => {
    if (num === 3) {
        //console.log(num);
    }
})

//------------------------------------------------------
let masUno = numbers.map(num => {//realiza una copia del arreglo original y le puede añadir cambios

    return num + 3
})
console.log(masUno);

//--------------------------------------------

//´para poder quitarle espacios y mayusculas (ejercicio 25 M7)
let palabr = string.replace(/ /g,"").toLowerCase()

//-----------------------------------------
function multiplicarArgumentos() {
    // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto.
    // Si no se pasan argumentos retorna 0. Si se pasa un argumento, simplemente retórnalo.
    // [PISTA]: "arguments" es un arreglo.
    // Tu código:
    let acumulador = 1
  
    if (arguments.length ===0) {//es un objeto similar a un array disponible dentro de todas las funciones
        return 0
    }

    for (let i = 0; i < arguments.length; i++) {

      acumulador = acumulador * arguments[i]

    }
    return acumulador
}












