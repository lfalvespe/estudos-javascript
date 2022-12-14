import {Pessoa} from "./Pessoa.js";

export class Aluno extends Pessoa {
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