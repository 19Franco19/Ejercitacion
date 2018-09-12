#include <stdio.h>
#include <stdlib.h>
#include "Funciones.h"
#define Cant 200
#include "Funciones.h"


int main()
{
    char Nombre[Cant][31],nomAux[31];
    char Apellido[Cant][31],apeAux;
    int Edad[Cant],edadAux;
    int Legajo[Cant],legajoAux;
    int isEmpty[Cant],isEmptyAux,flag=0;
    int opcion,i,j;
    char seguir='s';
    for(i=0;i<Cant;i++);
    {
        isEmpty[i]=1;
    }

    do
    {
       printf("\n1-Dar de alta los datos de una persona\n");
       printf("\n2-Dar de baja los datos de una persona\n");
       printf("\n3-Modificar algun dato ya ingresado\n");
       printf("\n4-Salir");
       printf("\nIngrese una opcion");
       scanf("%d",&opcion);
   }
while(opcion=0);
    switch(opcion)
          {
            case 1:
                for(i=0;i<Cant;i++)
                    if(isEmpty[i]==1)
                {
                    printf("Ingrese los datos de la persona a dar de alta");
                    printf("Ingrese el Nombre");
                    fgets(Nombre[i],sizeof(Nombre),stdin);
                    Cant=strlen(Nombre[i]);
                    Nombre[i][Cant - 1]='\0';
                    printf("Ingrese el Apellido");
                    fgets(Apellido[i],sizeof(Apellido),stdin);
                    printf("Ingrese la Edad");
                    scanf("%d",&Edad);
                    printf("Ingrese el Legajo");
                    scanf("%d",&Legajo);
                    isEmpty[i]=0;
                    }

            case 2:

            printf("Legajo");
            scanf("%d",&legajoAux);
            for(i=0;i<Cant;i++)
            {
                if(legajoAux==Legajo[i] && isEmpty[i]==0)
                {
                    isEmpty[i]=1;
                    flag=1;
                }
                if(flag==0)
                {
                    printf("Dato no encontrado");
                }
                break;
            }
            case 3:
            for(i=0;i<Cant;i++)
            {
                printf("%d\t%s\t\t%s\t\t%d/n",Legajo[i],Apellido[i],Nombre[i],Edad[i]);
            }
            while(opcion != 4);
            break;
    }

    for(i=0;i<Cant;i++)
    {
        for(j=i+1;j<Cant;j++)
        {
            if(strcmp(Apellido[i],Apellido[j]>0))
            {
                strcpy(nomAux,Nombre[i]);
                strcpy(Nombre[i],Nombre[j]);
                strcpy(Nombre[i],nomAux);
                strcpy(apeAux,Apellido[i]);
                strcpy(Apellido[i],Apellido[j]);
                strcpy(Apellido[i],apeAux);
                edadAux=Edad[i];
                Edad[i]=Edad[j];
                Edad[j]=edadAux;
                legajoAux=Legajo[i];
                Legajo[i]=Legajo[j];
                Legajo[j]=legajoAux;
                isEmptyAux=isEmpty[i];
                isEmpty[i]=isEmpty[j];
                isEmpty[j]=isEmptyAux;
            }
            if(strcmp(Apellido[i],Apellido[j]==0))
            {
                if(strcmp(Nombre[i],Nombre[j])>0)
                {
                    strcpy(nomAux,Nombre[i]);
                    strcpy(Nombre[i],Nombre[j]);
                    strcpy(Nombre[i],nomAux);
                    edadAux=Edad[i];
                    Edad[i]=Edad[j];
                    Edad[j]=edadAux;
                    legajoAux=Legajo[i];
                    Legajo[i]=Legajo[j];
                    Legajo[j]=legajoAux;
                    isEmptyAux=isEmpty[i];
                    isEmpty[i]=isEmpty[j];
                    isEmpty[j]=isEmptyAux;
            }
        }
        }
        }
        }












