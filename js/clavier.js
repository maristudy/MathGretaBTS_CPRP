function clavier(tablo,idAffiche,idSaisie)
{
	affiche = document.getElementById(idAffiche);
	saisie=document.getElementById(idSaisie)
	
	backspace=document.createElement("p");
	backspace.textContent="Backspace";
	backspace.addEventListener("click",()=> 
		{
			if(saisie.textContent.length > 0)
			{
				saisie.textContent = saisie.textContent.substring(0,(saisie.textContent.length)-1);
			}
		})
	affiche.append(backspace);

	efface=document.createElement("p");
	efface.textContent="Reset";
	efface.addEventListener("click",()=> 
		{
			saisie.innerHTML = "&nbsp;";
		})
	affiche.append(efface);
	
	tablo.forEach(elem => {
		laTouche=document.createElement("p");
		laTouche.textContent=elem;
		laTouche.addEventListener("click",()=> 
		{
			saisie.textContent = saisie.textContent+elem
		})
		affiche.append(laTouche);
	})

		
}
