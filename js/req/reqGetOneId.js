async function reqGetOneId() {

    var url = new URL(window.location.href);
    var idSelected = url.searchParams.get("id");

    var reponse = await fetch("http://localhost:3000/api/cameras/" + idSelected) // requete GET au serveur
    if (reponse.ok) {                                                               // s
      var responseJson = await reponse.json()
      console.log("requete reussi : " + reponse.ok)
      console.log("nom de la caméra recu : " + responseJson.name)
      return responseJson;
    }
    else {
        window.addEventListener("load", function(){
        // Une erreur est survenue
        var bodyContain = document.getElementsByTagName("body");
        bodyContain[0].style.filter = "blur(3px)";

        setInterval(function(){
            window.alert("Une erreur est survenue");
            window.location.href = "index.html";
        }, 1000);
        
        })

    }
  }  