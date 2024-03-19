package exercio02aula02;

import javax.swing.JOptionPane;


public class Exercio02Aula02 {

    public static void main(String[] args) {
        
        String nome = JOptionPane.showInputDialog("Digite o seu nome: ");
        float salario = Integer.parseInt(JOptionPane.showInputDialog("Digite o seu salário: "));
        
        double reajuste = salario * 1.2;
        
        if(salario>1500){
            double irpf = reajuste*0.93;
            JOptionPane.showMessageDialog(null, "Olá "+nome+", com o reajuste seu salário é de: "+Math.round(irpf)+". ");
        }
        else{
            JOptionPane.showMessageDialog(null, "Olá "+nome+", com o reajuste seu salário é de: "+Math.round(reajuste)+".");
        }
    }
    
}
