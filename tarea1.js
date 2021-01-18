
//1. Función Reconocer Par o Impar con número entero.

function parImpar(number){
    let num = number % 2;
    return (num === 0) ? console.log('par') : console.log('impar');
}


//2. Función para reconocer la posición del carácter entregado en el string "abcdefghijklmnñopqrstuvwxyz".

function posicionEnString(character){
    let string = "abcdefghijklmnñopqrstuvwxyz";
    let search = string.indexOf(character)+1;
    console.log(search);
}

//3. Función que reciba un precio y devuelva el precio con impuesto de 0.19%.

function iva(number){
    let num = number * (1.19);
    let respuesta = "El precio con impuesto es de " + num;
    return respuesta;
}


//4. Función Tira un Dado y recibe un resultado aleatorio.

function nuevoDado(namePlayer){

    let dado = 0;
    let player = namePlayer;
    return function dadoAzar(){
        dado = Math.random()*(7 - 1)
        dado = Math.round(dado);
        let resultado = player + " tiró un dado y salió " + dado;
        
        return resultado
    }

}

const Jugador1 = nuevoDado('Julio');
const Jugador2 = nuevoDado('Eduardo');


//5. Guardar nombre y apellido en Local Stogare y Session Storage y visualizar a través del debugger del browser

function Persona(nombreCompleto, edad){
    this.nombreCompleto = nombreCompleto;
    this.edad = edad;
}

var persona = new Persona('Juan Herrera', 40)

console.log(persona)

Persona.prototype.guardarEnLocalStorage = function(persona){
    localStorage.setItem('Persona', JSON.stringify(persona) )

    let objeto = localStorage.getItem('Persona');
    console.log(objeto)
}

Persona.prototype.guardarEnSessionStorage = function(persona){
    sessionStorage.setItem('Persona', JSON.stringify(persona))

    let objeto = sessionStorage.getItem('Persona');
    console.log(objeto)
}
