var regleMail = new RegExp(/^([\w-\.]+)@((?:[\w]+\.)+)([a-zA-Z]{2,4})/i);


function isValid(value,regle) {

    var valid = regle.test(value)

    if (valid){
        return true
    }
    else {
        console.log("value " + value)
        console.log("regle " + regle)
        console.log("valid ? " + valid)
        return false
    }
}



function command(){
    var nomSaisie = document.getElementById("nom").value;                  // on récupère les valeur du formulaire
    var prenomSaisie = document.getElementById("prenom").value;
    var adresseSaisie = document.getElementById("adress").value;
    var villeSaisie = document.getElementById("ville").value;
    var emailSaisie = document.getElementById("mail").value;

    if (isValid(adresseSaisie,regleAdress)){

        var productArray = JSON.parse(localStorage.getItem("cart"));            // on récupère le tableau d'id commandandé
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
        .catch(function(err){
        })    
    }
    else {
        console.log("formulaire non valide")
    }
}
