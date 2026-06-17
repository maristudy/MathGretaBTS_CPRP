//		https://symbl.cc/fr/html-entities/

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


// tabloQuestion=[["question","reponse","explication",[["a","b","c","x","y"],["=","+","-","/","*"],["(","{","[","]","}",")",":",";",","]]],["question","reponse","explication",[["a","b","c","x","y"],["=","+","-","/","*"],["(","{","[","]","}",")",":",";",","]]]]
	
	
// https://symbl.cc/fr/html-entities/

function getSigne()
{
	nb=Math.floor(Math.random()*10);
	if(nb%2==0)
	{
		return(-1);
	}
	else
	{
		return(1);
	}
}

function getNbEntierNonNull(max)
{
		return(Math.floor(Math.random()*(max-2))+2);
}



	//liste des questions, reponses, conseils, clavier
let	listeQuestionsFormulesDroites = [
	["Quelle est l'équation d'une fonction linéaire","y=ax","Une fonction linéaire est une droite qui passe par l'origine du repère. Elle a pour équation y=ax. On dit que a est la pente de la droite.",[["a","b","c","x","y"],["=","+","-","/","*"]]],
	["Quelle est l'équation d'une fonction affine","y=ax+b","Une fonction affine est une droite qui ne passe pas par l'origine du repère. Elle a pour équation y=ax+b. On dit que a est la pente de la droite et b l'ordonnée à l'origine",[["a","b","c","x","y"],["=","+","-","/","*"]]],
	["Quelle est l'équation cartésienne d'une droite ?","ax+by+c=0","Par définition, l'équation cartésienne d'une droite est ax+by+c=0",[["a","b","c","x","y","-1","0","1"],["=","+","-","/","*"]]],
	["Une droite a pour équation cartésienne ax+by+c=0. Quelles sont les coordonnées du vecteur directeur de cette droite ?","(-b;a)","Par définition, une droite d'équation cartésienne ax+by+c=0 a pour vecteur directeur (-b;a). On fera attention aux notations : <br>les coordonnées s'écrivent entre parenthèses et sont séparées par un point virgule.",[["a","b","c","x","y"],["=","+","-","/","*"],["(","{","[","]","}",")",":",";",","]]],
	["Une droite a pour équation cartésienne ax+by+c=0. Quel est le coefficient directeur de la droite ?","(-a)/b","Une droite dont l'équation cartésienne est ax+by+c=0 a pour coefficient directeur m = (-a)/b.",[["a","b","c","x","y"],["=","+","-","/","*"],["(","{","[","]","}",")",":",";",","]]],
	["Quel est le vecteur directeur d'une droite dont le coefficient directeur est m ?","(1;m)","Une droite qui a pour coefficient directeur m, a pour vecteur directeur (1;m). On fera attention aux notations : <br>les coordonnées s'écrivent entre parenthèses et sont séparées par un point virgule.",[["a","b","c","x","y","m","1","2"],["=","+","-","/","*"],["(","{","[","]","}",")",":",";",","]]],
	["Quelle est l'équation réduite d'une droite dont le coefficient directeur est m et l'ordonnée à l'origine est p ?","y=mx+p","Une droite dont le coefficient directeur est m, et p son ordonnée à l'origine, a pour équation réduite y=mx+p",[["x","y","p","m"],["=","+","-","/","*"],["(","{","[","]","}",")",":",";",","]]],
	["Une droite a pour équation réduite y=mx+p. Quelle est l'ordonnée à l'origine de la droite ?","p","Lorsqu'une droite a pour équation réduite y=mx+p, alors p est l'ordonnée à l'origine",[["x","y","p","m","1","/","*"]]],
	["Une droite a pour équation réduite y=mx+p. Quel est le coefficient directeur de la droite ?","m","Lorsqu'une droite a pour équation réduite y=mx+p, alors m est le coefficient directeur de la droite",[["x","y","p","m","1","/","*"]]],
	["Une droite a pour équation réduite y=mx+p. Quel est le vecteur directeur de la droite ?","(1;m)","Lorsqu'une droite a pour équation réduite y=mx+p, alors le vecteur directeur de la droite est (1;m)",[["x","y","p","m","1"],["=","+","-","/","*"],["(","{","[","]","}",")",":",";",","]]],
	["Une droite passe par le point A (x<sub>A</sub>;y<sub>A</sub>) et par le point B (x<sub>B</sub>;y<sub>B</sub>). Quel est le coefficient directeur de la droite ?","(y<sub>B</sub>-y<sub>A</sub>)/(x<sub>B</sub>-x<sub>A</sub>)","Lorsqu'une droite passe par les points A et B, alors son coefficient directeur est (y<sub>B</sub>-y<sub>A</sub>)/(x<sub>B</sub>-x<sub>A</sub>)",[["x<sub>A</sub>","y<sub>A</sub>","x<sub>B</sub>","y<sub>B</sub>"],["(","{","[","]","}",")",":",";",","],["+","-","/","*"]]],
	["Une droite a pour équation cartésienne ax+by+c=0. Quelle est l'ordonnée à l'origine de la droite ?","(-c)/b","Une droite dont l'équation cartésienne est ax+by+c=0 a pour ordonnée à l'origine (-c)/b.",[["a","b","c","x","y"],["=","+","-","/","*"],["(","{","[","]","}",")",":",";",","]]]
	];

