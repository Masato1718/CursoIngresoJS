function mostrar()
{

	var miArray = new Array();

	for (var i = 0; i <5; i++)
	{
		miArray[i]=parseInt(prompt("Ingrese un numero"));
	}



	for(var i=0; i<5; i++)
	{

		document.write("Posicion "+i+"-->"+miArray[i]+"<br>");
	}





}//FIN DE LA FUNCIÓN