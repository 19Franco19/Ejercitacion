function mostrar()
{

	var Letra;
	var Numero;
	var respuesta= "si"
	var CantidadPares=0;
	var CantidadImpares=0;
	var CantidadCeros=0;
	var Promedio;
	var SumaNeg;
	var NumeroMax;
	var NumeroMin;
	var LetraNumeroMax;
	var LetraNumeroMin;
	var Positivo=0;
	var Negativo=0;
	var acumulador=0;
	var contador=0;
	var contadorNeg=0;
	var contadorPos=0;
	while(respuesta == 'si')
	{
		contador++;
		Letra=prompt("Ingrese una letra:");
		Numero=parseInt(prompt("Ingrese un Numero:"));
		
		
		while(isNaN(Numero) || Numero < (-100) || Numero > 100)
		{
			Numero=prompt("Error, reingrese el numero:")
		}
		respuesta=prompt("Desea Continuar?:");
		if ( Numero > 0 && Numero % 2 == 0) 
		{
			CantidadPares++;
		}
		if ( Numero > 0 && Numero % 2 != 0) 
		{ 	
			CantidadImpares++;
		}
		if (Numero == 0) 
		{
			CantidadCeros++;
		}
		if(Numero > 0)
		{
			contadorPos++
			Positivo= Positivo + Numero
			acumulador += Positivo
		}
		if(Numero < 0)
		{
			contadorNeg++;
			Negativo=Negativo + Numero
		}
		if (contador == 1) 
		{
			NumeroMax=Numero;
			NumeroMin=Numero
			LetraNumeroMax=Letra;
			LetraNumeroMin=Letra;
		}
		
		else
			if (Numero > NumeroMax) 
			{
				NumeroMax=Numero
				LetraNumeroMax=Letra;
			}
			if (Numero < NumeroMin)
			{
				NumeroMin=Numero
				LetraNumeroMin=Letra;

			}

			Promedio= Positivo / contadorPos
			
	}

			document.write("La Cantidad de Numeros Pares es: " + CantidadPares + "<br>");
			document.write("La Cantidad de Numeros Impares es: " + CantidadImpares + "<br>");
			document.write("La Cantidad de Ceros es: " + CantidadCeros + "<br>");
			document.write("El Promedio de todos los numeros positivos ingresados es: " + Promedio + "<br>");
			document.write("La Suma de todos los Numeros Negativos es: " + Negativo + "<br>");
			document.write("El Numero maximo es: " + NumeroMax + " Y su letra es: " + LetraNumeroMax + "<br>");
			document.write("El Numero minimo es: " + NumeroMin + " Y su letra es: " + LetraNumeroMin + "<br>");








}
