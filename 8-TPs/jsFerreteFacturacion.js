/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
    var precioUno = parseFloat(document.getElementById("PrecioUno").value);
    var precioDos = parseFloat(document.getElementById("PrecioDos").value);
    var precioTres = parseFloat(document.getElementById("PrecioTres").value);
    var suma = precioUno + precioDos + precioTres;
    alert("La suma es "+ suma);
	
}
function Promedio () 
{   
    var precioUno = parseFloat(document.getElementById("PrecioUno").value);
    var precioDos = parseFloat(document.getElementById("PrecioDos").value);
    var precioTres = parseFloat(document.getElementById("PrecioTres").value);
    var promedio = (precioUno + precioDos + precioTres)/3;
    alert("El promedio es " + promedio);
	
}
function PrecioFinal () 
{
	var precioUno = parseFloat(document.getElementById("PrecioUno").value);
    var precioDos = parseFloat(document.getElementById("PrecioDos").value);
    var precioTres = parseFloat(document.getElementById("PrecioTres").value);   
    var precioFinal = precioUno + precioDos + precioTres;
    precioFinal += precioFinal*0.21;
    alert("El precio final es " + precioFinal);
}

