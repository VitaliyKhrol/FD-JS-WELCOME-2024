
// let cat = {
//     breed: 'Blue Cheshire',
//     name: 'Murzik',
//     age: 3,
//     weight: 10,
//     color: 'grey',
//     sleep: function () {
//         console.log('I am sleping')
//     },
//     eat: function () {
//         console.log('I am eating')
//     },
//     2: 'NewValue'
// }


// let murka ={
//     breed: 'British',
//     name: 'Murka',
//     age: 2,
//     weight: 5,
//     color: 'red',
//     sleep: function () {
//         console.log('I am sleping')
//     },
//     eat: function () {
//         console.log('I am eating')
//     }
// }

// cat.girlfriend =murka;


const weekPlan = {
    Mon: 'dantist',
    Tue: 'go to park',
    Wed: 'meet friends',
    Thu: 'learn',
    Fri: 'hard work',
    Sat: 'go to party'
}

function getWeekPlan(plan) {
    const userValue = prompt('Який день неділі тебе цікавить?')
    alert(plan[userValue])

}

getWeekPlan(weekPlan)