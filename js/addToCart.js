function addToCart(){
    localStorage.setItem("cart", localStorage.cart + localStorage.id_selected)
    console.log(localStorage.cart)
}

