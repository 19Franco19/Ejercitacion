
function mostrar()
{

	var Nota;
	var Sexo;
	var PromedioNotas;
	var NotaMasBaja;
	var SexoNotaMasBaja;
	var CantidadVarones=0;
	var Contador=0;
	var Acumulador=0
	while(Contador < 6)
	{
		Contador++;
		Nota=parseInt(prompt("Ingrese una nota:"));
		Acumulador += Nota
		while(Nota < 0 || Nota > 10 )
		{
			Nota=parseInt(prompt("Error, reingrese la nota"));
		}
		Sexo=prompt("Ingrese el sexo:")
		while(!(Sexo == "f" || Sexo == "m"))
		{
			Sexo=prompt("Error, reingrese el sexo");
		}

		if (Contador == 1) 
		{
			NotaMasBaja=Nota;
			SexoNotaMasBaja=Sexo;
		}
		else
			if (Nota < NotaMasBaja)
			 {
			 	NotaMasBaja=Nota;
			 	SexoNotaMasBaja=Sexo
			 }
			 if(Nota >= 6)
			 {
			 	CantidadVarones++;
			 }

			 PromedioNotas= parseInt(Acumulador / Contador);


	}
	

	document.write("El promedio de las notas totales es: " + PromedioNotas + "<br>");
	document.write("La nota mas baja es " + NotaMasBaja + "y su sexo es " + SexoNotaMasBaja + "<br>");
	document.write("La cantida de varones con nota igual a 6 o mayor es " + CantidadVarones + "<br>");









}	