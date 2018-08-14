function mostrar()
{

	var mesdelAño;
	mesdelAño=prompt("Ingrese Un mes del año:");

	switch(mesdelAño)
	{
		case "diciembre":
		case "enero":
		case "febrero":
			alet("Es verano")
			break;
		case "junio":
		case "julio":
		case "agosto":
			alert("Es invierno.");
			break;
		case "septiembre":
		case "octubre":
		case "noviembre":
		case "marzo":
		case "abril":
		case "mayo":
			alert("No estoy en verano ni invierno");
			break;
			default:
			alert("Error, Ingrese un mes valido")
			break;
	}




}

