function saveSelectedId (elm){ 
    localStorage.setItem("id_selected", elm.getAttribute("id")); 
    console.log("fonction de l'event déclenché id : " + elm.getAttribute("id"))
}