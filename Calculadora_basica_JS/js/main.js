
//function sumar(parseInt(numero1, numero)2)
//{
//    let resultado;
//    resultado = numero1 + numero2;
//    return resultado;
//}

function sumar(){
    suma=parseInt(numero1.value)+parseInt(numero2.value)
    resultado.setAttribute('value',suma)
}

function restar(){
    resta=parseInt(numero1.value)-parseInt(numero2.value)
    resultado.setAttribute('value',resta)
}

function dividir(){
    if (numero2.value==0) {
        document.getElementById("resultado").value="Error, no se puede dividir por 0"
    } else {
        division=parseInt(numero1.value)/parseInt(numero2.value)
        resultado.setAttribute('value',division)
    }

}

function multiplicar(){
    multiplicacion=parseInt(numero1.value)*parseInt(numero2.value)
    resultado.setAttribute('value',multiplicacion)
}


