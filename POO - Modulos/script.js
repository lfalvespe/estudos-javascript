import {Pessoa} from "./Pessoa.js";

import {Aluno} from "./Aluno.js";

import {Trabalhador} from "./Trabalhador.js";

//criando objetos da classe Pessoa:
const p1 = new Pessoa('Maria', 'F', 25, 70.2, 1.74);
console.log(p1)

p1.apresentar();

const p2 = new Pessoa('José', 'M', 52, 87.3, 1.86 )
console.log(p2)

p2.apresentar();


//Lendo a propriedade totPessoas da classe Pessoa:
console.log(Pessoa.totPessoas);


//Criando objetos da classe Aluno:
const a1 = new Aluno('Toinho', 'M', 14, 64.2, 1.71, 7, 'A');
console.log(a1);

const a2 = new Aluno('Zefinha', 'F', 12, 59.8, 1.55, 8, 'C');
console.log(a2);

a1.apresentar();
a2.apresentar();

//Criando objetos da classe Trabalhador:

const t1 = new Trabalhador('Jurema', 'F', 44, 86.5, 1.88, 'Professora', true);
console.log(t1);

const t2 = new Trabalhador('Aroldo', 'M', 54, 92.6, 1.92, 'Engenheiro', false );
console.log(t2)

t1.apresentar();
t2.apresentar();

console.log(Trabalhador.totTrabalhadores);


//Exibindo a situação do IMC de cada objeto executando o método classificaIMC para cada um deles.

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



