
		tela = document.querySelector('.tela')
		tempo = 0
		
		function iniciar() {
			cronometro = setInterval(function(){tempo+=1
				tela.innerHTML = tempo}, 1000)
		}

		function pausar() {
			clearInterval(cronometro)
		}

		function zerar() {
			clearInterval(cronometro)
			tempo = 0
			tela.innerHTML = 0
		}