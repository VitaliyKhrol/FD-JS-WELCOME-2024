
'use strict'

const NATIONALITES = [
    'Ukraine',
    'Great Britain',
    'Germany',
    'France',
    'Spain'
];


function User(firstName, lastName, age, mail, isSubscribe = false, nationality) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.mail = mail;
    this.isSubscribe = isSubscribe;
    this.nationality = nationality;

}


function getRandomArbitrary(min, max) {
    return Math.round(Math.random() * (max - min) + min);
}


function createArrayOfUsers(quantity) {
    const userArr = [];
    for (let i = 0; i < quantity; i++) {
        userArr.push(new User(`firstName ${i}`, `lastName ${i}`, getRandomArbitrary(10, 95), `mail${i}@gmail.com`, Boolean(Math.round(Math.random())), NATIONALITES[getRandomArbitrary(0, 4)]))
    }

    return userArr;
}

const arrUsers = createArrayOfUsers(50);
// console.table(arrUsers);


const fNameArray = arrUsers.map(function (userObj) { return `${userObj.firstName} ${userObj.lastName}` });

arrUsers.sort(function (usA, usB) {
    return usA.age - usB.age;
});

// console.table (arrUsers)

const sortUsers = arrUsers.filter(function (elem) {
    return elem.age > 50

})
// console.table(sortUsers)


const sortUsers18 = arrUsers.filter(function (elem) {

    return (elem.age >= 18 && elem.isSubscribe)
})

// console.table(sortUsers18)

const emails = arrUsers
                        .filter(function (elem) {
                            return (elem.age >= 18 && elem.isSubscribe)
                        }).map(function (elem) {
                            return elem.mail
                        })


const ukraine = arrUsers
                        .filter(function (elem) {
                            return (elem.nationality == 'Ukraine' && elem.isSubscribe)
                        }).map(function (elem) {
                            return `${elem.firstName} ${elem.lastName}`
                        })

arrUsers.forEach(function(elem){
                            elem.isSubscribe = true
                           
                        })
console.table(arrUsers)