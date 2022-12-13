import {Pessoa} from "./Pessoa.js";

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



