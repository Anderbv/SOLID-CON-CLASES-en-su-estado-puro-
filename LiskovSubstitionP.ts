// Subtypes must be substitutable for their base types;

//Los subtipos tienen que poder ser sustituibles por subtipos base

class LivingBeing { //Ser vivo
    private name: string;
    private age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    public getName(): string {
        return this.name;
    }

    public getAge(): number {
        return this.age;
    }

    public eat() {
        console.log("I'm eating");
    }
}

class Human extends LivingBeing {
    private job: string;

    constructor(name: string, age: number, job: string) {
        super(name, age);
        this.job = job;
    }

    public getWork(): string {
        return this.job;
    }

    public work() {
        console.log("I'm working")
    }
}

class Plant  extends LivingBeing {
    private color: string;
    constructor(name: string, age: number, color: string) {
        super(name, age);
        this.color = color;
    };

    public eat() {
        throw new Error("I'm can't eating")
    }
};

const LivingBeingArray: LivingBeing[] = [
    new LivingBeing('Ander', 19),
    new Human('Ander', 19, 'Jr programer'),
        
]

LivingBeingArray.forEach(livingBeing => {
    livingBeing.eat();
});

//En este caso una planta no puede comer
//estamos rompiendo con que un subtipo puede ser sustituido por un subtipo base




