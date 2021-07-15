window.addEventListener('load', function (){

    var idArray = JSON.parse(localStorage.getItem("cart"));                     // on recupere les donné dans local stroage et
    var priceArray = JSON.parse(localStorage.getItem("price"))                  // on les convertit en array
    var nameArray = JSON.parse(localStorage.getItem("name"))
                         //
    var tableBody = document.getElementsByTagName("tbody")                      // on recupérer les éléments tbody et prix_total
    var totalPriceContain = document.getElementById("prix_total")
    var totalPrice = 0;

    for (var i=0; i<priceArray.length; i++){
        var priceConverted = parseInt(priceArray[i])                            // on parcour priceArray et on ajoute chaque prix a totalprice
        totalPrice = totalPrice+priceConverted
    }
    totalPriceContain.textContent = totalPrice                                  // on écris totalprice dans son élément html

    var htmlOneItem = "<tr><td class='title_td'>t</td><td class='price_td'></td></tr>";         // défninition html d'une ligne panier
    var htmlFull = "";                                                                          // total toute les ligne html

    for (var i = 0; i < idArray.length; i++){                                   // pour chaque id d'objet, on ajoute l'html au total
        htmlFull = htmlFull + htmlOneItem                                           
    }

    tableBody[0].innerHTML = htmlFull;                                      // on écris total html dans son élément

    var title_contain = document.getElementsByClassName("title_td")         // on récupère les éléments title et price de chaque ligne
    var price_contain = document.getElementsByClassName("price_td")

    for (var i = 0; i < idArray.length; i++){                              // pour chaque id d'objet on écris le nom et le prix correspondant
        title_contain[i].textContent = nameArray[i]
        price_contain[i].textContent = priceArray[i]
    }
})


