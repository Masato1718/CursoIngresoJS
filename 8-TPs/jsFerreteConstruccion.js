/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
    var largo = parseFloat(document.getElementById("Largo").value);
    var ancho = parseFloat(document.getElementById("Ancho").value);
    var cantidad_de_alambre = (largo+ancho)*6; //2*3
    alert("La cantidad de alambre es "+ cantidad_de_alambre);
}
function Circulo () 
{   
    var radio = parseFloat(document.getElementById("Radio").value);
    var perimetro = Math.PI * Math.pow(radio,2);
    alert("La cantidad de alambre necesario es "+ perimetro);
}
function Materiales () 
{
	
}