let listeQuestionsFormules2ndDegres = [
	["Soit une équation du second degrés : ax<sup>2</sup>+bx+c=0. Quelle formule permet de calculer &Delta; ?","b<sup>2</sup>-4ac","formule à connaitre : &Delta;=b<sup>2</sup>-4ac",[["a","b","c","<sup>2</sup>","&plusmn;","&radic;","+","-"],[0,1,2,3,4,5,6,7,8,9],["(","{","[","]","}",")",":",";",","]]],
	["Soit une équation du second degrés : ax<sup>2</sup>+bx+c=0. Combien de solutions à cette équation si &Delta;>0","2","Si &Delta;>0 alors l'équation a deux solutions.",[["Pas de solutions dans ℝ"],[0,1,2,3,4,5,6,7,8,9]]],
	["Soit une équation du second degrés : ax<sup>2</sup>+bx+c=0. Combien de solutions à cette équation si &Delta;=0","1","Si &Delta;=0 alors l'équation a une seule solutions.",[["Pas de solutions dans &Ropf;"],[0,1,2,3,4,5,6,7,8,9]]],
	["Soit une équation du second degrés : ax<sup>2</sup>+bx+c=0. Combien de solutions à cette équation si &Delta;<0","Pas de solutions dans ℝ","Si &Delta;<0 alors l'équation n'a pas de solution dans &Ropf;. Les solutions sont complexes. ",[["Pas de solutions dans &Ropf;"],[0,1,2,3,4,5,6,7,8,9]]],
	["Soit une équation du second degrés : ax<sup>2</sup>+bx+c=0. On sait que &Delta;>0. Quelle formule permet de connaitre les solutions ?","(-b±√Δ)/2a","C'est une formule à connaitre, si &Delta;>0 alors les solutions sont (-b&plusmn;&radic;&Delta;)/2a",[["a","b","c","x","y"],["&Delta;","&plusmn;","<sup>2</sup>","&radic;","=","+","-","/","*"],["(","{","[","]","}",")",":",";",","],[0,1,2,3,4,5,6,7,8,9]]],
	["Soit une équation du second degrés : ax<sup>2</sup>+bx+c=0. On sait que &Delta;=0. Quelle formule permet de connaitre la solution ?","-b/2a","C'est une formule à connaitre, si &Delta;=0 alors les solutions sont (-b&plusmn;)/2a",[["a","b","c","x","y"],["=","+","-","/","*"],["(","{","[","]","}",")",":",";",","],[0,1,2,3,4,5,6,7,8,9]]],
	["Soit le polynôme du second degrés P(x) = ax<sup>2</sup>+bx+c=0. P(x) = 0 admet deux solutions x<sub>1</sub> et x<sub>2</sub> telles que x<sub>1</sub>&lt;x<sub>2</sub>. Quel est le signe de P(x) sur l'interval ]x<sub>1</sub>;x<sub>2</sub>[","signe de -a","P(x) a le signe de a hors des solutions et le signe de -a entre les solutions.",[["positif","négatif","signe de a","signe de -a"]]],
	["Soit le polynôme du second degrés P(x) = ax<sup>2</sup>+bx+c=0. P(x) = 0 admet deux solutions x<sub>1</sub> et x<sub>2</sub> telles que x<sub>1</sub>&lt;x<sub>2</sub>. Quel est le signe de P(x) sur l'interval ]-&infin;;x<sub>1</sub>[","signe de a","P(x) a le signe de a hors des solutions et le signe de -a entre les solutions.",[["positif","négatif","signe de a","signe de -a"]]],
	["Soit le polynôme du second degrés P(x) = ax<sup>2</sup>+bx+c=0. P(x) = 0 admet deux solutions x<sub>1</sub> et x<sub>2</sub> telles que x<sub>1</sub>&lt;x<sub>2</sub>. Quel est le signe de P(x) sur l'interval ]x<sub>2</sub>;+infin;[","signe de a","P(x) a le signe de a hors des solutions et le signe de -a entre les solutions.",[["positif","négatif","signe de a","signe de -a"]]],
	["Soit le polynôme du second degrés P(x) = ax<sup>2</sup>+bx+c=0. P(x) = 0 admet deux solutions x<sub>1</sub> et x<sub>2</sub>. Comment s'écrit sa forme factorisée ?","a(x-x<sub>1</sub>)(x-x<sub>2</sub>)","C'est une formule à connaitre : P(x)=ax<sup>2</sup>+bx+c = a(x-x<sub>1</sub>)(x-x<sub>2</sub>)",[["a","b","c","x","y","x<sub>1</sub>","x<sub>2</sub>"],["=","+","-","/","*"],["(","{","[","]","}",")",":",";",","]]],
	];


