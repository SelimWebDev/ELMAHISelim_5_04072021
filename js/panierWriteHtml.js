window.addEventListener('load', function (){

    var idArray = JSON.parse(localStorage.getItem("cart"));  
    console.log("idArray" + idArray)                                          // on recupere LS cart et le convertit en array
    var priceArray = JSON.parse(localStorage.getItem("price"))              // "    " LS price
    var tableBody = document.getElementsByTagName("tbody")

    var htmlOneItem = "<tr><td class='title_td'>t</td><td class='price_td'></td></tr>";
    var htmlFull = "";

    for (var i = 0; i < idArray.length; i++){
        htmlFull = htmlFull + htmlOneItem
    }

    tableBody[0].innerHTML = htmlFull;

    console.log(tableBody)
    console.log(tableBody[0])

    var title_contain = document.getElementsByClassName("title_td")
    var price_contain = document.getElementsByClassName("price_td")

    for (var i = 0; i < idArray.length; i++){
        title_contain[i].textContent = idArray[i]
        price_contain[i].textContent = priceArray[i]
    }
})


