package com.grupo2.back.model;

import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;

class RestaTest {

    @Test
    @DisplayName("La resta de 5 - 2 es 3")
    void restarDosNumerosCincoYDos() {
        Resta resta = new Resta(5, 2);
        int resultadoResta = resta.restar();
        Assertions.assertEquals(3, resultadoResta);
    }

    @Test
    @DisplayName("La resta de -5 - -2 es -3")
    void restarDosNumerosMenosCincoYMenosDos() {
        Resta resta = new Resta(-5, -2);
        int resultadoResta = resta.restar();
        Assertions.assertEquals(-3, resultadoResta);
    }
}