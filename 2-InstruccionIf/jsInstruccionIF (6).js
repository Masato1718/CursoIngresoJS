function mostrar()
{
//tomo la edad  
    var edad = parseInt(document.getElementById("edad").value);
    if (edad>18)
    {

        alert("Mayor de edad");
    }
    else 
    {
        if (edad>=13) 
        {
            alert("Adolescente");
        }
        else 
        {
            alert("Menor de edad");
        }
    }



}//FIN DE LA FUNCIÓN