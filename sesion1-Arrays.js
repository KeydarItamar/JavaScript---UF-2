
document.addEventListener('DOMContentLoaded', function(){



let boton1 = document.getElementById('ejercicio1');
let boton2 = document.getElementById('ejercicio2');

function ejercicio1(){
let colores = ['verd', 'vermell', 'groc', 'blau', 'negre', 'blanc'];
let pantalla = document.getElementById('caja');
let texto= "";
let arrayAux= [];
let variableAux;

texto += colores.every(function(color){
    return color < 'marro' ;
}) + '<br>';

for(let i=0 ; i < colores.length ; i++){
    if(colores[i]<'marro')
        arrayAux.push(colores[i]);
}

variableAux = arrayAux
texto +=`Los colores del array que son menores a marro son: ` + variableAux +  `<br>`;
variableAux= colores.pop();
texto += variableAux + "<br>";
variableAux = colores.pop();
texto += variableAux + "<br>";

colores.push("turquesa");
texto+= `Añadido color turquesa al Array = ${colores} <br>`;
colores.shift('verd');
texto+= `Color verde eliminado: ${colores} <br> `;

pantalla.innerHTML = texto; 
}

function ejercicio2(){
//creacion de array y presentacion 
let array = [1,2,3,4,5,4,3,2,1];
document.write ("EJERCICIO 2" + '<br> <br>');
document.write ('El array es :<br>'+array + '<br><br> ');
//at
document.write(`Funcion 'at' en posicion 2: ${array.at(2)} <br><br> `);
//concat
document.write(`Funcion 'concat' con array ("hola", "soy", "un", "array"):<br> `);
let arrayAux = ["hola", "soy", "un", "array"] ;
document.write(array.concat(arrayAux)+'<br><br> ');
//constructor
document.write("Constructor estandar para crear el array utilizado: <br>");
document.write("new Array (1,2,3,4,5,4,3,2,1)<br> <br> ");
//copyWithin
document.write("Funcion copyWithin desde posicion 4, copiar elemento del 1 al 3: <br>")
document.write(array.copyWithin(4,1,4)+ '<br> <br>')
//entries
document.write("Funcion entries que devuleve un diccionario con key y valor: <br> ")
let diccionario= array.entries();
for(valor of diccionario){
    document.write( '[' + valor + '] ')
}
document.write('<br><br>')
//every
document.write('Funcion write que mira si todos los numero son mayor a 0 y devuelve true: <br>')
let mayor = array.every(function(e){
    return e > 0;
});
document.write(mayor + '<br><br>');
//fill
document.write('Funcion fill() que llenara un array nuevo [1,1,1,1,1] y lo cambiara a ceros: <br>')
let array2= [1,1,1,1,1];
document.write(array2.fill(0)+'<br><br>')
//filter 
document.write('Funcion filter que devolvera un array nuevo con los numeros pares del array: <br>')
let pares = array.filter(function(e){
    return e % 2 == 0;
});
document.write(pares + '<br><br>')
//find
document.write('Funcion find, que devolvera el primer numero mayor que 3: <br>')
let mayor3= array.find(function(e){
    return e > 3;
});
document.write(mayor3 + '<br><br>')
//findIndex
document.write('Funcion findIndex que devolvera el index del numero mayor a 3: <br>')
mayor3= array.findIndex(function(e){
    return e > 3;
});
document.write(mayor3 + '<br><br>')
//flat
document.write('Function flat, que con la matriz : [1, 2, [3, 4, [5, 6]]], nos devolvera un array: <br>')
let matriz= [1, 2, [3, 4, [5, 6]]]
let arflat= matriz.flat(2);
document.write(arflat + '<br><br>')
//flatMap
document.write('Funcion flatMap que, con el array [1,2,3,4,2,3,4,2,1] devolvera un array con sus numero multiplicados por 2: <br>')
arflat= array.flatMap(function(e){
    return e * 2; 
});
document.write(arflat + ' <br><br>')
//forEach 
document.write('Funcion forEach, mirando si el numero de array es mayor a 3 o menor a 2 y devuelve el numero cuando sea true: <br>')
array.forEach(function(e){
    if((e>3 || e <2)){
        document.write(e+' ')
    }
});
document.write('<br><br>')
//from
document.write('Funcion Array.from, que devolvera un array a partir del String "Hola que tal": <br>')
let strArray= Array.from('Hola que tal')
document.write(strArray+ '<br><br>')

//includes
document.write('Funcion que devuelve true si existe el elemento 1 en el array: <br>')
document.write(array.includes(1)+ '<br><br>');

//indexOf 
document.write('Funcion que devuelve el primer indice del objeto 4: <br>')
document.write(array.indexOf(4)+'<br><br>')

//isArray
document.write('Funcion isArray que comprueba si el objeto pasado es un array: <br>')
document.write(Array.isArray(array)+'<br></br>')

//Join
document.write('Funcion que pasa los elementos de un array a un String: <br>')
document.write(array.join() +'Hola esto es un string'+ ' <br><br>')

//keys 
document.write('Funcion que devolvera las keys del array: <br>')
let keys= array.keys();
for(let key of keys){
    document.write(key + ' ')
}
document.write('<br><br>')
//lastIndexOf
document.write('Funcion que devuelve el index de la ultima aparacion de 3 en el array: <br>')
document.write(array.lastIndexOf(3)+'<br><br>')

//lenght
document.write('Funcion length que devuelve la cantidad de elementos en el array: <br>')
document.write(array.length+'<br><br>');

//map
document.write('Funcion map que creara un nuevo array despues de multiplicar poe 3 los elementos del array: <br>')
let por3Map= array.map(function(e){
    return e * 3;
});

document.write(por3Map + '<br><br>')

//pop
document.write('Funcion pop que eliminara el ultimo elemento del array [1,2,3,4,2,3,4,2,1]: <br>') 
let numEliminado = array.pop();

document.write('Elemento eliminado:'+ numEliminado + '<br>'+ array +  '<br><br>')

//prototype
document.write('Funcion prototype, nos permite crear un metodo statico para usarlo en los arrays. <br>')
document.write('Creamos un prototype que devuelve los numeros inpares de un array y lo llamamos con el array de ejemplo:<br>')
Array.prototype.inpares = function(){
return this.filter(function(e){
    return e % 3 == 0;
});
}
document.write(array.inpares()+ '<br><br>')

//push 
document.write('Funcion push que inserta un elemento dentro de un array, en mi caso meto los elementos: 5,7,9    <br>' )
array.push(5), array.push(8), array.push(9)
document.write(array+ ' <br><br>')

//reduce 
document.write('Funcion reduce, devolvera la suma de todos los elementos del array: <br>')
arrayAux= array.reduce(function(a,b){
    return a + b ;
}, 0);
document.write(arrayAux + '<br><br>')
//reduceRigth
document.write('Funcion reduceRight, hace lo mismo que reduce, pero desde el final al principio. En este caso devolvera la resta total: <br>')
arrayAux= array.reduce(function(a,b){
    return a - b ;
}, 0);
document.write(arrayAux + '<br><br>')
//reverse
document.write('Funcion reverse, le damos la vuelta al array: <br>')
document.write(array.reverse()+ '<br><br>')

//shift
document.write('Funcion shift, que elimina el primer elemento del array: <br>')
numEliminado = array.shift();
document.write('Numero eliminado: ' +numEliminado + '<br>'+ array+ '<br><br>')

//slice
document.write('Funcion slice, nos devolvera una parte del array que ira del 8 al 4:<br>')
arrayAux = array.slice(0,4)
document.write(arrayAux+ ' <br><br>')

//some
document.write('Funcion some, mira si algun elemento del array es mayor a 7 y devuelve true si es el caso: <br>')
let booleano = array.some(function(e){
    return e > 7 ;
});
document.write(booleano + ' <br><br>')

//sort
document.write('Funcion sort, ordena los elementos del array: <br>')
document.write(array.sort() + '<br><br>')

//splice
document.write('Funcion splice, elimina elementos de un array a partir de un indice y los puede guardar en otra variable: <br>')
arrayAux = array.splice(0,4);
document.write('Elementos eliminados: '+ arrayAux + '<br>'+ array+'<br><br>' )

//toString 
document.write('Funcion toString, devuelve el array en forma de string: <br>')
let arraString = array.toString();
document.write('Estos es un string'+arraString + '<br><br>')

//unshift
document.write('Funcion unshift, mete elementos nuevos en el array y/o devuelve el nuevo tamaño del mismo:<br>')
numEliminado= array.unshift('hola', 'manzana')
document.write('Elementos añadidos: hola, manzana'+ '<br>'+ 'Nuevo tamaño: '+numEliminado+ '<br>'+array+'<br><br>' )

//valueOf
document.write('Funcion valueOf, devuelve el valor o contenido del mismo: <br>')
document.write(array.valueOf())








}




boton1.addEventListener('click', function(){
    ejercicio1();
});

boton2.addEventListener('click', function(){
    ejercicio2();
});


});
