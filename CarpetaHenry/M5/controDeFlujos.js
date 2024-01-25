function viajar(destino) {
    if (destino === "Brasil") {
        console.log("Turn Left");
    } else if (destino === "Argentina"){
        console.log("Turn Right");
    } else {
        console.log("Te perdiste");
    }
}

viajar("Argentina")

function puedeManejar(edad) {
    if (edad >= 18) {
        console.log(true);
    } else {
        console.log(false);
    }
}
puedeManejar(4)