#include <stdio.h>
#include <stdlib.h>

int main()
{
    int Numero;
    int contador=0;
    int contadorPositivos=0;
    int contadorNegativos=0;
    while(contador <10)
    {
        contador++;
        printf("Ingrese un Numero:");
        scanf("%d",&Numero);
        if(Numero > 0)
        {
            contadorPositivos++;
        }
        if(Numero < 0)
        {
            contadorNegativos++;
        }
    }

        printf("\n contadorPositivos: %d",contadorPositivos);
        printf("\n contadorNegativos: %d",contadorNegativos);
    system("pause");
    return 0;
}
