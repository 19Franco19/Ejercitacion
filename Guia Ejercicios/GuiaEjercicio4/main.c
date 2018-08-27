#include <stdio.h>
#include <stdlib.h>

int main()
{
   int Numero1,Numero2;
   printf("Ingrese  un numero: ");
   scanf("%d",&Numero1);
   printf("Ingrese un segundo numero: ");
   scanf("%d",&Numero2);
   int resta=Numero1 - Numero2;
   if(resta > 0)
   {
       printf("Resultado Positivo");
   }
   else if (resta < 0)
   {
       printf("Resultado Negativo");
   }
   system("pause");
   system("cls");
   return 0;
}
