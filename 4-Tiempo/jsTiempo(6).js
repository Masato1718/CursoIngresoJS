var miTemporizador ;
var contador=0;

function inicio()
{
	document.getElementById("secreto").style.visibility="hidden";
	alert("function inicio.");
	miTemporizador = setTimeout(SegundosEnElAire, 3000);
	
}//FIN DE LA FUNCIÓN inicio

function SegundosEnElAire() {

	document.getElementById("secreto").style.visibility="visible"; 
    alert("Bienvenido a la UTN FRA");
   
}//FIN DE LA FUNCIÓN SegundosEnElAire

function fin()
{
	alert("function fin.");
	clearTimeout(miIntervalo);

}//FIN DE LA FUNCIÓN fin