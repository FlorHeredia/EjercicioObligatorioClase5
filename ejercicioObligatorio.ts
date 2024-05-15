import * as rls from 'readline-sync';

let base:number= rls.questionInt("Ingrese la base numerica: ");
let exponente:number= rls.questionInt("Ingrese un exponente numerico: ");
let resultadoPotencia:number=0;

function calcularPotencia (base:number, exponente:number):number{
    let potencia:number=1;
    if(exponente>=0){
        for(let i=0; i<exponente; i++){
            potencia *=base;
        }
    }
return potencia
}

resultadoPotencia= calcularPotencia(base, exponente);

if (exponente>=0){
    console.log ("El resultado de la potencia entre " + base + " y " + exponente + " es: ", resultadoPotencia);
}else {
    console.log("El numero ingresado es invalido, debe ser mayor o igual a 0")

}
