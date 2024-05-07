function validarNum(x) {   /* FUNCION PARA VALIDAR QUE LOS VALORES SEAN NUMEROS */
    if (isNaN(x)) {
        alert("Ingresar Valores Numéricos");
        return false;
    };
    if ((x === undefined)) { /* POR SI NO ESTA DEFINIDO */
        alert("Ingresar Valores Numéricos");
        return false;
    }
    if ((x === "")) { /* POR SI ES UN ESPACIO VACIO */
        alert("Ingresar Valores Numéricos");
        return false;
    };
    return true;
};

function suma() {
    var num1 = prompt("Ingrese primer Valor"); /* PEDIR LOS VALORES EN PROMPT */
    var num2 = prompt("Ingrese segundo Valor");
    if (validarNum(num1) && validarNum(num2)) { /* SI AMBOS VALORES SON VERDADEROS, CONTINUAR */
        var suma = parseInt(num1) + parseInt(num2); /* REALIZAR LA OPERACION */
        document.getElementById("resultado-suma").innerHTML = `${num1} + ${num2} = ${suma}`; /* MOSTRAR LA OPERACION EN HTML */
        console.log(suma); /* MOSTRAR EL RESULTADO EN CONSOLA */
    };
};

function resta() {
    var num1 = prompt("Ingrese primer Valor");
    var num2 = prompt("Ingrese segundo Valor");
    if (validarNum(num1) && validarNum(num2)) {
        var resta = parseInt(num1) - parseInt(num2);
        document.getElementById("resultado-resta").innerHTML = `${num1} - ${num2} = ${resta}`;
        console.log(resta);
    };
};

function multiplicacion() {
    var num1 = prompt("Ingrese primer Valor");
    var num2 = prompt("Ingrese segundo Valor");
    if (validarNum(num1) && validarNum(num2)) {
        var multiplicacion = parseInt(num1) * parseInt(num2);
        document.getElementById("resultado-multiplicacion").innerHTML = `${num1} * ${num2} = ${multiplicacion}`;
        console.log(multiplicacion);
    };
};

function division() {
    var num1 = prompt("Ingrese primer Valor");
    var num2 = prompt("Ingrese segundo Valor");
    if (validarNum(num1) && validarNum(num2)) {
        var division = parseInt(num1) / parseInt(num2);
        document.getElementById("resultado-division").innerHTML = `${num1} / ${num2} = ${division}`;
        console.log(division);
    };
};

function modulo() {
    var num1 = prompt("Ingrese primer Valor");
    var num2 = prompt("Ingrese segundo Valor");
    if (validarNum(num1) && validarNum(num2)) {
        var modulo = parseInt(num1) % parseInt(num2);
        document.getElementById("resultado-modulo").innerHTML = `${num1} % ${num2} = ${modulo}`;
        console.log(modulo);
    };
};


function conversor() {   
    var temp = document.getElementById("celcius").value;
    if (validarNum(temp)) {
        var kelvin = parseInt(temp) + (273.15);  
        document.getElementById("kelvin").innerHTML = `${kelvin} ${"°K"}`
        var fahrenheit = (parseInt(temp) * (9 / 5)) + (32); /* CALCULO DE LOS KELVIN */
        document.getElementById("fahrenheit").innerHTML = `${fahrenheit} ${"°F"}`
        console.log(temp);
    };
};

function dias() {
    var dias = parseInt(document.getElementById("dias-ingresados").value);
    console.log(dias);
    var años = Math.floor(dias / 365);  /* DIVIDIR EL MONTO INGRESADO EN LOS DIAS DEL AÑO */
    document.getElementById("años").innerHTML = `${años}`;
    var semanas = Math.floor((dias % 365) / 7);  /* CALCULAR EL MODULO DE LA OPERACION ANTERIOR PARA LAS SEMANAS */
    document.getElementById("semanas").innerHTML = `${semanas}`;
    var diasRestantes = (parseInt(dias % 365) % 7); /* CALCULAR EL MODULO DE LA OPERACION ANTERIOR PARA LOS DIAS */
    document.getElementById("dias").innerHTML = `${diasRestantes}`;
};

function sumaPromedio() {
    var num1 = prompt("Ingrese el primer Valor");
    var num2 = prompt("Ingrese el segundo Valor");
    var num3 = prompt("Ingrese el tercer Valor");
    var num4 = prompt("Ingrese el cuarto Valor");
    var num5 = prompt("Ingrese el quinto Valor");
    if (validarNum(num1) && validarNum(num2)
        && validarNum(num3) && validarNum(num4)
        && validarNum(num5)); { /* SI TODOS SON true, CONTINUAR */
        var suma = parseInt(num1) + parseInt(num2)
            + parseInt(num3) + parseInt(num4) + parseInt(num5);
        document.getElementById("suma").innerHTML = `${num1} 
            + ${num2} + ${num3} + ${num4} + ${num5} = ${suma}`; /* MOSTRAR EN HTML */

        var promedio = ((parseInt(num1) + parseInt(num2)
            + parseInt(num3) + parseInt(num4) + parseInt(num5)) / 5);
        document.getElementById("promedio").innerHTML = `${promedio}`;
    };
};

