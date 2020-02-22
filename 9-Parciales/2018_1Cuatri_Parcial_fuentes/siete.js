/*
Bienvenidos.
Realizar el algoritmo que permita el ingreso por prompt de las notas (validar entre 0 y 10) , 
el sexo (validar el sexo “f” o “m”) de 5 alumnos, informar por alert:
a) El promedio de las notas totales.
b) La nota más baja y el sexo de esa persona.
c) La cantidad de varones que su nota haya sido mayor o igual a 6.
*/
function mostrar()
{
    var nota=0; // 0 a 10
    var notaTotal = 0;
    var promNotas=0;
    var notaBaja;
    var sexo; // "f" o "m"
    var sexoAux;
    var alumnos=1;
    var contAlum=0;

    while (alumnos<6)
    {   
        
        while((nota<=1 && nota>10) || (sexo!="f" && sexo !="m"))
        {   
            if ((sexo!="f" || sexo !="m")==true)
            {
                sexo = prompt("Ingrese el sexo: f / m");
            } 
            if ((nota<=1 || nota>10)==true)
            {
                nota = parseInt(prompt("Ingrese una nota valida: 1 a 10"));
            }
        }
        if (alumnos==1)
        {   
            notaBaja=nota;
            sexoAux = sexo;
        }
        else if (nota<notaBaja)
        {
            notaBaja=nota;
            sexoAux = sexo;
        }

        if (nota>=6 && sexo=="m")
        {
            contAlum++;
        }

        alumnos++;
        notaTotal += nota;
        sexo="s";   
        nota=0;
    }
    promNotas = notaTotal /alumnos;
  //  alert("El promedio de notas es: "+promNotas+".\nLa nota mas baja: "+notaBaja+" y el sexo: "+sexoAux+".\nLa cantidad de varones que su nota haya sido mayor o igual a 6: "+contAlum);
    document.write("El promedio de notas es: "+promNotas+".\nLa nota mas baja: "+notaBaja+" y el sexo: "+sexoAux+".\nLa cantidad de varones que su nota haya sido mayor o igual a 6: "+contAlum);

}
