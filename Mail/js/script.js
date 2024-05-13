/* Mail */

const emailList = ['ade@mail.com', 'boolean@mail.com', 'roba@mail.com']

let emailUtente = prompt('Scrivi la tua email')
let emailUtenteLower = emailUtente.toLowerCase()

console.log (emailUtenteLower)

if (emailList.includes(emailUtenteLower)) {
    console.log ('Utente registrato')
}

else {
    console.log ('Utente non registrato')
}