/*class Formules {
    constructor() {
		this.name="Formules";
        this.last="";
        this.lost = 0;
        this.win = 0;
        this.badanswer=0;
        this.goodanswer=0;
		this.tabQuestions=[ ];

    }

    get makeValue() {
        return this.make;
    }

    set setMake(newMake) {
        this.make = newMake;
        return this.make;
    }

    faireLeKekeAuFeuRouge() {
        return 'vrooomm vrooomm';
    }
}
*/


function partieFormules()
{
	//liste des questions, reponses, conseils, clavier
	listeQuestions = [
	["Quelle est l'équation d'une fonction linéaire","y=ax","Une fonction linéaire est une droite qui passe par l'origine du repère. Elle a pour équation y=ax. On dit que a est la pente de la droite.",[["a","b","c","x","y"],["=","+","-","/","*"]]],
	["Quelle est l'équation d'une fonction affine","y=ax+b","Une fonction affine est une droite qui ne passe pas par l'origine du repère. Elle a pour équation y=ax+b. On dit que a est la pente de la droite et b l'ordonnée à l'origine",[["a","b","c","x","y"],["=","+","-","/","*"]]],
	["Quelle est l'équation cartésienne d'une droite ?","ax+by+c=0","Par définition, l'équation cartésienne d'une droite est ax+by+c=0",[["a","b","c","x","y","-1","0","1"],["=","+","-","/","*"]]],
	["Une droite a pour équation cartésienne ax+by+c=0. Quelles sont les coordonnées du vecteur directeur de cette droite ?","(-b;a)","Par définition, une droite d'équation cartésienne ax+by+c=0 a pour vecteur directeur (-b;a). On fera attention aux notations : <br>les coordonnées s'écrivent entre parenthèses et sont séparées par un point virgule.",[["a","b","c","x","y"],["=","+","-","/","*"],["(","{","[","]","}",")",":",";",","]]],
	["Une droite a pour équation cartésienne ax+by+c=0. Quel est le coefficient directeur de la droite ?","(-a)/b","Une droite dont l'équation cartésienne est ax+by+c=0 a pour coefficient directeur m = (-a)/b.",[["a","b","c","x","y"],["=","+","-","/","*"],["(","{","[","]","}",")",":",";",","]]],
	["Quel est le vecteur directeur d'une droite dont le coefficient directeur est m ?","(1;m)","Une droite qui a pour coefficient directeur m, a pour vecteur directeur (1;m). On fera attention aux notations : <br>les coordonnées s'écrivent entre parenthèses et sont séparées par un point virgule.",[["a","b","c","x","y","m","-2","-1","0","1","2","-m","1/m"],["=","+","-","/","*"],["(","{","[","]","}",")",":",";",","]]],
	["Quel est l'équation réduite d'une droite dont le coefficient directeur est m et l'ordonnée à l'origine est p ?","y=mx+p","Une droite dont le coefficient directeur est m, et p son ordonnée à l'origine, a pour équation réduite y=mx+p",[["x","y","p","-p","1/p","m","-m","1/m"],["=","+","-","/","*"],["(","{","[","]","}",")",":",";",","]]],
	["Une droite a pour équation réduite y=mx+p. Quelle est l'ordonnée à l'origine de la droite ?","p","Lorsqu'une droite a pour équation réduite y=mx+p, alors p est l'ordonnée à l'origine",[["x","y","p","-p","1/p","m","-m","1/m"]]],
	["Une droite a pour équation réduite y=mx+p. Quel est le coefficient directeur de la droite ?","m","Lorsqu'une droite a pour équation réduite y=mx+p, alors m est le coefficient directeur de la droite",[["x","y","p","-p","1/p","m","-m","1/m"]]],
	["Une droite a pour équation réduite y=mx+p. Quel est le vecteur directeur de la droite ?","(1;m)","Lorsqu'une droite a pour équation réduite y=mx+p, alors le vecteur directeur de la droite est (1;m)",[["x","y","p","-p","1/p","m","-m","1/m","-1","0","1"],["=","+","-","/","*"],["(","{","[","]","}",")",":",";",","]]],
	["Une droite passe par le point A (x<sub>A</sub>;y<sub>A</sub>) et par le point B (x<sub>B</sub>;y<sub>B</sub>). Quel est le coefficient directeur de la droite ?","(y<sub>B</sub>-y<sub>A</sub>)/(x<sub>B</sub>-x<sub>A</sub>)","Lorsqu'une droite passe par les points A et B, alors son coefficient directeur est (y<sub>B</sub>-y<sub>A</sub>)/(x<sub>B</sub>-x<sub>A</sub>)",[["x<sub>A</sub>","y<sub>A</sub>","x<sub>B</sub>","y<sub>B</sub>"],["(","{","[","]","}",")",":",";",","],["+","-","/","*"]]]
	];
	
	q1=q2=q3=q4=q5=0;
	
	q1=Math.floor(Math.random()*listeQuestions.length);
	q2=Math.floor(Math.random()*listeQuestions.length);
	
	while(q1==q2)
	{
		q2=Math.floor(Math.random()*listeQuestions.length);
	}
	
	q3=Math.floor(Math.random()*listeQuestions.length);	
	while(q1==q3 || q2==q3)
	{
		q3=Math.floor(Math.random()*listeQuestions.length);	
	}
	
	q4=Math.floor(Math.random()*listeQuestions.length);	
	while(q1==q4 || q2==q4 || q3==q4)
	{
		q4=Math.floor(Math.random()*listeQuestions.length);	
	}	
	
	q5=Math.floor(Math.random()*listeQuestions.length);	
	while(q1==q5 || q2==q5 || q3==q5 || q4==q5)
	{
		q5=Math.floor(Math.random()*listeQuestions.length);	
	}		
	
	
	questions=[listeQuestions[q1],listeQuestions[q2],listeQuestions[q3],listeQuestions[q4],listeQuestions[q5]];
	
	return(questions);
	
}