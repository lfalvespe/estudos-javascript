import {Pessoa} from "../models/Pessoa.js";
import{ListaPessoas} from "../models/ListaPessoas.js";
import {PessoasView} from "../views/PessoasView.js"
import { Mensagem } from "../models/mensagem.js";
import { MensagemView } from "../views/MensagemView.js";

export class PessoaController {

    _inputNome
    _inputIdade
    _inputPeso
    _inputAltura

    constructor() {
        this._inputNome = document.querySelector('#nome');
        this._inputIdade = document.querySelector('#idade');
        this._inputPeso = document.querySelector('#peso');
        this._inputAltura = document.querySelector('#altura');

        //Criar lista de pessoas
        this._listaPessoas = new ListaPessoas();

        //Mensagem
        this._mensagem = new Mensagem();
        this._mensagemView = new MensagemView(document.querySelector('#mensagem'));
        this._mensagemView.update(this._mensagem);


        // View de pessoas
        this._pessoasView = new PessoasView(document.querySelector('#dados'));
        this._pessoasView.update(this._listaPessoas);
    }

    //Adicionar pessoas

    _adiciona(event) {
        event.preventDefault();

        this._listaPessoas.adiciona(this._criaPessoa());
        //console.log(this._listaPessoas.pessoas)

        //Definir e atualizar mensagem
        this._mensagem.texto = 'Pessoa Cadastrada com sucesso!'
        this._mensagemView.update(this._mensagem);
        
        //Atualização da tela
        this._pessoasView.update(this._listaPessoas);
    }

    _criaPessoa() {
        return new Pessoa(
            this._inputNome.value,
            this._inputIdade.value,
            this._inputPeso.value,
            this._inputAltura.value
        )
    }

    _limpaFormulario() {
        this._inputNome.value = '';
        this._inputIdade.value ='';
        this._inputPeso.value = '';
        this._inputAltura.value = '';

        this._inputNome.focus();
    }
}