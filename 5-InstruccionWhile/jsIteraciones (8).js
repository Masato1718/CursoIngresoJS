function mostrar()
{

	var contador=0;
	var positivo=0;
	var negativo=1;
	var num;
	var respuesta="si";
	while(respuesta == "si")
	{	
		num= parseFloat(prompt("Ingrese un número"));
		if (num >= 0)
		{
			positivo += num;
			
		}
		else 
		{
			negativo *= num;
		}
		contador++;
		respuesta = prompt("Desea continuar ingrsando numeros: si / no");
	}


document.getElementById("suma").value=positivo;
document.getElementById("producto").value=negativo;

}//FIN DE LA FUNCIÓN