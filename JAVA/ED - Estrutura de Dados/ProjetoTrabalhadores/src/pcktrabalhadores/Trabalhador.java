package pcktrabalhadores;

public class Trabalhador implements Comparable {

    private String nome;
    private float salario;
    private char sexo;

    public Trabalhador() {
        nome = "-";
        salario = 0;
        sexo = '-';
    }

    public Trabalhador(String inNome, float inSalario, char inSexo) {
        setNome(inNome);
        setSalario(inSalario);
        setSexo(inSexo);
    }

    public void setNome(String inNome) {
        nome = inNome;
    }

    public void setSalario(float inSalario) {
        if (inSalario > 0) salario = inSalario;
        else salario = 0;
    }

    public void setSexo(char inSexo) {
        sexo = '-';
        if (inSexo == 'F' || inSexo == 'M') sexo = inSexo;
    }

    public String getNome() {
        return nome;
    }

    public float getSalario() {
        return salario;
    }

    public String getSalarioStr() {
        return "R$" + salario;
    }

    public char getSexo() {
        return sexo;
    }

    public String toString() {
        return (getNome() + ", salário mensal: R$" + getSalario() + ", salário anual: R$" + salarioAnual() + ", sexo: " + getSexo());
    }

    public float salarioAnual() {
        return (salario * 13 + salario / 3);
    }
    
    public int compareTo(Object outro) {
        if(getNome().compareToIgnoreCase(((Trabalhador)outro).getNome()) < 0) return -1;
        else  if(getNome().compareToIgnoreCase(((Trabalhador)outro).getNome()) == 0) return 0;
        else return 1;
    }
}
