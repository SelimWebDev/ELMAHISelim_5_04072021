window.addEventListener("load", function (){
    var iconeContain = document.getElementById("icone-number");
    console.log(JSON.parse(localStorage.cart).length)
    var cartNumber = JSON.parse(localStorage.cart).length;
    iconeContain.textContent = cartNumber
})