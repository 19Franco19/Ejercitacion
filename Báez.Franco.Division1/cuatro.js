function mostrar()
{
	var NumeroUno;
	var NumeroDos;
	var NumeroTres;

	NumeroUno=parseInt(prompt("Ingrese un primer numero:"));
	NumeroDos=parseInt(prompt("Ingrese un segundo numero:"));
	NumeroTres=parseInt(prompt("Ingrese un tercer numero:"));

	if ( NumeroUno > NumeroDos && NumeroUno > NumeroTres) 
		{
    	alert("El " + NumeroUno + " es el mayor");
    	}
    else if ( NumeroDos > NumeroTres)
    	{
 		alert("El " + NumeroDos + " es el mayor");
 		}
	else
		{
		alert("El " + NumeroTres + " es el mayor");
		}

	if ( NumeroUno < NumeroDos && NumeroUno < NumeroTres) 
		{
    	alert("El " + NumeroUno + " es el menor");
    	}
    else if ( NumeroDos < NumeroTres)
    	{
 		alert("El " + NumeroDos + " es el menor");
 		}
	else
		{
		alert("El " + NumeroTres + " es el menor");
		}













}