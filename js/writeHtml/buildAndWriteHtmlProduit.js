async function buildAndWriteHtmlProduit(value){
    window.addEventListener('load', function() {

        var name = value.name;
        var description = value.description;
        var price = value.price;
        var imageUrl = value.imageUrl;
        var option = value.lenses;

        var img = document.getElementsByTagName("img"); // recupération de l'html
        var titre = document.getElementsByTagName("h2");
        var descSpan = document.getElementsByClassName("desc");
        var priceSpan = document.getElementsByClassName("price");
        var listeOption = document.getElementsByTagName("select");
        var OneOptionHtml = "";
        var fullOptionHtml = "";


        img[0].setAttribute("src", imageUrl);
        img[0].setAttribute("alt", description);
        titre[0].textContent = name;
        descSpan[0].textContent = description;
        priceSpan[0].textContent = "prix : " + price;

        for (i=0; i < option.length; i++){   // Pour chaque option
            OneOptionHtml = "<option value='" +option[i] + "' >" + option[i] + "</option>";     // on l'écrit entre les balise li
            fullOptionHtml += OneOptionHtml;    // On ajoute ce code a FullOption
        }

        listeOption[0].innerHTML = fullOptionHtml;  // On écris fulloption en html

    })
}

    