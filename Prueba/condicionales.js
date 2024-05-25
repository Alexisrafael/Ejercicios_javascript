////  if, else if, y else

function numero(a) {
    if ( a >= 0) {
        if (a > 18 || a < 60){
            console.log("tiene mas de 18, pero es menor a 60")
        }else if( a < 18){
            console.log("tiene menos de 18")
        }else if (a === 18){
            console.log("tiene 18")
        }else{
            console.log("tiene mas de 60")
        }
    } else {
        console.log("El numero ingresado no puede ser menor a 0")
    }
}

numero(65)

function nuemro2(a) {
    switch (typeof a) {
        case "number":
            console.log("Es un nuemro")
            break;
        case "string":
            console.log("Es un texto")
            break;
        case "boolean":
            console.log("Es un boolean")
            break;
        default:
            console.log("Es otro tipo de dato")
            break;
    }
}

//nuemro2(true)