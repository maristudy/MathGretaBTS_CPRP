function clavier(tablo,idAffiche,idSaisie)
{
	affiche = document.getElementById(idAffiche);
	saisie=document.getElementById(idSaisie)
	saisie.setAttribute("class","saisie");
	
	ligne=document.createElement("p");
	ligne.setAttribute("class","ligne");
	backspace=document.createElement("p");
	backspace.setAttribute("class","touche");
	backspace.textContent="Backspace";
	backspace.addEventListener("click",()=> 
		{
			if(saisie.textContent.length > 0)
			{
				saisie.textContent = saisie.textContent.substring(0,(saisie.textContent.length)-1);
			}
		})
	ligne.append(backspace);

	efface=document.createElement("p");
	efface.setAttribute("class","touche");
	efface.textContent="Reset";
	efface.addEventListener("click",()=> 
		{
			saisie.innerHTML = "";
		})
	ligne.append(efface);
		affiche.append(ligne);
		
	tablo.forEach(tab => {
		ligne=document.createElement("p");
		ligne.setAttribute("class","ligne");
		tab.forEach(elem => {
			laTouche=document.createElement("p");
			laTouche.setAttribute("class","touche");
			laTouche.textContent=elem;
			laTouche.addEventListener("click",()=> 
			{
				saisie.textContent = saisie.textContent+elem
			})
			ligne.append(laTouche);
		})
		affiche.append(ligne);
	})

		
}
