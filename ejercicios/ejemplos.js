// Funcion normal
function name(a){
    // let se usa para definir variables que solo pueden ser accedidas
    // dentro de la función
    let numero = [1,2,2222,6,0,8,4,3,2,1,4,79,5];
    // find se utiliza en array para traer la primera conincodencia de una busqueda
    /*const search = numero.find(function(elemento){
        if(elemento === a){
            return elemento
        }
    })*/
   // const se utiliza para definir variables que no pueden ser mutadas
   const search = [];
   // filter se utiliza en array para traer todas la coincidencias que existan
   numero.filter((elemento)=> {
    // toString se utiliza para cambiar el tipo de variable a string
    // includes se utiliza tando en array como en string para verificar si el parametro que se le pasa 
    // se encuentra en el elemento.
    if(elemento.toString().includes(a.toString())){
        // push metodo de array que se utiliza para insertar valores en la ultima posición del array
        search.push(elemento.toString())
    }})
    // return es utilizado para indicar a la funcion que hasta este punto debe ejecutarce
    return search
}

//console.log(name(2))

// variable de tipo función
const name2 = function(a){
    let numero = [1,2,2222,6,0,8,4,3,2,1,4,79,5];
    /*const search = numero.find(function(elemento){
        if(elemento === a){
            return elemento
        }
    })*/
   const search = [];
   numero.filter((elemento)=> {
    if(elemento.toString().includes(a.toString())){
        search.push(elemento.toString())
    }})
    return search
}

//console.log(name2(2))

//variable de tipo función de flecha
const name3 = (a)=>{
    let numero = [1,2,2222,6,0,8,4,3,2,1,4,79,5];
    /*const search = numero.find(function(elemento){
        if(elemento === a){
            return elemento
        }
    })*/
   const search = [];
   numero.filter((elemento)=> {
    if(elemento.toString().includes(a.toString())){
        search.push(elemento.toString())
    }})
    return search
}
console.log(name3(2))