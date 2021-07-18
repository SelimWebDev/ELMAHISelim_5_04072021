// fonction construire et ecrire l'HTML de la page index avec en parametre une reponse de la requete getAll

async function buildAndWriteHtmlIndex (responseReq){
  var value = await responseReq
  window.addEventListener("load", function(){
    var nbProduit = value.length; 
  
    var list = document.getElementById("list");     // conteneur ou on rejoute l'html

    var htmlOneCard = '<div class="product"><div class="img_wrap"><img class="product_img"/></div>'+ 
    '<h3></h3><span class="desc">Une ancienne caméra</span><span class="price"></span><a class="link"><div class="add">Voir le produit</div></a></div>';
    var htmlFullCard = "";
  
    for (var k=0; k < nbProduit; k++){
      htmlFullCard = htmlFullCard + htmlOneCard;  // on incrémente l'html pour chaque caméra
    }
  
    list.innerHTML = htmlFullCard;       // écriture de l'html
  
    var img_array = document.getElementsByClassName("product_img");   // liste de tout les balise
    var titre_array = document.getElementsByTagName("h3");
    var description_array = document.getElementsByClassName("desc");
    var prix_array = document.getElementsByClassName("price");
    var a_array = document.getElementsByClassName("link");
  
    for (var j=0; j < nbProduit; j++){

      a_array[j].setAttribute("href", "produit.html?id=" + value[j]._id);
  
      img_array[j].setAttribute("src", value[j].imageUrl);    //set attribut  pour chaque image 
      img_array[j].setAttribute("alt", value[j].description);
  
      titre_array[j].textContent = value[j].name;           // set contenu de l'html avec les données
      description_array[j].textContent = value[j].description;
      prix_array[j].textContent = value[j].price + " €";
    }
  })
}