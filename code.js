// Jeu des pays

//Ecriture du titre
document.getElementById("titre").innerHTML = '<p>Jeu des pays-stan</p>';

//Tableau des pays
var tableauPays = ['', 'Azerbaïdjan', 'Turkménistan', 'Ouzbékistan', 'Afghanistan', 'Pakistan', 'Tadjikistan', 'Kirghizistan'];

// Fonction Valider
function fonctionValider(){
	//boucle sur les listes
	for (var i=1; i<=7; i++) {
		// récupération de l'index, puis de la valeur choisie
		var indexChoisi = document.forms["listes"].elements["liste"+i].selectedIndex;
		var paysChoisi = document.forms["listes"].elements["liste"+i].options[indexChoisi].value;
		//Teste si la liste i affiche le bon pays
		if(paysChoisi == tableauPays[i]){
			// Changement de style de l'élément numéro i
			//document.getElementById("numero"+i).style.backgroundColor='#0066CC';
			document.getElementById("numero"+i).className='OK';
		}else{
			//document.getElementById("numero"+i).style.backgroundColor='#FFFFFF';
			document.getElementById("numero"+i).className='NOK';
		}
	}
}

// Fonction Reset
function fonctionReset(){
	//boucle sur les listes
	for(var i=1; i<=7; i++) {
		// affichage première valeur
		document.forms["listes"].elements["liste"+i].selectedIndex = 0;
		document.getElementById("numero"+i).style.backgroundColor='#FFF';
	}
}