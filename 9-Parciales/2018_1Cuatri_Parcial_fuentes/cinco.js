function mostrar()
{
    var planeta = prompt("Ingrese el planeta en minuscula: ");
    switch (planeta)
    {
        case "mercurio": 
        case "venus"   :
        case "marte"   : alert("acá hace más calor");break;
        case "tierra"  : alert("acá vivimos");break;       
        case "jupiter" : 
        case "saturno" : 
        case "urano"   : 
        case "neptuno" : alert("acá hace más frio");break;
        default        : alert("No es un planeta");break; 
    }
}
