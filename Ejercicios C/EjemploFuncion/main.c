#include <stdio.h>
#include <stdlib.h>
int suma(int,int); //Prototipo de la funcion.
int main()
{
    int Nro1,Nro2,result;
    printf("Ingrese primer operando:");
    scanf("%d",&Nro1);
    printf("\nIngrese segundo operando:");
    scanf("%d",&Nro2);
    result=suma(Nro1,Nro2); //Llamada de la funcion.
    system("cls");
    printf("Resultado: %d",result);
    return 0;
}
int suma(int op1,int op2) //Cuerpo de la funcion que estoy creando.
{
    int resultado;
    resultado=op1 + op2;
    return resultado;
}

