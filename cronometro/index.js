hora = document.querySelector('#hora')
minuto = document.querySelector('#minuto')
segundo = document.querySelector('#segundo')

s = 0
m = 0
h = 0

function iniciar(){

    time = setInterval(function() {
        s += 1

        if (s < 60) {
            segundo.innerHTML = (s < 10 ? '0' + s : s)
        } else {
            s = 0
            m += 1
            segundo.innerHTML = '00'

        if (m < 60) {
            minuto.innerHTML = (m < 10 ? '0' + m : m)
        } else {
            m = 0
            h += 1
            hora.innerHTML = (h < 10 ? '0' + h : h)
        }
        
        }

    }, 1000)

}

function pausar() {
    clearInterval(time)
}

function zerar() {
    pausar()
    s = 0
    m = 0
    h = 0

    segundo.innerHTML = '00'
    minuto.innerHTML = '00'
    hora.innerHTML = '00'
}