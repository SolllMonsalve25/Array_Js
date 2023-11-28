/*alert("conociendo Js")*/



//Acceder a los elemetos de un array- "se cambia console.log por document.write"//
document.write("<h1>ELEMENTOS DE UN ARRAY</h1>")

const numbers = [1, 2, 3, 4, 5]

document.write("El arreglo en su primera posición es: "+numbers[0]+"<br>")
document.write("El arreglo en su primera posición es: "+numbers[2]+"<br>")


//usar variables para acceder a los elementos de un array//

/*const numbers = [1, 2, 3, 4, 5]
let index = 2

console.log(numbers[index]) // 3*/

let index = 4

document.write("la variable index corresponde a: "+numbers[index]+"<br>")

//modifiar los elementos de un array//

/*const numbers = [1, 2, 3, 4, 5]*/

numbers[0] = 10
numbers[2] = 30

document.write("el array modificado es: "+numbers[1]+"<br>")
document.write("el array modificado es: "+numbers[2]+"<br>")



//METODOS//

/*la longitud de un areglo*/
document.write("<h1>LA LONGITUD DE UN ARRAY</h1>")

const frutas = ["manzana" , " pera", " plátano", " fresa"]

document.write("el array de frutas es: "+frutas+"<br>")
document.write("el array de frutas tiene una longitud de: "+frutas.length+"<br>")



//METODOS DE UN ARRAY//
document.write("<h1>MÉTODOS DE UN ARRAY</h1>")

//push//
const fruits = ["plátano" , " fresa"]
fruits.push(" kiwi")
document.write("el array de frutas es: "+fruits+"<br>")


//

const frutts = ["plátano" , " fresa"]
document.write("el array de las frutas es: "+frutts.length+"<br>") 

const newLength = frutts.push(" naranja")
document.write("el array de frutas tiene una longitud nueva de: "+newLength+"<br>") // 3
document.write("el array de las frutas es: "+frutts+"<br>") // ["plátano" , " fresa" , " naranja"]
//

//pop//
document.write("<h1>MÉTODO .POP</h1>")

const fruts = ["plátano", "fresa", "naranja"]
const ultimaFruta = fruts.pop()

document.write("el array de frutas es: "+fruts+"<br>") // ["plátano", "fresa"]
document.write("el array de la ultima fruta es: "+ultimaFruta+"<br>") // "naranja"


//shift//
document.write("<h1>MÉTODO .SHIFT</h1>")

const frutaas = ["plátano" , " fresa" , " naranja"]
const primeraFruta = frutaas.shift()

document.write("el array devuelto de las frutas es: "+frutaas+"<br>") // ["fresa", "naranja"]
document.write("el arreglo de la primera fruta es: "+primeraFruta+"<br>") // "plátano"

//.unshift//
document.write("<h1>MÉTODO .UNSHIFT</h1>")

const frutos = ["plátano", "fresa", "naranja"]
frutos.unshift("manzana")

document.write("el arreglo añadido de la fruta es: "+frutos+"<br>")

document.write("<h3>para concatenar .concat</h3>")

const num1 = [1, 2, 3, 4]
const num2 = [5]

const allNumbers = num1.concat(num2)
document.write("el array de los numeros es: "+allNumbers+"<br>")

//operador (...) spread operator//
document.write("<h3>operador (...) spread operator</h3>")

const numbers1 = [1, 2, 3]
const numbers2 = [4, 5]

//                    1, 2, 3        4, 5                     
const allNum = [...numbers1, ...numbers2]
document.write("el array multiplicado es: "+allNum+"<br>") // [1, 2, 3, 4, 5]


//ejercicio//
document.write("<h3>EJERCICIO - procesarPedido</h3>")

function procesarPedido(pedido) {
    const cliente = ("pedro")
    pedido.unshift = ("cafe")
    pedido.push = ("huevo, pan")}

    const pedidoss=[cliente.concat(pedido.unshift+pedido.push)]
    document.write("el array del pedido procesado es: "+pedidoss+"<br>")
