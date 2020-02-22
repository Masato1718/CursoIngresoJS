function mostrar()
{
	var contador=0;
	var respuesta='si';
	var max;
	var min;
	var num;
	// declarar variables
	while(respuesta!='no')
	{	
		num = parseInt(prompt("Ingrese un numero: "));
		if (contador==0)
		{
			max = num;
			min = num;
		}else if (max<num)
		{
			max = num;
		}
		else if (min>num)
		{
			min = num;
		}
		
		respuesta=prompt("¿Quiere seguir ingresando numeros: si/no");	
		contador++;
	}

	document.getElementById("maximo").value = max;
	document.getElementById("minimo").value = min;


}//FIN DE LA FUNCIÓN



// function mostrar()
// {

// 	var contador=0;
// 	// declarar variables
	
// 	var respuesta='si';
// 	contador = parseInt(prompt("Ingrese un numero: "));
// 	var max = contador;
// 	var min = contador;
// 	respuesta=prompt("¿Quiere seguir ingresando numeros: si/no");
// 	while(respuesta!='no')
// 	{	
// 		contador = parseInt(prompt("Ingrese un numero: "));
// 		if (max<contador)
// 		{
// 			max = contador;
// 		}
// 		else if (min>contador)
// 		{
// 			min = contador;
// 		}
		
// 		respuesta=prompt("¿Quiere seguir ingresando numeros: si/no");
		
		
// 	}

// 	document.getElementById("maximo").value = max;
// 	document.getElementById("minimo").value = min;


// }//FIN DE LA FUNCIÓN