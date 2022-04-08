

//var n = prompt("Digite su nombre.");

//Nombre es el parametro.
// || significa (o).
// typeof significa qque es para verificar si es de caracter String.
/*function decir_nombre(nombre){
    nombre || (nombre = "user")
    if(typeof nombre === "string"){
        alert("Mi nombre es "+nombre);
    }else{
        alert("EL NOMBRE NO ES VALIDO");
    } 
}
decir_nombre("ANDER");*/
/*
var n1 = prompt("Digite el primer numero: ")
var n2 = prompt("Digite el segundo numero: ")
function calcularNumero(num1,num2){
    return  parseInt(num1) + parseInt(num2);
}
var resultado = calcularNumero(n1,n2);
function mostrarcalculo(){
    alert(resultado);
}
mostrarcalculo();
*/

//Primer Ejercicio
/*
var ancho = prompt("Digite el ancho de un retangulo: ");
var alto = prompt("Digite el alto de un retangulo: ");
function SuperficiTriangulo(anc,alt){
    return anc*alt;
}
var superficie = SuperficiTriangulo(ancho,alto);
function mostrarresult(){
    alert("la superficie del triangulo es igual a: "+superficie);
}
mostrarresult();
*/

//Segundo Ejercicio
/*
var km = prompt("Digite la velocidad en kh/h: ");
function velocidad(kilometro){
    return (kilometro * 1000)/3600;
}
var velocidadmillas = velocidad(km);

function millasobresegundos(km){
    return (km * 1000)/1609.34;
}
var resultado = millasobresegundos(velocidadmillas);

function calculo(){
    alert("El resultado seria "+velocidadmillas+ " metros/horas, y el resultado de millas es de "+resultado+ " millas/horas");
}
calculo();*/

/*
var km = prompt("Digite la velocidad en kh/h: ");
function velocidad(km){
    var resulkilom = (km * 1000)/3600;
    var resultmillas = (km * 1000)/1609.34;

    alert("El resultado seria "+resulkilom+ " metros/horas, y el resultado de millas es de "+resultmillas+ " millas/horas");

}
velocidad(km);
*/

//Tercer Ejercicio
/*
 var radio = prompt("Digite el radio de la circunferencia: ");
 function PerimetrosAreas(geometria){
     var perimetro = 2 * Math.PI * geometria;
     var area = Math.PI * geometria;

     alert("El perimetro de la circunferencia es igual a: "+perimetro+
            "\n y el area de la circunferencia es igual a: "+area);
 }
 PerimetrosAreas(radio);
*/

 //Cuarto Ejercicio
/*
 var num = prompt("Digitalice un numero: ");
 function CalcularLadoCubo(calculo){

     return Math.pow(calculo,3);
 }
 var alcubo = CalcularLadoCubo(num);

 function mostrarcalculo(){
    alert("El cubo es igual a: "+alcubo);
 }
 mostrarcalculo();
*/

//Quinto Ejercicio

/*
var nombre = "Anderson";

function MiNombreEs(nombre){
    if(typeof nombre === "string"){
        document.write("Es correcto el nombre");
    }else{
        document.write("Ingrese un nombre valido <br>" + typeof nombre);
    }
}
MiNombreEs(7);
*/

/*
//Sexto Ejercicio

var valor1 = prompt("Digite el primer numero: ");
var valor2 = prompt("Digita el segundo numero: ");
function OperadoresNumeros(a,b){
    var suma = parseInt(a) + parseInt(b);
    var resta = a-b;
    var multiplicacion = a*b;
    var divicion = a/b;
    alert("La suma es igual a "+suma+
            "\n la resta es igual a: "+resta+
            "\n la multiplicacion es igul a: "+multiplicacion+
            "\n la divicion es igula a: "+divicion);
}
OperadoresNumeros(valor1,valor2);
*/

