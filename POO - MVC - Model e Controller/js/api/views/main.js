import {PessoaController} from "../controllers/PessoaController.js";

let pessoaController = new PessoaController();

//Controlar envio do formulário e exibição na tela:

let formulario = document.querySelector('form');

//Escutador de eventos do formulário:

formulario.addEventListener('submit', (event) => {

    //adicionar pessoa

    pessoaController._adiciona(event);
    pessoaController._limpaFormulario();
})




