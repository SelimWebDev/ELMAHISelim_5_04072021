// script JS ajout supprimer du panier et maj affichage icone

var cartNumber;
var iconeContain;

function changeCart(){                                                  // function maj pour icone panier

    window.addEventListener('load', function (){
        iconeContain = document.getElementById("icone-number");

        if (!localStorage.getItem("cart")){
            cartNumber = 0;
            iconeContain.textContent = "0";
        }
        else {
            cartNumber = JSON.parse(localStorage.getItem("cart")).length
            iconeContain.textContent = cartNumber
        }

        console.log(cartNumber)
        console.log(iconeContain)
    })
}

function addToCart(){                                           // fonction ajouter au panier
         
    var  oldCart = JSON.parse(localStorage.getItem("cart"))     // on recupere le cart du store et on le transforme en array
    oldCart.push(localStorage.id_selected)                      // on y ajoute l'ID séléctionné du store
    localStorage.setItem("cart", JSON.stringify(oldCart))       // on transforme l'array en string et le renvoie au store

    var oldPrice = JSON.parse(localStorage.getItem("price"))
    oldPrice.push(localStorage.price_selected)
    localStorage.setItem("price", JSON.stringify(oldPrice))

    var oldName = JSON.parse(localStorage.getItem("name"))
    oldName.push(localStorage.name_selected)
    localStorage.setItem("name", JSON.stringify(oldName))
    
    iconeContain = document.getElementById("icone-number");
    cartNumber = JSON.parse(localStorage.getItem("cart")).length;
    iconeContain.textContent = cartNumber
}

function removeAll() {                                          // fonction supprimer tout le panier

    var cartContain = document.getElementsByTagName("tbody")    // reset html du cart
    cartContain[0].innerHTML = ""

    var priceContain = document.getElementById("prix_total")    // reset html du cart
    priceContain.innerHTML = ""


    var emptyCart = new Array()                                 // on crée un array vide
    localStorage.setItem("cart", JSON.stringify(emptyCart));    // on transform l'arry en string et l'envoie dans le store

    var emptyPrice = new Array();
    localStorage.setItem("price", JSON.stringify(emptyPrice));

    var emptyName = new Array();
    localStorage.setItem("name", JSON.stringify(emptyName))

    ciconeContain = document.getElementById("icone-number");
    cartNumber = JSON.parse(localStorage.getItem("cart")).length;
    iconeContain.textContent = cartNumber;

}

changeCart()