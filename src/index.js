

const arr1 = [2, 7, 5, 1, 9, -10];
const arr2 = [4, 2, 7, 10]

const arrNew = [...(new Set(arr1.concat(arr2)))]



const map = new Map([[1, { username: 'john Doe' }], [2, { username: 'jane Doe' }], [3, { username: 'alex Doe' }]]);

const res = [...map.entries()].map((cortage) => { return `${cortage[0]} ${cortage[1].username}` })



const userObj = {
    name: {
        first: 'John',
        last: 'Doe',
        faserName: 'Petrovich',
    },    
    age: 20,
    aut:{
       email: 'iii@gmail.com',
       pass: 'qwerty' 
    }
}

const {age}= userObj;
const {name: {first,last}} = userObj;
const {aut: {email,pass}} = userObj;


function getFullName({name:{first,last, ...eee}, ...restofUser}) {
    console.log(eee)
    console.log(restofUser)
    return `${first} - ${last}`
}

const map1 = new Map([[1, { username: 'john Doe' }], [2, { username: 'jane Doe' }], [3, { username: 'alex Doe' }]]);

const res1 = [...map.entries()].map(([key, {username}]) => { return `${key} ${username}` })



