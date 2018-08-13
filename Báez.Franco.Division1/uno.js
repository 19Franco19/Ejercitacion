
function mostrar()
{
	var Ancho;
	var Largo;
	var Perimetro;
	var CantidadLitros;

	Ancho=parseInt(prompt("Ingrese el Ancho: "));
	Largo=parseInt(prompt("Ingrese el Largo: "));

	Perimetro=parseInt(Ancho * 2) + parseInt(Largo * 2);
	CantidadLitros= Perimetro * 3;
	
	alert("El Perimetro es: " + Perimetro);
	alert("La Cantidad de litros de pintura que se necesitan son: " + CantidadLitros);




}
