
let cat = {
    breed: 'Blue Cheshire',
    name: 'Murzik',
    age: 3,
    weight: 10,
    color: 'grey',
    sleep: function () {
        console.log('I am sleping')
    },
    eat: function () {
        console.log('I am eating')
    }
}

// Доступ

cat.breed; // властивості
cat.eat();  // методи

// Зміна

cat.breed = 'Dvorovaja'

// Видалення

delete cat.breed;
delete cat.sleep

