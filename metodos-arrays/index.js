let V = []
let v = ['Onix', 'Sandero', 'Mobi', 'Golf', 'Fiesta', 'Logan', 'Chronos']

V = v.slice()

tela = document.querySelector('#tela')

function resetar() {
	V = v.slice()
	tela.innerHTML = 'Visualizar'
}

function indice() {
	tela.innerHTML = ''
	tela.innerHTML = `${V.indexOf('Golf')}`
}

function ordenar() {
	tela.innerHTML = ''
	tela.innerHTML = `V = [ ${V.sort().join(', ')} ]`
}


function adic_final() {
	V.push('novo-elemento')
	tela.innerHTML = ''
	tela.innerHTML = `V = [ ${V.join(', ')} ]`
}

function adic_inicio() {
	V.unshift('novo-elemento')
	tela.innerHTML = ''
	tela.innerHTML = `V = [ ${V.join(', ')} ] <br>`
}

function apagar_ultimo() {
	V.pop()
	tela.innerHTML = ''
    tela.innerHTML += `V = [${V.join(', ')}]`
}

function apagar_primeiro() {
	V.shift()
	tela.innerHTML = ''
	tela.innerHTML = `V = [${V.join(', ')}]`
}

function deletar() {
	delete V[3]
	tela.innerHTML = ''
	tela.innerHTML = `V = [${V.join(', ')}]`
}

function fatiar() {
	newV = V.slice(2,5)
	tela.innerHTML = ''
	tela.innerHTML = `V = [${newV.join(', ')}]`
}

function fatiar1() {
	V.splice(1, 3, 'Spin')
	tela.innerHTML = ''
	tela.innerHTML = `V = [${V.join(', ')}]`
}

function concatenar() {
	W = ['Sentra', 'Kwid']
	Z = V.concat(W)
	tela.innerHTML = ''
	tela.innerHTML = `V = [${Z.join(', ')}]`
}
