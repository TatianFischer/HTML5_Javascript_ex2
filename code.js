// Jeu des pays

//Chargement de la page
window.onload = function(){

	/*Tableau des pays : méthode conseillée pour créer des tableaux.
	Deux tableaux différents de la correction pour corser la chose pour l'utilisateur */
	var tableauPaysListe = ['', 'Afghanistan', 'Azerbaïdjan', 'Kirghizistan', 'Ouzbékistan', 'Pakistan', 'Tadjikistan', 'Turkménistan'];

	//Ecriture du titre
	document.getElementById("titre").innerHTML = '<p>Jeu des pays-stan</p>';

	//Création des listes de formulaire

	// Boucle des sélecteurs
	for(var i=1; i<=7; i++){
		// Le span
		oSpan = document.createElement("span");
		oSpan.id = "numero"+i;
		oSpan.textContent = i;

		// Le select
		oSelect = document.createElement("select");
		oSelect.id = "liste"+i;

		// Ajout de span et de select à la page
		document.getElementById("listes").appendChild(oSpan);
		document.getElementById("listes").appendChild(oSelect);

		// Les options
		oOption = document.createElement("option"); // Pas dans la boucle car value !== textContent
		oOption.value = tableauPaysListe[0];
		oOption.textContent = "Choisir ...";
		document.getElementById("liste"+i).appendChild(oOption);
		for(var j=1; j<=7; j++){
			oOption = document.createElement("option");
			oOption.value = tableauPaysListe[j];
			oOption.textContent = tableauPaysListe[j];
			// Ajout de l'option à select.
			document.getElementById("liste"+i).appendChild(oOption);
		}

		// aller à la ligne
		oLigne = document.createElement("br");
		document.getElementById("listes").appendChild(oLigne);
	}
}

//Tableau de correction (ne doit pas être dans le window.onload pour être visible des fonctions).
var tableauPaysCorrection = ['', 'Azerbaïdjan', 'Turkménistan', 'Ouzbékistan', 'Afghanistan', 'Pakistan', 'Tadjikistan', 'Kirghizistan'];

// Fonction Valider
function fonctionValider(){
	//boucle sur les listes
	for (var i=1; i<=7; i++) {
		// récupération de l'index, puis de la valeur choisie
		var indexChoisi = document.getElementById("listes").elements["liste"+i].selectedIndex;
		var paysChoisi = document.getElementById("listes").elements["liste"+i].options[indexChoisi].value;
		//Teste si la liste i affiche le bon pays
		if(paysChoisi == tableauPaysCorrection[i]){
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