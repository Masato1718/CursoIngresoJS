function mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	var nota = Math.floor(Math.random()*10);
	if (nota>=9)
	{
		alter("EXCELENTE " + nota);
	}
	else 
	{
		if (nota>=4)
		{
			alert("APROBÓ " + nota);
		}
		else 
		{ 
			if (nota>0)
			{
				alert("Vamos, la proxima se puede " + nota);
			}
			
		}
	}
}//FIN DE LA FUNCIÓN