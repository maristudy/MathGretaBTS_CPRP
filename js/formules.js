class Formules {
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

