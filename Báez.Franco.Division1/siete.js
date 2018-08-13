function mostrar()
{
	
	var Nombre;
	var Ancho;
	var Alto;
	var Peso;
	var MasPesado;
	var MasAlto;
	var MenosAncho;
	var CantidadPeso=0;
	contador=0

	while(contador < 5)
	{
	contador++
	Nombre=prompt("Ingrese el Nombre del producto:");
	Ancho=parseInt(prompt("Ingrese el Ancho del producto:"));
		while( isNaN(Ancho) || Ancho > 10)
		{
			Ancho=prompt("Error,Reingrese el Ancho");
			Ancho=parseInt(Ancho);
			
		}

	Alto=parseInt(prompt("Ingrese el Alto del producto:"));
		while( isNaN(Alto) || Alto > 10)
		{
			Alto=prompt("Error,Reingrese el Alto");
			Alto=parseInt(Alto);
			
		}
	Peso=parseInt(prompt("Ingrese el Peso del producto"));
		while( isNaN(Peso) || Peso > 1000)
		{
			Peso=prompt("Error, Reingrese el Peso");
			Peso=parseInt(Peso);
			
		}
		
		if (contador == 1) 
		{
			MasPesado=Peso
			MasAlto=Alto
			MenosAncho=Ancho
		}
		else 
		{
			if(Peso > MasPesado)
				{
					MasPesado=Peso
				}
			if (Alto > MasAlto) 
				{
					MasAlto=Alto
				}
			if (Ancho < MenosAncho) 
				{
					MenosAncho=Ancho
				}
		if (contador > 0 && Peso <= 600 && Peso >= 300)
		{
			CantidadPeso++;
		}
		}
	}
		document.write("El Peso mas pesado es de " + MasPesado + "<br>");
		document.write("La altura mas alta es de " + MasAlto + "<br>");
		document.write("El Ancho menos ancho es de " + MenosAncho + "<br>");
		document.write("La Cantidad que tiene un peso entre 300 y 600 es de " + CantidadPeso + "<br>");







	}
	























