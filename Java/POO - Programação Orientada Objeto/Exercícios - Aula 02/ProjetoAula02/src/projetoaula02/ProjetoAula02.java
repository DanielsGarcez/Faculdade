
package projetoaula02;

import java.util.Scanner;
import javax.swing.JOptionPane;

public class ProjetoAula02 {
    
    public static void main(String[] args) {
        System.out.println("Hello World!"); // Mensagem da tela do Usuário
        
        JOptionPane.showMessageDialog(null, "Hello World!");
        // Mensagem na janela de Exibição
        
        String nome;
        int idade;
        
        nome = "Pedro";
        idade = 18;
        
        JOptionPane.showMessageDialog(null, "Olá "+nome+", a sua idade é "+idade+".");
        
        
        
        Scanner dados = new Scanner(System.in); // Objeto para receber os dados via teclado
        
        System.out.println("Digite o nome: ");
        nome = dados.nextLine(); // Line para String
        
        System.out.println("Digite a idade: ");
        idade = dados.nextInt(); // Int para Inteiro

        System.out.println("Olá "+nome+", a sua idade é "+idade+".");
        
        
        
        nome = JOptionPane.showInputDialog("Digite o seu nome: ");
        idade = Integer.parseInt(JOptionPane.showInputDialog("Digite sua idade: "));
        
       JOptionPane.showMessageDialog(null, "Olá "+nome+", a sua idade é "+idade+".");
        
    }
    
}
