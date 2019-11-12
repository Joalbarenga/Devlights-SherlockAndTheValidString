var string = "abcdefghhgfedecba";
string = string.toLowerCase(); //trasnformo en minusculas todas las letras
string = string.split(""); //genero arreglo con las letras
string.sort();//ordeno el arreglo
document.write(string, "</br>");
var frec = []; //arreglo que tendra los valores y cantidades
//objeto que ira dentro del arreglo
var obj = new Object();
obj.value = string[0];
obj.cuantity = 0;
frec.push(obj); // cargo objeto en arreglo

var j = 0; //posicion de value


for (i = 0; i < string.length; i++) {
    //controlo que los valores sean iguales
    if (frec[j].value == string[i]) {
        frec[j].cuantity = frec[j].cuantity + 1;
    } //controlo que los valores sean distintos
    else if (frec[j].value !== string[i]) {
        //creo un nuevo objeto
        var obj = new Object();
        obj.value = string[i];
        obj.cuantity = 1;
        frec.push(obj);
        j++;
    }

}

for (i = 0; i < frec.length; i++) {
    document.write("valor ", frec[i].value, " / cantidad ", frec[i].cuantity, "</br>");
}
console.log(frec);

j = j + 1; tot = 0;

for (i = 0; i < frec.length; i++) {

    tot = tot + frec[i].cuantity;

}

document.write("total de letras: ", tot, " - cantidad distintas de letras: ", j, "</br>");

tot = tot % j;

//document.write("total MOD j = ", tot, "</br>");

if (tot == 0 || tot == 1) {
    document.write("Sherlock considers this string VALID");
} else {
    document.write("Sherlock considers this string INVALID");
}