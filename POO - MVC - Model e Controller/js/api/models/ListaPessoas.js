export class ListaPessoas {
    constructor() {
        this._pessoas = []
    }

    adiciona(pessoa) {
        this._pessoas.push(pessoa)
    }


    //Programação defensiva: Retornar uma cópia do array
    //Usando o concat, passando o nosso array como parâmetro

    get pessoas () {
        //return_this._pessoas

        return [].concat(this._pessoas)


    }
}