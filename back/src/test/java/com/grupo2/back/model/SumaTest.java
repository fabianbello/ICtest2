package com.grupo2.back.model;

import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;

class SumaTest {

    @Test
    @DisplayName("La suma de 4 + 3 es 7")
    void sumarDosNumerosCuatroYTres() {
        Suma suma = new Suma(4, 3);
        int resultadoSuma = suma.sumar();
        Assertions.assertEquals(7, resultadoSuma);
    }

    @Test
    @DisplayName("La suma de -4 + 3 es -1")
    void sumarDosNumerosMenosCuatroYTres() {
        Suma suma = new Suma(-4, 3);
        int resultadoSuma = suma.sumar();
        Assertions.assertEquals(-1, resultadoSuma);
    }
}