//Septimo Ejercicio
/*
var temper = prompt("Digite Celcius F(1) o Fahrenheit C(2): ");
var temperatura = prompt("Digite la temperatu a Convertir ya sea para: ");

function TemperaCelsius(temperatura){

    var f = (temperatura * 1.8) + parseInt (32);
    if(temper == 1){
        if(f < 0){
            alert("Nos congelamos y es: "+f+ " grados F");
        }else if(f >= 5 && f < 50){
            alert("Esta haciendo Frio y es: "+f+ " grados F");
        }else if(f > 50 && f < 77){
            alert("Esta el dia templado y es: "+f+ " grados F");
        }else{
            alert("Tienes fible o es Apocalipsis y es: "+f+ " grados F");
        }
    }
    var C = (temperatura-32) / 1.8;
    if(temper == 2){
        if(C < 0){
            alert("Nos congelamos y es: "+C+ " grados C");
        }else if(C >= 5 && C < 50){
            alert("Esta haciendo Frio y es: "+C+ " grados C");
        }else if(f > 50 && C < 77){
            alert("Esta el dia templado y es: "+C+ " grados C");
        }else{
            alert("Tienes fible o es Apocalipsis y es: "+C+ " grados C");
        }
    }
}
TemperaCelsius(temper);
*/

//Octavo Ejercicio
/*
var peso = prompt("Digite el peso: ");
var estatura = prompt("Digite la estatura: ");

function IndiceMasaMuscular( x, b){
    var imc = x/Math.pow(b,2);

    if(imc <= 18.5){
        alert("Bajo peso debe ir al nutricionista y es de: "+imc);
    }else if(imc <= 24.9){
        alert("Normal y es de: "+imc);
    }else if(imc <= 29.9){
        alert("Sobrepeso y es de: "+imc);
    }else{
        alert("Obeso debe ir al nutricionista: "+imc);
    }
}
IndiceMasaMuscular(peso,estatura);
*/

// Noveno Ejercicio


var nombre = prompt("Digite su nombre: ");

function primernombre(nom){
    return nom;
}
var resultado = primernombre(nombre);

function MostrarElNombre(){
    document.write("Bienvenido "+resultado);
}
MostrarElNombre();


//10 Ejercicio.
/*
var precio = prompt("Digite el precio: ");
var cantidad = prompt("Digite la cantidad: ");

function calcularPrecio(n1,n2){
    return n1 * n2;
}
var precioparcial = calcularPrecio(precio,cantidad);

function calcularIva(sinIva){
    return (sinIva*19)/100 + sinIva;
}
var resultado = calcularIva(precioparcial);

function mostrarcalculo(){
    alert(resultado);
}
mostrarcalculo();*/

//Ejercicio 11

/*
var DiaActual = prompt("Digite el dia Actual: ");
var MesActual = prompt("Digite el mes Actual: ");
var AñoActual = prompt("Digite el año Actual: ");

function actualizaciondia (dia){
    i = 0
    for (i=0; i<365; i++);
        return(i-93) - dia;
}
var fechadia = actualizaciondia(DiaActual);

function semanas(fechadia){
    return Math.round(fechadia/7) ;
}

var fechasemanas = semanas(fechadia);

function actualizacionmes(mes){
    return 12 - mes;
}
var fechames = actualizacionmes(MesActual);

function actualizacionaño(año){
    return año;
    //return (365-93) - dia;
}
var resultado = actualizacionaño(AñoActual)

function mostraractualizacion(){
    alert("lo que falta para que termine el año es: "+fechadia+ " dias, "+fechasemanas+ " semanas y " +fechames+ " meses del año "+resultado+ " para que finalice.");
}
mostraractualizacion();
*/

//Ejercicio 12
/*
var productos = prompt("Digite la cantdida de productos que desea comprar: ");

function productosmercado(pro){
    var nombre =[];
    var valor = [];
    for(i=0; i<parseInt(pro); i++){
        nombre[i] = prompt("Digite el nombre del producto ");
        valor[i] = prompt("Digite el valor: ");
    }  
    return nombre+" "+valor;
}
var resultado = productosmercado(productos);

function mostrarcalculo(resultado){
    for(i=0; i<resultado; i++){
    } 
    document.write(resultado);
}
mostrarcalculo();
*/









//OBJETOS
/*
var datos ={
    nombre:"Anderson",
    telefono: 314251489,
    operacion: 5*5,
    direccion:{
        barrio:"San Benito",
        sector: 6
    },
    hola: function hola(){alert("hola")},
}
console.log(datos.nombre+" "+datos.direccion.barrio+" "+datos.hola()+" "+datos.operacion);*/