// L'utente inserisce due numeri in successione, con due prompt. Il software stampa il maggiore.

var num1 = parseInt(prompt('Inserisci primo numero'));
var num2 = parseInt(prompt('Inserisci secondo numero'));

if (num1 < num2) {
  console.log(num2)
} else if (num1 === num2) {
  console.log('sono uguali')
} else {
  console.log(num1);
}
