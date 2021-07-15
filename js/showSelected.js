window.addEventListener("load", function (){
    var iconeContain = document.getElementById("icone-number");
    var cartNumber = JSON.parse(localStorage.getItem("cart")).length;
    iconeContain.textContent = cartNumber
})

function showSelected(elm){ 
    localStorage.setItem("id_selected", elm.getAttribute("id"));        // stocker juste id ***
    localStorage.setItem("price_selected", elm.getAttribute("price"));
    localStorage.setItem("name_selected", elm.getAttribute("name"))
}