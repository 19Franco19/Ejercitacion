function mostrar()
{
	
	var estaciondelAño;
	var temperatura;

	estaciondelAño=prompt("Ingrese una estacion del año:");
	temperatura=prompt("Ingrese la temperatura:");
	
	switch(estaciondelAño)
	{
		case "invierno":
			if(temperatura >= 1 && temperatura <= 5)
			{
				alert("Que fresquete");
			}
			break;
		case "primavera":
		case "verano":
			if (temperatura > 32) 
			{
				alert("Es un horno!!!");
			}
			if(temperatura <= 32 && temperatura >= 20 )
			{
				alert("Que calorcito!!!");
			}
			break;
		case "otoño":
			if (temperatura == 15) 
			{
				alert("Esta lindo");
			}
			if(temperatura < 15)
			{
				alert("Se vino el frio");
			}
			if (temperatura > 15 && temperatura <= 21)
			{
				alert("Esta re bueno");
			}
			if(temperatura > 21)
			{
				alert("Mucho calor para el otoño");
			}
			break;






	}





	






	
}
