let carros = []
let Carros = ['Onix', 'Sandero', 'Mobi', 'Golf', 'Fiesta', 'Logan', 'Chronos']

carros = Carros.slice()

tela = document.querySelector('#tela')

function resetar() {
	carros = Carros.slice()
	tela.innerHTML = 'Visualizar'
}

function indice() {
	tela.innerHTML = ''
	tela.innerHTML = `${carros.indexOf('Golf')}`
}

function ordenar() {
	tela.innerHTML = ''
	tela.innerHTML = `carros = [ ${carros.sort().join(', ')} ]`
}


function adic_final() {
	carros.push('novo-elemento')
	tela.innerHTML = ''
	tela.innerHTML = `carros = [ ${carros.join(', ')} ]`
}

function adic_inicio() {
	carros.unshift('novo-elemento')
	tela.innerHTML = ''
	tela.innerHTML = `carros = [ ${carros.join(', ')} ] <br>`
}

function apagar_ultimo() {
	carros.pop()
	tela.innerHTML = ''
    tela.innerHTML += `carros = [${carros.join(', ')}]`
}

function apagar_primeiro() {
	carros.shift()
	tela.innerHTML = ''
	tela.innerHTML = `carros = [${carros.join(', ')}]`
}

function deletar() {
	delete carros[3]
	tela.innerHTML = ''
	tela.innerHTML = `carros = [${carros.join(', ')}]`
}

function fatiar() {
	new_carros = carros.slice(2,5)
	tela.innerHTML = ''
	tela.innerHTML = `new_carros = [${new_carros.join(', ')}]`
}

function fatiar1() {
	carros.splice(1, 3, 'Spin')
	tela.innerHTML = ''
	tela.innerHTML = `carros = [${carros.join(', ')}]`
}

function concatenar() {
	outros = ['Sentra', 'Kwid']
	new_carros2 = carros.concat(outros)
	tela.innerHTML = ''
	tela.innerHTML = `new_carros2 = [${new_carros2.join(', ')}]`
}
