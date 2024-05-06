'use strict'



class Animal  {
    constructor (name, amountOfLegs, type){
        this.name = name;
        this.amountOfLegs = amountOfLegs;
        this.type = type;
    }
    run(){
        return `${this.name} is running`
    }

    eat (){
        return 'Yumm!'
    }
}


class Cat extends Animal{
    constructor (name, amountOfLegs,color){
        super(name, amountOfLegs,'Cat');
        this.color = color;
   
    }
   
    sleep(){
        return  `${this.name} is sleeping`
    }
}
const cat = new Cat('Cocos', 4, 'red')