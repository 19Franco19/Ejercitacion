/** \brief Valida que la edad este dentro del rango
 *
 * \param Edad
 * \param
 * \return 1 Si se encuentra en edad laboral. 0 Si no se encuentra en edad laboral.
 *
 */

int ValidarEdadLaboral(int valor)
{
    int esValido;
    if(valor < 18 || valor > 65)
    {
        esValido = 0;
    }
    else
    {
        esValido = 1;
    }
    return esValido;


}
