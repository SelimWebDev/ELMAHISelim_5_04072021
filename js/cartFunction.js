console.log(localStorage);

function addToCart(){
         
    var  oldCart = JSON.parse(localStorage.getItem("cart"))     // o recupere le cart du store et on le transforme en array
    oldCart.push(localStorage.id_selected)                      // on y ajoute l'ID séléctionné du store
    localStorage.setItem("cart", JSON.stringify(oldCart))       // on transforme l'array en string et le renvoie au store

    var oldPrice = JSON.parse(localStorage.getItem("price"))
    oldPrice.push(localStorage.price_selected)
    localStorage.setItem("price", JSON.stringify(oldPrice))
    console.log("cart : " + localStorage.cart)
}

function removeAll() {

    var cartContain = document.getElementsByTagName("tbody")    // reset html du cart
    cartContain[0].innerHTML = ""

    var emptyCart = new Array()                                 // on crée un array vide
    localStorage.setItem("cart", JSON.stringify(emptyCart));    // on transform l'arry en string et l'envoie dans le store

    var emptyPrice = new Array();
    localStorage.setItem("price", JSON.stringify(emptyPrice));
    console.log(localStorage.price)



}