function getFormules(tabQuestions)
{

	q1=q2=q3=q4=q5=0;
	
	q1=Math.floor(Math.random()*(tabQuestions.length));
	q2=Math.floor(Math.random()*(tabQuestions.length));
	
	while(q1==q2)
	{
		q2=Math.floor(Math.random()*(tabQuestions.length));
	}
	
	q3=Math.floor(Math.random()*(tabQuestions.length));	
	while(q1==q3 || q2==q3)
	{
		q3=Math.floor(Math.random()*(tabQuestions.length));	
	}
	
	q4=Math.floor(Math.random()*(tabQuestions.length));	
	while(q1==q4 || q2==q4 || q3==q4)
	{
		q4=Math.floor(Math.random()*(tabQuestions.length));	
	}	
	
	q5=Math.floor(Math.random()*(tabQuestions.length));	
	while(q1==q5 || q2==q5 || q3==q5 || q4==q5)
	{
		q5=Math.floor(Math.random()*(tabQuestions.length));	
	}		
	
	questions=[tabQuestions[q1],tabQuestions[q2],tabQuestions[q3],tabQuestions[q4],tabQuestions[q5]];
	return(questions);
}






function partieFormulesDroites()
{
	return(getFormules(listeQuestionsFormulesDroites));
}

function partieFormules2ndDegres()
{
	return(getFormules(listeQuestionsFormules2ndDegres));
}


