console.group("cuadrados");
const ladocuadrado=5;


console.log("los lados del cuadrado son de:"+ladocuadrado+" cm");

const perimetrocuadrado=ladocuadrado*4;
console.log("el perimetro es:"+perimetrocuadrado+" cm");


const areacuadrado=ladocuadrado*ladocuadrado;
console.log("el area es:"+areacuadrado+" cm2");
console.groupEnd();


// triangulo

console.group("triangulos")

const ladotriangulo1=6;
const ladotriangulo2=5;
const base=4;
const altura=5.5;




console.log("los lados del triangulo miden:"+ladotriangulo1+" cm,"+ladotriangulo2+"cm,"+base+"cm,"+"la altura es de "+altura+"cm");

const perimetrotriangulo=ladotriangulo1+ladotriangulo2+base
console.log("el perimetro es:"+perimetrotriangulo+" cm");


const areatriangulo=(base*altura)/2;
console.log("el area es:"+areatriangulo+" cm2");

console.groupEnd();

