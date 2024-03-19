
package exercício.pkg02.aula.pkg04;

public class Exercício02Aula04 {

    public static void main(String[] args) {
        int num [] = { 4, 2, 10, 123, -3, 32, 0, 34, 12, 91, 45, 3, 21, 87, 61};
        System.out.println("Números Desordenados: ");
        visualizar(num);
        
        bubbleSort(num);
        
        System.out.println("Números ordenados de forma decrescente: ");
        visualizar(num);
    }    
 
    
    
    //              FUNÇÕES 
    public static boolean bubbleSort (int vet []) {              // Função BubbleSort
        if (vet == null) return false;                           // caso não tenha dados no vetor ele não executa o código abaixo
        for (int i = 0; i < vet.length - 1; i++) {            
            for (int j = 0; j < vet.length - 1 - i; j++) {
                if (vet[j] < vet[j+1]) {                    
                int tmp = vet[j];                                // Define o temp como n2
                vet[j] = vet[j+1];                               // Define o n1 como o n2
                vet[j+1] = tmp;                                  // Define o n1 como temp
                }
            }
        }
        return true;
    }
        
        public static void visualizar(int vet[]) {              // Funcão visualizar vetor
        for (int i = 0; i < vet.length; i++) {
            System.out.print(vet[i] + "   ");
        }
        System.out.println();
    }

}
