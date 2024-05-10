//By Ledón 
package classes;

import classes.Node;
import classes.TAD_Queue;

public class Queue implements TAD_Queue {
//Nesta versão da classe Queue adicionamos o atributo count e os métodos
//size() e toArray()
    
    private Node head = null, tail = null;
    private int count = 0;

    public Queue() {
        head = null;
        tail = null;
        count = 0;
    }

    public Object enqueue(Object x) {
        if (x == null) {
            return null;
        }
        try { //para casos de memória insuficiente
            if(Runtime.getRuntime().freeMemory() < x.toString().length() + 1024) return null;
            Node novo = new Node();
            novo.setValue(x);
            novo.setNext(null);
            if (tail == null) {
                head = novo;
                tail = novo;
            } else {
                tail.setNext(novo);
                tail = novo;
            }
            count++;
            return x;
        } catch (Exception ex) {
            return null;
        }
    }

    public Object dequeue() {
        if (head == null) {
            return null;
        }
        Object value = head.getValue();
        head = head.getNext();
        if (head == null) {
            tail = null;
        }
        count--;
        return value;
    }

    public boolean isEmpty() {
        if (head == null) {
            return true;
        } else {
            return false;
        }
    }

    public Object peek() { //retorna o objeto no início da fila
        if (head == null) {
            return null;
        } else {
            return head.getValue();
        }
    }

    //Retorna o conteúdo da fila dinâmica encadeada (Queue) no formato f: [ head, a, b, c, ..., tail ]
    public String toString() { //retorna o conteúdo da fila dinâmica
        if (!isEmpty()) {
            String saida = "";
            Node aux = head;
            while (aux != null) { // o ponteiro aux percorre a lista
                saida += aux.getValue().toString();  // ou separar os objetos com \n
                aux = aux.getNext();
                if (aux != null) {
                    saida += ", "; // ver comentário anterior
                }
            }
            return ("f: [ " + saida + " ]");
        } else {
            return ("f: [ ]"); // fila vazia
        }
    }
    
        public String toString2() { //retorna o conteúdo da fila dinâmica
        if (!isEmpty()) {
            String saida = "";
            Node aux = head;
            while (aux != null) { // o ponteiro aux percorre a lista
                saida += aux.getValue().toString();  // ou separar os objetos com \n
                aux = aux.getNext();
                if (aux != null) {
                    saida += "\n"; // ver comentário anterior
                }
            }
            return ("\n"+saida + "\n");
        } else {
            return ("\n"); // fila vazia
        }
    }
    
    public int size() { //retorna a quantidade de objetos na fila
        //count: atributo que incrementamos em enqueue e decrementamos em dequeue
        return count;  
    }
    
    public Object[] toArray() {
    //retorna um vetor com os objetos guardados na fila, o que poderá
    //ser útil para ordenar dados ou processamento em geral
      if(isEmpty())return null; //operação impossível se a fila estiver vazia
      Object vet[] = new Object[count];
      Node aux = head;
      for(int i=0; i<count; i++) {
          vet[i] = aux.getValue();
          aux = aux.getNext();
      }
      return vet;
    }
}
