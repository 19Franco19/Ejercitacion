#include <stdio.h>
#include <stdlib.h>

int main()
{
    int Base;
    int Altura;
    int Superficie;
    printf("Ingrese la base del triangulo: ");
    scanf("%d",&Base);
    printf("\nIngrese la altura del triangulo: ");
    scanf("%d",&Altura);
    Superficie= (Base * Altura) / 2;
    printf("\nSuperficie: %d",Superficie);
    system("pause");
    return 0;
}
