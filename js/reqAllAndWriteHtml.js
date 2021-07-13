window.addEventListener('load', function () {

  var list = document.getElementById("list");     // conteneur ou on rejoute l'html
  
  fetch("http://localhost:3000/api/cameras") // requete GET au serveur
    .then(function(res) {
      if (res.ok) {
        return res.json();
      }
    })

    // RECUPERATION ET ECRITURE DE TOUT LES PRODUITS

    .then(function(value) {     // recuperation des données
      console.log(value);
      var nbProduit = value.length;

      var htmlOneCard = '<div class="product"><div class="img_wrap"><img class="product_img"/></div><h3></h3><span class="desc">Une ancienne caméra</span><span class="price"></span><a href="produit.html"><div class="add">Voir le produit</div></a></div>';
      var htmlFullCard = "";

      function buildAndWriteHtml (){
        for (var k=0; k < nbProduit; k++){
          htmlFullCard = htmlFullCard + htmlOneCard;  // on incrémente l'html pour chaque caméra
        }
  
        for (var i=0; i < nbProduit; i++){     
          list.innerHTML = htmlFullCard;       // écriture de l'html
        }
      }

      

      buildAndWriteHtml();
      
      var add_array = document.getElementsByClassName("add");
      var img_array = document.getElementsByClassName("product_img");   // liste de tout les balise
      var titre_array = document.getElementsByTagName("h3");
      var description_array = document.getElementsByClassName("desc");
      var prix_array = document.getElementsByClassName("price");
      
      for (var j=0; j < nbProduit; j++){
        add_array[j].setAttribute("id", value[j]._id)           // set attribut du bouton pour transmettre les valeur à la fonction onclick
        add_array[j].setAttribute("price", value[j].price);
        add_array[j].setAttribute("name", value[j].name);
        add_array[j].setAttribute("image", value[j].imageUrl);
        add_array[j].setAttribute("desc", value[j].description);
        add_array[j].setAttribute("onclick", "showSelected(this)")

        img_array[j].setAttribute("src", value[j].imageUrl);    //set attribut  pour chaque image 
        img_array[j].setAttribute("alt", value[j].description);

        titre_array[j].textContent = value[j].name;           // set contenu de l'html avec les données
        description_array[j].textContent = value[j].description;
        prix_array[j].textContent = value[j].price + " €";     
      }

      return value;
      
    })
    .catch(function(err) {
      // Une erreur est survenue
    });


});
