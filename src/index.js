'use strict'

class User {
    constructor(firstName,lastName,age,email) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.email = email;
    }

    getFullName() {
        return `${this.firstName} ${this.lastName}`
    }

    sayHello(){
        console.log('Hello')
    }
}

const user = new User('Ivan', 'Doe',44,'www@mail.com')


class Fuel {
    constructor(volume, density){
        this.volume= volume;
        this.density=density;
    }
    getMasFuel(){
        return this.volume*this.density;
    }

}

class Auto{
    constructor (masAuto, fuel){
        this.masAuto = masAuto;
        this.fuel =fuel;
    }

        getmasAutoFuel(){
            return (this.masAuto +this.fuel.getMasFuel())

        }
}

const fuel = new Fuel (5,0.9);
const auto = new Auto (3000,fuel)



class Friend{
    constructor(name, ownAmount,friend){
        this.name=name;
        this.ownAmount=ownAmount;
        this.friend=friend;
    }
    countMouney(){
        if (this.friend === null){
            return this.ownAmount;
        }
        if (Array.isArray(this.friend)){
            return this.ownAmount+ this.friend.reduce((money,friend)=>(money + friend.countMouney()),0)
        }
        return this.ownAmount + this.friend.countMouney();

    }

}

const friend0 = new Friend('Jane',50,null);
const friend1 = new Friend('Ivan',30,null);
const friend2 = new Friend('Makar',511,friend1);
const friend3 = new Friend('Polina',100,[friend2,friend0]);