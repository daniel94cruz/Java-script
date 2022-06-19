const salarioscol= colombia.map(
    function (persona){
        return persona.salary;
    }
);

const salarioscolSorted=salarioscol.sort(
    function (salaryA,salaryB){
        return salaryA-salaryB;

    }
);

function esPar(numerito){
    if (numerito%2===0){
        return true;
    }
    else{
        return false;
    }
}

function calcularMediaAritmetica(lista){
    const sumaLista=lista.reduce(
        function (valorAcumulado=0,nuevoElemento){
            return valorAcumulado+nuevoElemento;
        }
    );
    const promedioLista=sumaLista/lista.length;
    return promedioLista;

}

function medianaSalarios(lista){
    const mitad=parseInt(lista.length/2);
    if (esPar(lista.length)){
    const personaMitad1=lista[mitad-1];
    const personaMitad2=lista[mitad];
    const mediana=calcularMediaAritmetica([personaMitad1,personaMitad2]);
    return mediana;


    }else{
        const personaMitad=lista[mitad];
        return personaMitad;
    }
}

const medianaGeneralCol=medianaSalarios(salarioscolSorted);

// mediana del top 10%

const spliceStar=(salarioscolSorted.length*90)/100;
const spliceCount=salarioscolSorted.length-spliceStar;

const salariosColtop10=salarioscolSorted.splice(
    spliceStar,
    spliceCount,
);

const medianaTop10Col=medianaSalarios(salariosColtop10);
console.log(spliceStar,spliceCount,salariosColtop10)
console.log(medianaGeneralCol,
    medianaTop10Col,
    );
