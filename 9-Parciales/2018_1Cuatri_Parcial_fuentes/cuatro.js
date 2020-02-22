function mostrar()
{
    var numeroUno = prompt("Ingrese el valor del primer número: ");
    var numeroDos = prompt("Ingrese el valor del segundo número");
    var concatenar;
    var resta;
    var suma;
    if (numeroUno == numeroDos) 
    {
        concatenar = numeroUno + numeroDos;
        alert("El resultado concatenado es: " + concatenar);
    }
    else 
    {   
        numeroUno = parseFloat(numeroUno);
        numeroDos = parseFloat(numeroDos);
        if (numeroUno > numeroDos) 
        {
            resta = numeroUno - numeroDos;
            alert("El resultado de la resta es: " + resta);
        }
        else 
        {
            
            suma = numeroUno + numeroDos;

            if (suma>10)
            {
                alert("El varlos de la suma es: " + suma + " y la suma es mayor a 10");    
            }
            else 
            {
                alert("La suma es : " + suma);
            }
            
        }
    }
}
