
'use strict'

function User(firstName, lastName, age, mail, isSubscribe = false) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.mail = mail;
    this.isSubscribe = isSubscribe;

}


function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}


function createArrayOfUsers(quantity) {
    const userArr = [];
    for (let i = 0; i < quantity; i++) {
        userArr.push(new User(`FirstName ${i}`, `LastName ${i}`, Math.ceil(getRandomArbitrary(10, 95)), `mail${i}@gmail.com`, Boolean(Math.round(Math.random()))))
    }

    return userArr;
}

const arrUsers = createArrayOfUsers(50);
// console.table(arrUsers);


const fNameArray = arrUsers.map(function (userObj) { return `${userObj.firstName} ${userObj.lastName}` });

arrUsers.sort(function (usA,usB){
  return usA.age-usB.age;
});

console.table (arrUsers)