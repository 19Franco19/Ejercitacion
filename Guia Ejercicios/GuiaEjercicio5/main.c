#include <stdio.h>
#include <stdlib.h>

int main()
{
   int Numero;
   printf("Ingrese un Numero:");
   scanf("%d",&Numero);
   if(Numero <= 0)
    {
     printf(" \n Error, el numero debe ser mayor a cero");
    }
    else
    {
        int cuadrado=Numero*Numero;
        printf("\n cuadrado: %d",cuadrado);
    }
    system("pause");
    return 0;

}
