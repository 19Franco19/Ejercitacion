#include <stdio.h>
#include <stdlib.h>

int main()
{
    int Num1,Num2,Num3,Num4,Num5;
    printf("Ingrese el primer numero: ");
    scanf(" %d",&Num1);
    printf("\n Ingrese el segundo numero:");
    scanf(" %d",&Num2);
    printf("\n Ingrese el tercer numero:");
    scanf("%d",&Num3);
    printf("\n Ingrese el cuarto numero:");
    scanf("%d",&Num4);
    printf("\n Ingrese el quinto numero:");
    scanf("%d",&Num5);
   float promedio=(float) (Num1+Num2+Num3+Num4+Num5) / 5;
   printf("promedio: %.2f",promedio);
   system("Pause");
    return 0;
}
