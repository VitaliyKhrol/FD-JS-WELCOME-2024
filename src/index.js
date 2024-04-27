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

// const user = new User('Ivan', 'Doe',44,'www@mail.com')


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