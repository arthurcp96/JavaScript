function calcular() {


    imc = parseFloat(peso.value) / (parseFloat(altura.value / 100) * parseFloat(altura.value / 100))
    document.getElementById("resultado").value = imc

    /*if (imc<=18.5) {
        document.getElementById("estado").value="Delgado"
    } 
    else if (imc>=18.5 && imc <=24.9){
        document.getElementById("estado").value="Normal"

    }
    else{document.getElementById("estado").value="Sobrepeso u Obesidad"} */


    switch (true) {
        case (imc <= 15):
            document.getElementById("estado").value = "Está ante un cuadro de delgadez muy severa";
            break;
        case (imc >= 15 && imc <= 15.9):
            document.getElementById("estado").value = "Está ante un cuadro de delgadez severa";
            break;
        case (imc >= 16 && imc <= 18.4):
            document.getElementById("estado").value = "Está ante un cuadro de delgadez";
            break;
        case (imc >= 18.4 && imc <= 24.9):
            document.getElementById("estado").value = "Está ante un cuadro de normalidad. Su peso es correcto";
            break;
        case (imc >= 25 && imc <= 29.9):
            document.getElementById("estado").value = "Está ante un cuadro de Sobrepeso";
            break;
        case (imc >= 30 && imc <= 34.9):
            document.getElementById("estado").value = "Está ante un cuadro de Obesidad moderada";
            break;
        case (imc >= 35 && imc <= 39.9):
            document.getElementById("estado").value = "Está ante un cuadro de Obesidad severa";
            break;    
        case (imc >= 40):
            document.getElementById("estado").value = "Está ante un cuadro de Obesidad mórbida";
            break;    
        default:
            document.getElementById("estado").value = "No existe";
            break;
    }

    /* document.getElementById("informe").value = "Por ejemplo, si el resultado da 15 o menos, se está ante un cuadro de delgadez muy severa; de 15 a 15.9 es delgadez severa y de 16 a 18.4 es delgadez. En la otra dirección, si se está entre 25 y 29.9 se habla de sobrepeso; de 30 a 34.9 de obesidad moderada; de 35 a 39.9 de un cuadro de obesidad severa y 40 o más ya es obesidad mórbida."
 */
}