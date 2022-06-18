const preciooriginal=100;
const descuento=15;


// const precioFinal=(preciooriginal*descuentofinal)/100;

// console.log({
//     preciooriginal,
//     descuento,
//     descuentofinal,
//     precioFinal,
// });

function calcularpreciocondescuento(precio,descuento){
    const descuentofinal=100-descuento;
    const precioFinal=(precio*descuentofinal)/100;

    return precioFinal;
    
}

function calculadescuento(){
    const inputprice=document.getElementById("input_prince");
    const priceValue=input_price.value;

    const discont=document.getElementById("discont");
    const discontValue= discont.value;

    const precioConDescuento=calcularpreciocondescuento(priceValue,discontValue);

    const resultp=document.getElementById("resultado");
    resultp.innerText="El precio con descuento es de $ "+precioConDescuento;



}





