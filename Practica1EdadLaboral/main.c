#include <stdio.h>
#include <stdlib.h>
#include "BáezF.h"


int main()
{
    int edad;
    printf("Ingrese edad: ");
    scanf("%d",&edad);

    if (ValidarEdadLaboral(edad))
    {
        printf("Esta Habilitado para trabajar \n\n");
    }
    else
    {
        printf("Usted no esta habilitado para trabajar\n\n");
    }
    return 0;
}







