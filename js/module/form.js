var regleMail = new RegExp(/^([\w-\.]+)@((?:[\w]+\.)+)([a-zA-Z]{2,4})/i);

function isValid(value,regle) {         // fonction teste si une valeur respecte une regle regex
    var valid = regle.test(value)

    if (valid){
        return true
    }
    else {
        return false
    }
}

function notEmpty (elm){            // return true si un elm n'est pas vide
    if (elm != ""){
        return true
    }
    else {
        return false
    }
}