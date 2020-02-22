/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
    
function sumar()
{	
    var numeroUno = parseInt(document.getElementById("numeroUno").value);
    var numeroDos = parseInt(document.getElementById("numeroDos").value);
    var suma = numeroUno + numeroDos;
    alert("La suma es: " + suma);
	
}

function restar()
{   
    var numeroUno = parseInt(document.getElementById("numeroUno").value);
    var numeroDos = parseInt(document.getElementById("numeroDos").value);
    var resta = numeroUno - numeroDos;
    alert("La resta es: " + resta);
}

function multiplicar()
{ 
    var numeroUno = parseInt(document.getElementById("numeroUno").value);
    var numeroDos = parseInt(document.getElementById("numeroDos").value);
    var multiplicar = numeroUno * numeroDos;
    alert("La multiplicación es: " + multiplicar);
}

function dividir()
{
    var numeroUno = parseInt(document.getElementById("numeroUno").value);
    var numeroDos = parseInt(document.getElementById("numeroDos").value);
    var dividir = numeroUno / numeroDos;
    alert("La divicion es: "+ dividir);

}

