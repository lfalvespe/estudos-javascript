//Criando a classe Pessoa:
class Pessoa {

    _nome
    _sexo
    _idade
    _peso
    _altura
    _imc
    static totPessoas = 0

    constructor(nome, sexo, idade, peso, altura) {
        this._nome = nome;
        this._sexo = sexo;
        this._idade = idade;
        this._peso = peso;
        this._altura = altura;
        this._imc = (this._peso / (this._altura * this._altura)).toFixed(2);
        Pessoa.totPessoas += 1;
    }

    get nome() {
        return this._nome;
    }
    set nome(novoNome) {
        this._nome = novoNome;
    }

    get sexo() {
       return this._sexo;
    }

    set sexo(novoSexo) {
        this._sexo = novoSexo;
    }

    get idade() {
        return this._idade;
    }
    set idade(novaIdade) {
        this._idade= novaIdade;
    }

    get peso() {
        return this._peso;
    }
    set peso(novoPeso) {
        this._peso = novoPeso;
    }

    get altura() {
        return this._altura;
    }
    set altura(novaAltura) {
        this._altura = novaAltura;
    }

    get imc() {
        return this._imc;
    }

        get totPessoas() {
            return Pessoa.totPessoas;
    }

    apresentar() {
        console.log(`Olá, meu nome é ${this.nome}, sou do sexo ${this.sexo}, tenho ${this.idade} anos, meu peso é ${this.peso}kg e minha altura é ${this.altura}m. Meu imc é ${this.imc}`)
    }

    calculaIMC() {
        return (this.peso/(this.altura * this.altura)).toFixed(2);
   
    }

    classificaIMC(valorIMC) {
        valorIMC = this.imc;
        
        let situacao = ''

        if(valorIMC < 18.5) {
           situacao = 'Abaixo do Peso.';
        } else if (valorIMC >= 18.5 && valorIMC < 25) {
            situacao = 'Peso Normal.';
        } else if (valorIMC >= 25 && valorIMC < 30){
            situacao = 'Sobrepeso.';
        } else if (valorIMC >= 30 && valorIMC < 35) {
            situacao = 'Obesidade Grau I.';
        } else if (valorIMC >= 30 && valorIMC < 40) {
            situacao = 'Obesidade Grau II';
        } else if (valorIMC >= 40) {
            situacao = 'Obesidade Mórbida';
        }

        return situacao;
    }

}

//Criando a classe Aluno que estende a classe Pessoa:

class Aluno extends Pessoa {
    _serie
    _turma
    static totTurma

    constructor(nome, sexo, idade, peso, altura, serie, turma) {
        super(nome, sexo, idade, peso, altura);
        this._serie = serie;
        this._turma = turma;
    }

    get serie() {
        return this._serie;
    }
    set serie(novaSerie) {
        this._serie = novaSerie;
    }

    get turma() {
        return this._turma;
    }
    set turma(novaTurma) {
        this._turma = novaTurma;
    }

    apresentar() {
        console.log(`Olá, meu nome é ${this._nome}, sou do sexo ${this._sexo}, tenho ${this._idade} anos, meu peso é ${this._peso}kg e minha altura é ${this._altura}m. Estudo na turma ${this._turma} da ${this._serie}a série.`)
    }
    
}

//criando objetos da classe Pessoa:
p1 = new Pessoa('Maria', 'F', 25, 70.2, 1.74);
console.log(p1)

p1.apresentar();

p2 = new Pessoa('José', 'M', 52, 87.3, 1.86 )
console.log(p2)

p2.apresentar();

//Lendo a propriedade de classe totPessoas:
console.log(Pessoa.totPessoas);


//Criando objetos da classe Aluno:
a1 = new Aluno('Toinho', 'M', 14, 64.2, 1.71, 7, 'A');
console.log(a1);

a2 = new Aluno('Zefinha', 'F', 12, 59.8, 1.55, 8, 'C');
console.log(a2);

a1.apresentar();
a2.apresentar();

const saudeP1 = p1.classificaIMC()
const saudeP2 = p2.classificaIMC()
const saudeA1 = a1.classificaIMC()
const saudeA2 = a2.classificaIMC()

console.log('')
console.log('Classificação de IMC:');
console.log(`
             ${p1.nome} -> ${p1.classificaIMC()}
             ${p2.nome} -> ${p2.classificaIMC()}
             ${a1.nome} -> ${a1.classificaIMC()}
             ${a2.nome} -> ${a2.classificaIMC()}`
)



