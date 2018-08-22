#include <stdio.h>
#include <stdlib.h>

int main()
{
    int Nro1,Nro2,Nro3,dato,mayor,menor;
    printf("Ingrese un primer numero: ");
    scanf(" %d",&Nro1);
    printf("\n Ingrese un segundo numero:");
    scanf(" %d",&Nro2);
    printf("\n Ingrese un tercer numero:");
    scanf("%d",&Nro3);
    if(Nro1 > Nro2 && Nro1 > Nro3)
    {
            mayor=Nro1;
    }
    else if(Nro2 > Nro3)
    {
        mayor=Nro2;
    }
    else
    {
        mayor=Nro3;
    }

    if(Nro1 < Nro2 && Nro1 < Nro3)
    {
        menor=Nro1;
    }
    else if(Nro2 < Nro3)
    {
        menor=Nro2;
    }
    else
    {
        menor=Nro3;
    }
    printf("mayor: %d", mayor);
    printf("\nmenor: %d", menor);
    system("Pause");
    return 0;
}
