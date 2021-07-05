var buttonAdd = document.getElementsByClassName('add');

function addFunction () {
    alert('Element ajouté au panier !');
}

for (i=0; i < buttonAdd.length; i++){
    buttonAdd[i].addEventListener('click', addFunction());
}

