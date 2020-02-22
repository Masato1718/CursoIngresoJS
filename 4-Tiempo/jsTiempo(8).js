var miTemporizador ;
var contador=0;
var tiempoInicio;
var tiempoFinal;


function inicio()
{
	
	alert("function inicio.");
	miTemporizador = setTimeout(SegundosEnElAire, 3000);
	
}//FIN DE LA FUNCIÓN inicio

function SegundosEnElAire() {


	document.getElementById("secreto").style.visibility="visible"; 
 	tiempoInicio=  new Date();
 	tiempoInicio=tiempoInicio.getTime();
 	alert(tiempoInicio);
   
}//FIN DE LA FUNCIÓN SegundosEnElAire

function ContarMilisegundos()
{
	tiempoFinal= new Date();
	tiempoFinal=tiempoFinal.getTime();
	resultado=tiempoFinal-tiempoInicio;
	alert("su tiempo fue: "+resultado);
}//FIN DE LA FUNCIÓN fin