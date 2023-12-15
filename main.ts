class SistemaSeguranca {
    // Instância única da classe
    private static instance: SistemaSeguranca;

    // Senha da base secreta
    private senhaBaseSecreta: string = "senhaSecreta123";

    // Construtor privado para evitar instância direta
    private constructor() {}

    // Método para obter a instância única (lazy initialization)
    public static getInstance(): SistemaSeguranca {
        if (!SistemaSeguranca.instance) {
            SistemaSeguranca.instance = new SistemaSeguranca();
        }
        return SistemaSeguranca.instance;
    }

    // Método para acessar a base secreta
    public acessarBaseSecreta(senhaInserida: string): void {
        if (senhaInserida === this.senhaBaseSecreta) {
            console.log("Acesso concedido à base secreta!");
        } else {
            console.log("Acesso negado. Senha incorreta.");
        }
    }
}

// Exemplo de uso
const sistema: SistemaSeguranca = SistemaSeguranca.getInstance();

// Tenta acessar a base secreta com senha correta
sistema.acessarBaseSecreta("senhaSecreta123");

// Tenta acessar a base secreta com senha incorreta
sistema.acessarBaseSecreta("senhaIncorreta456");