function partieAutomatismesDroites()
{
	//getSigne() 	//getNbEntierNonNull(max)
	
	b=getSigne()*getNbEntierNonNull(5);
	m=b*getNbEntierNonNull(5);
	p=b*getNbEntierNonNull(5);
	a=(-1)*m*b;
	c=(-1)*p*b;
	x0=getSigne()*getNbEntierNonNull(5);
	y0=(m*x0)+p;
	
	if(getSigne()<0)
	{
		y1=y0+(getSigne()*getNbEntierNonNull(5));
	}
	else
	{
		y1=y0;
	}
	
	q01="Quel est le coefficient directeur de la droite d'équation "+a+" x "+(b<0?"":"+")+b+" y "+(c<0?"":"+")+c+" = 0 ";
	r01=m;
	e01="Lorsque nous avons l'équation cartésienne d'une droite, le coefficient directeur est donné par la formule : m=(-a)/b. Ici a="+a+" et b="+b+". On a donc m="+((-1)*a)+"/"+b+".";
	c01=[["-",0,1,2,3,4,5,6,7,8,9]];
	
	q02="Quel est le vecteur directeur de la droite d'équation "+a+" x "+(b<0?"":"+")+b+" y "+(c<0?"":"+")+c+" = 0 ";
	r02="(1;"+m+")";
	e02="Lorsque nous avons l'équation cartésienne d'une droite, le coefficient directeur est donné par la formule : m=(-a)/b. Ici a="+a+" et b="+b+". On a donc m="+((-1)*a)+"/"+b+". Le vecteur directeur a pour coordonnée (1;m). Nous obtenons donc ici (1;"+m+").";
	c02=[["-",0,1,2,3,4,5,6,7,8,9],["(","{","[","]","}",")",":",";",","]];
	
	q03="Quelle est l'ordonnée à l'origine de la droite d'équation "+a+" x "+(b<0?"":"+")+b+" y "+(c<0?"":"+")+c+" = 0 ";
	r03=p;
	e03="Lorsque nous avons l'équation cartésienne d'une droite, l'ordonnée à l'origine est donné par la formule : p=(-c)/b. Ici c="+c+" et b="+b+". On a donc p="+((-1)*c)+"/"+b+".";
	c03=[["-",0,1,2,3,4,5,6,7,8,9]];
	
	q04="Le point A ("+x0+";"+y1+") appartient-il à la droite d'équation "+a+" x "+(b<0?"":"+")+b+" y "+(c<0?"":"+")+c+" = 0 ?";
	r04=(y0==y1?"oui":"non");
	e04="Si le point A(x<sub>A</sub>;y<sub>A</sub>) appartient à la droite, alors les coordonnées du point A vérifient l'équation de la droite. On doit donc avoir ("+a+"*"+x0+") + ("+(b<0?"":"+")+b+"*"+y1+") "+(c<0?"":"+")+c+" = 0 ";
	c04=[["oui","non"]];
	
	q05="Quelle est l'équation cartésienne de la droite dont l'équation réduite est y="+m+" x "+(p<0?"":"+")+p+"";
	r05=m+"x-y"+(p<0?"":"+")+p+"=0";
	e05="Pour trouver l'équation cartésienne, on écrit l'équation sous la forme ax + by + c = 0. Nous aurons b=-1";
	c05=[["x","y","=","+","-"],[0,1,2,3,4,5,6,7,8,9]];
	
	q06="Quelle est l'équation réduite de la droite dont l'équation cartésienne est "+a+" x "+(b<0?"":"+")+b+" y "+(c<0?"":"+")+c+" = 0 ";
	r06="y="+m+"x"+(p<0?"":"+")+p+"";
	e06="Pour trouver l'équation réduite, on calcul m=(-a)/b et p=(-c)/b. L'équation réduite s'écrit y=mx+p";
	c06=[["x","y","=","+","-"],[0,1,2,3,4,5,6,7,8,9]];
	
	q07="Le point A ("+x0+";"+y1+") appartient-il à la droite d'équation y="+m+" x "+(p<0?"":"+")+p+" ?";
	r07=(y0==y1?"oui":"non");
	e07="Si le point A(x<sub>A</sub>;y<sub>A</sub>) appartient à la droite, alors les coordonnées du point A vérifient l'équation de la droite. On doit donc avoir "+y1+" = ("+m+"*"+x0+") "+(p<0?"":"+")+p;
	c07=[["oui","non"]];	

	q08="Quel est le coefficient directeur de la droite d'équation y="+m+" x "+(p<0?"":"+")+p+" ? ";
	r08=m;
	e08="Lorsque l'équation de la droite est réduite, le coefficient directeur est le coefficient de x. Ici c'est donc "+m;
	c08=[["-",0,1,2,3,4,5,6,7,8,9]];
	
	q09="Quel est le vecteur directeur de la droite d'équation y="+m+" x "+(p<0?"":"+")+p+" ? ";
	r09="(1;"+m+")";
	e09="Lorsque l'équation de la droite est réduite, le vecteur directeur est (1;m) où m est le coefficient directeur de la droite. C'est le coefficient de x. Ici m= "+m+". Le vecteur directeur est donc (1;"+m+")";
	c09=[["-",0,1,2,3,4,5,6,7,8,9],["(","{","[","]","}",")",":",";",","]];
	
	q10="Quelle est l'ordonnée à l'origine de la droite d'équation y="+m+" x "+(p<0?"":"+")+p+" ? ";
	r10=p;
	e10="Lorsque l'équation de la droite est réduite, l'ordonnée à l'origine est le nombre qui n'est pas le coefficient de x. Ici c'est donc "+p;
	c10=[["-",0,1,2,3,4,5,6,7,8,9]];
	
	listeQuestions=[[q01,r01,e01,c01],[q02,r02,e02,c02],[q03,r03,e03,c03],[q04,r04,e04,c04],[q05,r05,e05,c05],[q06,r06,e06,c06],[q07,r07,e07,c07],[q08,r08,e08,c08],[q09,r09,e09,c09],[q10,r10,e10,c10]];
	
	
	return(getFormules(listeQuestions));
	
}

