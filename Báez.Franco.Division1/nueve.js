function mostrar()
{
	var Nombre;
	var Sexo;
	var Importe;
	var estadoCivil;
	var CantidadProductos;
	var ImporteTotal;
	var NombrePersonaMasCompro;
	var SexoSolteroMasGasto;
	var SexoSolteroMenosGasto;
	var ImportePrimeraMujer;
	var NombrePrimeraMujer;
	var PromedioGastoViudos;
	var contador=0;
	var respuesta= 'si'
	var acumulador=0
		while(respuesta == 'si')
		{
			contador++;
			Nombre=prompt("Ingrese el Nombre del comprador:");
			Nombre=Nombre
			Importe=prompt("Ingrese el Importe de la compra:");
			Importe=parseInt(Importe);
			CantidadProductos=prompt("Ingrese la cantidad de productos:");
			CantidadProductos=parseInt(CantidadProductos);
			acumulador += CantidadProductos
			ImporteTotal= parseInt(Importe * CantidadProductos);
			Sexo=prompt("Ingrese el sexo del comprador:");
			while(!(Sexo == "f" || Sexo == "m"))
			{
				Sexo=prompt("Error, Reingrese el sexo:");
			}
			estadoCivil=prompt("Ingrese el estado civil del comprador:");
			while(!(estadoCivil == 'soltero' || estadoCivil == 'casado' || estadoCivil == 'viudo'))
			{
				estadoCivil=prompt("Error, Reingrese un estado civil valido:")
			}
			respuesta=prompt("Desea continuar?:");
			if (contador > 0 && Sexo == 'f') 
			{
				ImportePrimeraMujer=Importe;
				NombrePrimeraMujer=Nombre;
			}
			if (contador == 1 )
			{
				NombrePersonaMasCompro=Nombre;
				SexoSolteroMasGasto=Sexo;
				SexoSolteroMenosGasto=Sexo;
				//ImportePrimeraMujer=Importe
			}
			else
				if (CantidadProductos > CantidadProductos )
				{
				NombrePersonaMasCompro=Nombre;
				}
				if (estadoCivil == 'soltero' && ImporteTotal > ImporteTotal) 
				{
					SexoSolteroMasGasto=Sexo;
				}
				if (estadoCivil == 'soltero' && ImporteTotal < ImporteTotal)
				{
					SexoSolteroMenosGasto=Sexo;
				}
				/*if (Sexo == 'f') 
				{
				ImportePrimeraMujer=Importe;
				NombrePrimeraMujer=Nombre;
				}*/
				if(estadoCivil == 'viudo')
				{
					acumulador += CantidadProductos
					PromedioGastoViudos= acumulador / contador;
				}
			}


		document.write("El Nombre de la persona que mas productos compro es: " + NombrePersonaMasCompro + "<br>");
		document.write("De los solteros el sexo del que mas gasto es " + SexoSolteroMasGasto + " Y el del que menos gasto es " + SexoSolteroMenosGasto +  "<br>");
		document.write("El importe de la primera mujer en comprar es " + ImportePrimeraMujer + " Y su nombre es " + NombrePrimeraMujer + "<br>");
		document.write("El promedio de gasto de los viudos es " + PromedioGastoViudos + "<br>");





}
