function mostrar()
{
	var Nombre;
	var Precio;
	var Temperatura;
	var Peso;
	var contador=0;
	var MasPesado;
	var MasTemperatura;
	var MenorPrecio;
	var CantidadPeso=0
	while(contador < 5)
	{
		contador++;
		Nombre=prompt("Ingrese el nombre del producto:");
		Precio=parseInt(prompt("Ingrese el precio del producto:"));
		Temperatura=prompt("Ingrese la temperatura del producto;")
		 while(isNaN(Temperatura) || Temperatura < (-30) || Temperatura > 100)
		 {
		 	Temperatura=prompt("Error, ingrese una temperatura valida:");
		 }
		 Peso=prompt("Ingrese el peso del producto:");
		 while(!(Peso < 1000))
		 {
		 	Peso=prompt("Error, ingrese un peso valido:");
		 }
		if(contador == 1)
		{
			MasPesado=Peso;
			MasTemperatura=Temperatura;
			MenorPrecio=Precio;
		}

		else
		{ 
		 
		  	if(Peso > MasPesado)
			{
				MasPesado=Peso;
			}
			if(Temperatura > MasTemperatura)
			{
				MasTemperatura=Temperatura;
			}
			if(Precio < MenorPrecio)
			{
				MenorPrecio=Precio;
			}
			if(Peso > 30 && Peso < 60)
			{
				CantidadPeso++;
			}
	    }
	}


	document.write("El producto mas pesado es: " + MasPesado + "<br>");
	document.write("La temperatura mas alta  es: " + MasTemperatura + "<br>");
	document.write("El menor Precio es: " + MenorPrecio + "<br>");
	document.write("La Cantidad de productos que tienen un peso entre 30 y 60 kilos es: " + CantidadPeso + "<br>");

	
}
