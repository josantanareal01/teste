/*
//CLIMA

var select = document.querySelector("select");
var para = document.querySelector("p");
var temperature = document.getElementById("degree");

select.addEventListener("change", setWather);

function setWather() {
    var choice = select.value;
    var degree = Number(temperature.value);

    if (choice === "ensolarado" && degree < 86) {
        para.textContent = "Está bom e ensolarado lá fora hoje. Use shorts! Vá à praia ou ao parque e tome um sorvete.";
    } else if (choice === "ensolarado" && degree >= 86) {
        para.textContent = "REALMENTE QUENTE! Se você quiser sair, certifique-se de colocar um protetor solar.";
    } else if (choice === "nublado") {
        para.textContent = "Não está chovendo, mas o céu está cinzento e sombrio; pode mudar a qualquer minuto, então leve uma capa de chuva para garantir.";
    } else if (choice === "chuvoso") {
        para.textContent = "A chuva está caindo lá fora; leve uma capa de chuva e um guarda-chuva e não fique fora por muito tempo.";
    } else if (choice === "nevando") {
        para.textContent = "A neve está caindo – está congelando! Melhor ficar em casa com uma xícara de chocolate quente ou construir um boneco de neve.";
    } else{
        para.textContent = "";
    }
}

//TEMA

 var selectTheme = document.getElementById("selectTheme");
 var html = document.querySelector("html");
 var titleTheme = document.getElementById("titleTheme");
 titleTheme.textContent = "O Tema Branco está ativo!"

 function upgrade(bgColor, textColor) {
    html.style.backgroundColor = bgColor;
    html.style.color = textColor;
 }

 selectTheme.onchange = function () {
    switch (selectTheme.value) {
        case "white":
            upgrade("white", "black");
            titleTheme.textContent = "O Tema Branco está ativo!"
            break;
        case "black":
            upgrade("black", "white");
            titleTheme.textContent = "O Tema Preto está ativo!"
            break;
        default:
            break;
    }
   
 }

 //CALENDARIO

 var selectMes = document.getElementById("selectMes");
 var titleMes = document.getElementById("titleMes");
 var list = document.querySelector("ul");


selectMes.onchange = function () {
    var choice = selectMes.value;
    var days = 31;
    if (choice === "Fevereiro") {
        days = 28;
    } else if (choice === 'Abril' || choice === 'Junho' || choice === 'Setembro'|| choice === 'Novembro') {
        days = 30;
    }
    createCalendar(days, choice);
}

function createCalendar(days, choice) {
    list.innerHTML = "";
    titleMes.textContent = choice;
    for (var i = 1; i <= days; i++) {
        var listItem = document.createElement("li");
        listItem.textContent = i;
        list.appendChild(listItem);
    }
}
createCalendar(31, "Janeiro");
*/

//TESTANDO LOOPS

/*

//LOOP ARRAY

var para = document.querySelector("p");
var cats = ["Gamora", "Gina", "Fred", "Jorge", "Nick"];
var info = "Meus gatos se chamam: ";

for (i = 0; i < cats.length; i++){
    if (i === cats.length -1) {
        info += "e " + cats[i] + ".";
    } else {
        info += cats[i] + ", ";
    }
    }

para.textContent = info;
*/

//LOOP PESQUISA

var search = document.getElementById("search");
var searchButtom = document.getElementById("searchButtom");
var para = document.querySelector("p");
var contacts = [
    "Chris:2232322",
  "Sarah:3453456",
  "Bill:7654322",
  "Mary:9998769",
  "Dianne:9384975",
]

searchButtom.addEventListener("click", function () {
    searchName = search.value;
    search.value = "";
    search.focus;
    for (i = 0; i < contacts.length; i++){
        var splitContact = contacts[i].split(":");
        if(splitContact[0] === searchName){
            para.textContent = "Nome: " + splitContact[0] + " >>>" + " Numero: " + splitContact[1];
            break
        } else {
            para.textContent = "Contato não encontrado!";
        }
    }
});