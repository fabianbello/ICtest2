package com.grupo2.back.model;

public class Resta {
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

    public int getResultadoResta() {
        return resultadoResta;
    }

    public void setResultadoResta(int resultadoResta) {
        this.resultadoResta = resultadoResta;
    }

    private int primerNumero;
    private int segundoNumero;
    private int resultadoResta;

    public Resta(int primerNumero, int segundoNumero) {
        this.primerNumero = primerNumero;
        this.segundoNumero = segundoNumero;
    }

    public int restar() {
        return this.getPrimerNumero() - this.getSegundoNumero();
    }
}
