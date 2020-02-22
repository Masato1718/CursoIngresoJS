/*3.		Un palíndromo (del griego palin dromein, volver a ir atrás)
				  	<br>	Es una palabra, número o frase que se lee igual adelante que atrás.
				  	<br>Si se trata de un numeral, usualmente en notación indoarábiga, se llama capicúa. 

					<br>	debemos poder identificar las frases numeros o palabras que son palindromos

					<br> 1°: De la cadena original , buscamos los espacios y los eliminamos.
					<br> 2°: La palabra original ,le invertimos el orden de las letras
					<br> 3°: Comparamos las dos cadenas y si son iguales , es un palindromo.

observaciones: el ejercicio pretende explicar el length de los string y un recorrido sobre una cadena.
Temas que quedan fuera del alcance deseado:
  1- como sacar los carateres que no son letras
  2- como cambiar las vocales con acento
  3- las letras mayusculas
  4- vectores
*/
function verificarPalindromo () 
{
	var palabraIngresada;
	var palabraSinEspacios;
	var palabraInvertida;
	var i;



	palabraIngresada=palabra.value;
	//console.log(palabra.legth);

	palabraSinEspacios="";
	palabraInvertida="";

	for(i=0;i<palabraIngresada.length;i++)
	{
		//console.log(palabraIngresada[i]);
		if (palabraIngresada[i]==" ") 
		{
			continue;
		}
		palabraSinEspacios=palabraSinEspacios+palabraIngresada[i];
	}
	//console.log("sin espacios: "+palabraSinEspacios);

	for(i=0;i<palabraSinEspacios.length;i++)
	{
		palabraInvertida=palabraSinEspacios[i]+palabraInvertida;
	}

	if(palabraInvertida==palabraSinEspacios)
	{
		alert("es palindromo");
	}
	else
	{
		alert("mmm, no");
	}
	console.log("ingresada: "+palabraIngresada);
	console.log("sin espacios: "+palabraSinEspacios);
	console.log("cadena invertida:"+palabraInvertida);

}

/* 
algunos palindromos para testear:
neuquen
luz azul
a ti no bonita
amad a la dama
ateo poco poeta
la ruta natural
la tele letal
*/