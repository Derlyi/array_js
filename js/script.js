// Acceder a los elementos de u Array

document.write("<h3>ELEMENTOS DE UN ARRAY</h3>")

const numbers = [1, 2, 3, 4, 5]

document.write("El array es: "+numbers+"<br>")

document.write("El Arreglo en su primera posición es: "+numbers[0]+"<br>")

document.write("El Arreglo en la posición dos: "+numbers[2]+"<br>")

// usar variables para acceder a los elementos de un array

let index = 4

document.write("La variable index corresponde a: "+numbers[index]+"<br>")

// Modificar los elementos de un array

numbers[0] = 10
numbers[2] = 30

document.write("El Array modificado es: "+numbers+"<br>")

// La longitud de un array

document.write("<h3>LA LONGITUD DE UN ARRAY</h3>")

const frutas = ["manzana", "pera", "plátano", "fresa"]

document.write("El array en frutas es: " +frutas+"<br>")
document.write("El array de las frutas tiene una longitud de: " +frutas.length+"<br>")

// puedes cortar su longitud asignando un nuevo valor a la propiedad .length

frutas.length = 2

document.write("Se corta el array en frutas: "+frutas+"<br>")
document.write("La nueva longitud es: "+frutas.length+"<br>")

document.write("<h3>METODOS DE UN ARRAY</h3>")

// .push
document.write("<h4>.push</h4>")

const comida = ["plátano", "fresa"]
comida.push("naranja")
document.write("Se añade un elemento al final de array: "+comida+"<br>")

// el método .push() devuelve la nueva longitud del array

document.write("La longitud del array es: "+comida.length+"<br>")

const newLength = comida.push("naranja")
document.write("La nueva longitud del array es: "+newLength+"<br>")
document.write("El array es: "+comida+"<br>")

// .pop()
document.write("<h4>.pop</h4>")

const ultimaFruta = comida.pop()

document.write("El elemento del array: "+comida+"<br>")
document.write("Se devuelve el array: "+ultimaFruta+"<br>")

// .shift()
document.write("<h4>.shift</h4>")

const primeraComida = comida.shift()

document.write("Se elimina un elemento del array: "+comida+"<br>")
document.write("El primer elemento del array es: "+primeraComida+"<br>")

// .unshift()
document.write("<h4>.unshift</h4>")

comida.unshift("manzana")

document.write("Se agrega un primer lemento al array: "+comida+"<br>")

// concatenar: concat()
document.write("<h4>Concatenar</h4>")

const num = [1, 2, 3]
const number = [4, 5]

const allNumbers = num.concat(number)

document.write("Los primeros números del array son: "+num+"<br>")
document.write("Los segundos números del array son: "+number+"<br>")
document.write("Se Concatenan los números: "+ allNumbers + "<br>")

// Ejercicio practico
document.write("<h4>EJERCICIO PRACTICO</h4>")
// En un restaurante se reciben pedidos de comida a domicilio. Vamos a escribir una función procesarPedido que recibe un pedido, que es un array de platos. Lo que debemos hacer es: El primer elemento lo sacamos del array, ya que es el nombre del cliente. Añadimos al principio del array la cadena de texto "bebida", ya que es una promoción que tenemos. Después añadimos al final del array el nombre del usuario que sacamos antes. Recuerda que debes devolver el array modificado:

function procesarPedido(pedido) {
    const cliente = pedido.shift();
    pedido.unshift("bebida");
    pedido.push(cliente);
    return pedido
  }
  const pedidos=["Pedro" , "Café" , "Huevos" , "Pan"]
  document.write("El pedido es: "+procesarPedido(pedidos)+"<br>")