function partieAutomatismes2ndDegres()
{
	//getSigne() 	//getNbEntierNonNull(max)
	
	a=getSigne()*getNbEntierNonNull(5);
    x1=getSigne()*getNbEntierNonNull(5);
    x2=getSigne()*getNbEntierNonNull(5);
    u=getSigne()*getNbEntierNonNull(5);
    v=getSigne()*getNbEntierNonNull(5);
    
	while(x1==x2)
	{
		x2=getSigne()*getNbEntierNonNull(5);
	}
	
	while(u==v)
	{
		v=getSigne()*getNbEntierNonNull(5);
	}
	
    sommeR=x1+x2;
    prodR=x1*x2;
    sommeC=2*u;
    prodC=(u*u)+(v*v);
    
	q01="";
	r01=;
	e01="";
	c01=[["-",0,1,2,3,4,5,6,7,8,9]];
	
	q02="";
	r02="(1;"+m+")";
	e02="";
	c02=[["-",0,1,2,3,4,5,6,7,8,9],["(","{","[","]","}",")",":",";",","]];
	
	q03="";
	r03=p;
	e03=""";
	c03=[["-",0,1,2,3,4,5,6,7,8,9]];
	
	q04="";
	r04=(y0==y1?"oui":"non");
	e04="";
	c04=[["oui","non"]];
	
	q05="";
	r05=m+"x-y"+(p<0?"":"+")+p+"=0";
	e05="";
	c05=[["x","y","=","+","-"],[0,1,2,3,4,5,6,7,8,9]];
	
	q06="";
	r06="y="+m+"x"+(p<0?"":"+")+p+"";
	e06="";
	c06=[["x","y","=","+","-"],[0,1,2,3,4,5,6,7,8,9]];
	
	q07="";
	r07=(y0==y1?"oui":"non");
	e07="";
	c07=[["oui","non"]];	

	q08="";
	r08=m;
	e08="";
	c08=[["-",0,1,2,3,4,5,6,7,8,9]];
	
	q09="";
	r09="(1;"+m+")";
	e09="";
	c09=[["-",0,1,2,3,4,5,6,7,8,9],["(","{","[","]","}",")",":",";",","]];
	
	q10="";
	r10=p;
	e10="";
	c10=[["-",0,1,2,3,4,5,6,7,8,9]];
	
	listeQuestions=[[q01,r01,e01,c01],[q02,r02,e02,c02],[q03,r03,e03,c03],[q04,r04,e04,c04],[q05,r05,e05,c05],[q06,r06,e06,c06],[q07,r07,e07,c07],[q08,r08,e08,c08],[q09,r09,e09,c09],[q10,r10,e10,c10]];
	
	
	return(getFormules(listeQuestions));
	
}