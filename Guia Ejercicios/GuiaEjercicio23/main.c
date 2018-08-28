#include <stdio.h>
#include <stdlib.h>

int main()
{
   int Numero1;
   int Numero2;
   int Numero3;
   int NumeroMayor;
   printf("Ingrese un primer numero:");
   scanf("%d",&Numero1);
   printf("Ingrese un segundo numero:");
   scanf("%d",&Numero2);
   printf("Ingrese un tercer numero");
   scanf("%d",&Numero3);
   if(Numero1 > Numero2 && Numero1 > Numero3)
   {
       NumeroMayor=Numero1;
       printf("NumeroMayor: %d",NumeroMayor);
   }
   else if(Numero2 > Numero3)
   {
       NumeroMayor=Numero2;
       printf("NumeroMayor: %d",NumeroMayor);
   }
   else
   {
       NumeroMayor=Numero3;
       printf("NumeroMayor: %d",NumeroMayor);
   }
   system("pause");
   return 0;
}
