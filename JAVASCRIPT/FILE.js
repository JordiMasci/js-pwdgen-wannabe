// Chiedi all'utente il suo nome,
const userName = prompt('Inserisci il tuo nome');
console.log('nome: ', userName);

// - Chiedi il suo cognome,
const userSurname = prompt('Inserisci il tuo cognome');
console.log('cognome: ', userSurname);

// - Chiedi il suo colore preferito
const userColor = prompt('Inserisci il tuo colore preferito');
console.log('colore preferito: ', userColor);


// alert ('userName ' + 'userUsername ' + 'userColor');

const generatedPassword = userName + userSurname + userColor + '21';
console.log(generatedPassword)


// mostra schermo
document.getElementById('generated-password').innerHTML = generatedPassword;