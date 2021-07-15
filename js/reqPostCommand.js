function command(){
    var nomSaisie = document.getElementById("nom").value;                  // on récupère les valeur du formulaire
    var prenomSaisie = document.getElementById("prenom").value;
    var adresseSaisie = document.getElementById("adress").value;
    var villeSaisie = document.getElementById("ville").value;
    var emailSaisie = document.getElementById("mail").value;

    var productArray = JSON.parse(localStorage.getItem("cart"));            // on récupère le tableau d'id commandandé

    /* vérification des valeurs 

    */

    var infoContact = new Contact(nomSaisie, prenomSaisie, adresseSaisie, villeSaisie, emailSaisie)     // création de l'objet contact pour l'envoie

    fetch("http://localhost:3000/api/cameras/order",
    {
        headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
        },

        method: "POST",

        body: JSON.stringify({
            contact : infoContact,
            products : productArray
        })
    })

    .then(function(res){ 
        return res.json();
    })
    .then(function(value){
        console.log(value)

        window.location.href = "confirm.html?orderId=" + value.orderId + "&price="
        
    })
    .catch(function(res){
    })
}