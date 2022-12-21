export class MensagemView {

    constructor(elemento) {
        this._elemento = elemento;
    }

    _template(model) {
        return model.texto ? `<p class='alert text-success bg-dark col-8 text-center mx-auto'>${model.texto}</p>` : `<p></p>`
    }

    update(model) {
        this._elemento.innerHTML = this._template(model)
        //Após 3s definir conte[udo vazio para limpar a mensagem]
        setTimeout(() => this._elemento.innerHTML = '', 3000);
    }
}