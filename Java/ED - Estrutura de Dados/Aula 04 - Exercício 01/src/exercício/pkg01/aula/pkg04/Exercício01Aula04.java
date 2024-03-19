
package exercício.pkg01.aula.pkg04;

public class Exercício01Aula04 {

    public static void main(String[] args) {
        String paises[] = {"México", "Brasil", "Cuba", "Chile", "Argentina", "Espanha"};
        System.out.println("Números Desordenados: ");
        visualizar(paises);
        
        bubbleSort(paises);
        
        System.out.println("Números ordenados de forma decrescente: ");
        visualizar(paises);
    }    
 
    
    //      FUNÇÕES 
    
    public static boolean bubbleSort (String vet []) {           // Função BubbleSort
        if (vet == null) return false;                        // caso não tenha dados no vetor ele não executa o código abaixo
        for (int i = 0; i < vet.length - 1; i++) {            
            for (int j = 0; j < vet.length - 1 - i; j++) {
                if (vet[j].compareTo (vet[j+1]) > 0) {                    
                String tmp = vet[j];                             // Define o temp como n2
                vet[j] = vet[j+1];                            // Define o n1 como o n2
                vet[j+1] = tmp;                               // Define o n1 como temp
                }
            }
        }
        return true;
    }
        
        public static void visualizar(String vet[]) {            // Funcão visualizar vetor
        for (int i = 0; i < vet.length; i++) {
            System.out.print(vet[i] + "   ");
        }
        System.out.println();
    }

}
