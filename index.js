function innerHTML(id, result) {
    return document.getElementById(id).innerHTML = result;
}

function fn1() {
    var string = document.getElementById("text").value; //recibo string del usuario
    string = string.toLowerCase(); //transformo en minusculas todas las letras
    string = string.split(""); //genero arreglo con las letras
    string.sort();//ordeno el arreglo por letra
    var frec = []; //arreglo que tendra los valores y frecuencia
    //objeto que ira dentro del arreglo
    var obj = new Object();
    obj.value = string[0];
    obj.cuantity = 0;
    frec.push(obj); //cargo objeto en arreglo

    var j = 0, //posicion de value
        diff = 1; //contador de frecuencias distintas

    //creo arreglo con valores y frecuencia
    for (i = 0; i < string.length; i++) {
        //controlo que los valores sean iguales
        if (frec[j].value == string[i]) {
            frec[j].cuantity = frec[j].cuantity + 1;
        } //controlo que los valores sean distintos
        else {
            //creo un nuevo objeto
            var obj = new Object();
            obj.value = string[i];
            obj.cuantity = 1;
            frec.push(obj);
            j++;
        }

    }

    //ordeno el arreglo por frecuencia
    frec.sort(function (a, b) {
        return a.cuantity - b.cuantity;
    });

    //cuento cuantas frecuencias distintas tengo
    for (i = 1; i < frec.length; i++) {
        if (frec[i].cuantity !== frec[i - 1].cuantity) {
            diff++
        };
    }

    if (diff == 1) {
        innerHTML("txtView", "Sherlock considers this string VALID"); //una sola frecuencia, por lo que valido
    } else if (diff > 2) {
        innerHTML("txtView", "Sherlock considers this string INVALID"); //mas de 3 frecuencias distintas, por lo que es invalido
    }
    else { //control para 2 frecuencias
        var boolean = true;
        //controlo que si eliminando un una letra de la menor frecuencia, la frecuencia para todas las letras es la misma
        frec[0].cuantity = frec[0].cuantity - 1;
        for (i = 1; i < frec.length; i++) {
            if ((frec[i - 1].cuantity !== 0) && (frec[i].cuantity !== frec[i - 1].cuantity)) {
                boolean = false;
            }

        }
        //controlo que si eliminando un una letra de la mayor frecuencia, la frecuencia para todas las letras es la misma
        if (boolean == false) {
            boolean = true;
            frec[0].cuantity = frec[0].cuantity + 1;
            frec[frec.length - 1].cuantity = frec[frec.length - 1].cuantity - 1;
            for (i = 1; i < frec.length; i++) {
                if (frec[i - 1].cuantity !== frec[i].cuantity) {
                    boolean = false;
                }
            }
        }

        if (boolean == true) {
            innerHTML("txtView", "Sherlock considers this string VALID");
        } else { innerHTML("txtView", "Sherlock considers this string INVALID"); }

    }
}