




/* /_\ Fonction command qui exexcute la requete POST && appeller par le bouton de commande dans la page panier.html /_\ */

function command(){
    var nomSaisie = document.getElementById("nom").value;                  // on récupère les valeur du formulaire
    console.log(nomSaisie)
    console.log(notEmpty(nomSaisie))
    var prenomSaisie = document.getElementById("prenom").value;
    var adresseSaisie = document.getElementById("adress").value;
    var villeSaisie = document.getElementById("ville").value;
    var emailSaisie = document.getElementById("mail").value;

    if (isValid(emailSaisie,regleMail) && notEmpty(nomSaisie) && notEmpty(prenomSaisie) && notEmpty(adresseSaisie) && notEmpty(villeSaisie)){

        var productArray = JSON.parse(localStorage.getItem("cart"));            // on récupère le tableau d'id commandandé
        var infoContact = new Contact(nomSaisie, prenomSaisie, adresseSaisie, villeSaisie, emailSaisie)     // création de l'objet contact pour l'envoie
        console.log("cart = " + productArray)
        console.log("contact = " + infoContact)

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
        .catch(function(err){
            console.log(err)
        })    
    }
    else {      // afficher alert en fonction de l'erreur

        // email non valide et un des champs vide
        if (!isValid(emailSaisie,regleMail) && (!notEmpty(nomSaisie) || !notEmpty(prenomSaisie) || !notEmpty(adresseSaisie) || !notEmpty(villeSaisie))){
            alert("Veuillez saisir un email valide et remplir tout les champs du formulaire")
        }

        // un de champs vide
        else if (!notEmpty(nomSaisie) || !notEmpty(prenomSaisie) || !notEmpty(adresseSaisie) || !notEmpty(villeSaisie)) {
            alert("Vous avez laissé un champ du formulaire vide")
        }

        // email non valide
        else if (!isValid(emailSaisie,regleMail)){
            alert("Veuillez saisir un email valide")
        }
    }
}
