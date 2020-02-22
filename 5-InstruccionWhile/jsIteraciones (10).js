/*Al presionar el botón pedir números hasta que el usuario quiera, mostrar:
1-Suma de los negativos. 
2-Suma de los positivos. 
3-Cantidad de positivos. 
4-Cantidad de negativos. 
5-Cantidad de ceros. 
6-Cantidad de números pares. 
7-Promedio de positivos. 
8-Promedios de negativos. 
9-Diferencia entre positivos y negativos, (positvos-negativos).*/

function mostrar()
{
	var num;
	var sumNeg = 0;
	var sumPos = 0;
	var contador = 0;
	var contNeg = 0;
	var contPos = 0;
	var contPar = 0;
	var promNeg = 0;
	var promPos = 0;
	var diferencia = 0;
	//declarar contadores y variables 
	
	var respuesta="si";

	while(respuesta!="no")
	{	
		num = parseInt(prompt("Ingrese un numero: "));
		if (num <0) //negativos 
		{	
			sumNeg += num;
			contNeg++;
			promNeg = sumNeg / contNeg;
		}
		else if (num>0) //positivos
		{
			sumPos += num;
			contPos++;
			promPos = sumPos / contPos;
		}
		else 
		{
			contador++;
		}

		if (num%2==0)
		{	
			contPar++;
		}
		respuesta = prompt("¿Quiere seguir ingresando numeros? si/no");
	}

	diferencia = sumPos - sumNeg;

	alert("Suma de los negativos: "+sumNeg+ ".\nSuma de los positivos: "+sumPos+".\nCantidad de positivos: "+contPos+".\nCantidad de negativos"+contNeg+"Cantidad de ceros: "+contador+".\nCantidad de números pares "+contPar+".\nCantidad de números pares: "+contPar+".\nPromedio de positivos: "+promPos+".\nPromedios de negativos: "+promNeg+".\nDiferencia entre positivos y negativos: "+diferencia);


}//FIN DE LA FUNCIÓN