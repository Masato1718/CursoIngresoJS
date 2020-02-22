/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
function ifcuenta(x)
{
    if (x>=120)
    { 
        var y=x*0.1;
        x += y;
        document.getElementById("precioDescuento").value = "Usted pago " + x + " de IIBB.”, siendo " + y + " el impuesto que se pagó."; 
    }
    else 
    {
        document.getElementById("precioDescuento").value = x;
    }
}
function CalcularPrecio () 
{
    var cantidad = parseInt(document.getElementById("Cantidad").value);
    
    var marca = document.getElementById("Marca").value;
    var importefinal= cantidad*35;
     //precioDescuento
    if (cantidad >=3) 
    {
        switch(cantidad) 
        {  
            case 3:
                if (marca=="ArgentinaLuz")
                {
                    importefinal -= importefinal*0.15;
                    ifcuenta(importefinal);
                }
                else if (marca=="FelipeLamparas")
                {
                    importefinal -= importefinal*0.1;
                    ifcuenta(importefinal);
                }
                else {
                    importefinal -= importefinal*0.05;
                    ifcuenta(importefinal);
                }
                break;
            case 4:
                if (marca=="ArgentinaLuz"|| "FelipeLamparas")
                {
                    importefinal -= importefinal*0.25;
                    ifcuenta(importefinal);
                }
                else {
                    importefinal -= importefinal*0.2;
                    ifcuenta(importefinal);
                }
            break;
            case 5: 
               if (marca=="ArgentinaLuz")
               {
                    importefinal -= importefinal*0.4;
                    ifcuenta(importefinal);
               }
               else 
               {
                    importefinal -= importefinal*0.3;
                    ifcuenta(importefinal);
               }
            break;
            default: 
                importefinal -= importefinal*0.5;
                document.getElementById("precioDescuento").value = importefinal; 
                ifcuenta(importefinal);
            break;         
        }
    }
}


