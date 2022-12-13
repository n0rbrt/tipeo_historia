// words

var word_list = ["BURGUESÍA", "ALBAÑIL", "CAMPESINOS", "OBREROS", "REY",
    "REINA","BRÚJULA", "AZTECAS", "MAYAS", "INCAS", "MAPUCHE", "RANQUEL",
    "MEDITERRÁNEO", "MONARQUÍA", "REVOLUCIÓN", "INDUSTRIAL", "FRANCIA","INGLATERRA", "EUROPA",
    "ABSOLUTISMO", "CAPITALISMO", "PODER", "CAMBIO", "CONTINUIDAD",
    "HISTORIA", "COLONIZACIÓN", "CONQUISTA", "ECONOMÍA", "TRABAJO",
    "ESTADO", "PRODUCCIÓN", "PLUSVALÍA", "EXPLOTACIÓN", "VAPOR", 
    "GENOCIDIO", "FEUDAL", "PROPIEDAD", "COMUNAL", "ESCLAVO", "FÁBRICA"];

var match_words = 0;
var timer, index;
var tiempo = 59;

function startGame(){
    document.getElementById("start").style.display = "none";
    document.getElementById("game").style.display = "block";
    document.getElementById("final").style.display = "none";

    //cursor on input
    document.getElementById("typed_word").focus();

    //load words

    loadWord();

    // cada 1segundo se llama la funcion restartTime()
    timer = setInterval('restartTime()', 1000);
}

function loadWord(){
    // posicion de forma aleatoria
    index = Math.round(Math.random()*(word_list.length-1));
    document.getElementById("word").innerHTML = word_list[index];

    //delete position showed
    word_list.splice(index,1);
}

function compare(){
    var show_word = document.getElementById("word").innerHTML;
    var word_typed = document.getElementById("typed_word").value;

    word_typed = word_typed.toUpperCase();

    if(show_word == word_typed){
        match_words++;
        document.getElementById("typed_word").value="";
        addNode(word_typed);
        loadWord(); //load another word


    }
}

function addNode(word){
    var span = document.createElement('span');
    span.innerHTML = word;
    document.getElementById("register").appendChild(span);
}


function restartTime(){
    tiempo--;
    document.getElementById("time").innerHTML = tiempo;
    if(tiempo == 0){
        clearInterval(timer);
        document.getElementById('typed_word').readOnly = true;
        document.getElementById("time").style.display = "block";
        document.getElementById("final").style.display = "block";
        document.getElementById("total").innerHTML = match_words;
    }
}
