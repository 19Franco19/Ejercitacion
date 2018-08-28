#include <stdio.h>
#include <stdlib.h>

int main()
{
    char Caracteres[20];
    int cantidadA=0;
    int cantidadE=0;
    int cantidadI=0;
    int cantidadO=0;
    int cantidadU=0;
    printf("Ingrese 20 caracteres a eleccion: ");
    scanf("%s",Caracteres);
    if(Caracteres[20] == 'a')
    {
        cantidadA++;
    }
    else if(Caracteres[20] == 'e')
    {
        cantidadE++;
    }
    else if(Caracteres[20] == 'i')
    {
        cantidadI++;
    }
    else if(Caracteres[20] == 'o')
    {
        cantidadO++;
    }
    else if(Caracteres[20] == 'u')
    {
        cantidadU++;
    }
    printf("cantidadA: %d",cantidadA);
    printf("\ncantidadE: %d",cantidadE);
    printf("\ncantidadI: %d",cantidadI);
    printf("\ncantidadO: %d",cantidadO);
    printf("\ncantidadU: %d",cantidadU);
    system("pause");



}
