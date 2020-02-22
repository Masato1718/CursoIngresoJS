function mostrar()
{

	var contador=0;
	var acumulador=0;
	var respuesta="si";
	while (respuesta == "si" )
	{
		contador ++;
		acumulador += parseInt(prompt("Ingrese un numero"));
		respuesta = prompt("¿Quiere ingresar un nuevo número? si / no: ").toLowerCase();  
		while (respuesta != "si" && respuesta != "no")
		{
			respuesta = prompt("¿Quiere ingresar un nuevo número? si / no: ").toLowerCase(); 	
		}
	}	

document.getElementById("suma").value=acumulador;
document.getElementById("promedio").value=acumulador/contador;

}//FIN DE LA FUNCIÓN

// for (var x; x<5; x++)
// {

// }