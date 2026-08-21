
// afficher / masquer les articles en cliquant sur le h2 de la section
let liste_h2 = document.getElementsByTagName("h2");
for(let i=0;i<liste_h2.length;i++)
{
	liste_h2[i].addEventListener("click",function () {
		kids = this.closest("section").getElementsByTagName("article");
		for (let j=0; j<kids.length; j++)
		{
			if (kids[j].classList.contains("visible"))
			{
				kids[j].classList.replace("visible", "cache");
			}
			else
			{
				kids[j].classList.replace("cache", "visible");
			}
		}
	});
}

let liste_h3 = document.getElementsByTagName("h3");
for(let i=0;i<liste_h3.length;i++)
{
	liste_h3[i].addEventListener("click",function () {
		kids = this.closest("section").getElementsByTagName("article");
		for (let j=0; j<kids.length; j++)
		{
			if (kids[j].classList.contains("visible"))
			{
				kids[j].classList.replace("visible", "cache");
			}
			else
			{
				kids[j].classList.replace("cache", "visible");
			}
		}
	});
}
