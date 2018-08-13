function mostrar()
{
	var mesdelAño;
	
	mesdelAño=prompt("Ingrese un mes del año:");

	switch(mesdelAño)
	{
		case "febrero":
			alert("Es Febrero y por lo tanto tiene 28 dias");
			break;
		case "abril":
		case "junio":
		case "septiembre":
		case "noviembre":
			alert("Tiene 30 dias");
			break;
		case "enero":
		case "marzo":
		case "mayo":
		case "julio":
		case "agosto":
		case "octubre":
		case "diciembre":
			alert("Tiene 31 dias");
			break;
		default:
			alert("Error, ingrese un mes valido");





	}

}

