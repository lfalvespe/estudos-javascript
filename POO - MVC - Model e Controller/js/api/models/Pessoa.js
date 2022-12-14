export class Pessoa {

    _nome
    _sexo
    _idade
    _peso
    _altura
    _imc
    _classificacao
    static totPessoas = 0

    constructor(nome, sexo, idade, peso, altura) {
        this._nome = nome;
        this._sexo = sexo;
        this._idade = idade;
        this._peso = peso;
        this._altura = altura;
        this._imc = (this._peso / (this._altura * this._altura)).toFixed(2);
        this._classificacao = this.classificaIMC();
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
        return this.imc;
   
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