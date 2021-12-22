if (document.addEventListener) {
    document.addEventListener("DOMContentLoaded", inicio );
} else {
    alert("Por favor, actualice el navegador");
}

function inicio(){
    //Aquí se empezaría a ejecutar nuestro código al finalizar la carga del DOM
    
}

function mostrarNombres(){
    var arrayNombres = [];
    var arrayRepetido = [];

    var nombres1 = document.querySelector("#lst1").innerHTML;
    var nombres2 = document.querySelector("#lst2").innerHTML;
    var nombres3 = document.querySelector("#lst3").innerHTML;
    var nombres4 = document.querySelector("#lst4").innerHTML;
    var nombres5 = document.querySelector("#lst5").innerHTML;

    arrayNombres.push(nombres1);
    arrayNombres.push(nombres2);
    arrayNombres.push(nombres3);
    arrayNombres.push(nombres4);
    arrayNombres.push(nombres5);

    
    
    
    //var arrayNombres = nombres.split(",");
    //arrayNombres.push(nombres);
    
    for (var i=0; i< arrayNombres.length; i++) {
        
        var numero = pickRandom(arrayNombres.length);
        
        arrayNombres[i] = arrayNombres[i].trim();
        arrayRepetido.push(arrayNombres[i]);
        

        if(arrayNombres[i]!= arrayNombres[numero])
        {
            console.log(arrayNombres[i] + " regala a " + arrayNombres[numero]);
            
        } 
        
    }


}

function pickRandom(limite){
    var azar = Math.floor(Math.random()*limite);
    return azar;
}


