let arr = [1, 2, 3, 4, 5]

for (let i = 0; i < arr.length; i++) {
    //console.log(arr[i]);
    
}

function encontrarLetraP(string) {

    let letras = string.split("")
    let contadorP = 0
    for (let i = 0; i < letras.length; i++) {
        if (letras[i] == "p" ){
            contadorP ++
            //console.log('Contiente a p');
        }
    }
    //console.log(contadorP);
}

encontrarLetraP("perromalparidoxd");

//------------------------------

let arr2 = []

while (arr2.length < 5) {
    arr2.push('BOOM')
}
console.log(arr2);

//---------------------------------------------

function encontrarElemento(elemento, array) {
    // Busca el elemento pasado por argumento dentro del array.
    // Si no se encuentra, retorna -1.
    // Tu código:
    for (let i = 0; i < array.length; i++) {
        if (elemento === array[i]){
        return array.indexOf(array[i])//retrona la posicion del elemento 
        }
    }
    return -1
}

//Ejemplo bucles dobles--------------------------

function encontrarElementoRepetido(numeros) {
    // La función recibe un argumento "numeros" que es un array de números.
    // Retorna el primer elemento repetido que se encuentre en el array.
    // Tu código:

    for (let i = 0; i < numeros.length; i++) {
        for (let j = i+1; j < numeros.length; j++) {
            if (numeros[i] === numeros[j]) {
                return numeros[i]
            }
        }
    }
}