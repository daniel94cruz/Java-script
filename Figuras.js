console.group("cuadrados");
// const ladocuadrado=5;


// console.log("los lados del cuadrado son de:"+ladocuadrado+" cm");

function perimetrocuadrado(lado){
    return lado*4;
}
// console.log("el perimetro es:"+perimetrocuadrado+" cm");


function areacuadrado(lado){
    return lado*lado;

}
// console.log("el area es:"+areacuadrado+" cm2");
console.groupEnd();


// triangulo

console.group("triangulos")

// const ladotriangulo1=6;
// const ladotriangulo2=5;
// const base=4;
// const altura=5.5;




// console.log("los lados del triangulo miden:"+ladotriangulo1+" cm,"+ladotriangulo2+"cm,"+base+"cm,"+"la altura es de "+altura+"cm");

function perimetrotriangulo(lado1,lado2,base){
    return lado1+lado2+base;


}


function areatriangulo(base,altura){
    return (base*altura)/2

}


console.groupEnd();

function calcular_perimetro_cuadrado(){
    const input=document.getElementById("input_cuadrado");
    const value=input.value;

    const perimetro=perimetrocuadrado(value);
    alert(perimetro);

}

function calcular_area(){
    const input=document.getElementById("input_cuadrado");
    const value=input.value;

    const area= areacuadrado(value);
    alert(area);
}