let myStr = "Wowww amazing"; //dit is een variabele van het datatype string, waarom? Het zit tussen haakjes en is dus text.  vul je antwoord in op de lijn
let myInt = 10; //dit is een variabele van het datatype integer waarom? Omdat het een getal is en het niet tussen haakjes zit. vul je antwoorden in op de lijn

//Waarom staat er let voor de variabelen? Zo declareer je je variabele. vul je antwoord in op de lijn

function getName(naam){ //In op welke regel in de HTML file wordt deze functie aangeroepen: regel 17 vul je antwoord in op de lijn

    // vul in wat naam is: naam is de Parameter vul je antwoord in op de lijn, je hebt de eerste letter al gekregen
    // vul in: naam heeft de waarde Özgür Nergiz de waarde noemen we een Argument vul je antwoord in op de lijn, je hebt de eerste letter al gekregen

    alert(naam); //dit toont een melding op het scherm met de tekst Özgür Nergiz deze tekst staan op regel 16 t/m 19 van de HTML vul je antwoord in op de lijn
}

function hideMe(){ //mag je de naam van de functie veranderen? ja vul je antwoord in op de lijn
    document.getElementById("hide").style.display = "none"; 
    document.getElementById("show").style.display = "block"; 
    // wat gebeurd er in deze functie? Het laat de afbeelding verdwijnen en verschijnen en waar wordt deze in je HTML aangeroepen? regel 23 vul je antwoorden in op de lijn
}

function show(){ //als ik de naam van deze functie verander, waar verander ik deze dan in de HTML. regel 25 vul je antwoord in op de lijn
    document.getElementById("hide").style.display = "block"; // wat doet getElementById? pakt alle elementen met de id 'hide' vul je antwoord in op de lijn
    document.getElementById("show").style.display = "none";     
    // wat gebeurd er in deze functie? laat een afbeelding verschijnen en verdwijnen vul je antwoord in op de lijn
}

function rekenen(getal){ //In op welke regel in de HTML file wordt deze functie aangeroepen regel 32 en wanneer wordt deze aangeroepen waneer je op de knop klikt vul je antwoord in op de lijn

    let antwoord = myInt + getal; //waar komt de waarde van myInt vandaan regel 2 van script.js en waar komt de waarde van getal vandaan? regel 32 van html vul je antwoord in op de lijn

    document.querySelector(".som").innerHTML = antwoord;  // wat doet querySelector? kan je een class of id mee selecteren.  Wat is antwoord hier? vul je antwoorden in op de lijn
    
    //wat gebeurt er in deze functie? MyInt en getal worden bij elkaar opgeteld en dat krijg je te zien als antwoord. vul je antwoord in op de lijn

    //verander de waarde van myInt (zorg dat je een getal gebruikt) en refresh de pagina, wat gebeurd er? getal krijgt nu +10 inplaats van +3 vul je antwoord in op de lijn
    //probeer ook eens de + in een - te veranderen of in een * als waarde van de variabele antwoord (regel 28), zie je wat er gebeurt? ja inplaats van optellen wordt het nu vermenigvuldigd
}

function setColor(element, kleur, size){ //In op welke regel in de HTML file wordt deze functie aangeroepen. regel 44 vul je antwoord in op de lijn

    element.style.color = kleur; //waar komt de waarde van element vandaan HTML regel 44 waar this staat. en waar komt de waarde van kleur vandaan? HTML waar 'orange' staat vul je antwoord in op de lijn
    element.style.fontSize = size; //waar komt de waarde van szie vandaan? HTML waar nu 30 staat en 30px stond. vul je antwoord in op de lijn

    //wat gebeurt er in deze functie?  vul je antwoord in op de lijn
}

getName(myStr);
// wat gebeurd er hierboven Variabele MyStr wordt geroepen. en wanneer gebeurt dat waneer de browser aan het laden is. (tip ververs je pagina eens in je brouwser? vul je antwoord in op de lijn.
// verander de waarde van myStr en kijk wat er dan gebeurt (ververs je browser en test het uit) wat gebeurd er? Melding tekst verandert vul je antwoord in op de lijn.