// Declara una variable llamada sentence y dale el valor "JavaScript no es tan difícil como me había dicho Ángel...".
// Muestra el contenido de sentence en la consola.
let sentence = "JavaScript no es tan dificil como me habia dicho Angel";
console.log(sentence);

// Muestra en la consola la longitud de sentence.
console.log(sentence.length);


// Cambia todos los caracteres de sentence a mayúsculas.
let upperCase = sentence;
console.log(upperCase.toUpperCase());

// Cambia todos los caracteres de sentence a minúsculas.
let lowCase = sentence;
console.log(lowCase.toLowerCase());
// Crea una variable llamada js y asígnale como valor el resultado de cortar o extraer la palabra "JavaScript" de sentence. Comprueba que haya funcionado.
let js =sentence.slice(0,10);

console.log(js.slice(0,10));


// Crea una variable llamada profe y asígnale como valor el resultado de cortar o extraer la palabra "Ángel" de sentence. Comprueba que haya funcionado.
// let profe = sentence.indexOf("A");
// console.log(sentence);//aqui me dio el resultado por las comillas,dobles, frente a las simples.
// let profe = sentence.indexOf('A');
let words = sentence.indexOf('Angel');
// console.log(profe);
console.log(words);

let profe = sentence.slice(49,54)
console.log(profe);

console.log(`----Esto si que mola-----`);

// Comprueba si sentence contiene el string "script".
let searc = sentence.includes('script');
console.log(searc);
//me devuelve false, porque no se encuentra el string script. en caso que fuera verdadero me devolveria truty porque si se encuentra el string script.

// Cambia a una variable newSentence el valor de sentence usando replace() para que diga "Python no es tan difícil como me había dicho Marcos...".
let newSentence = sentence.replace('JavaScript','Python').replace('Angel','Marcos') ;
console.log(newSentence);

console.log(`------------`);
//   newSentence = sentence.replace('Angel','Marcos');
//     console.log(newSentence);
//     console.log(`----------------`);

// ¿Cuál es el caracter que se encuentra en la posición 4 de newSentence? Muéstralo en la consola.
console.log(newSentence[4]);


// ¿Cuál es la posición de la primera ocurrencia del caracter "a" en newSentence? Muéstralo en la consola.
newSentence = newSentence.indexOf('a')
console.log(newSentence);

console.log(`------------------------------`);
// Resultado
// ¿Y la posición de la última ocurrencia?
// savo esta parte ...------------------------no entiendo porque no me sale--------
// newSentence = newSentence.lastIndexOf();
// console.log(newSentence);
// console.log(newSentence.lastIndexOf('Marcos'));  

// ¿Cuál es la posición de la primera ocurrencia del caracter "z" en newSentence? Muéstralo en la consola.
// -------------------------------------------------------
// aqui se la respuesta porque la mandaste en los ejrcicios, pero no me sale
// console.log(newSentence.indexOf('z'));
// newSentence = newSentence.lastIndexOf('z');
// console.log(newSentence);
// me dice que las indexof no es una funcion
// Resultado
// ---------------------------------------------------------
// Crea una variable llamada doubts que sea el resultado de concatenar newSentence con el string "pero todavía es pronto para saberlo".

// Crea la variable longitud y asígnale la longitud de newSentence. A continuación, muestra por consola el caracter que se encuentra en la posición que guarda longitud. Escribe en un comentario por qué da ese resultado.
// let longitud = newSentence.length();
// guarda en doubts:
// let doubts = newSentence.concat(newSentence,longitud)

// let longitud = newSentence;


// Resultado
// Usando charAt() y la variable longitud del ejercicio anterior, consigue mostrar por consola el último caracter de newSentence.
// Resultado


// Crea dos variables: name1 con valor "John" y name2 con valor "Anna". A continuación, crea otras dos variables más: long1 con valor la longitud de la variable name1 y long2 con valor la longitud de la variable name2. Muestra por consola si long1 es estrictamente igual a long2.
// Resultado
let name1 = "John"
let name2 = "Anna"

let long1 = name1.length;
console.log(long1);
let long2 = name2.length;
console.log(long2);

if(long1 === long2){
    console.log(true);
}else{
    console.log(false);
}
let sumLongitud = long1 + long2;
console.log(sumLongitud);

// Ahora crea la variable bothNames y asígnale como valor la concatenación de name1 y name2. Luego crea la variable finalLong y asígnale como valor la longitud de bothNames. Muestra por consola:
let bothNames = name1.concat(name2);
// console.log(bothNames);
let finalLong = bothNames.length;
// console.log(finalLong);

// Si finalLong es estrictamente igual a la suma de long1 y long2.
if( finalLong === sumLongitud){
    console.log(true);
}else{
    console.log(false);
}
// Si long1 es mayor que long2, o long2 es mayor que long1.

if ((long1 > long2)||(long2 > long1)){
    console.log("esto se cumple");
}else{
    // Si las dos operaciones anteriores son verdaderas.
    console.log("son verdaderas");
}



