import {Pessoa} from "./Pessoa.js";

export class Trabalhador extends Pessoa {
	_profissao //string
	_trabalhando //boolean
	static totTrabalhadores = 0;

	constructor(nome, sexo, idade, peso, altura, profissao, trabalhando) {
		super(nome, sexo, idade, peso, altura);
		this._profissao = profissao;
		this._trabalhando = trabalhando;
		Trabalhador.totTrabalhadores +=1;
	}

	get profissao() {
		return this._profissao;
	}
	set profissao(novaProfissao) {
		this._profissao = novaProfissao;
	}

	get trabalhando() {
		return this._trabalhando;
	}
	set trabalhando(novoTrabalhando) {
		this._trabalhando = novoTrabalhando;
	}

	apresentar() {
		console.log(`Olá eu sou ${this.nome}, sou do sexo ${this.sexo}, tenho ${this.idade} anos, meu peso é ${this.peso}kg, minha altura é ${this.altura}m e atualmente meu status trabalhando é: ${this.trabalhando}.`)
	}
}