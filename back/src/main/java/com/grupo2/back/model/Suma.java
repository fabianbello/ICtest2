package com.grupo2.back.model;

public class Suma {
    public int getPrimerNumero() {
        return primerNumero;
    }

    public void setPrimerNumero(int primerNumero) {
        this.primerNumero = primerNumero;
    }

    public int getSegundoNumero() {
        return segundoNumero;
    }

    public void setSegundoNumero(int segundoNumero) {
        this.segundoNumero = segundoNumero;
    }

    public int getResultado() {
        return resultado;
    }

    public void setResultado(int resultado) {
        this.resultado = resultado;
    }

    private int primerNumero;
    private int segundoNumero;
    private int resultado;

    public Suma(int primerNumero, int segundoNumero) {
        this.primerNumero = primerNumero;
        this.segundoNumero = segundoNumero;
    }

    public int sumar() {
        return this.getPrimerNumero() + this.getSegundoNumero();
    }
}
