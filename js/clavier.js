function Clavier(tablo,idAffiche,idSaisie)
{
	affiche = document.getElementById(idAffiche);
	if(affiche.innerHTML.length > 5)
	{
		affiche.innerHTML="";
	}
	else
	{
	saisie=document.getElementById(idSaisie)
	saisie.setAttribute("class","saisie");
	
	ligne=document.createElement("p");
	ligne.setAttribute("class","ligne");
	backspace=document.createElement("p");
	backspace.setAttribute("class","touche");
	backspace.textContent="Backspace";
	backspace.addEventListener("click",()=> 
		{
			if(saisie.innerHTML.length > 0)
			{
				if(saisie.innerHTML[saisie.innerHTML.length-1]==">")
				{
					saisie.innerHTML = saisie.innerHTML.substring(0,(saisie.innerHTML.lastIndexOf("<",saisie.innerHTML.lastIndexOf("<")-1)));
				}
				else
				{
					if(saisie.innerHTML[saisie.innerHTML.length-1]==";")
					{
						saisie.innerHTML = saisie.innerHTML.substring(0,(saisie.innerHTML.lastIndexOf("&")));
					}	
					else
					{					
						saisie.innerHTML = saisie.innerHTML.substring(0,(saisie.innerHTML.length)-1);
					}
				}
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
			laTouche.innerHTML=elem;
			laTouche.addEventListener("click",()=> 
			{
				saisie.innerHTML = saisie.innerHTML+elem
			})
			ligne.append(laTouche);
		})
		affiche.append(ligne);
	})		
	}


		
}
