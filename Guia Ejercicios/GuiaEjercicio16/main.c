#include <stdio.h>
#include <stdlib.h>

int main()
{
    int Numero;
    printf("Ingrese un Numero: ");
    scanf("%d",&Numero);
    if(Numero >= 0)
    {
        printf("Es un Numero positivo");
    }
    else
    {
        printf("Es un Numero negativo");
    }
    system("pause");
    return 0;
    }
