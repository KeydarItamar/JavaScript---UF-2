
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
let array = [1,2,3,4,5,4,3,2,1];
document.write ("EJERCICIO 2" + '<br> <br>');
document.write ('El array es :<br>'+array + '<br>');

document.write(`Funcion 'at' en posicion 2: ${array.at(2)} <br>`);
document.write(`Funcion 'concat' con array ("hola", "soy", "un", "array"):<br>`);
let arrayAux = ["hola", "soy", "un", "array"] ;
document.write(array.concat(arrayAux)+'<br>');
document.write("Constructor estandar para crear el array utilizado: <br>");
document.write("new Array (1,2,3,4,5,4,3,2,1)");



}




boton1.addEventListener('click', function(){
    ejercicio1();
});

boton2.addEventListener('click', function(){
    ejercicio2();
});


});
