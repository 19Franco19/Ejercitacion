function mostrar()
{
	var ImporteProducto;
	var NombreProducto;
	var CantidadProducto;
	var PrecioconIVA;
	var IVA;
	var PrecioCantidad;
	ImporteProducto=parseInt(prompt("Ingrese el Importe del producto:"));
	NombreProducto=prompt("Ingrese el Nombre del producto:");
	CantidadProducto=parseInt(prompt("Ingrese la Cantidad del producto:"));

	IVA=(ImporteProducto * CantidadProducto) * 0.21;
	PrecioconIVA= (ImporteProducto * CantidadProducto) + parseInt(IVA);
	PrecioCantidad= ImporteProducto * CantidadProducto
	alert("Compro la cantidad de " + CantidadProducto + " del producto " + NombreProducto + " a un precio de " + PrecioCantidad + " pagando el precio de " + PrecioconIVA + " con IVA incluido");   




}