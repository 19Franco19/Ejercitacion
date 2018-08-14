function mostrar()
{
	var PorcentajeDescuento;
	var ImporteProducto;
	var CantidadProducto;
	var Nombre;
	var IVA;
	var PrecioFinalDescuento;
	var ImporteFinal;
	var ImporteFinalIVA;

	Nombre=prompt("Ingrese el nombre del producto:");
	ImporteProducto=parseInt(prompt("Ingrese el importe del producto:"));
	CantidadProducto=parseInt(prompt("Ingrese la Cantidad del producto:"));
	PorcentajeDescuento=parseInt(prompt("Ingrese el Porcentaje de descuento:"));

	ImporteFinal= ImporteProducto * cantidad; 
	IVA= (ImporteProducto * CantidadProducto )* 0.21;
	ImporteFinalIVA=parseInt(PrecioFinalDescuento + IVA);
	PrecioFinalDescuento= (ImporteFinalIVA * PorcentajeDescuento) / 100;

	alert("Compro la cantidad de: " + CantidadProducto + " del producto: " + Nombre + " a un precio de: " + ImporteFinal + " obteniendo el precio de " + PrecioFinalDescuento + " Con descuento y de " + ImporteFinalIVA + " Con el IVA incluido");
}
