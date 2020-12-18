// In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby, chiedi all'utente il suo nome e comunicagli se può partecipare o no alla festa.

var output = document.getElementById('output');
var userName = prompt('Inserisci il tuo nome');
var invitedList = ['Diego', 'Manuele', 'Giovanni', 'Michele', 'Nicola', 'Mirko'];
var access = false;

for (var i = 0; i < invitedList.length; i++) {
  if (userName === invitedList[i]) {
    access = true;
  }
}

if (access === true) {
  output.innerText = 'Ciao ' + userName + '! Benvenuto alla festa!';
} else {
  output.innerText = 'Mi dispiace, non sei tra gli invitati';
}
