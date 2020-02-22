function mostrar()
{
	var promedio;
	var contador=0;
	var acumulador=0;
	
while (contador<5)
{	
	acumulador += parseInt(prompt("Ingresar un numero: "));
	contador++;
}


document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/5;

}//FIN DE LA FUNCIÓN