//tipos de variables
nombre = "alvin";
apellido = 'quintero';
//console.log(' ' + apellido)
console.log(`mi nombre es ${nombre} ${apellido}`)
var nombre = "alexis";
console.log(nombre)

let edad = 31
console.log(edad)
edad = 'oizo<doz'
console.log(edad)
let color = 'verde'
//console.log(     [{nombre: "alvin", apellido: apellido, edad, color },{nombre: nombre, apellido:'piña', edad: 32, color: 'azul'}][0].color + [{nombre: "alvin", apellido: apellido, edad, color },{nombre: nombre, apellido:'piña', edad: 32, color: 'azul'}][0].edad    )

const marca = [{marca: 'toyota', modelo: 'txl'}, {marca: 'toyota', modelo: ''}]
console.log(marca)
marca[1].modelo = 'corola'
console.log(marca)
























//// Tipos de variables. ///

        // VAR
        // Puede cambiar su valor en cuanquier momento
        //variableVar = "2";
        ////console.log(variableVar)
        //var variableVar = "";
        //console.log("---------")
        //variableLet = "2";
        //console.log(variableVar)

        // LET
        // Puede cambiar su valor siempre y cuando se cambie despues de ser definida
        //console.log("---------")
        //console.log("Se declara la variable variableLet")
        //let variableLet = 5;
        //console.log(/*typeof*/ variableLet)
        //console.log("---------")
        //console.log("Se cambia el valor de variableLet")
        //variableLet = "5 hghghgh";
        //console.log( /*typeof*/ variableLet)

        // CONST
        // NO puede cambiar su valor despues de haber sido definida
        //console.log("---------")
        //console.log("Se declara la variable variableConst");
        //const variableConst = 5;
        //console.log(variableConst);
        //console.log("---------")
        //console.log("Se cambia el valor de variableConst")
        //variableConst = 7;
        //console.log(variableConst);
        //console.log("---------")


        // Notas:
        // EL "typeof" sirve para identificar el tipo de dato


//// Tipo de datos. ///

    // String: Son cadenas de texto
        //console.log("String");
        //let a = "Hola Mundo ${variableConst}"; // son usados siempre
        //console.log(a);
        //a = 'hola mundo ${variableConst}';  // son usados siempre
        //console.log(a);
        //a = `hola mundo ${variableConst}`; // Son usados cuando se requier o se quiere concadenar variables
        //console.log(a);
        //console.log("____________")

    // Number
       // //console.log("Number");
        //let b = Number(8 + "8");
        //console.log(b);
        //console.log("____________")

    // boolean
        //console.log("boolean");
        //let c = true; //verdadero
        //console.log(c);
        //let d = false; //falso
        //console.log(d);
        //console.log("____________")

    // object o Json
        //console.log("object o Json");
       // let e = {
        //    nombre: "Alexis",
        //    apellido: "Piña",
       // //    edad: 32,
        //    hijos: true,
        //    nombreDeHijos: {
        //        hija: "pauleth",
       //         hijo: "wilmen"
        //    }
        //}
        //console.log(`Mi nombre es: ${e.nombre} ${e.apellido}`);
        //console.log("____________")

    // Arrary
        //console.log("Array");
        //et f = ["alexis", 8, true, e, ["a","b",5] ];
        //console.log(f[3].edad)