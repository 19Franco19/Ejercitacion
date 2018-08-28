#include <stdio.h>
#include <stdlib.h>

int main()
{
    int Numero;
    int SumaPositivos;
    int ProductoNegativos;
    int Contador=0;
    int acumuladorPos=0;
    int acumuladorNeg=0;
    while(Contador < 10 && Numero !=0)
    {
        Contador++;
        printf("Ingrese un Numero: ");
        scanf("%d",&Numero);

        if(Numero > 0)
        {
            acumuladorPos += Numero;
            SumaPositivos= acumuladorPos + Numero;
        }
        else if(Numero < 0)
        {
            acumuladorNeg *= Numero;
            ProductoNegativos= acumuladorNeg * Numero;
        }



    }
        printf("SumaPositivos: %d",SumaPositivos);
        printf("ProductoNegativos: %d",ProductoNegativos);
        system("pause");
        return 0;
}
