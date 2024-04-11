package vetortemperatura;

import java.util.Scanner;
import javax.swing.JOptionPane;

public class VetorTemperatura {

    public static void main(String[] args) {
        int Temperatura[] = new int[7];
        int Soma, Media, i, Acima, Abaixo;
        Soma =0;
        
        for(i=0; i<7; i++){
            Scanner dados = new Scanner(System.in);
            String num = JOptionPane.showInputDialog("Digite a "+(i+1)+"° temperatura:");
            //System.out.println("Digite a "+(i+1)+"°temperatura");
            //Temperatura[i] = dados.nextInt();
            Temperatura[i] = Integer.parseInt(num);
            Soma= Soma + Temperatura[i];
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
        JOptionPane.showMessageDialog(null,"A média de temperaturas é "+Media);
        //System.out.println("A média de temperaturas é "+Media);
        JOptionPane.showMessageDialog(null,"Total de dias que a temperatura ficou ACIMA da média: "+Acima);
        //System.out.println("Total de dias que a temperatura ficou ACIMA da média: "+Acima);
        JOptionPane.showMessageDialog(null,"Total de dias que a temperatura ficou ABAIXO da média: "+Abaixo);
        //System.out.println("Total de dias que a temperatura ficou ABAIXO da média: "+Abaixo);
    }
    
}


