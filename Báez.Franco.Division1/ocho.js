function mostrar()
{
	
	
	var TituloSerie;
	var CantidadCapitulos;
	var TipoSerie;
	var NombreSerieMasCapitulos;
	var TipoSerieMenosCapitulos;
	var PromedioCapitulos;
	var respuesta='si'
	var CantidadSeriesCapitulosPares=0;
	var contador=0
	var acumulador=0
	var MayorCantidadCaps;
	var MenorCantidadCaps;
	while(respuesta == 'si')
	{
		
		TituloSerie=prompt("Ingrese el Titulo de la Serie:");
		TituloSerie=TituloSerie
		
		CantidadCapitulos=parseInt(prompt("Ingrese la cantidad de capitulos"));
		acumulador += CantidadCapitulos;
		
		while( isNaN(CantidadCapitulos) || CantidadCapitulos < 0)
		{
			CantidadCapitulos=parseInt(prompt("Error, Reingrese la cantidad de capitulos"));
			CantidadCapitulos=parseInt(CantidadCapitulos);
			
		}

		TipoSerie=prompt("Ingrese el tipo de Serie:")
		while(!(TipoSerie == "d" || TipoSerie == "t" || TipoSerie == "c" || TipoSerie == "o"))
		{
			TipoSerie= prompt("Error, Reingrese el tipo de serie:");
		}
		respuesta=prompt("Desea continuar?:");
		if (CantidadCapitulos % 2 == 0) 
		{
			CantidadSeriesCapitulosPares++;
		}
		if(contador == 1)
		{
			
			MayorCantidadCaps=CantidadCapitulos;
			MenorCantidadCaps=CantidadCapitulos;
			CantidadCapitulos += CantidadCapitulos;
			NombreSerieMasCapitulos=TituloSerie;
			TipoSerieMenosCapitulos=TipoSerie;
		}
		else 
			if (CantidadCapitulos > MayorCantidadCaps )
			 {
			 	NombreSerieMasCapitulos=TituloSerie
			 }

			if (CantidadCapitulos < MenorCantidadCaps) 
			{
				TipoSerieMenosCapitulos=TipoSerie
			}
			
			contador++;
			PromedioCapitulos= parseInt(acumulador / contador);
	}

		document.write("La Cantidad de series con capitulos pares es: " + CantidadSeriesCapitulosPares + "<br>");
		document.write("El nombre de la serie que tiene mas capitulos es " + NombreSerieMasCapitulos + "<br>");
		document.write("El tipo de serie que tiene menos capitulos es " + TipoSerieMenosCapitulos + "<br>");
		document.write("El promedio de capitulos entre todas las series ingresadas es " + PromedioCapitulos + "<br>");


}












