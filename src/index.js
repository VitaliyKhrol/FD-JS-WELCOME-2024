'use strict'


class Figure{
    constructor(type){
        this.sideQuantity=this.sideQuantity;
    }
    
    getArea(){

    }
}


class Triangle extends Figure{
    constructor (a,b,angle){
        super(3);
        this.a=a;
        this.b=b;
        this.angle=angle;
    }

    getArea(){
        return 0,5*this.a * this.b*Math.sin(this.angle)
    }
}

class Square extends Figure{
    constructor (a ){
        super(4);
        this.a=a;
    }

    getArea(){
        return this.a*this.a;
    }
}

class Circle extends Figure{
    constructor (d){
        super(Infinity);
        this.d=d;
    }

    getArea(){
        return Math.PI*(this.d*this.d/4)
    }
}

function calculateArea (figure){
    return figure.getArea();
}


const circle  = new Circle(10);
const square = new Square(5)


class User {
    constructor(mail,password,isBanned){
        this.mail = mail;
        this.password= password;
        this.isBanned= isBanned;
    }
    getSayHello(){
        return 'Say Hello'
    }
}

class Moderator extends User {
    constructor(mail,password){
        super(mail,password)
     }

    getIsBanned(user){
        user.isBanned = true;
    }
}


 const user = new User('sss@gmaik,com', 'qwerty', false)
 const moderator = new Moderator ('www@gmail.com', '12345')