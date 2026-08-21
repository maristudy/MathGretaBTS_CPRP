let liste_section = document.getElementsByTagName("section");

for(let i=0;i<liste_section.length;i++)
{
		for(let j=0;j<liste_section[i].children.length;j++)
		{
			if(liste_section[i].children[j].localName == "h3")
				liste_section[i].children[j].addEventListener("click",function () {
				if (liste_section[i].children[j+1].classList.contains("visible"))
				{
					liste_section[i].children[j+1].classList.replace("visible", "cache");
				}
				else
				{
					liste_section[i].children[j+1].classList.replace("cache", "visible");
				}		
			});
		}
}

function deplier()
{
	annee=document.URL.split("#")[1];
	section = document.getElementById(annee);
	liste_article=section.getElementsByTagName("article");
	for(let k=0;k<liste_article.length;k++)
	{
		liste_article[k].classList.replace("cache", "visible");
	}
}

function replier()
{
	annee=document.URL.split("#")[1];
	section = document.getElementById(annee);
	liste_article=section.getElementsByTagName("article");
	for(let k=0;k<liste_article.length;k++)
	{
		liste_article[k].classList.replace("visible", "cache");
	}
}

function affiche(annee)
{
	onglets=document.getElementById("onglets");
	liens=onglets.getElementsByTagName("a");
	for(let k=0;k<liens.length;k++)
	{
		if(liens[k].textContent.indexOf(annee)!=-1)
		{
			liens[k].parentNode.style="opacity:1";
		}
		else{
			liens[k].parentNode.style="opacity:0.5";
		}
	}
	
}

annee=document.URL.split("#")[1];
affiche(annee);
