function mostrar()
{
//tomo la edad  
var mesDelAño = document.getElementById('mes').value;

switch (mesDelAño) 
{
    case "Febrero":
        alert("29 días");
    break;
    case "Enero":
    case "Marzo":
    case "Mayo":
    case "Julio":
    case "Agosto":
    case "Octubre":
    case "Diciembre":
        alert("31 días");
    break;
    case "Abril":
    case "Junio":
    case "Septiembre":
    case "Noviembre":
        alert("30 días");
    break;
}

//alert (mesDelAño);
	
	



}//FIN DE LA FUNCIÓN