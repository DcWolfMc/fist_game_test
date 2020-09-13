// Criar função que repete o código que se repete
var numeroPensado = Math.round(Math.random() * 100);
var numeroUsuario = parseInt(prompt("Eu pensei em um número, quer adivinhar? Escreva um número entre 0 e 100 e vamos ver se você acerta."));
if (numeroUsuario == numeroPensado) {
	document.write("WOW!! boa, você acertou na mosca!!<br> Eu tinha mesmo pensando no <b>" + numeroPensado +" </b>.");
	} else if (numeroUsuario > numeroPensado) {
		var numeroUsuario2 = parseInt(prompt("Você errou. " + numeroUsuario + " é um número maior que o número que eu pensei. Você tem mais 2 Chances."));
			if (numeroUsuario2 == numeroPensado) {
				document.write("Boa!!, você acertou na segunda tentativa!!<br> Eu tinha mesmo pensando no <b>" + numeroPensado +" </b>.");
	
	} else if (numeroUsuario2 > numeroPensado) {
		var numeroUsuario3 = parseInt(prompt("Você errou com um número maior. Agora é tudo ou nada."));
			if (numeroUsuario3 == numeroPensado) {
				document.write(" Vitória na última !! <b>" + numeroPensado +" </b> era o número que eu tinha pensado.");
	
	}		else if (numeroUsuario3 != numeroPensado) {
				document.write("Que pena!! não era <b>"+ numeroUsuario3 +"</b> era <b>"+ numeroPensado +"</b>.");

	  }
	} else if (numeroUsuario2 < numeroPensado) {
		 var numeroUsuario3 = parseInt(prompt("Você errou com um número menor. Agora é tudo ou nada."));
			if (numeroUsuario3 == numeroPensado) {
				document.write(" Vitória na última !! <b>" + numeroPensado +" </b> era o número que eu tinha pensado.");
	
	}		else if (numeroUsuario3 != numeroPensado) {
				document.write("Que pena!! não era <b>"+ numeroUsuario3 +"</b> era <b>"+ numeroPensado +"</b>.");

		}
	  }

	} else if (numeroUsuario < numeroPensado) {
		 var numeroUsuario2 = parseInt(prompt("Você errou. " + numeroUsuario + " é um número menor que o número que eu pensei. Você tem mais 2 Chances."));
			if (numeroUsuario2 == numeroPensado) {
				document.write("Boa!!, você acertou na segunda tentativa!!<br> Eu tinha mesmo pensando no <b>" + numeroPensado +" </b>.");
	
	} else if (numeroUsuario2 > numeroPensado) {
		var numeroUsuario3 = parseInt(prompt("Você errou com um número maior. Agora é tudo ou nada."));
			if (numeroUsuario3 == numeroPensado) {
				document.write(" Vitória na última !! <b>" + numeroPensado +" </b> era o número que eu tinha pensado.");
	
	}		else if (numeroUsuario3 != numeroPensado) {
				document.write("Que pena!! não era <b>"+ numeroUsuario3 +"</b> era <b>"+ numeroPensado +"</b>.");

	  }
	} else if (numeroUsuario2 < numeroPensado) {
		 var numeroUsuario3 = parseInt(prompt("Você errou com um número menor. Agora é tudo ou nada."));
			if (numeroUsuario3 == numeroPensado) {
				document.write(" Vitória na última !! <b>" + numeroPensado +" </b> era o número que eu tinha pensado.");
	
	}		else if (numeroUsuario3 != numeroPensado) {
				document.write("Que pena!! não era <b>"+ numeroUsuario3 +"</b> era <b>"+ numeroPensado +"</b>.");

		}
	  }

	  }