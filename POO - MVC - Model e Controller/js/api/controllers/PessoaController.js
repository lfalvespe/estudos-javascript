import {Pessoa} from "../models/Pessoa.js";
import{ListaPessoas} from "../models/ListaPessoas.js";
import {PessoasView} from "../views/PessoasView.js"

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

        // Criar lista de pessoas

        this._listaPessoas = new ListaPessoas();

        this._pessoasView = new PessoasView(document.querySelector('#dados'));
        this._pessoasView.update(this._listaPessoas);
    }

    _adiciona(event) {
        event.preventDefault();

        this._listaPessoas.adiciona(this._criaPessoa());
        console.log(this._listaPessoas.pessoas)

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