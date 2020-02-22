/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
function ifImpuesto(precioFinal)
{
    if (precioFinal>=120)
    {   
        var descuento;
        descuento= precioFinal*0.1;
        precioFinal += descuento;
        document.getElementById("precioDescuento").value = "Usted pago "+ precioFinal +" de IIBB.”, siendo "+ descuento + " el impuesto que se pagó";
    }
    else 
    {
        document.getElementById("precioDescuento").value = precioFinal;
    }
}
 function CalcularPrecio() 
 {
    var cantidad = parseInt(document.getElementById("Cantidad").value);
    var marca = document.getElementById("Marca").value;
    var precioTotal = cantidad*35;
    var precioFinal= precioTotal;
    switch(marca)
    {
        case "ArgentinaLuz":
            if (cantidad==3)
            {
                precioFinal -= precioTotal*0.15;
                ifImpuesto(precioFinal);
            }
            else if (cantidad==4)
            {
                precioFinal -= precioTotal*0.25;
                ifImpuesto(precioFinal);
            }
            else if (cantidad==5)
            {
                precioFinal -= precioFinal*0.4;
                ifImpuesto(precioFinal);
            }
            else if (cantidad>=6)
            {
                precioFinal -= precioFinal*0.5;
                ifImpuesto(precioFinal);
            }
            break;
        case "FelipeLamparas": 
            if (cantidad==3)
            {
                precioFinal -= precioFinal*0.1;
                ifImpuesto(precioFinal);
            }
            else if (cantidad==4) 
            {
                precioFinal -= precioFinal*0.25;
                ifImpuesto(precioFinal);
            }
            else if (cantidad==5)
            {
                precioFinal -= precioFinal*0.3;
                ifImpuesto(precioFinal);
            }
            else if (cantidad>=6)
            {
                precioFinal -= precioFinal*0.5;
                ifImpuesto(precioFinal);
            }
            break; 
        default: 
            if (cantidad==3)
            {
                precioFinal -= precioFinal*0.05;
                ifImpuesto(precioFinal);
            }
            else if (cantidad==4)
            {
                precioFinal -= precioFinal*0.2;
                ifImpuesto(precioFinal);
            }
            else if (cantidad==5)
            {
                precioFinal -= precioFinal*0.3;
                ifImpuesto(precioFinal);
            }
            else if (cantidad>=6)
            {
                precioFinal -= precioFinal*0.5;
                ifImpuesto(precioFinal);
            }
        
        break;
    }
 }