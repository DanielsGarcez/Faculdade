/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package pckcompras;

/**
 *
 * @author Daniel
 */
public class Compra {
    private String nomeComprador;
    private String nomeProduto;
    private float valorProduto;

    public Compra(String nomeComprador, String nomeProduto, float valorProduto) {
        this.nomeComprador = nomeComprador;
        this.nomeProduto = nomeProduto;
        this.valorProduto = valorProduto;
    }

    public String getNomeComprador() {
        return nomeComprador;
    }

    public void setNomeComprador(String nomeComprador) {
        this.nomeComprador = nomeComprador;
    }

    public String getNomeProduto() {
        return nomeProduto;
    }

    public void setNomeProduto(String nomeProduto) {
        this.nomeProduto = nomeProduto;
    }

    public float getValorProduto() {
        return valorProduto;
    }

    public void setValorProduto(float valorProduto) {
        this.valorProduto = valorProduto;
    }

    @Override
    public String toString() {
        return "Comprador: " + nomeComprador + ", Produto: " + nomeProduto + ", Valor: R$" + valorProduto + ".";
    }
    
}
