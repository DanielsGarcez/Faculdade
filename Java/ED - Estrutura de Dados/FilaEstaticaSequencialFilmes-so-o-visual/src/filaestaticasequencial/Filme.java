package filaestaticasequencial;

public class Filme {
    private String titulo;
    private String diretor;
    private String genero;
    private String pais;
    private int ano;

    // Construtor
    public Filme(String titulo, String diretor, String genero, String pais, int ano) {
        this.titulo = titulo;
        this.diretor = diretor;
        this.genero = genero;
        this.pais = pais;
        this.ano = ano;
    }

    // Métodos getters
    public String getTitulo() {
        return titulo;
    }

    public String getDiretor() {
        return diretor;
    }

    public String getGenero() {
        return genero;
    }

    public String getPais() {
        return pais;
    }

    public int getAno() {
        return ano;
    }

    // Método toString para exibir informações do filme
    @Override
    public String toString() {
        return "Título: " + titulo + ", Diretor: " + diretor + ", Gênero: " + genero + ", País: " + pais + ", Ano: " + ano;
    }
}
