function mostrar()
{
    var precio = parseFloat(prompt("Ingrese el precio:"));
    var descuento = parseFloat(prompt("Ingrese el porsentaje de descuento"));
    var elPrecioFinal = precio - (precio * (descuento/100));
    document.getElementById("elPrecioFinal").value = elPrecioFinal;
}
