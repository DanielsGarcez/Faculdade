
package exercicio01aula02;

import java.util.Scanner;
import javax.swing.JOptionPane;

public class Exercicio01Aula02 {
    
    public static void main(String[] args) {
        
                String nome;
        int AnoNasc, AnoAtual;
        
        Scanner dados = new Scanner(System.in);
        
        System.out.println("Digite o nome: ");
        nome = dados.nextLine();
        
        System.out.println("Digite o ano de nascimento: ");
        AnoNasc = dados.nextInt();
        
        System.out.println("Digite o ano atual: ");
        AnoAtual = dados.nextInt();
        
        int idade = AnoAtual - AnoNasc;
        
        System.out.println("Olá "+nome+", a sua idade é "+idade+".");
        
        
        
        String nome2 = JOptionPane.showInputDialog("Digite o seu nome: ");
        int AnoNasc2 = Integer.parseInt(JOptionPane.showInputDialog("Digite a ano nascimento: "));
        int AnoAtual2 = Integer.parseInt(JOptionPane.showInputDialog("Digite o ano atual: "));
        int idade2 = AnoAtual2 - AnoNasc2;
        
       JOptionPane.showMessageDialog(null, "Olá "+nome2+", a sua idade é "+idade2+".");
        
            
    }
    
}
