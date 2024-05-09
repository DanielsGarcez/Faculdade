package aula_08_vetor;

import java.util.Arrays;

public class VetorObjeto {
    private Object[] elementos;
    private int tamanho;

    public VetorObjeto(int capacidade) {
        this.elementos = new Object[capacidade];
        this.tamanho = 0;
    }
    
    public void adiciona(Object elemento)throws Exception{
        this.aumentaCapacidade();
        if(this.tamanho < this.elementos.length){
            this.elementos[this.tamanho] = elemento;
            this.tamanho++;
        }else{
            throw new Exception("O Vetor já está cheio, \nNão é possível adicionar nos elementos");
        }
    }    
    
    public int tamanho(){
        return this.tamanho;
    }

    public String toString() {
        StringBuilder s = new StringBuilder();
        s.append("[");
        
        for(int i=0; i<this.tamanho-1; i++){
            s.append(this.elementos[i]);
            s.append(", ");
        }
        
        if(this.tamanho > 0) {
            s.append(this.elementos[this.tamanho-1]);
        }
        
        s.append("]");
        
        return s.toString();
    }
    
    public Object busca(int posicao)throws Exception{
        if(posicao >=0 && posicao < tamanho){
            return elementos[posicao];
        }else{
            throw new Exception("Posição Inválida");
        }
    }
    
    public int busca1(String elemento){
        for(int i=0; i<tamanho; i++){
            if(elementos[i].equals(elemento)){
                return i;
            }            
        }
        return - 1;
    }
    
    public boolean adicionaInicio(int posicao, String elemento)throws Exception{
        this.aumentaCapacidade();
        if(posicao >=0 && posicao < tamanho){
            for(int i=this.tamanho-1; i>= posicao; i--){
                this.elementos[i+1] = this.elementos[i];
            }
            this.elementos[posicao] = elemento;
            this.tamanho++;
        }else{
            throw new Exception("Posição Inválida");
        }
        return true;
    }
    
    public void aumentaCapacidade(){
        if(this.tamanho == this.elementos.length){
            Object[] elementosNovos = new Object[this.elementos.length * 2];
            for(int i=0; i<this.elementos.length; i++){
                elementosNovos[i] = this.elementos[i];
            }
            this.elementos = elementosNovos;
        }
    }
       
}
