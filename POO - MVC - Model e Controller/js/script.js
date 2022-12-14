import {PessoaController} from "./api/controllers/PessoaController.js";

const pessoaController = new PessoaController ();


//Controlar envio do formulário e exibição na tela

const formulario = document.querySelector('#formulario');

//escutador de eventos no formulário;

formulario.addEventListener('submit', (event) => {
    //adicionar pessoa:
    pessoaController.adiciona(event);

    //Limpa formulário
    pessoaController._limpaFormulario();
    
})





