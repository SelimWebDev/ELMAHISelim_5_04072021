// script js qui écris l'HTML de la page confirm.html en fonction des données

window.addEventListener('load', function(){

    var url_string = window.location.href; 
    var url = new URL(url_string);
    var orderId = url.searchParams.get("orderId");      // on récupère l'order id dans l'url
    var priceArray = JSON.parse(localStorage.getItem("price"))
    var totalPrice = 0;

    for (var i=0; i<priceArray.length; i++){
        var priceConverted = parseInt(priceArray[i])     // on parcour priceArray et on ajoute chaque prix a totalprice
        totalPrice = totalPrice+priceConverted
    }

    var elm = document.getElementById("block_text")          // on recupère l'elm HTML

    var html = "<span>Votre commande n° <div id='orderId'>" + orderId + "</div> d'un montant total de <div id='totalPrice'>" + totalPrice + "</div> € à bien été prise en compte</span>"

    elm.innerHTML = html;
})








