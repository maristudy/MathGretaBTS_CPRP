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
	["Question1","reponse1","Parce que 1",[["r","e","p","o","n","s","e","1"]]],
	["Question2","reponse2","Parce que 2",[["r","e","p","o","n","s","e","2"]]],
	["Question3","reponse3","Parce que 3",[["r","e","p","o","n","s","e","3"]]],
	["Question4","reponse4","Parce que 4",[["r","e","p","o","n","s","e","4"]]],
	["Question5","reponse5","Parce que 5",[["r","e","p","o","n","s","e","5"]]],
	["Question6","reponse6","Parce que 6",[["r","e","p","o","n","s","e","6"]]],
	["Question7","reponse7","Parce que 7",[["r","e","p","o","n","s","e","7"]]],
	["Question8","reponse8","Parce que 8",[["r","e","p","o","n","s","e","8"]]],
	["Question9","reponse9","Parce que 9",[["r","e","p","o","n","s","e","9"]]],
	["Question0","reponse0","Parce que 0",[["r","e","p","o","n","s","e","0"]]]
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