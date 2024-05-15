"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rls = require("readline-sync");
var numero1 = rls.questionInt("Ingrese un número: ");
var numero2 = rls.questionInt("Ingrese un numero: ");
var opcionMenu = rls.questionInt("Ingrese 1 para sumar, 2 para restar, cualquier ptra tecla para salir: ");
var resultadoFuncion = 0;
function calcularResultado(numero1, numero2, opcionMenu) {
    var resultado = 0;
    if (opcionMenu == 1) {
        resultado = numero1 + numero2;
    }
    else if (opcionMenu == 2) {
        resultado = numero1 - numero2;
    }
    return resultado;
}
//orden de parametros
resultadoFuncion = calcularResultado(numero1, numero2, opcionMenu);
