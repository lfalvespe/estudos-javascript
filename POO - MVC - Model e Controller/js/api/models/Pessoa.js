export class Pessoa {
    _nome
    _idade
    _peso
    _altura
    _imc
    _classificacao

    static totPessoas = 0;

    constructor(nome, idade, peso, altura){
        this._nome = nome;
        this._idade = idade;
        this._peso = peso;
        this._altura = altura;
        this._imc = (this._peso / (this._altura * this._altura)).toFixed(2);
        this._classificacao = this.classificaIMC();

        Pessoa.totPessoas += 1;
    }


    classificaIMC() {
       let valorIMC = this.imc;
        let classificacao = '' ;

        if (valorIMC<18.5) {
            classificacao = 'Abaixo do Peso Normal';
        } else if (valorIMC >= 18.5 && valorIMC < 25) {
            classificacao = 'Peso normal';
        } else if (valorIMC >= 25 && valorIMC < 30) {
            classificacao = 'Sobrepeso';
        } else if (valorIMC >= 30 && valorIMC < 35) {
            classificacao = 'Obesidade Grau I';
        } else if (valorIMC >= 35 && valorIMC < 40) {
            classificacao = 'Obesidade grau II';
        } else if (valorIMC >= 40) {
            classificacao = 'Obesidade Mórbida';
        }
        return classificacao;
    }


    //Getters e Setters

    calculaImc() {
        return this.imc
    }

    get nome() {
        return this._nome;
    }
    set nome(novoNome) {
        this._nome = novoNome;
    }

    get idade() {
        return this._idade;
    }
    set idade(novaIdade) {
        this._idade = novaIdade;
    }

    get peso() {
        return this._peso;
    }
    set peso(novoPeso) {
        this._Peso = novoPeso;
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

    get classificacao() {
        return this._classificacao;
    }

}