let carros = []
let Carros = ['Onix', 'Sandero', 'Mobi', 'Golf', 'Fiesta', 'Logan', 'Chronos']

let numeros = []
let Numeros = [25, 18, 40, 100, 2, 33]

carros = Carros.slice()
numeros = Numeros.slice()

tela = document.querySelector('#tela')

function resetar() {
	carros = Carros.slice()
	numeros = Numeros.slice()
	tela.innerHTML = '----------'
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

function apagar_ult() {
	carros.pop()
	tela.innerHTML = ''
    tela.innerHTML += `carros = [${carros.join(', ')}]`
}

function apagar_prim() {
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
	c = carros.slice(2,5)
	tela.innerHTML = ''
	tela.innerHTML = `c = [${c.join(', ')}]`
}

function fatiar1() {
	carros.splice(1, 3, 'Spin')
	tela.innerHTML = ''
	tela.innerHTML = `carros = [${carros.join(', ')}]`
}

function concat() {
	outros = ['Sentra', 'Kwid']
	new_carros2 = carros.concat(outros)
	tela.innerHTML = ''
	tela.innerHTML = `new_carros2 = [${new_carros2.join(', ')}]`
}


//Vetor Numérico

function indice_num() {
	tela.innerHTML = ''
	tela.innerHTML = `${numeros.indexOf(2).join(', ')}`
}

function ordenar_num() {
	tela.innerHTML = ''
	tela.innerHTML = `[ ${numeros.sort().join(', ')} ]`
}

function adic_final_num() {
	numeros.push(51)
	tela.innerHTML = `[ ${numeros.join(', ')} ]`
}

function adic_inicio_num() {
	numeros.unshift(14)
	tela.innerHTML = `[ ${numeros.join(', ')} ]`
}

function apagar_ult_num() {
	numeros.pop()
	tela.innerHTML = `[ ${numeros.join(', ')} ]`
}

function apagar_prim_num() {
	numeros.shift()
	tela.innerHTML = `[ ${numeros.join(', ')} ]`
}

function deletar_num() {
	delete numeros[4]
	tela.innerHTML = `[ ${numeros.join(', ')} ]`
}

function fatiar_num() {
	n = numeros.slice(1, 4)
	tela.innerHTML = `[ ${n.join(', ')} ]`
}

function fatiar1_num() {
	numeros.splice(2, 3, 11)
	tela.innerHTML = `[ ${numeros.join(', ')} ]`
}

function concat_num() {
	m = [95, 224]
	novo = numeros.concat(m)
	tela.innerHTML = `[ ${novo.join(', ')} ]`
}

