
function mostrar()
{
	
	var Ancho;
	var Largo;
	var Perimetro;
	var CantidadAlambre;

	Ancho=parseInt(prompt("Ingrese el Ancho:"));
	Largo=parseInt(prompt("Ingrese el Largo:"));

	Perimetro= (Ancho + Largo) * 2;
	CantidadAlambre=Perimetro * 3 ;

	alert("El Perimetro es: " + Perimetro + "Y la cantidad de alambre que se necesita es: " + CantidadAlambre);
}
