package aula_08_vetor;

import java.util.ArrayList;


public class Teste {
    public static void main(String[] args) throws Exception{
        VetorObjeto vetor = new VetorObjeto(5);
        
        Contato c1 = new Contato("Cluadio","99999-2525","CluadinhoDaXJ6@gmail.com");
        Contato c2 = new Contato("Daniel","99992-2525","DandanLindo69@gmail.com");
        Contato c3 = new Contato("Gabriel","99219-2525","BielDoGrau@gmail.com");
        
        try{
            vetor.adiciona(c1);
            vetor.adiciona(c2);
            vetor.adiciona(c3);
        }catch (Exception e){
            e.printStackTrace();
        }
        
        System.out.println("Tamanho do vetor: "+ vetor.tamanho());
        
        System.out.println(vetor);
        
        //--------------------------------------------------------------------------
        
        ArrayList<String> arrayList = new ArrayList<String>();
        
        arrayList.add("Elemento A");
        arrayList.add("Elemento C");
        
        System.out.println(arrayList);
        
        arrayList.add("Elemento B");
        
        System.out.println(arrayList);
        
        System.out.println(arrayList.get(1));
        
        boolean existe = arrayList.contains("Elemento C");
        if(existe){
            System.out.println("Elemento encontrado no vetor");
        } else{
            System.out.println("Elemento não existe no vetor");
        }
        
        
        int posicao = arrayList.indexOf("Elemento C");
        if (posicao > -1){
            System.out.println("Elemento encontrado na posição n° "+posicao);
        }
        else{
            System.out.println("Elemento não existe no vetor");
        }
    }
}