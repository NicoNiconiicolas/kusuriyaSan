document.getElementsByTagName('body')[0].innerHTML +=""+
"<audio id='sfx' src='sfx/kaching.mp3'></audio>"+
"<audio id='prize' src='sfx/prize.mp3'></audio>"+
"<div id='super'><span id='potionName'>Nom de potion</span><div id='youMade'></div><br><p id='price'><span id='nprice'>0</span> §</p></div>"+
"<div id='box2'>"+
"<h1>Commandes du jour</h1>"+
"<div id='catalog'>"+
"<div class='bar'><span id='name1'>ingrédient</span><br><hr>payement : <span id='mon1'>0</span> §<br>quantité : x<span id='value1'>0</span><br><br><img id='img1' src='img/ingredients/bagberry.png' width='50px'><br><br><button id='b1' onclick='endCommand(1)'>valider</button><br><br></div>"+
"<div class='bar'><span id='name2'>ingrédient</span><br><hr>payement : <span id='mon2'>0</span> §<br>quantité : x<span id='value2'>0</span><br><br><img id='img2' src='img/ingredients/bagberry.png' width='50px'><br><br><button id='b2' onclick='endCommand(2)'>valider</button><br><br></div>"+
"<div class='bar'><span id='name3'>ingrédient</span><br><hr>payement : <span id='mon3'>0</span> §<br>quantité : x<span id='value3'>0</span><br><br><img id='img3' src='img/ingredients/bagberry.png' width='50px'><br><br><button id='b3' onclick='endCommand(3)'>valider</button><br><br></div>"+
"</div>"+
"<h1>Semaine <span id='week'>"+getCookie('week')+"</span></h1>"+
"<h3>Compte en banque : <span id='balance'></span> §</h3>"+
"<h3>Total factures : <span id='toPay'></span> §</h3>"+
"<p>date limite de paiement : dimanche 23:59</p>"+
"<h3 id='status'>Status : </h3><span id='paid'></span>"+
"<div class='okButton' id='payer' onclick='pay()'>payer</div>"+
"<h1>Gestion des decks</h1><br>"+
"<input id='deckLink' placeholder='"+getCookie('deck')+"'></input>"+
"　<div class='okButton' onclick='updateDeck()'>charger</div><br>"+
"<br><div class='okButton' onclick='updateJLPT(\"N5\")'>N5</div> <div class='okButton' onclick='updateJLPT(\"N4\")'>N4</div> <div class='okButton' onclick='updateJLPT(\"N3\")'>N3</div> <div class='okButton' onclick='updateJLPT(\"N2\")'>N2</div> <div class='okButton' onclick='updateJLPT(\"N1\")'>N1</div><br><br>"+
"<div class='okButton' onclick='updateJLPT(\"hiragana\")'>hiragana</div> <div class='okButton' onclick='updateJLPT(\"katakana\")'>katakana</div> <div class='okButton' onclick='updateJLPT(\"kana\")'>kana</div>"+
"<br><br><div class='okButton' id='deck1' onclick='chooseCookieDeck(1)'>"+getCookie('deck1_name')+"</div> <div class='okButton' id='deck2' onclick='chooseCookieDeck(2)'>"+getCookie('deck2_name')+"</div> <div class='okButton' id='deck3' onclick='chooseCookieDeck(3)'>"+getCookie('deck3_name')+"</div>"+
"<br><br><div class='okButton' onclick='window.location=\"convert.html\"'>Nouveau Deck</div>"+
"<br><br><h1>Options</h1>"+
"<h3>Style de révision :</h3>"+
"<div class='okButton' onclick='chooseGame(1)'>Kotoba</div> <div class='okButton' onclick='chooseGame(2)'>Anki</div>"+
"<h3>Difficulté du jeu :</h3>"+
"<div class='okButton' onclick='setDifficulty(0)'>Facile</div> <div class='okButton' onclick='setDifficulty(1)'>Défi</div><br><br>"+
"<h3>Dictionnaire utilisé :</h3>"+
"<div class='okButton' onclick='setDico(\"jisho\")'>Jisho</div> <div class='okButton' onclick='setDico(\"writtenchinese\")'>Writtenchinese</div><br><br>"+
"</div>";

showLoan();
showCommand();