//Expresion switch(ejemplo del ejercicio que hice de mokepon)
    function sePresionoUnaTecla (event){
        switch (event.key) {
            case 'ArrowUp':
                moverArriba()
                break
            case 'ArrowDown':
                moverAbajo()
                break
            case 'ArrowRight':
                moverDerecha()
                break
            case 'ArrowLeft':
                moverIzquierda()
                break
            default:
                break;
        }
    }

    var Animal = "Jirafa";
    switch (Animal) {
        case "Vaca":
        case "Jirafa":
        case "Perro":
        case "Cerdo":
            console.log("Este animal subirá al Arca de Noé.");
            break;
        case "Dinosaurio":
            default:
            console.log("Este animal no lo hará.");
    }
// do...while
    let result = '';
    let i = 0;

    do {
        i = i + 1;
        result = result + i;
    } while (i < 5);

    console.log(result);
    console.log(i);
        // Expected output: "12345"

//continue 
    let si = 0;
    let n = 0;
    while (si < 5) {
        si = si + 1;
        if (si == 3) {
            continue;
        }// cuando "si" =3 se salta el "n = si + n"
        n = si + n
    }
    console.log(si);
    console.log(n);