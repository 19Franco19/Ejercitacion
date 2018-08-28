#include <stdio.h>
#include <stdlib.h>

int main()
{
    float Radio;
    float LongitudCircunferencia;
    float AreaCirculo;

    printf("Ingrese el Radio: ");
    scanf("%f",&Radio);
    LongitudCircunferencia= (float) (2 * 3.14 * Radio);
    printf("LongitudCircunferencia: %.2f",LongitudCircunferencia);

    AreaCirculo= (float) (3.14 * (Radio * Radio));
    printf(" \nAreaCirculo: %.2f",AreaCirculo);
    system("pause");
    return 0;







}
