function mostrar()
{

	var miArray = new Array();

	miArray[0]="Juan";
	miArray[1]="Luis";
	miArray[2]="Maria";
	miArray[3]="Nahuel";
	miArray[4]="Yolanda";


document.write("El contenido del vector es: <br>");

	for(var i=0; i<5; i++)
	{

		document.write("Posicion "+i+"-->"+miArray[i]+"<br>");
	}





}//FIN DE LA FUNCIÓN