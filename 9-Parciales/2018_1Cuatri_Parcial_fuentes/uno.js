
function mostrar()
{
    var ladoUno = parseFloat(prompt("Ingrese uno de los lados"));
    var ladoDos = parseFloat(prompt("Ingrese el segundo lado del rectangulo"));

    var perimetro = 2*(ladoUno + ladoDos);
    alert("El perimetro es: " + perimetro);
}
