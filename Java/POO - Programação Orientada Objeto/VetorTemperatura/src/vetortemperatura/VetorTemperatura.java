package vetortemperatura;

import java.util.Scanner;

public class VetorTemperatura {

    public static void main(String[] args) {
        int Temperatura[] = new int[7];
        int Soma, Media, i, Acima, Abaixo;
        Soma =0;
        Scanner dados = new Scanner(System.in);
        
        for(i=0; i<7; i++){
            System.out.println("Digite a "+(i+1)+"°temperatura");
            Soma= Soma + Temperatura[i];
            Temperatura[i] = dados.nextInt();
        }
        Media = Soma /7;
        Acima = 0;
        Abaixo = 0;
        
        for(i=0; i<7; i++){
           if(Temperatura[i] > Media){
               Acima++;
           }else if(Temperatura[i] < Media){
               Abaixo++;
           }
        }
        System.out.println("A média de temperaturas é "+Media);
        System.out.println("Total de dias que a temperatura ficou ACIMA da média: "+Acima);
        System.out.println("Total de dias que a temperatura ficou ABAIXO da média: "+Abaixo);
    }
    
}


