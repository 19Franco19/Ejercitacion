function mostrar()
{
	
	var NumeroUno;
	var NumeroDos;
	var NumeroTres;
	var NumeroMedio;
	NumeroUno=prompt("Ingrese un primer numero:");
	NumeroDos=prompt("Ingrese un segundo numero:");
	NumeroTres=prompt("Ingrese un tercer numero:");

	if (NumeroUno > NumeroDos && NumeroDos < NumeroTres) 
	{
		NumeroMedio=NumeroUno;
		alert("El Numero del medio es:" + NumeroMedio);
	}

	if (NumeroDos > NumeroUno && NumeroUno < NumeroTres) 
	{
		NumeroMedio=NumeroDos;
		alert("El Numero del medio es:" + NumeroMedio);
	}

	if (NumeroTres > NumeroDos && NumeroUno < NumeroDos) 
	{
		NumeroMedio=NumeroTres;
		alert("El Numero del medio es:" + NumeroMedio);
	}


	 }
