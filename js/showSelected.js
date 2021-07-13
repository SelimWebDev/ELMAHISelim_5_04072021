function showSelected(elm){ 
    localStorage.setItem("id_selected", elm.getAttribute("id")); 
    localStorage.setItem("price_selected", elm.getAttribute("price"))
}