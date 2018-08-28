#include <stdio.h>
#include <stdlib.h>

int main()
{
   int Numero;
   char respuesta="si";
    while(respuesta= "si")
    {
    printf("Ingrese un Numero: ");
    scanf("%d",&Numero);
    if(Numero % 2 == 0)
    {
        printf("Es un Numero par");
    }
    else
    {
        printf("\nEs un Numero impar");
    }
    printf("\nDesea continuar?:");
    fflush(stdin);
    scanf("%c",respuesta);
    }


    system("pause");
    return 0;
}
